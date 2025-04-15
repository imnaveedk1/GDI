import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { 
  insertUserSchema, 
  insertDatasetSchema,
  insertDataRequestSchema,
  insertApprovalDecisionSchema,
  insertAccessGrantSchema,
  insertAnalysisResultSchema,
  insertExportRequestSchema,
  insertUserWorkflowProgressSchema,
  insertCommentSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Middleware for handling validation errors
  const validateRequest = (schema: z.ZodType<any, any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        req.body = schema.parse(req.body);
        next();
      } catch (error: any) {
        return res.status(400).json({
          error: "Validation failed",
          details: error.errors,
        });
      }
    };
  };

  // API route for workflow steps
  app.get('/api/workflow-steps', (req, res) => {
    res.json({
      steps: [
        {
          id: 1,
          title: "Data Discovery",
          description: "Search and identify desired datasets using the User Portal interface and Beacon V2.",
          details: "In this step, researchers identify relevant datasets through our User Portal interface. The system leverages Beacon V2 technology to efficiently search metadata repositories based on specific criteria."
        },
        {
          id: 2,
          title: "Authentication",
          description: "Verify identity using Life Science login methods or eIDS before requesting datasets.",
          details: "Authentication is a crucial step that helps validate user identity before dataset requests, reducing system burden and preventing unauthorized access."
        },
        {
          id: 3,
          title: "Data Request",
          description: "Submit application for datasets through REMS with terms and conditions agreement.",
          details: "Once authenticated, researchers can submit dataset applications through the Resource Entitlement Management System (REMS)."
        },
        {
          id: 4,
          title: "Approval Committee",
          description: "Review by DAC and NCP committees to evaluate application compliance.",
          details: "The approval process involves two committees: the central European committee (DAC) and the Irish committee (NCP)."
        },
        {
          id: 5,
          title: "Data Analysis",
          description: "Perform research within the Trusted Research Environment (TRE) using provided tools.",
          details: "After approval, researchers can analyze datasets for a limited duration within a Trusted Research Environment (TRE)."
        },
        {
          id: 6,
          title: "Result Exports",
          description: "Secure export process for approved analysis results with potential manual review.",
          details: "To prevent raw data downloads, a strict export mechanism is implemented. Analysis results are stored in trusted storage."
        },
        {
          id: 7,
          title: "Access Revoked",
          description: "Access termination due to violations, completion, or time expiration.",
          details: "Access can be revoked at any stage if violations are found, if the researcher completes their analysis and no longer needs access."
        }
      ]
    });
  });

  // User routes
  app.post('/api/users', validateRequest(insertUserSchema), async (req, res) => {
    try {
      const user = await storage.createUser(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/users/:id', async (req, res) => {
    try {
      const id = Number(req.params.id);
      const user = await storage.getUser(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Dataset routes
  app.get('/api/datasets', async (req, res) => {
    try {
      const datasets = await storage.getAllDatasets();
      res.json({ datasets });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/datasets/:id', async (req, res) => {
    try {
      const id = Number(req.params.id);
      const dataset = await storage.getDataset(id);
      if (!dataset) {
        return res.status(404).json({ error: 'Dataset not found' });
      }
      res.json(dataset);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/api/datasets', validateRequest(insertDatasetSchema), async (req, res) => {
    try {
      const dataset = await storage.createDataset(req.body);
      res.status(201).json(dataset);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Data request routes
  app.post('/api/data-requests', validateRequest(insertDataRequestSchema), async (req, res) => {
    try {
      const request = await storage.createDataRequest(req.body);
      
      // Also create workflow progress for this request
      await storage.createWorkflowProgress({
        userId: req.body.userId,
        dataRequestId: request.id,
        currentStep: 1
      });
      
      res.status(201).json(request);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/data-requests/user/:userId', async (req, res) => {
    try {
      const userId = Number(req.params.userId);
      const requests = await storage.getDataRequestsByUser(userId);
      res.json({ requests });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/data-requests/:id', async (req, res) => {
    try {
      const id = Number(req.params.id);
      const request = await storage.getDataRequest(id);
      if (!request) {
        return res.status(404).json({ error: 'Data request not found' });
      }
      res.json(request);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.patch('/api/data-requests/:id/status', async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { status } = req.body;
      
      if (!status) {
        return res.status(400).json({ error: 'Status is required' });
      }
      
      const request = await storage.updateDataRequestStatus(id, status);
      if (!request) {
        return res.status(404).json({ error: 'Data request not found' });
      }
      
      res.json(request);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Approval decision routes
  app.post('/api/approval-decisions', validateRequest(insertApprovalDecisionSchema), async (req, res) => {
    try {
      const decision = await storage.createApprovalDecision(req.body);
      res.status(201).json(decision);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/approval-decisions/request/:requestId', async (req, res) => {
    try {
      const requestId = Number(req.params.requestId);
      const decisions = await storage.getApprovalDecisionsByRequest(requestId);
      res.json({ decisions });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Access grant routes
  app.post('/api/access-grants', validateRequest(insertAccessGrantSchema), async (req, res) => {
    try {
      const grant = await storage.createAccessGrant(req.body);
      res.status(201).json(grant);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/access-grants/user/:userId', async (req, res) => {
    try {
      const userId = Number(req.params.userId);
      const grants = await storage.getAccessGrantsByUser(userId);
      res.json({ grants });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/access-grants/user/:userId/active', async (req, res) => {
    try {
      const userId = Number(req.params.userId);
      const grants = await storage.getActiveAccessGrantsByUser(userId);
      res.json({ grants });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.patch('/api/access-grants/:id/revoke', async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { reason } = req.body;
      
      if (!reason) {
        return res.status(400).json({ error: 'Revocation reason is required' });
      }
      
      const grant = await storage.revokeAccessGrant(id, reason);
      if (!grant) {
        return res.status(404).json({ error: 'Access grant not found' });
      }
      
      res.json(grant);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Analysis results routes
  app.post('/api/analysis-results', validateRequest(insertAnalysisResultSchema), async (req, res) => {
    try {
      const result = await storage.createAnalysisResult(req.body);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/analysis-results/user/:userId', async (req, res) => {
    try {
      const userId = Number(req.params.userId);
      const results = await storage.getAnalysisResultsByUser(userId);
      res.json({ results });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/analysis-results/grant/:grantId', async (req, res) => {
    try {
      const grantId = Number(req.params.grantId);
      const results = await storage.getAnalysisResultsByGrant(grantId);
      res.json({ results });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.patch('/api/analysis-results/:id/status', async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { status } = req.body;
      
      if (!status) {
        return res.status(400).json({ error: 'Status is required' });
      }
      
      const result = await storage.updateAnalysisResultStatus(id, status);
      if (!result) {
        return res.status(404).json({ error: 'Analysis result not found' });
      }
      
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Export request routes
  app.post('/api/export-requests', validateRequest(insertExportRequestSchema), async (req, res) => {
    try {
      const request = await storage.createExportRequest(req.body);
      res.status(201).json(request);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/export-requests/user/:userId', async (req, res) => {
    try {
      const userId = Number(req.params.userId);
      const requests = await storage.getExportRequestsByUser(userId);
      res.json({ requests });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.patch('/api/export-requests/:id/status', async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { status, reviewerId, comments } = req.body;
      
      if (!status || !reviewerId) {
        return res.status(400).json({ error: 'Status and reviewerId are required' });
      }
      
      const request = await storage.updateExportRequestStatus(id, status, reviewerId, comments);
      if (!request) {
        return res.status(404).json({ error: 'Export request not found' });
      }
      
      res.json(request);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Workflow progress routes
  app.get('/api/workflow-progress/user/:userId', async (req, res) => {
    try {
      const userId = Number(req.params.userId);
      const progress = await storage.getWorkflowProgressByUser(userId);
      res.json({ progress });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.patch('/api/workflow-progress/:id/step', async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { step } = req.body;
      
      if (!step) {
        return res.status(400).json({ error: 'Step is required' });
      }
      
      const progress = await storage.updateWorkflowStep(id, step);
      if (!progress) {
        return res.status(404).json({ error: 'Workflow progress not found' });
      }
      
      res.json(progress);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.patch('/api/workflow-progress/:id/status', async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { step, status } = req.body;
      
      if (!step || !status) {
        return res.status(400).json({ error: 'Step and status are required' });
      }
      
      const progress = await storage.updateWorkflowStepStatus(id, step, status);
      if (!progress) {
        return res.status(404).json({ error: 'Workflow progress not found' });
      }
      
      res.json(progress);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Comment routes
  app.get('/api/comments/step/:stepId', async (req, res) => {
    try {
      const stepId = Number(req.params.stepId);
      const comments = await storage.getCommentsByStep(stepId);
      res.json({ comments });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/comments/user/:userId', async (req, res) => {
    try {
      const userId = Number(req.params.userId);
      const comments = await storage.getCommentsByUser(userId);
      res.json({ comments });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/api/comments', validateRequest(insertCommentSchema), async (req, res) => {
    try {
      const comment = await storage.createComment(req.body);
      res.status(201).json(comment);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.patch('/api/comments/:id', async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { content } = req.body;
      
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }
      
      const comment = await storage.updateComment(id, content);
      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }
      
      res.json(comment);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete('/api/comments/:id', async (req, res) => {
    try {
      const id = Number(req.params.id);
      const success = await storage.deleteComment(id);
      
      if (!success) {
        return res.status(404).json({ error: 'Comment not found' });
      }
      
      res.status(204).end();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Initialize demo data if needed
  app.post('/api/init-demo-data', async (req, res) => {
    try {
      // Create a demo user
      const user = await storage.createUser({
        username: 'demouser',
        password: 'password123',
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@example.com',
        institution: 'Research Institute',
        role: 'Researcher'
      });
      
      // Create demo datasets
      const datasets = [
        await storage.createDataset({
          name: 'Diabetes Type 2 Genomic Dataset',
          description: 'Comprehensive genomic data from 1,500 patients with Type 2 Diabetes, including clinical parameters and treatment outcomes.',
          dataType: 'Genomic',
          source: 'European Biobank',
          accessRequirements: 'Research purpose only, ethical approval required',
          metadata: {
            quality: 'high',
            sampleSize: 1500,
            location: 'Europe',
            timeRange: '2018-2022'
          }
        }),
        await storage.createDataset({
          name: 'Cancer Genomics Collaborative Study',
          description: 'Multi-center genomic dataset from 2,300 patients with various cancer types, including biomarker analysis and treatment response.',
          dataType: 'Genomic',
          source: 'Global Cancer Research Initiative',
          accessRequirements: 'Research purpose only, ethical approval required',
          metadata: {
            quality: 'high',
            sampleSize: 2300,
            location: 'Global',
            timeRange: '2019-2023'
          }
        }),
        await storage.createDataset({
          name: 'Neurological Disorders Genetic Database',
          description: 'Genetic and clinical data from 850 patients with various neurological disorders including Alzheimer\'s and Parkinson\'s.',
          dataType: 'Genetic',
          source: 'North American Neurological Research Consortium',
          accessRequirements: 'Research purpose only, ethical approval required',
          metadata: {
            quality: 'medium',
            sampleSize: 850,
            location: 'North America',
            timeRange: '2017-2021'
          }
        })
      ];
      
      res.status(201).json({ message: 'Demo data initialized', user, datasets });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

import { 
  users, type User, type InsertUser,
  datasets, type Dataset, type InsertDataset,
  dataRequests, type DataRequest, type InsertDataRequest,
  approvalDecisions, type ApprovalDecision, type InsertApprovalDecision,
  accessGrants, type AccessGrant, type InsertAccessGrant,
  analysisResults, type AnalysisResult, type InsertAnalysisResult,
  exportRequests, type ExportRequest, type InsertExportRequest,
  userWorkflowProgress, type UserWorkflowProgress, type InsertUserWorkflowProgress,
  comments, type Comment, type InsertComment
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

// Comprehensive interface with CRUD methods for all tables
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, user: Partial<InsertUser>): Promise<User | undefined>;
  
  // Dataset methods
  getDataset(id: number): Promise<Dataset | undefined>;
  getDatasetByName(name: string): Promise<Dataset | undefined>;
  getAllDatasets(): Promise<Dataset[]>;
  createDataset(dataset: InsertDataset): Promise<Dataset>;
  
  // Data request methods
  getDataRequest(id: number): Promise<DataRequest | undefined>;
  getDataRequestsByUser(userId: number): Promise<DataRequest[]>;
  getDataRequestsByDataset(datasetId: number): Promise<DataRequest[]>;
  createDataRequest(request: InsertDataRequest): Promise<DataRequest>;
  updateDataRequestStatus(id: number, status: string): Promise<DataRequest | undefined>;
  
  // Approval decision methods
  getApprovalDecision(id: number): Promise<ApprovalDecision | undefined>;
  getApprovalDecisionsByRequest(requestId: number): Promise<ApprovalDecision[]>;
  createApprovalDecision(decision: InsertApprovalDecision): Promise<ApprovalDecision>;
  
  // Access grant methods
  getAccessGrant(id: number): Promise<AccessGrant | undefined>;
  getAccessGrantsByUser(userId: number): Promise<AccessGrant[]>;
  getActiveAccessGrantsByUser(userId: number): Promise<AccessGrant[]>;
  createAccessGrant(grant: InsertAccessGrant): Promise<AccessGrant>;
  revokeAccessGrant(id: number, reason: string): Promise<AccessGrant | undefined>;
  
  // Analysis result methods
  getAnalysisResult(id: number): Promise<AnalysisResult | undefined>;
  getAnalysisResultsByUser(userId: number): Promise<AnalysisResult[]>;
  getAnalysisResultsByGrant(grantId: number): Promise<AnalysisResult[]>;
  createAnalysisResult(result: InsertAnalysisResult): Promise<AnalysisResult>;
  updateAnalysisResultStatus(id: number, status: string): Promise<AnalysisResult | undefined>;
  
  // Export request methods
  getExportRequest(id: number): Promise<ExportRequest | undefined>;
  getExportRequestsByUser(userId: number): Promise<ExportRequest[]>;
  getExportRequestsByResult(resultId: number): Promise<ExportRequest[]>;
  createExportRequest(request: InsertExportRequest): Promise<ExportRequest>;
  updateExportRequestStatus(id: number, status: string, reviewerId: number, comments?: string): Promise<ExportRequest | undefined>;
  
  // Workflow progress methods
  getWorkflowProgress(id: number): Promise<UserWorkflowProgress | undefined>;
  getWorkflowProgressByUser(userId: number): Promise<UserWorkflowProgress[]>;
  createWorkflowProgress(progress: InsertUserWorkflowProgress): Promise<UserWorkflowProgress>;
  updateWorkflowStep(id: number, step: number): Promise<UserWorkflowProgress | undefined>;
  updateWorkflowStepStatus(id: number, step: string, status: string): Promise<UserWorkflowProgress | undefined>;
  
  // Comment methods
  getComment(id: number): Promise<Comment | undefined>;
  getCommentsByStep(stepId: number): Promise<Comment[]>;
  getCommentsByUser(userId: number): Promise<Comment[]>;
  createComment(comment: InsertComment): Promise<Comment>;
  updateComment(id: number, content: string): Promise<Comment | undefined>;
  deleteComment(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  async updateUser(id: number, userData: Partial<InsertUser>): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set(userData)
      .where(eq(users.id, id))
      .returning();
    return user;
  }
  
  // Dataset methods
  async getDataset(id: number): Promise<Dataset | undefined> {
    const [dataset] = await db.select().from(datasets).where(eq(datasets.id, id));
    return dataset;
  }
  
  async getDatasetByName(name: string): Promise<Dataset | undefined> {
    const [dataset] = await db.select().from(datasets).where(eq(datasets.name, name));
    return dataset;
  }
  
  async getAllDatasets(): Promise<Dataset[]> {
    return db.select().from(datasets);
  }
  
  async createDataset(insertDataset: InsertDataset): Promise<Dataset> {
    const [dataset] = await db.insert(datasets).values(insertDataset).returning();
    return dataset;
  }
  
  // Data request methods
  async getDataRequest(id: number): Promise<DataRequest | undefined> {
    const [request] = await db.select().from(dataRequests).where(eq(dataRequests.id, id));
    return request;
  }
  
  async getDataRequestsByUser(userId: number): Promise<DataRequest[]> {
    return db.select().from(dataRequests).where(eq(dataRequests.userId, userId));
  }
  
  async getDataRequestsByDataset(datasetId: number): Promise<DataRequest[]> {
    return db.select().from(dataRequests).where(eq(dataRequests.datasetId, datasetId));
  }
  
  async createDataRequest(insertRequest: InsertDataRequest): Promise<DataRequest> {
    const [request] = await db.insert(dataRequests).values(insertRequest).returning();
    return request;
  }
  
  async updateDataRequestStatus(id: number, status: string): Promise<DataRequest | undefined> {
    const [request] = await db
      .update(dataRequests)
      .set({ status })
      .where(eq(dataRequests.id, id))
      .returning();
    return request;
  }
  
  // Approval decision methods
  async getApprovalDecision(id: number): Promise<ApprovalDecision | undefined> {
    const [decision] = await db.select().from(approvalDecisions).where(eq(approvalDecisions.id, id));
    return decision;
  }
  
  async getApprovalDecisionsByRequest(requestId: number): Promise<ApprovalDecision[]> {
    return db.select().from(approvalDecisions).where(eq(approvalDecisions.requestId, requestId));
  }
  
  async createApprovalDecision(insertDecision: InsertApprovalDecision): Promise<ApprovalDecision> {
    const [decision] = await db.insert(approvalDecisions).values(insertDecision).returning();
    return decision;
  }
  
  // Access grant methods
  async getAccessGrant(id: number): Promise<AccessGrant | undefined> {
    const [grant] = await db.select().from(accessGrants).where(eq(accessGrants.id, id));
    return grant;
  }
  
  async getAccessGrantsByUser(userId: number): Promise<AccessGrant[]> {
    return db.select().from(accessGrants).where(eq(accessGrants.userId, userId));
  }
  
  async getActiveAccessGrantsByUser(userId: number): Promise<AccessGrant[]> {
    return db.select().from(accessGrants).where(
      and(
        eq(accessGrants.userId, userId),
        eq(accessGrants.status, "active")
      )
    );
  }
  
  async createAccessGrant(insertGrant: InsertAccessGrant): Promise<AccessGrant> {
    const [grant] = await db.insert(accessGrants).values(insertGrant).returning();
    return grant;
  }
  
  async revokeAccessGrant(id: number, reason: string): Promise<AccessGrant | undefined> {
    const [grant] = await db
      .update(accessGrants)
      .set({ 
        status: "revoked", 
        revokedReason: reason,
        revokedDate: new Date()
      })
      .where(eq(accessGrants.id, id))
      .returning();
    return grant;
  }
  
  // Analysis result methods
  async getAnalysisResult(id: number): Promise<AnalysisResult | undefined> {
    const [result] = await db.select().from(analysisResults).where(eq(analysisResults.id, id));
    return result;
  }
  
  async getAnalysisResultsByUser(userId: number): Promise<AnalysisResult[]> {
    return db.select().from(analysisResults).where(eq(analysisResults.userId, userId));
  }
  
  async getAnalysisResultsByGrant(grantId: number): Promise<AnalysisResult[]> {
    return db.select().from(analysisResults).where(eq(analysisResults.grantId, grantId));
  }
  
  async createAnalysisResult(insertResult: InsertAnalysisResult): Promise<AnalysisResult> {
    const [result] = await db.insert(analysisResults).values(insertResult).returning();
    return result;
  }
  
  async updateAnalysisResultStatus(id: number, status: string): Promise<AnalysisResult | undefined> {
    const [result] = await db
      .update(analysisResults)
      .set({ status })
      .where(eq(analysisResults.id, id))
      .returning();
    return result;
  }
  
  // Export request methods
  async getExportRequest(id: number): Promise<ExportRequest | undefined> {
    const [request] = await db.select().from(exportRequests).where(eq(exportRequests.id, id));
    return request;
  }
  
  async getExportRequestsByUser(userId: number): Promise<ExportRequest[]> {
    return db.select().from(exportRequests).where(eq(exportRequests.userId, userId));
  }
  
  async getExportRequestsByResult(resultId: number): Promise<ExportRequest[]> {
    return db.select().from(exportRequests).where(eq(exportRequests.resultId, resultId));
  }
  
  async createExportRequest(insertRequest: InsertExportRequest): Promise<ExportRequest> {
    const [request] = await db.insert(exportRequests).values(insertRequest).returning();
    return request;
  }
  
  async updateExportRequestStatus(
    id: number, 
    status: string, 
    reviewerId: number, 
    comments?: string
  ): Promise<ExportRequest | undefined> {
    const [request] = await db
      .update(exportRequests)
      .set({ 
        status, 
        reviewerId,
        reviewComments: comments,
        reviewDate: new Date()
      })
      .where(eq(exportRequests.id, id))
      .returning();
    return request;
  }
  
  // Workflow progress methods
  async getWorkflowProgress(id: number): Promise<UserWorkflowProgress | undefined> {
    const [progress] = await db.select().from(userWorkflowProgress).where(eq(userWorkflowProgress.id, id));
    return progress;
  }
  
  async getWorkflowProgressByUser(userId: number): Promise<UserWorkflowProgress[]> {
    return db.select().from(userWorkflowProgress).where(eq(userWorkflowProgress.userId, userId));
  }
  
  async createWorkflowProgress(insertProgress: InsertUserWorkflowProgress): Promise<UserWorkflowProgress> {
    const [progress] = await db.insert(userWorkflowProgress).values(insertProgress).returning();
    return progress;
  }
  
  async updateWorkflowStep(id: number, step: number): Promise<UserWorkflowProgress | undefined> {
    const [progress] = await db
      .update(userWorkflowProgress)
      .set({ 
        currentStep: step,
        lastUpdated: new Date()
      })
      .where(eq(userWorkflowProgress.id, id))
      .returning();
    return progress;
  }
  
  async updateWorkflowStepStatus(id: number, step: string, status: string): Promise<UserWorkflowProgress | undefined> {
    // We need to construct a dynamic object for the specific step status update
    const updateData: Record<string, any> = {
      lastUpdated: new Date()
    };
    
    // Add the specific step status to update
    updateData[step] = status;
    
    const [progress] = await db
      .update(userWorkflowProgress)
      .set(updateData)
      .where(eq(userWorkflowProgress.id, id))
      .returning();
    return progress;
  }

  // Comment methods
  async getComment(id: number): Promise<Comment | undefined> {
    const [comment] = await db.select().from(comments).where(eq(comments.id, id));
    return comment;
  }

  async getCommentsByStep(stepId: number): Promise<Comment[]> {
    return db
      .select()
      .from(comments)
      .where(eq(comments.stepId, stepId))
      .orderBy(comments.createdAt);
  }

  async getCommentsByUser(userId: number): Promise<Comment[]> {
    return db
      .select()
      .from(comments)
      .where(eq(comments.userId, userId))
      .orderBy(comments.createdAt);
  }

  async createComment(insertComment: InsertComment): Promise<Comment> {
    const [comment] = await db
      .insert(comments)
      .values(insertComment)
      .returning();
    return comment;
  }

  async updateComment(id: number, content: string): Promise<Comment | undefined> {
    const [comment] = await db
      .update(comments)
      .set({ 
        content, 
        updatedAt: new Date() 
      })
      .where(eq(comments.id, id))
      .returning();
    return comment;
  }

  async deleteComment(id: number): Promise<boolean> {
    const result = await db
      .delete(comments)
      .where(eq(comments.id, id))
      .returning();
    return result.length > 0;
  }
}

// Use DatabaseStorage instead of MemStorage
export const storage = new DatabaseStorage();

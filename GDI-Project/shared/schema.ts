import { pgTable, serial, text, varchar, timestamp, boolean, integer, jsonb, uuid, pgEnum, date } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';
import { relations } from 'drizzle-orm';

// Define your database schema here
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email"),
  institution: text("institution"),
  role: text("role"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Workflow steps status enum
export const stepStatusEnum = pgEnum('step_status', ['not_started', 'in_progress', 'completed', 'rejected']);

// Datasets table
export const datasets = pgTable("datasets", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  dataType: text("data_type"),
  source: text("source"),
  accessRequirements: text("access_requirements"),
  dateAdded: timestamp("date_added").defaultNow(),
  metadata: jsonb("metadata"),
});

// Data requests table
export const dataRequests = pgTable("data_requests", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  datasetId: integer("dataset_id").references(() => datasets.id),
  title: text("title").notNull(),
  purpose: text("purpose").notNull(),
  requestDate: timestamp("request_date").defaultNow(),
  status: text("status").default("pending"),
  researchQuestion: text("research_question"),
  institutionalAffiliation: text("institutional_affiliation"),
  expectedCompletionDate: date("expected_completion_date"),
});

// Approval decisions table
export const approvalDecisions = pgTable("approval_decisions", {
  id: serial("id").primaryKey(),
  requestId: integer("request_id").references(() => dataRequests.id),
  committeeType: text("committee_type").notNull(), // "DAC" or "NCP"
  decisionDate: timestamp("decision_date").defaultNow(),
  approved: boolean("approved"),
  comments: text("comments"),
  reviewerId: integer("reviewer_id").references(() => users.id),
});

// Access grants table
export const accessGrants = pgTable("access_grants", {
  id: serial("id").primaryKey(),
  requestId: integer("request_id").references(() => dataRequests.id),
  userId: integer("user_id").references(() => users.id),
  datasetId: integer("dataset_id").references(() => datasets.id),
  startDate: timestamp("start_date").defaultNow(),
  endDate: timestamp("end_date"),
  status: text("status").default("active"),
  revokedReason: text("revoked_reason"),
  revokedDate: timestamp("revoked_date"),
});

// Analysis results table
export const analysisResults = pgTable("analysis_results", {
  id: serial("id").primaryKey(),
  grantId: integer("grant_id").references(() => accessGrants.id),
  userId: integer("user_id").references(() => users.id),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
  resultType: text("result_type"), // 'statistics', 'visualization', 'model'
  status: text("status").default("stored"), // 'stored', 'pending_export', 'exported'
});

// Export requests table
export const exportRequests = pgTable("export_requests", {
  id: serial("id").primaryKey(),
  resultId: integer("result_id").references(() => analysisResults.id),
  userId: integer("user_id").references(() => users.id),
  requestDate: timestamp("request_date").defaultNow(),
  exportReason: text("export_reason"),
  publicationPlan: text("publication_plan"),
  status: text("status").default("pending"), // 'pending', 'approved', 'rejected'
  reviewDate: timestamp("review_date"),
  reviewComments: text("review_comments"),
  reviewerId: integer("reviewer_id").references(() => users.id),
});

// User workflow progress table
export const userWorkflowProgress = pgTable("user_workflow_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  dataRequestId: integer("data_request_id").references(() => dataRequests.id),
  currentStep: integer("current_step").default(1),
  authenticationStatus: stepStatusEnum("authentication_status").default("not_started"),
  dataRequestStatus: stepStatusEnum("data_request_status").default("not_started"),
  approvalStatus: stepStatusEnum("approval_status").default("not_started"),
  analysisStatus: stepStatusEnum("analysis_status").default("not_started"),
  exportStatus: stepStatusEnum("export_status").default("not_started"),
  accessRevokedStatus: stepStatusEnum("access_revoked_status").default("not_started"),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
  dataRequests: many(dataRequests),
  approvalDecisions: many(approvalDecisions),
  accessGrants: many(accessGrants),
  analysisResults: many(analysisResults),
  exportRequests: many(exportRequests),
  workflowProgress: many(userWorkflowProgress),
}));

export const datasetsRelations = relations(datasets, ({ many }) => ({
  dataRequests: many(dataRequests),
  accessGrants: many(accessGrants),
}));

export const dataRequestsRelations = relations(dataRequests, ({ one, many }) => ({
  user: one(users, {
    fields: [dataRequests.userId],
    references: [users.id],
  }),
  dataset: one(datasets, {
    fields: [dataRequests.datasetId],
    references: [datasets.id],
  }),
  approvalDecisions: many(approvalDecisions),
  accessGrants: many(accessGrants),
  workflowProgress: many(userWorkflowProgress),
}));

export const approvalDecisionsRelations = relations(approvalDecisions, ({ one }) => ({
  request: one(dataRequests, {
    fields: [approvalDecisions.requestId],
    references: [dataRequests.id],
  }),
  reviewer: one(users, {
    fields: [approvalDecisions.reviewerId],
    references: [users.id],
  }),
}));

export const accessGrantsRelations = relations(accessGrants, ({ one, many }) => ({
  request: one(dataRequests, {
    fields: [accessGrants.requestId],
    references: [dataRequests.id],
  }),
  user: one(users, {
    fields: [accessGrants.userId],
    references: [users.id],
  }),
  dataset: one(datasets, {
    fields: [accessGrants.datasetId],
    references: [datasets.id],
  }),
  analysisResults: many(analysisResults),
}));

export const analysisResultsRelations = relations(analysisResults, ({ one, many }) => ({
  grant: one(accessGrants, {
    fields: [analysisResults.grantId],
    references: [accessGrants.id],
  }),
  user: one(users, {
    fields: [analysisResults.userId],
    references: [users.id],
  }),
  exportRequests: many(exportRequests),
}));

export const exportRequestsRelations = relations(exportRequests, ({ one }) => ({
  result: one(analysisResults, {
    fields: [exportRequests.resultId],
    references: [analysisResults.id],
  }),
  user: one(users, {
    fields: [exportRequests.userId],
    references: [users.id],
  }),
  reviewer: one(users, {
    fields: [exportRequests.reviewerId],
    references: [users.id],
  }),
}));

export const userWorkflowProgressRelations = relations(userWorkflowProgress, ({ one }) => ({
  user: one(users, {
    fields: [userWorkflowProgress.userId],
    references: [users.id],
  }),
  dataRequest: one(dataRequests, {
    fields: [userWorkflowProgress.dataRequestId],
    references: [dataRequests.id],
  }),
}));

// Zod schemas for forms and validation
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  firstName: true,
  lastName: true,
  email: true,
  institution: true,
  role: true,
});

export const insertDatasetSchema = createInsertSchema(datasets).pick({
  name: true,
  description: true,
  dataType: true,
  source: true,
  accessRequirements: true,
  metadata: true,
});

export const insertDataRequestSchema = createInsertSchema(dataRequests).pick({
  userId: true,
  datasetId: true,
  title: true,
  purpose: true,
  researchQuestion: true,
  institutionalAffiliation: true,
  expectedCompletionDate: true,
});

export const insertApprovalDecisionSchema = createInsertSchema(approvalDecisions).pick({
  requestId: true,
  committeeType: true,
  approved: true,
  comments: true,
  reviewerId: true,
});

export const insertAccessGrantSchema = createInsertSchema(accessGrants).pick({
  requestId: true,
  userId: true,
  datasetId: true,
  startDate: true,
  endDate: true,
});

export const insertAnalysisResultSchema = createInsertSchema(analysisResults).pick({
  grantId: true,
  userId: true,
  title: true,
  description: true,
  resultType: true,
});

export const insertExportRequestSchema = createInsertSchema(exportRequests).pick({
  resultId: true,
  userId: true,
  exportReason: true,
  publicationPlan: true,
});

export const insertUserWorkflowProgressSchema = createInsertSchema(userWorkflowProgress).pick({
  userId: true,
  dataRequestId: true,
  currentStep: true,
});

// Type exports
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertDataset = z.infer<typeof insertDatasetSchema>;
export type Dataset = typeof datasets.$inferSelect;

export type InsertDataRequest = z.infer<typeof insertDataRequestSchema>;
export type DataRequest = typeof dataRequests.$inferSelect;

export type InsertApprovalDecision = z.infer<typeof insertApprovalDecisionSchema>;
export type ApprovalDecision = typeof approvalDecisions.$inferSelect;

export type InsertAccessGrant = z.infer<typeof insertAccessGrantSchema>;
export type AccessGrant = typeof accessGrants.$inferSelect;

export type InsertAnalysisResult = z.infer<typeof insertAnalysisResultSchema>;
export type AnalysisResult = typeof analysisResults.$inferSelect;

export type InsertExportRequest = z.infer<typeof insertExportRequestSchema>;
export type ExportRequest = typeof exportRequests.$inferSelect;

export type InsertUserWorkflowProgress = z.infer<typeof insertUserWorkflowProgressSchema>;
export type UserWorkflowProgress = typeof userWorkflowProgress.$inferSelect;

// Comments table for workflow step feedback
export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  stepId: integer("step_id").notNull(), // Workflow step ID (1-7)
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  userEmail: text("user_email"), // Optional email for anonymous comments
  userName: text("user_name"), // Optional name for anonymous comments
  isAnonymous: boolean("is_anonymous").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Comments relations
export const commentsRelations = relations(comments, ({ one }) => ({
  user: one(users, {
    fields: [comments.userId],
    references: [users.id],
    relationName: "user_comments"
  })
}));

// Comment schema for insertions
export const insertCommentSchema = createInsertSchema(comments).pick({
  stepId: true,
  userId: true,
  content: true,
  userEmail: true,
  userName: true,
  isAnonymous: true
});

// Comment types
export type InsertComment = z.infer<typeof insertCommentSchema>;
export type Comment = typeof comments.$inferSelect;

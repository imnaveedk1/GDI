export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  details: string;
  status?: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "Data Discovery",
    description: "Search and identify desired datasets using the User Portal interface and Beacon V2.",
    details: "In this step, researchers identify relevant datasets through our User Portal interface. The system leverages Beacon V2 technology to efficiently search metadata repositories based on specific criteria.",
    status: "Initial Step"
  },
  {
    id: 2,
    title: "Authentication",
    description: "Verify identity using Life Science login methods or eIDS before requesting datasets.",
    details: "Authentication is a crucial step that helps validate user identity before dataset requests, reducing system burden and preventing unauthorized access. Users can authenticate via Life Science credentials, institutional login, or third-party options like Google. The eIDS (European identification mechanism) is also available but may still be under development.",
    status: "Identity Verification"
  },
  {
    id: 3,
    title: "Data Request",
    description: "Submit application for datasets through REMS with terms and conditions agreement.",
    details: "Once authenticated, researchers can submit dataset applications through the Resource Entitlement Management System (REMS). This process involves completing a data access application and agreeing to the dataset's terms and conditions. After submission, the application is automatically routed to the data owner and approval committee for review.",
    status: "Application Process"
  },
  {
    id: 4,
    title: "Approval Committee",
    description: "Review by DAC and NCP committees to evaluate application compliance.",
    details: "The approval process involves two committees: the central European committee (DAC) and the Irish committee (NCP). DAC performs initial assessment, and if approved, forwards the application to NCP. NCP then evaluates the application from an Irish compliance perspective. Researchers are notified of approval status, with rejections including explanations of why the request was denied.",
    status: "Review Process"
  },
  {
    id: 5,
    title: "Data Analysis",
    description: "Perform research within the Trusted Research Environment (TRE) using provided tools.",
    details: "After approval, researchers can analyze datasets for a limited duration within a Trusted Research Environment (TRE). The data remains securely on the node and is not downloadable. Researchers bring their methods and algorithms to the data, using tools like Galaxy, DataSHIELD, and Flower for analysis within the secure TRE framework.",
    status: "Research Stage"
  },
  {
    id: 6,
    title: "Result Exports",
    description: "Secure export process for approved analysis results with potential manual review.",
    details: "To prevent raw data downloads, a strict export mechanism is implemented. Analysis results are stored in trusted storage, accessible through the TRE. Sensitive outputs may require additional approval, and researchers must submit an application detailing how the data will be used and published. Results should be published in open access journals. Export is only allowed after all conditions are met.",
    status: "Export Process"
  },
  {
    id: 7,
    title: "Access Revoked",
    description: "Access termination due to violations, completion, or time expiration.",
    details: "Access can be revoked at any stage if violations are found, if the researcher completes their analysis and no longer needs access, or if the researcher doesn't complete analysis within the allocated timeframe. Researchers can request extended access if needed. Results are stored for a defined period (potentially 10 years) before deletion.",
    status: "Final Stage"
  }
];

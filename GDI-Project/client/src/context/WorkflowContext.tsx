import { createContext, useContext, useState, ReactNode } from "react";
import { workflowSteps } from "@/data/workflowData";

interface WorkflowContextType {
  activeStep: number;
  setActiveStep: (stepNumber: number) => void;
  getStepTitle: (stepNumber: number) => string;
  getNextStepTitle: (currentStep: number) => string;
  getStepStatus: (stepNumber: number) => string;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

export function WorkflowProvider({ children }: { children: ReactNode }) {
  const [activeStep, setActiveStep] = useState(1);

  // Helper functions for step information
  const getStepTitle = (stepNumber: number) => {
    const step = workflowSteps.find(step => step.id === stepNumber);
    return step ? step.title : "Unknown Step";
  };

  const getNextStepTitle = (currentStep: number) => {
    return getStepTitle(currentStep + 1);
  };

  const getStepStatus = (stepNumber: number) => {
    const statuses: { [key: number]: string } = {
      1: "Initial Step",
      2: "Identity Verification",
      3: "Application Process",
      4: "Review Process",
      5: "Research Stage",
      6: "Export Process",
      7: "Final Stage"
    };
    return statuses[stepNumber] || "In Progress";
  };

  return (
    <WorkflowContext.Provider value={{ 
      activeStep, 
      setActiveStep, 
      getStepTitle, 
      getNextStepTitle, 
      getStepStatus 
    }}>
      {children}
    </WorkflowContext.Provider>
  );
}

export function useWorkflow() {
  const context = useContext(WorkflowContext);
  if (context === undefined) {
    throw new Error("useWorkflow must be used within a WorkflowProvider");
  }
  return context;
}

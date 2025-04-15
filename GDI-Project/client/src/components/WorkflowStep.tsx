import { WorkflowStep as WorkflowStepType } from "@/data/workflowData";

interface WorkflowStepProps {
  step: WorkflowStepType;
  isActive: boolean;
  onClick: () => void;
}

const WorkflowStep = ({ step, isActive, onClick }: WorkflowStepProps) => {
  return (
    <div 
      id={`step-${step.id}`}
      className={`workflow-step cursor-pointer bg-white rounded-lg shadow-md p-4 border-l-4 border-primary w-64 relative transition-all duration-300 hover:translate-y-[-2px] hover:brightness-105 ${isActive ? 'shadow-[0_0_0_2px_hsl(var(--primary)),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]' : ''}`}
      data-step={step.id}
      onClick={onClick}
    >
      <div className="absolute -top-2 -left-2 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold">
        {step.id}
      </div>
      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
      <p className="text-sm text-gray-600">{step.description}</p>
      <div className="mt-3 text-primary text-sm font-medium flex items-center">
        <span>Learn more</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default WorkflowStep;

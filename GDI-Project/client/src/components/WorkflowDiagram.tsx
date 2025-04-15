import { useWorkflow } from "@/context/WorkflowContext";
import { workflowSteps } from "@/data/workflowData";
import WorkflowStep from "@/components/WorkflowStep";
import WorkflowArrow from "@/components/WorkflowArrow";

const WorkflowDiagram = () => {
  const { activeStep, setActiveStep } = useWorkflow();

  return (
    <div className="relative mb-12 overflow-x-auto pb-6" id="workflow-diagram">
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 min-w-max px-4 py-8">
        {/* First row of workflow steps (1-4) */}
        {workflowSteps.slice(0, 4).map((step, index) => (
          <div key={step.id} className="flex items-center">
            <WorkflowStep 
              step={step} 
              isActive={activeStep === step.id} 
              onClick={() => setActiveStep(step.id)} 
            />
            {index < 3 && <WorkflowArrow direction="right" />}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-4 min-w-max px-4">
        {/* Second row of workflow steps (7-5 in reverse) */}
        {workflowSteps.slice(4).reverse().map((step, index) => (
          <div key={step.id} className="flex items-center">
            <WorkflowStep 
              step={step} 
              isActive={activeStep === step.id} 
              onClick={() => setActiveStep(step.id)} 
            />
            {index < 2 && <WorkflowArrow direction="left" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowDiagram;

import { useWorkflow } from "@/context/WorkflowContext";
import { workflowSteps } from "@/data/workflowData";
import { useEffect, useRef } from "react";
import DataDiscoverySearch from "./DataDiscoverySearch";
import AuthenticationInterface from "./AuthenticationInterface";
import DataRequestInterface from "./DataRequestInterface";
import ApprovalCommitteeInterface from "./ApprovalCommitteeInterface";
import DataAnalysisInterface from "./DataAnalysisInterface";
import ResultExportInterface from "./ResultExportInterface";
import AccessRevokedInterface from "./AccessRevokedInterface";
import CommentSection from "./CommentSection";

const DetailedView = () => {
  const { activeStep, setActiveStep, getStepTitle, getNextStepTitle, getStepStatus } = useWorkflow();
  const detailsRef = useRef<HTMLDivElement>(null);
  
  const activeStepData = workflowSteps.find(step => step.id === activeStep);

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeStep]);

  const handleNextStep = () => {
    if (activeStep < 7) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  if (!activeStepData) return null;

  return (
    <div id="detailed-view" ref={detailsRef} className="bg-white rounded-lg shadow-md p-6 mb-8 border-t-4 border-[#169b62]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#169b62]">Step {activeStep}: {activeStepData.title}</h2>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          getStepStatus(activeStep) === 'Completed' 
            ? 'bg-[#169b62]/20 text-[#169b62]' 
            : getStepStatus(activeStep) === 'In Progress'
              ? 'bg-[#ff883e]/20 text-[#ff883e]'
              : 'bg-gray-100 text-gray-700'
        }`}>
          {getStepStatus(activeStep)}
        </span>
      </div>

      <p className="text-gray-700 mb-6 border-l-4 border-[#169b62]/30 pl-4 italic">
        {activeStepData.details}
      </p>

      {/* Specific content based on active step */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
        {activeStep === 1 && <DataDiscoverySearch />}
        {activeStep === 2 && <AuthenticationInterface />}
        {activeStep === 3 && <DataRequestInterface />}
        {activeStep === 4 && <ApprovalCommitteeInterface />}
        {activeStep === 5 && <DataAnalysisInterface />}
        {activeStep === 6 && <ResultExportInterface />}
        {activeStep === 7 && <AccessRevokedInterface />}
      </div>

      {/* Step navigation buttons */}
      <div className="flex justify-between mt-8">
        <button 
          className={`font-medium flex items-center ${
            activeStep === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-[#169b62] hover:text-[#0d7c4d]'
          }`}
          onClick={handlePreviousStep}
          disabled={activeStep === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Previous Step</span>
        </button>
        
        {activeStep < 7 && (
          <button 
            className="bg-[#ff883e] hover:bg-[#e67a36] text-white px-4 py-2 rounded-md transition-colors flex items-center shadow-sm"
            onClick={handleNextStep}
          >
            <span>Next Step: {getNextStepTitle(activeStep)}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Comments section for each step */}
      <CommentSection stepId={activeStep} />
    </div>
  );
};

export default DetailedView;

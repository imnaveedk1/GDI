import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import DetailedView from "@/components/DetailedView";
import { WorkflowProvider } from "@/context/WorkflowContext";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Irish flag-inspired background with three vertical stripes */}
      <div className="fixed inset-0 z-0 flex">
        <div className="w-1/3 bg-[#169b62]"></div> {/* Green */}
        <div className="w-1/3 bg-white"></div> {/* White */}
        <div className="w-1/3 bg-[#ff883e]"></div> {/* Orange */}
      </div>
      
      {/* Content with semi-transparent background for readability */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="bg-white/90 rounded-lg p-6 shadow-lg mb-10">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Governance Workflow</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                This interactive guide outlines the comprehensive process for requesting, accessing, 
                and analyzing datasets within our data governance framework.
              </p>
            </div>
            
            <WorkflowProvider>
              <WorkflowDiagram />
              <DetailedView />
            </WorkflowProvider>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

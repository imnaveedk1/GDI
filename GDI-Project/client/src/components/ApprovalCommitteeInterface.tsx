import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

const ApprovalCommitteeInterface = () => {
  const [activeTab, setActiveTab] = useState("process");

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Application Review Process</h3>
        <div className="relative">
          {/* Process timeline with connections */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-8 relative z-10">
            {/* DAC Review */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="md:w-1/2 md:text-right pr-4 md:pr-8">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 inline-block">
                  <h4 className="font-semibold text-gray-800">Data Access Committee (DAC)</h4>
                  <p className="text-sm text-gray-600 mb-2">Central European committee that performs initial assessment of all data access applications.</p>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">First Review</Badge>
                </div>
              </div>
              
              <div className="bg-primary rounded-full p-3 flex items-center justify-center z-20">
                <span className="text-white font-bold">1</span>
              </div>
              
              <div className="md:w-1/2 pl-4 md:pl-8">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-green-700">Application Approved</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-2">
                      <XCircle className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-sm font-medium text-red-700">Application Rejected</span>
                  </div>
                  
                  <p className="text-xs text-gray-500 pl-8">If rejected, researcher is notified with explanation</p>
                </div>
              </div>
            </div>
            
            {/* Flow arrow */}
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            {/* NCP Review */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="md:w-1/2 md:text-right pr-4 md:pr-8">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 inline-block">
                  <h4 className="font-semibold text-gray-800">National Contact Point (NCP)</h4>
                  <p className="text-sm text-gray-600 mb-2">Irish committee that evaluates applications from a national compliance perspective.</p>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Secondary Review</Badge>
                </div>
              </div>
              
              <div className="bg-primary rounded-full p-3 flex items-center justify-center z-20">
                <span className="text-white font-bold">2</span>
              </div>
              
              <div className="md:w-1/2 pl-4 md:pl-8">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-green-700">Application Approved</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-2">
                      <XCircle className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-sm font-medium text-red-700">Application Rejected</span>
                  </div>
                  
                  <p className="text-xs text-gray-500 pl-8">If rejected, researcher is notified with explanation</p>
                </div>
              </div>
            </div>
            
            {/* Flow arrow */}
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            {/* Final Decision */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="md:w-1/2 md:text-right pr-4 md:pr-8">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 inline-block">
                  <h4 className="font-semibold text-gray-800">Final Decision</h4>
                  <p className="text-sm text-gray-600 mb-2">Researcher is notified of the final decision on their data access request.</p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Access Granted</Badge>
                </div>
              </div>
              
              <div className="bg-primary rounded-full p-3 flex items-center justify-center z-20">
                <span className="text-white font-bold">3</span>
              </div>
              
              <div className="md:w-1/2 pl-4 md:pl-8">
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    If approved by both committees, access is granted to the requested dataset within the Trusted Research Environment (TRE).
                  </p>
                  <div className="flex items-center bg-green-50 p-2 rounded-md">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-700">Dataset Access Enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Card>
        <CardHeader className="bg-gray-50 border-b border-gray-200 px-4 py-3">
          <Tabs defaultValue="process" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="process">Review Process</TabsTrigger>
              <TabsTrigger value="criteria">Evaluation Criteria</TabsTrigger>
              <TabsTrigger value="example">Example Case</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        
        <CardContent className="p-4">
          {activeTab === "process" && (
            <div className="space-y-6">
              <div className="bg-blue-50 text-blue-800 p-3 rounded-md text-sm">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm">
                      The approval process involves two committees working in sequence to ensure proper evaluation of each data access request.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">DAC Review Process</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="font-medium">Initial Application Assessment</p>
                      <p className="text-gray-600">The DAC performs a comprehensive review of the application, evaluating scientific merit, methodology, and researcher qualifications.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="font-medium">Ethics and Compliance Check</p>
                      <p className="text-gray-600">Research ethics, data protection, and regulatory compliance are carefully assessed to ensure all European standards are met.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="font-medium">Decision and Notification</p>
                      <p className="text-gray-600">If approved, the application is forwarded to the NCP. If rejected, the researcher receives detailed feedback explaining why.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">NCP Review Process</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="font-medium">National Compliance Review</p>
                      <p className="text-gray-600">The NCP evaluates the application from an Irish compliance perspective, ensuring alignment with national regulations.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="font-medium">Resource Allocation Assessment</p>
                      <p className="text-gray-600">Evaluation of system resources required and determination of access duration based on the research scope.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="font-medium">Final Approval Decision</p>
                      <p className="text-gray-600">The NCP makes the final decision on granting access. All decisions include detailed rationale.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-md font-medium mb-2">Typical Timeline</h4>
                <div className="flex flex-col sm:flex-row justify-between text-sm">
                  <div className="mb-3 sm:mb-0">
                    <p className="font-medium">DAC Review:</p>
                    <p className="text-gray-600">1-2 weeks</p>
                  </div>
                  <div className="mb-3 sm:mb-0">
                    <p className="font-medium">NCP Review:</p>
                    <p className="text-gray-600">1-2 weeks</p>
                  </div>
                  <div>
                    <p className="font-medium">Total Process:</p>
                    <p className="text-gray-600">2-4 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "criteria" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-3">Evaluation Criteria</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Applications are evaluated based on a comprehensive set of criteria designed to ensure ethical and responsible data use.
                </p>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h5 className="font-medium">Scientific Merit</h5>
                    </div>
                    <div className="p-3">
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Research question relevance and importance</li>
                        <li>Methodological soundness and appropriateness</li>
                        <li>Potential contribution to scientific knowledge</li>
                        <li>Statistical power and sample size considerations</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h5 className="font-medium">Researcher Qualifications</h5>
                    </div>
                    <div className="p-3">
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Appropriate expertise and skills for the proposed research</li>
                        <li>Track record in relevant research areas</li>
                        <li>Institutional affiliation and support</li>
                        <li>History of responsible data management (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h5 className="font-medium">Legal and Ethical Compliance</h5>
                    </div>
                    <div className="p-3">
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Adherence to GDPR and other relevant regulations</li>
                        <li>Ethical considerations appropriately addressed</li>
                        <li>Data minimization principles respected</li>
                        <li>Clear plans for responsible publication of results</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h5 className="font-medium">Feasibility and Resources</h5>
                    </div>
                    <div className="p-3">
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Realistic timeline and project scope</li>
                        <li>Appropriate computational resource requirements</li>
                        <li>Compatibility with available tools in the TRE</li>
                        <li>Clear plan for results export and publication</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 text-sm">
                <h5 className="font-medium text-amber-800">Common Reasons for Application Rejection</h5>
                <ul className="mt-2 space-y-1 list-disc list-inside text-amber-700">
                  <li>Insufficient detail about research methodology</li>
                  <li>Inadequate explanation of data protection measures</li>
                  <li>Research scope not aligned with dataset purpose</li>
                  <li>Lack of appropriate expertise for the proposed analysis</li>
                  <li>Unrealistic timeline or resource requirements</li>
                  <li>Incomplete or ambiguous information in the application</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === "example" && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-sm">
                <h5 className="font-medium text-blue-800 mb-1">Example Case Study</h5>
                <p className="text-blue-700">
                  This example illustrates the typical review process for a data access application.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h5 className="font-medium">Application Summary</h5>
                </div>
                <div className="p-4 text-sm">
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Researcher:</p>
                      <p className="text-gray-700">Dr. Sarah Johnson, Dublin City University</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Research Title:</p>
                      <p className="text-gray-700">Genomic Predictors of Treatment Response in Type 2 Diabetes</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Dataset Requested:</p>
                      <p className="text-gray-700">Diabetes Type 2 Genomic Dataset</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Research Purpose:</p>
                      <p className="text-gray-700">To identify genetic markers associated with improved response to first-line therapies in Type 2 Diabetes patients, with the aim of developing a predictive model for personalized treatment approaches.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Methodology:</p>
                      <p className="text-gray-700">Genome-wide association study (GWAS) combined with machine learning approaches to identify significant genetic variants and their interactions with treatment outcomes.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Duration Requested:</p>
                      <p className="text-gray-700">6 months</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h5 className="font-medium">DAC Review</h5>
                </div>
                <div className="p-4 text-sm">
                  <div className="mb-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-green-100 text-green-800">APPROVED</Badge>
                      <span className="text-gray-500 text-xs ml-2">April 2, 2025</span>
                    </div>
                    <h6 className="font-medium mb-1">Review Notes:</h6>
                    <p className="text-gray-700">
                      The application demonstrates strong scientific merit with a clear research question and robust methodology. The researcher has appropriate expertise in genomics and diabetes research, with previous publications in the field. The proposal adheres to ethical guidelines and includes appropriate data protection considerations.
                    </p>
                  </div>
                  
                  <div>
                    <h6 className="font-medium mb-1">Strengths:</h6>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                      <li>Clear research question with potential clinical impact</li>
                      <li>Appropriate methodology and analytical approach</li>
                      <li>Strong researcher qualifications and institutional support</li>
                      <li>Well-defined publication plan</li>
                    </ul>
                    
                    <h6 className="font-medium mb-1">Recommendations:</h6>
                    <p className="text-gray-700">
                      The DAC recommends that the researcher consider the possibility of extending the analysis to include treatment side effects as an additional outcome measure, if such data is available in the dataset.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h5 className="font-medium">NCP Review</h5>
                </div>
                <div className="p-4 text-sm">
                  <div className="mb-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-green-100 text-green-800">APPROVED</Badge>
                      <span className="text-gray-500 text-xs ml-2">April 15, 2025</span>
                    </div>
                    <h6 className="font-medium mb-1">Review Notes:</h6>
                    <p className="text-gray-700">
                      The application meets all national compliance requirements and aligns with Irish research priorities in healthcare and genomics. The institutional affiliation provides appropriate oversight, and the researcher has demonstrated adequate understanding of the relevant regulations.
                    </p>
                  </div>
                  
                  <div>
                    <h6 className="font-medium mb-1">Resource Allocation:</h6>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                      <li>Access granted for 6 months as requested</li>
                      <li>Computational resources allocated for GWAS and machine learning analysis</li>
                      <li>Galaxy and DataSHIELD tools approved for use</li>
                    </ul>
                    
                    <h6 className="font-medium mb-1">Conditions:</h6>
                    <p className="text-gray-700">
                      The researcher is required to submit a midterm progress report after 3 months and must acknowledge the data source in all publications according to the provided guidelines.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-md p-4 text-sm">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <h5 className="font-medium text-green-800">Final Decision: Access Granted</h5>
                </div>
                <p className="text-green-700 mb-3">
                  Based on the positive reviews from both DAC and NCP committees, the researcher was granted access to the requested dataset within the Trusted Research Environment.
                </p>
                <p className="text-green-700">
                  Access Enabled: April 16, 2025<br />
                  Access Expiration: October 16, 2025
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ApprovalCommitteeInterface;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { ClipboardList, Send, Clock } from "lucide-react";

const DataRequestInterface = () => {
  const [applicationStep, setApplicationStep] = useState<"form" | "review" | "submitted">("form");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmitApplication = () => {
    if (applicationStep === "form") {
      setApplicationStep("review");
    } else if (applicationStep === "review" && termsAccepted) {
      setApplicationStep("submitted");
    }
  };

  const handleGoBack = () => {
    if (applicationStep === "review") {
      setApplicationStep("form");
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Data Request Process</h3>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className={`flex flex-col items-center p-3 rounded-lg ${applicationStep === "form" ? "bg-primary-50 border border-primary" : "bg-white border border-gray-200"} w-52`}>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center mb-2 ${applicationStep === "form" ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}>1</div>
            <h4 className="font-medium text-sm">Fill Application</h4>
            <p className="text-xs text-gray-500 text-center mt-1">Complete the data access request form</p>
          </div>
          
          <div className="text-gray-300 mx-2">→</div>
          
          <div className={`flex flex-col items-center p-3 rounded-lg ${applicationStep === "review" ? "bg-primary-50 border border-primary" : "bg-white border border-gray-200"} w-52`}>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center mb-2 ${applicationStep === "review" ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}>2</div>
            <h4 className="font-medium text-sm">Terms & Conditions</h4>
            <p className="text-xs text-gray-500 text-center mt-1">Review and agree to the dataset terms</p>
          </div>
          
          <div className="text-gray-300 mx-2">→</div>
          
          <div className={`flex flex-col items-center p-3 rounded-lg ${applicationStep === "submitted" ? "bg-primary-50 border border-primary" : "bg-white border border-gray-200"} w-52`}>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center mb-2 ${applicationStep === "submitted" ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}>3</div>
            <h4 className="font-medium text-sm">Submit Application</h4>
            <p className="text-xs text-gray-500 text-center mt-1">Send for review by approval committees</p>
          </div>
        </div>
      </div>
      
      <Card>
        <CardHeader className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex justify-between items-center">
          <h3 className="font-medium text-gray-700">REMS Data Access Request</h3>
          {applicationStep === "submitted" && (
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
              <Clock className="h-3 w-3 mr-1" />
              Under Review
            </Badge>
          )}
        </CardHeader>
        
        <CardContent className="p-4">
          {applicationStep === "form" && (
            <div className="space-y-6">
              <div className="bg-blue-50 text-blue-800 p-3 rounded-md text-sm flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">About Data Access Requests</p>
                  <p className="mt-1">All requests must be approved by the Data Access Committee (DAC) and National Contact Point (NCP) before access is granted.</p>
                </div>
              </div>
              
              <div>
                <div className="mb-5">
                  <h4 className="text-lg font-medium mb-2">Selected Dataset</h4>
                  <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium">Diabetes Type 2 Genomic Dataset</h5>
                      <Badge variant="outline" className="bg-green-50 border-green-200 text-green-800">High Quality</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Comprehensive genomic data from 1,500 patients with Type 2 Diabetes, including clinical parameters and treatment outcomes.</p>
                    <div className="flex flex-wrap mt-2 gap-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">Sample Size: 1500</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">Europe</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">2018-2022</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="research-title" className="block text-sm font-medium text-gray-700 mb-1">Research Title</label>
                    <input
                      type="text"
                      id="research-title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="e.g., Genomic Factors in Type 2 Diabetes Treatment Response"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="research-purpose" className="block text-sm font-medium text-gray-700 mb-1">Research Purpose</label>
                    <Textarea
                      id="research-purpose"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="Describe the specific research questions you aim to answer with this dataset"
                      rows={4}
                    />
                    <p className="mt-1 text-xs text-gray-500">Be specific about your research goals and methodology.</p>
                  </div>
                  
                  <div>
                    <label htmlFor="planned-analyses" className="block text-sm font-medium text-gray-700 mb-1">Planned Analyses</label>
                    <Textarea
                      id="planned-analyses"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="Describe the analyses you plan to perform on the data"
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="expected-duration" className="block text-sm font-medium text-gray-700 mb-1">Expected Duration of Access</label>
                    <select
                      id="expected-duration"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select duration</option>
                      <option value="3-months">3 months</option>
                      <option value="6-months">6 months</option>
                      <option value="1-year">1 year</option>
                      <option value="other">Other (please specify)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="publication-plans" className="block text-sm font-medium text-gray-700 mb-1">Publication Plans</label>
                    <Textarea
                      id="publication-plans"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="Describe how you plan to publish the results of your research"
                      rows={3}
                    />
                    <p className="mt-1 text-xs text-gray-500">Note: Results should be published in open access journals.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {applicationStep === "review" && (
            <div className="space-y-6">
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 text-sm text-amber-800">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Important Notice</h3>
                    <p className="mt-1">
                      Please review the terms and conditions carefully before submitting your application. 
                      You must agree to all terms to proceed with your data access request.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h4 className="font-medium">Terms and Conditions</h4>
                </div>
                <div className="p-4 max-h-60 overflow-y-auto text-sm">
                  <h5 className="font-semibold mb-2">1. Data Access and Usage</h5>
                  <p className="mb-3">By accessing this dataset, you agree to use the data solely for the research purpose described in your application. Any other use requires a new application and approval.</p>
                  
                  <h5 className="font-semibold mb-2">2. Confidentiality</h5>
                  <p className="mb-3">You must maintain the confidentiality of all data subjects. No attempt should be made to identify individuals from the dataset. Any inadvertent identification must be reported immediately.</p>
                  
                  <h5 className="font-semibold mb-2">3. Security Measures</h5>
                  <p className="mb-3">Data analysis must be conducted exclusively within the provided Trusted Research Environment (TRE). No raw data may be downloaded or transferred outside the secure environment.</p>
                  
                  <h5 className="font-semibold mb-2">4. Publication and Attribution</h5>
                  <p className="mb-3">All publications resulting from the use of this dataset must be open access and must acknowledge the data source according to the citation guidelines provided.</p>
                  
                  <h5 className="font-semibold mb-2">5. Duration of Access</h5>
                  <p className="mb-3">Access is granted for the approved period only. Extensions require a separate application. The system will automatically revoke access at the end of the approved period.</p>
                  
                  <h5 className="font-semibold mb-2">6. Auditing</h5>
                  <p className="mb-3">Your activities within the TRE may be monitored and audited to ensure compliance with these terms and conditions.</p>
                  
                  <h5 className="font-semibold mb-2">7. Violations</h5>
                  <p className="mb-3">Violations of these terms may result in immediate termination of access, possible reporting to your institution, and may affect future data access requests.</p>
                  
                  <h5 className="font-semibold mb-2">8. Legal Framework</h5>
                  <p>This agreement is governed by applicable data protection laws including GDPR and national regulations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Checkbox 
                  id="terms" 
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="ml-2 text-sm">
                  I have read and agree to the terms and conditions for accessing this dataset. I understand that my application will be reviewed by the relevant committees and that access is not guaranteed.
                </label>
              </div>
            </div>
          )}
          
          {applicationStep === "submitted" && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-green-800">Application Submitted Successfully</h3>
                <p className="text-sm text-green-700 mt-1">Your data access request has been received and is now under review.</p>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h4 className="font-medium">Application Status</h4>
                </div>
                
                <div className="p-4">
                  <div className="mb-6">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Review Process Timeline</h5>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      
                      <div className="relative flex justify-between">
                        <div className="flex flex-col items-center">
                          <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center text-sm z-10">1</div>
                          <div className="text-xs text-gray-500 mt-1">Submitted</div>
                          <div className="text-xs text-gray-400">Apr 14, 2025</div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-200 text-gray-700 rounded-full h-8 w-8 flex items-center justify-center text-sm z-10">2</div>
                          <div className="text-xs text-gray-500 mt-1">DAC Review</div>
                          <div className="text-xs text-gray-400">Pending</div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-200 text-gray-700 rounded-full h-8 w-8 flex items-center justify-center text-sm z-10">3</div>
                          <div className="text-xs text-gray-500 mt-1">NCP Review</div>
                          <div className="text-xs text-gray-400">Pending</div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-200 text-gray-700 rounded-full h-8 w-8 flex items-center justify-center text-sm z-10">4</div>
                          <div className="text-xs text-gray-500 mt-1">Decision</div>
                          <div className="text-xs text-gray-400">Pending</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex justify-between">
                        <h5 className="text-sm font-medium">Application ID</h5>
                        <span className="text-sm">DAR-2025-0042</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex justify-between">
                        <h5 className="text-sm font-medium">Dataset</h5>
                        <span className="text-sm">Diabetes Type 2 Genomic Dataset</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex justify-between">
                        <h5 className="text-sm font-medium">Current Status</h5>
                        <span className="text-sm">Awaiting DAC Review</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex justify-between">
                        <h5 className="text-sm font-medium">Estimated Review Time</h5>
                        <span className="text-sm">2-4 weeks</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-sm text-gray-600">
                    <p>You will receive email notifications when the status of your application changes. You can also check the status of your application here at any time.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="bg-gray-50 border-t border-gray-200 px-4 py-3 flex justify-between">
          {applicationStep === "form" && (
            <div className="flex justify-end w-full">
              <Button onClick={handleSubmitApplication}>
                Continue to Terms & Conditions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          )}
          
          {applicationStep === "review" && (
            <>
              <Button variant="outline" onClick={handleGoBack}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Form
              </Button>
              
              <Button 
                onClick={handleSubmitApplication} 
                disabled={!termsAccepted}
              >
                <Send className="h-4 w-4 mr-2" />
                Submit Application
              </Button>
            </>
          )}
          
          {applicationStep === "submitted" && (
            <Button variant="outline" className="w-full">
              <ClipboardList className="h-4 w-4 mr-2" />
              View My Applications
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default DataRequestInterface;
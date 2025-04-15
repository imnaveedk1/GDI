import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AlertCircle, Clock, X, Check, AlertTriangle, Calendar, Lock, FileText } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const AccessRevokedInterface = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Access Revocation Process</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-red-500">
              <div className="flex items-start mb-3">
                <div className="bg-red-100 text-red-800 p-2 rounded-full mr-3">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Violations Found</h4>
                  <p className="text-sm text-gray-600 mt-1">Access can be revoked at any stage if violations of terms and conditions are detected.</p>
                </div>
              </div>
              <div className="bg-red-50 p-2 rounded text-xs text-red-800">
                Access is immediately terminated and an investigation may follow.
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
              <div className="flex items-start mb-3">
                <div className="bg-green-100 text-green-800 p-2 rounded-full mr-3">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analysis Complete</h4>
                  <p className="text-sm text-gray-600 mt-1">Access is revoked when researchers complete their analysis and no longer need the data.</p>
                </div>
              </div>
              <div className="bg-green-50 p-2 rounded text-xs text-green-800">
                Researchers can finalize export of approved results before access ends.
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-amber-500">
              <div className="flex items-start mb-3">
                <div className="bg-amber-100 text-amber-800 p-2 rounded-full mr-3">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Time Expired</h4>
                  <p className="text-sm text-gray-600 mt-1">Access automatically expires after the approved time period has elapsed.</p>
                </div>
              </div>
              <div className="bg-amber-50 p-2 rounded text-xs text-amber-800">
                Extensions may be requested before the expiration date.
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Data Retention Timeline</h4>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center text-sm z-10">1</div>
                    <div className="text-sm text-gray-500 mt-2">Access Revoked</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center text-sm z-10">2</div>
                    <div className="text-sm text-gray-500 mt-2">Results Storage</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center text-sm z-10">3</div>
                    <div className="text-sm text-gray-500 mt-2">Data Archived</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center text-sm z-10">4</div>
                    <div className="text-sm text-gray-500 mt-2">Data Deleted</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md text-sm">
                <p className="mb-2 text-gray-700">
                  <span className="font-medium">Long-term Storage Policy:</span> Research results are stored for a defined period (typically up to 10 years) before being permanently deleted.
                </p>
                <p className="text-gray-700">
                  This retention period allows for verification of results, potential follow-up studies, and compliance with scientific data preservation standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Card>
        <CardHeader className="bg-gray-50 border-b border-gray-200 px-4 py-3">
          <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="overview">Access Status</TabsTrigger>
              <TabsTrigger value="extension">Request Extension</TabsTrigger>
              <TabsTrigger value="history">Access History</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        
        <CardContent className="p-4">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="flex justify-between flex-col md:flex-row gap-4">
                <div className="md:w-2/3">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 text-sm mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Clock className="h-5 w-5 text-amber-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-amber-800">Access Expiration Notice</h3>
                        <p className="mt-1 text-amber-700">
                          Your access to the Diabetes Type 2 Genomic Dataset will expire in 15 days. Please request an extension if you need more time for your analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h4 className="font-medium">Current Access Status</h4>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h5 className="font-medium text-gray-800">Dataset Access</h5>
                          <p className="text-sm text-gray-600">Diabetes Type 2 Genomic Dataset</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 flex items-center self-start">
                          <div className="h-2 w-2 rounded-full bg-green-500 mr-1.5 animate-pulse"></div>
                          Active
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-700">Access Time Remaining</div>
                        <div className="text-sm font-medium">15 days</div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                          <span>0 days</span>
                          <span>90 days</span>
                        </div>
                        <Progress value={83.3} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Start Date</span>
                            <span className="text-sm">Jan 15, 2025</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">End Date</span>
                            <span className="text-sm">Apr 29, 2025</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Access ID</span>
                            <span className="text-sm">AC-2025-0032</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Access Type</span>
                            <span className="text-sm">Research</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 text-blue-800 p-3 rounded-md text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm">
                              When access expires, you will no longer be able to analyze this dataset. Make sure to complete your research and export any necessary results before your access period ends.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/3">
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h4 className="font-medium">Quick Actions</h4>
                    </div>
                    <div className="p-4 space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Request Extension
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Lock className="h-4 w-4 mr-2" />
                        Voluntarily End Access
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Export Results
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-md overflow-hidden mt-4">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h4 className="font-medium">Access Revocation Info</h4>
                    </div>
                    <div className="p-4 text-sm space-y-3">
                      <p>When your access is revoked:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>You can no longer log into the TRE for this dataset</li>
                        <li>Any pending export requests will still be processed</li>
                        <li>Your analysis environment will be archived</li>
                        <li>Results will be retained for up to 10 years</li>
                        <li>You may request a new access period if needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "extension" && (
            <div className="space-y-6">
              <div className="bg-blue-50 text-blue-800 p-3 rounded-md text-sm mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">About Access Extensions</p>
                    <p className="mt-1">
                      If you need more time to complete your research, you can request an extension of your access period. Extension requests should be submitted at least 14 days before your current access expires.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h4 className="font-medium">Request Access Extension</h4>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <label htmlFor="current-status" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Access Status
                    </label>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex justify-between items-center">
                        <div className="text-sm">
                          <span className="font-medium">Dataset:</span> Diabetes Type 2 Genomic Dataset
                        </div>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      <div className="flex justify-between items-center mt-2 text-sm">
                        <div><span className="font-medium">Current End Date:</span> Apr 29, 2025</div>
                        <div>15 days remaining</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="extension-duration" className="block text-sm font-medium text-gray-700 mb-1">
                      Extension Duration
                    </label>
                    <select
                      id="extension-duration"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select duration</option>
                      <option value="30-days">30 days</option>
                      <option value="60-days">60 days</option>
                      <option value="90-days">90 days</option>
                      <option value="other">Other (please specify)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="extension-reason" className="block text-sm font-medium text-gray-700 mb-1">
                      Reason for Extension
                    </label>
                    <textarea
                      id="extension-reason"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      rows={4}
                      placeholder="Please explain why you need additional time to complete your research"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="research-progress" className="block text-sm font-medium text-gray-700 mb-1">
                      Research Progress Update
                    </label>
                    <textarea
                      id="research-progress"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      rows={4}
                      placeholder="Provide a summary of your research progress so far and what remains to be completed"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="extension-plan" className="block text-sm font-medium text-gray-700 mb-1">
                      Work Plan for Extended Period
                    </label>
                    <textarea
                      id="extension-plan"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      rows={4}
                      placeholder="Outline your specific research activities for the requested extension period"
                    ></textarea>
                  </div>
                  
                  <div className="bg-amber-50 p-3 rounded-md text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-amber-800">Important Information</p>
                        <p className="mt-1 text-amber-700">
                          Extension requests are not automatically granted. Each request is reviewed based on research progress, justification, and resource availability. You will be notified of the decision within 5-7 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "history" && (
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h4 className="font-medium">Access History</h4>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <div>
                        <h5 className="font-medium text-gray-800">Diabetes Type 2 Genomic Dataset</h5>
                        <p className="text-sm text-gray-600">Access ID: AC-2025-0032</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 flex items-center self-start">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-1.5 animate-pulse"></div>
                        Active
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div><span className="font-medium">Start Date:</span> Jan 15, 2025</div>
                      <div><span className="font-medium">End Date:</span> Apr 29, 2025</div>
                      <div><span className="font-medium">Duration:</span> 3 months (90 days)</div>
                      <div><span className="font-medium">Access Type:</span> Research</div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <h6 className="text-sm font-medium mb-2">Access Timeline</h6>
                      <div className="space-y-3">
                        <div className="flex">
                          <div className="flex-shrink-0 w-12 text-xs text-gray-500">Jan 15</div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                            <div className="text-sm">Access granted</div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 w-12 text-xs text-gray-500">Feb 20</div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 bg-amber-500 rounded-full mr-2"></div>
                            <div className="text-sm">Usage reminder sent (45 days remaining)</div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 w-12 text-xs text-gray-500">Apr 14</div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 bg-amber-500 rounded-full mr-2"></div>
                            <div className="text-sm">Expiration warning (15 days remaining)</div>
                          </div>
                        </div>
                        <div className="flex text-gray-400">
                          <div className="flex-shrink-0 w-12 text-xs">Apr 29</div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                            <div className="text-sm">Scheduled access expiration</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <div>
                        <h5 className="font-medium text-gray-800">Cancer Genomics Collaborative Study</h5>
                        <p className="text-sm text-gray-600">Access ID: AC-2024-0128</p>
                      </div>
                      <Badge className="bg-red-100 text-red-800 flex items-center self-start">
                        <X className="h-3 w-3 mr-1" />
                        Revoked
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div><span className="font-medium">Start Date:</span> Oct 10, 2024</div>
                      <div><span className="font-medium">End Date:</span> Dec 12, 2024</div>
                      <div><span className="font-medium">Duration:</span> 2 months (63 days)</div>
                      <div><span className="font-medium">Access Type:</span> Research</div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <h6 className="text-sm font-medium mb-2">Access Timeline</h6>
                      <div className="space-y-3">
                        <div className="flex">
                          <div className="flex-shrink-0 w-12 text-xs text-gray-500">Oct 10</div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                            <div className="text-sm">Access granted</div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 w-12 text-xs text-gray-500">Dec 02</div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                            <div className="text-sm">Research completed, results exported</div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 w-12 text-xs text-gray-500">Dec 12</div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 bg-red-500 rounded-full mr-2"></div>
                            <div className="text-sm">Access voluntarily ended by researcher</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h4 className="font-medium">Data Retention Status</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-3 rounded-md">
                        <h5 className="text-sm font-medium text-blue-800 mb-1">Results Storage</h5>
                        <p className="text-xs text-blue-700">
                          Approved results from completed analyses are securely stored for future reference and potential follow-up studies.
                        </p>
                        <div className="mt-2 text-xs font-medium text-blue-800">
                          Storage Period: 10 years
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 p-3 rounded-md">
                        <h5 className="text-sm font-medium text-amber-800 mb-1">Data Archiving</h5>
                        <p className="text-xs text-amber-700">
                          Your analysis environment is archived after access revocation, allowing for potential access restoration if needed.
                        </p>
                        <div className="mt-2 text-xs font-medium text-amber-800">
                          Archival Period: 2 years
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-700">
                      <p className="mb-2">
                        <span className="font-medium">Note about Data Retention:</span> All project data, including analysis environments and exported results, will be permanently deleted after the retention period ends. It is recommended that you maintain your own copies of exported results in accordance with your institution's data management policies.
                      </p>
                      <p>
                        If you require access to archived data or have questions about the retention policy, please contact the data governance team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        
        {activeTab === "extension" && (
          <CardFooter className="bg-gray-50 border-t border-gray-200 px-4 py-3 flex justify-end">
            <Button>
              Submit Extension Request
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default AccessRevokedInterface;
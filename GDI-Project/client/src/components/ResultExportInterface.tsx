import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  AlertCircle, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  FileOutput, 
  Shield, 
  FileCheck,
  Download,
  Eye
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ResultExportInterface = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [exportType, setExportType] = useState<string | null>(null);
  const [exportStatus, setExportStatus] = useState<"preparing" | "review" | "approved" | null>(null);
  
  const handleExportRequest = () => {
    if (exportType) {
      setExportStatus("preparing");
      
      // Simulate export request process
      setTimeout(() => {
        setExportStatus("review");
      }, 1500);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Result Export Process</h3>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-8 relative z-10">
            {/* Store Results */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="md:w-1/2 md:text-right pr-4 md:pr-8">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 inline-block">
                  <h4 className="font-semibold text-gray-800">Store Results Securely</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Analysis results are saved in a secure storage area within the TRE environment.
                  </p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">First Step</Badge>
                </div>
              </div>
              
              <div className="bg-primary rounded-full p-3 flex items-center justify-center z-20">
                <span className="text-white font-bold">1</span>
              </div>
              
              <div className="md:w-1/2 pl-4 md:pl-8">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-gray-700">Results remain on the node</span>
                  </div>
                  <p className="text-xs text-gray-500 pl-7">
                    All analysis outputs are initially stored within the TRE's secure storage area, maintaining data privacy.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Flow arrow */}
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            {/* Apply for Export */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="md:w-1/2 md:text-right pr-4 md:pr-8">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 inline-block">
                  <h4 className="font-semibold text-gray-800">Submit Export Application</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Request permission to export your analysis results from the TRE environment.
                  </p>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Review Process</Badge>
                </div>
              </div>
              
              <div className="bg-primary rounded-full p-3 flex items-center justify-center z-20">
                <span className="text-white font-bold">2</span>
              </div>
              
              <div className="md:w-1/2 pl-4 md:pl-8">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <FileOutput className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-gray-700">Complete export application</span>
                  </div>
                  <p className="text-xs text-gray-500 pl-7">
                    Provide details about how the exported results will be used, published, and explain why the export is necessary.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Flow arrow */}
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            {/* Compliance Check */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="md:w-1/2 md:text-right pr-4 md:pr-8">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 inline-block">
                  <h4 className="font-semibold text-gray-800">Compliance Verification</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    System validates that no raw data is included in the export package.
                  </p>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Automated + Manual</Badge>
                </div>
              </div>
              
              <div className="bg-primary rounded-full p-3 flex items-center justify-center z-20">
                <span className="text-white font-bold">3</span>
              </div>
              
              <div className="md:w-1/2 pl-4 md:pl-8">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <FileCheck className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-gray-700">Automated checks run first</span>
                  </div>
                  <p className="text-xs text-gray-500 pl-7">
                    System scans for patterns that might indicate raw data. Sensitive results may require additional manual review.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Flow arrow */}
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            {/* Export Approval */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="md:w-1/2 md:text-right pr-4 md:pr-8">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 inline-block">
                  <h4 className="font-semibold text-gray-800">Export Approval</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Upon approval, results are made available for secure download.
                  </p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Final Step</Badge>
                </div>
              </div>
              
              <div className="bg-primary rounded-full p-3 flex items-center justify-center z-20">
                <span className="text-white font-bold">4</span>
              </div>
              
              <div className="md:w-1/2 pl-4 md:pl-8">
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    Once approved, analysis results can be securely downloaded through the portal. Exported results should be:
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-gray-600 pl-1">
                    <li>Published in open access journals</li>
                    <li>Properly cited according to guidelines</li>
                    <li>Used only for the stated purpose</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Card>
        <CardHeader className="bg-gray-50 border-b border-gray-200 px-4 py-3">
          <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="overview">Export Overview</TabsTrigger>
              <TabsTrigger value="request">New Export Request</TabsTrigger>
              <TabsTrigger value="history">Export History</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        
        <CardContent className="p-4">
          {activeTab === "overview" && (
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
                      The export process is designed to ensure that only properly vetted analysis results, not raw data, can be exported from the system.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Export Guidelines</h4>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h5 className="font-medium">Allowable Export Types</h5>
                    </div>
                    <div className="p-3">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Type</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Approval Level</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Statistical Summaries</TableCell>
                            <TableCell className="text-sm">Aggregated statistics, p-values, confidence intervals</TableCell>
                            <TableCell>
                              <Badge className="bg-green-100 text-green-800">Automated</Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Visualizations</TableCell>
                            <TableCell className="text-sm">Charts, graphs, plots (without individual data points)</TableCell>
                            <TableCell>
                              <Badge className="bg-green-100 text-green-800">Automated</Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Model Parameters</TableCell>
                            <TableCell className="text-sm">Trained model coefficients, weights, hyperparameters</TableCell>
                            <TableCell>
                              <Badge className="bg-green-100 text-green-800">Automated</Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Analysis Code</TableCell>
                            <TableCell className="text-sm">Scripts and notebooks (without embedded data)</TableCell>
                            <TableCell>
                              <Badge className="bg-amber-100 text-amber-800">Manual Review</Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Research Publications</TableCell>
                            <TableCell className="text-sm">Draft papers, manuscripts, poster content</TableCell>
                            <TableCell>
                              <Badge className="bg-amber-100 text-amber-800">Manual Review</Badge>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h5 className="font-medium">Prohibited Export Content</h5>
                    </div>
                    <div className="p-3">
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                        <li>Raw individual-level data or datasets</li>
                        <li>Intermediate files containing raw or minimally processed data</li>
                        <li>Results that could enable re-identification of individuals</li>
                        <li>Queries or outputs with small cell counts (typically below threshold of 5)</li>
                        <li>Analysis outputs not relevant to the approved research purpose</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h5 className="font-medium">Publication Requirements</h5>
                    </div>
                    <div className="p-3">
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                        <li>Results must be published in open access journals or conferences</li>
                        <li>Proper citation of the dataset according to provided guidelines</li>
                        <li>Acknowledgment of the data governance framework in publications</li>
                        <li>Pre-publication manuscripts may be reviewed to ensure compliance</li>
                        <li>Researchers are encouraged to share code and methods for reproducibility</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "request" && (
            <div className="space-y-6">
              {!exportStatus && (
                <>
                  <div className="bg-amber-50 text-amber-800 p-3 rounded-md text-sm mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">Important Notice</p>
                        <p className="mt-1">
                          Export requests are carefully reviewed to ensure no raw data leaves the system.
                          Please be specific about how the exported results will be used in your research.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3">New Export Request</h4>
                    
                    <div className="space-y-5">
                      <div>
                        <Label htmlFor="export-title" className="block text-sm font-medium text-gray-700 mb-1">
                          Export Title
                        </Label>
                        <Input
                          id="export-title"
                          placeholder="e.g., Statistical Analysis of Treatment Response Predictors"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <Label className="block text-sm font-medium text-gray-700 mb-3">
                          Export Type
                        </Label>
                        <RadioGroup className="space-y-3" value={exportType || ""} onValueChange={setExportType}>
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="statistics" id="statistics" className="mt-1" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="statistics" className="font-medium">Statistical Summaries</Label>
                              <p className="text-sm text-gray-500">
                                Aggregated statistics, p-values, confidence intervals, correlation coefficients
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="visualizations" id="visualizations" className="mt-1" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="visualizations" className="font-medium">Visualizations & Figures</Label>
                              <p className="text-sm text-gray-500">
                                Charts, graphs, plots without individual data points (e.g., scatter plots, heatmaps)
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="model" id="model" className="mt-1" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="model" className="font-medium">Model Parameters</Label>
                              <p className="text-sm text-gray-500">
                                Trained model coefficients, weights, hyperparameters (not the input data)
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="publication" id="publication" className="mt-1" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="publication" className="font-medium">Publication Draft</Label>
                              <p className="text-sm text-gray-500">
                                Manuscript, paper, or research report prepared within the TRE
                              </p>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div>
                        <Label htmlFor="export-description" className="block text-sm font-medium text-gray-700 mb-1">
                          Description of Content
                        </Label>
                        <Textarea
                          id="export-description"
                          placeholder="Describe the specific content you wish to export"
                          className="w-full"
                          rows={3}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="export-justification" className="block text-sm font-medium text-gray-700 mb-1">
                          Justification for Export
                        </Label>
                        <Textarea
                          id="export-justification"
                          placeholder="Explain why this export is necessary for your research"
                          className="w-full"
                          rows={3}
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          Clearly state how this export relates to your approved research purpose.
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="publication-plans" className="block text-sm font-medium text-gray-700 mb-1">
                          Publication Plans
                        </Label>
                        <Textarea
                          id="publication-plans"
                          placeholder="Describe where and how you plan to publish these results"
                          className="w-full"
                          rows={3}
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          Note: Results should be published in open access journals or conferences.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
              
              {exportStatus === "preparing" && (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Preparing Your Export Request</h4>
                  <p className="text-sm text-gray-500 max-w-md mx-auto">
                    We're checking your export package for compliance with our data governance policies.
                    This may take a moment...
                  </p>
                </div>
              )}
              
              {exportStatus === "review" && (
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium text-green-800">Export Request Submitted</h3>
                    <p className="text-sm text-green-700 mt-1">
                      Your export request has been received and is under review.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <h4 className="font-medium">Export Request Status</h4>
                    </div>
                    <div className="p-4">
                      <div className="mb-6">
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Review Process</h5>
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
                              <div className="bg-amber-500 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm z-10">2</div>
                              <div className="text-xs text-gray-500 mt-1">Under Review</div>
                              <div className="text-xs text-gray-400">In Progress</div>
                            </div>
                            
                            <div className="flex flex-col items-center">
                              <div className="bg-gray-200 text-gray-700 rounded-full h-8 w-8 flex items-center justify-center text-sm z-10">3</div>
                              <div className="text-xs text-gray-500 mt-1">Decision</div>
                              <div className="text-xs text-gray-400">Pending</div>
                            </div>
                            
                            <div className="flex flex-col items-center">
                              <div className="bg-gray-200 text-gray-700 rounded-full h-8 w-8 flex items-center justify-center text-sm z-10">4</div>
                              <div className="text-xs text-gray-500 mt-1">Download</div>
                              <div className="text-xs text-gray-400">Pending</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="flex justify-between">
                            <h5 className="text-sm font-medium">Request ID</h5>
                            <span className="text-sm">EXP-2025-0018</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="flex justify-between">
                            <h5 className="text-sm font-medium">Export Type</h5>
                            <span className="text-sm">{exportType === "statistics" ? "Statistical Summaries" : 
                                                      exportType === "visualizations" ? "Visualizations & Figures" :
                                                      exportType === "model" ? "Model Parameters" :
                                                      "Publication Draft"}</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="flex justify-between">
                            <h5 className="text-sm font-medium">Current Status</h5>
                            <span className="text-sm flex items-center">
                              <Clock className="h-4 w-4 text-amber-500 mr-1" />
                              Under Review
                            </span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="flex justify-between">
                            <h5 className="text-sm font-medium">Estimated Completion</h5>
                            <span className="text-sm">1-3 business days</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 text-sm text-gray-600">
                        <p>You will receive email notifications when the status of your export request changes. You can also check the status here at any time.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === "history" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-3">Recent Export Requests</h4>
                
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Request ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">EXP-2025-0017</TableCell>
                        <TableCell>Apr 10, 2025</TableCell>
                        <TableCell>Statistical Summaries</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 flex items-center w-fit">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Approved
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="h-8 px-2">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 px-2">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">EXP-2025-0016</TableCell>
                        <TableCell>Apr 7, 2025</TableCell>
                        <TableCell>Visualizations</TableCell>
                        <TableCell>
                          <Badge className="bg-amber-100 text-amber-800 flex items-center w-fit">
                            <Clock className="h-3 w-3 mr-1" />
                            Under Review
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="h-8 px-2" disabled>
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 px-2">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">EXP-2025-0015</TableCell>
                        <TableCell>Apr 3, 2025</TableCell>
                        <TableCell>Publication Draft</TableCell>
                        <TableCell>
                          <Badge className="bg-red-100 text-red-800 flex items-center w-fit">
                            <XCircle className="h-3 w-3 mr-1" />
                            Rejected
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="h-8 px-2" disabled>
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 px-2">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">EXP-2025-0014</TableCell>
                        <TableCell>Mar 28, 2025</TableCell>
                        <TableCell>Model Parameters</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 flex items-center w-fit">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Approved
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="h-8 px-2">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 px-2">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <h5 className="font-medium mb-2">Common Rejection Reasons</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Inclusion of individual-level data or identifiable information</li>
                  <li>Insufficient justification for the export</li>
                  <li>Export content not aligned with approved research purpose</li>
                  <li>Small cell counts that risk re-identification</li>
                  <li>Missing or incomplete publication plans</li>
                </ul>
              </div>
            </div>
          )}
        </CardContent>
        
        {activeTab === "request" && !exportStatus && (
          <CardFooter className="bg-gray-50 border-t border-gray-200 px-4 py-3 flex justify-end">
            <Button onClick={handleExportRequest} disabled={!exportType}>
              <FileOutput className="h-4 w-4 mr-2" />
              Submit Export Request
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ResultExportInterface;
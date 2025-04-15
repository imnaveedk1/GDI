import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, Database, GitBranch, BarChart, RadioTower, PieChart, Server } from "lucide-react";

const DataAnalysisInterface = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Trusted Research Environment (TRE)</h3>
        <div className="relative">
          <div className="flex flex-col space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 flex items-center">
                <Server className="h-5 w-5 mr-2 text-primary" />
                About Trusted Research Environments
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                A Trusted Research Environment (TRE) is a secure computing infrastructure that enables researchers to work with sensitive data while ensuring appropriate controls and governance are in place.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-md p-3">
                  <h5 className="font-medium text-sm mb-1 text-primary-800">Key Principles:</h5>
                  <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                    <li>The data stays securely on the node</li>
                    <li>Researchers bring methods to the data</li>
                    <li>Raw data is not downloadable</li>
                    <li>All activity is monitored and audited</li>
                    <li>Strict export controls for results</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-md p-3">
                  <h5 className="font-medium text-sm mb-1 text-blue-800">Benefits:</h5>
                  <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                    <li>Enhanced data security and privacy</li>
                    <li>Standardized analytical environment</li>
                    <li>Access to specialized research tools</li>
                    <li>Collaboration capabilities</li>
                    <li>Transparent governance</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Available Analysis Tools</h4>
              <p className="text-sm text-gray-600 mb-4">
                Select from the following tools to analyze your approved dataset within the TRE environment:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div 
                  className={`rounded-lg p-4 border-2 cursor-pointer transition-all ${selectedTool === 'galaxy' ? 'border-primary bg-primary-50' : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'}`}
                  onClick={() => setSelectedTool('galaxy')}
                >
                  <div className="flex items-center mb-2">
                    <div className="bg-indigo-100 text-indigo-800 rounded-full p-2 mr-2">
                      <GitBranch className="h-5 w-5" />
                    </div>
                    <h5 className="font-medium">Galaxy</h5>
                  </div>
                  <p className="text-xs text-gray-600">
                    Web-based platform for accessible, reproducible, and transparent computational research.
                  </p>
                  <Badge className="mt-2 bg-indigo-50 text-indigo-800 hover:bg-indigo-100">Genomics</Badge>
                </div>
                
                <div 
                  className={`rounded-lg p-4 border-2 cursor-pointer transition-all ${selectedTool === 'datashield' ? 'border-primary bg-primary-50' : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'}`}
                  onClick={() => setSelectedTool('datashield')}
                >
                  <div className="flex items-center mb-2">
                    <div className="bg-green-100 text-green-800 rounded-full p-2 mr-2">
                      <BarChart className="h-5 w-5" />
                    </div>
                    <h5 className="font-medium">DataSHIELD</h5>
                  </div>
                  <p className="text-xs text-gray-600">
                    Statistical analysis of sensitive data without exposing raw individual-level data.
                  </p>
                  <Badge className="mt-2 bg-green-50 text-green-800 hover:bg-green-100">Statistics</Badge>
                </div>
                
                <div 
                  className={`rounded-lg p-4 border-2 cursor-pointer transition-all ${selectedTool === 'flower' ? 'border-primary bg-primary-50' : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'}`}
                  onClick={() => setSelectedTool('flower')}
                >
                  <div className="flex items-center mb-2">
                    <div className="bg-rose-100 text-rose-800 rounded-full p-2 mr-2">
                      <RadioTower className="h-5 w-5" />
                    </div>
                    <h5 className="font-medium">Flower</h5>
                  </div>
                  <p className="text-xs text-gray-600">
                    Federated learning framework that enables machine learning on distributed datasets.
                  </p>
                  <Badge className="mt-2 bg-rose-50 text-rose-800 hover:bg-rose-100">ML/AI</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Card>
        <CardHeader className="bg-gray-50 border-b border-gray-200 px-4 py-3">
          <h3 className="font-medium text-gray-700">Data Analysis Interface</h3>
        </CardHeader>
        
        <CardContent className="p-4">
          {!selectedTool && (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Database className="h-8 w-8 text-gray-500" />
              </div>
              <h4 className="text-lg font-medium text-gray-700 mb-2">Select an Analysis Tool</h4>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Choose a tool from the options above to begin analyzing your dataset. Each tool provides different capabilities for your research needs.
              </p>
            </div>
          )}
          
          {selectedTool === 'galaxy' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-indigo-100 text-indigo-800 rounded-full p-2 mr-3">
                    <GitBranch className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Galaxy Workbench</h4>
                    <p className="text-sm text-gray-500">Perform complex genomic analyses with a user-friendly interface</p>
                  </div>
                </div>
                <Badge className="bg-indigo-50 text-indigo-800">Active Tool</Badge>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Available Workflows</h5>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border border-gray-200 hover:border-indigo-200 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <h6 className="font-medium">Genomic Variant Analysis Pipeline</h6>
                      <Badge variant="outline">Popular</Badge>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Identifies genomic variants associated with phenotypic traits or disease conditions.
                    </p>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-gray-200 hover:border-indigo-200 cursor-pointer">
                    <h6 className="font-medium">RNA-Seq Expression Analysis</h6>
                    <p className="text-xs text-gray-600 mt-1">
                      Quantifies gene expression levels and identifies differentially expressed genes.
                    </p>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-gray-200 hover:border-indigo-200 cursor-pointer">
                    <h6 className="font-medium">Genome-Wide Association Study (GWAS)</h6>
                    <p className="text-xs text-gray-600 mt-1">
                      Links genetic variants to specific traits or disease phenotypes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h5 className="font-medium">Galaxy Workflow Editor</h5>
                </div>
                <div className="p-4 bg-gray-900 text-gray-300 font-mono text-sm h-60 overflow-y-auto">
                  <span className="text-blue-400">// Galaxy workflow environment simulation</span><br />
                  <span className="text-green-400">// Connected to: Diabetes Type 2 Genomic Dataset</span><br />
                  <br />
                  <span>Loading modules...</span><br />
                  <span className="text-green-400">✓</span> <span>FASTQ Quality Control</span><br />
                  <span className="text-green-400">✓</span> <span>Alignment Tools</span><br />
                  <span className="text-green-400">✓</span> <span>Variant Calling</span><br />
                  <span className="text-green-400">✓</span> <span>Statistical Analysis</span><br />
                  <span className="text-green-400">✓</span> <span>Visualization</span><br />
                  <br />
                  <span className="text-yellow-400">{`>`}</span> <span>Initializing workflow canvas...</span><br />
                  <span className="text-yellow-400">{`>`}</span> <span>Configure your analysis pipeline by connecting modules</span><br />
                  <span className="text-yellow-400">{`>`}</span> <span>All operations performed on the node, no data will be transferred</span><br />
                  <br />
                  <span className="text-blue-400">// Usage example: </span><br />
                  <span>fastqc --input sample_data.fastq --output quality_report</span><br />
                  <span>bwa mem -t 4 reference.fa sample_data.fastq {`>`} aligned.sam</span><br />
                  <span>samtools view -bS aligned.sam {`>`} aligned.bam</span><br />
                  <span>gatk HaplotypeCaller -R reference.fa -I aligned.bam -O variants.vcf</span><br />
                </div>
              </div>
            </div>
          )}
          
          {selectedTool === 'datashield' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-800 rounded-full p-2 mr-3">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">DataSHIELD Console</h4>
                    <p className="text-sm text-gray-500">Statistical analysis without exposing individual-level data</p>
                  </div>
                </div>
                <Badge className="bg-green-50 text-green-800">Active Tool</Badge>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Available Analysis Methods</h5>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Method</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">ds.summary()</TableCell>
                      <TableCell>Descriptive</TableCell>
                      <TableCell className="text-sm">Non-disclosive summary statistics</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ds.glm()</TableCell>
                      <TableCell>Statistical</TableCell>
                      <TableCell className="text-sm">Generalized linear models</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ds.heatmap()</TableCell>
                      <TableCell>Visualization</TableCell>
                      <TableCell className="text-sm">Privacy-preserving heatmaps</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ds.lexis()</TableCell>
                      <TableCell>Epidemiological</TableCell>
                      <TableCell className="text-sm">Survival analysis functions</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                  <h5 className="font-medium">R Console</h5>
                  <Badge variant="outline" className="text-xs">Privacy-Preserving</Badge>
                </div>
                <div className="p-4 bg-white font-mono text-sm h-60 overflow-y-auto border-b border-gray-200">
                  <div className="text-green-600"># Connect to the Diabetes dataset</div>
                  <div className="mb-2">library(dsBaseClient)</div>
                  <div className="mb-2">{"logindata <- data.frame("}</div>
                  <div className="mb-2">{"  server=\"tre_node\","}</div>
                  <div className="mb-2">{"  url=\"https://analysis.tre.example/\","}</div>
                  <div className="mb-2">{"  table=\"diabetes_genomic_data\","}</div>
                  <div className="mb-2">{"  user=\"researcher_id\","}</div>
                  <div className="mb-2">{"  password=\"********\""}</div>
                  <div className="mb-3">{")"}</div>
                  
                  <div className="mb-2">{"connections <- datashield.login(logins=logindata)"}</div>
                  
                  <div className="text-green-600 mt-3"># Explore variables available in dataset</div>
                  <div className="mb-3">ds.ls(connections)</div>
                  
                  <div className="text-gray-500"># Output:</div>
                  <div className="mb-3 bg-gray-50 p-1 rounded">$tre_node<br />
                  [1] "age" "bmi" "gender" "hba1c" "treatment_response" "genetic_markers"</div>
                  
                  <div className="text-green-600"># Create summary statistics</div>
                  <div>ds.summary(x="hba1c", datasources=connections)</div>
                </div>
                
                <div className="p-3 bg-gray-50">
                  <div className="text-xs text-gray-600">
                    <span className="font-semibold">Note:</span> All operations are executed on the server. Only aggregate results are returned to the client to maintain privacy.
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {selectedTool === 'flower' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-rose-100 text-rose-800 rounded-full p-2 mr-3">
                    <RadioTower className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Flower Federated Learning</h4>
                    <p className="text-sm text-gray-500">Apply machine learning models without exposing raw data</p>
                  </div>
                </div>
                <Badge className="bg-rose-50 text-rose-800">Active Tool</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">ML Model Templates</h5>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border border-gray-200 hover:border-rose-200 cursor-pointer">
                      <h6 className="font-medium">Predictive Classification</h6>
                      <p className="text-xs text-gray-600 mt-1">
                        Predict treatment response based on genomic markers and clinical variables.
                      </p>
                      <div className="mt-1 text-xs text-gray-500">Models: Random Forest, XGBoost, Neural Networks</div>
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-gray-200 hover:border-rose-200 cursor-pointer">
                      <h6 className="font-medium">Clustering Analysis</h6>
                      <p className="text-xs text-gray-600 mt-1">
                        Identify patient subgroups with similar genetic and clinical profiles.
                      </p>
                      <div className="mt-1 text-xs text-gray-500">Models: K-Means, DBSCAN, Hierarchical Clustering</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Federated Learning Benefits</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500 mr-1.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Privacy Preservation: Raw data never leaves TRE environment</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500 mr-1.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Model Training: Only model parameters are exchanged</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500 mr-1.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Distributed Learning: Models can learn from multiple data sources</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500 mr-1.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Advanced AI: Access to state-of-the-art machine learning techniques</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h5 className="font-medium">Flower Client Interface</h5>
                </div>
                <div className="p-4 bg-gray-900 text-gray-300 font-mono text-sm h-60 overflow-y-auto">
                  <span className="text-blue-400">import</span> flwr <span className="text-blue-400">as</span> fl<br />
                  <span className="text-blue-400">import</span> tensorflow <span className="text-blue-400">as</span> tf<br />
                  <span className="text-blue-400">import</span> numpy <span className="text-blue-400">as</span> np<br />
                  <br />
                  <span className="text-green-400"># Load dataset from TRE storage (no data leaves the environment)</span><br />
                  <span>dataset = tre.load_dataset("diabetes_genomic_data")</span><br />
                  <span>X_train, y_train = dataset.get_features(), dataset.get_labels()</span><br />
                  <br />
                  <span className="text-green-400"># Define model</span><br />
                  <span>model = tf.keras.Sequential([</span><br />
                  <span>    tf.keras.layers.Dense(128, activation="relu"),</span><br />
                  <span>    tf.keras.layers.Dropout(0.2),</span><br />
                  <span>    tf.keras.layers.Dense(64, activation="relu"),</span><br />
                  <span>    tf.keras.layers.Dense(1, activation="sigmoid")</span><br />
                  <span>])</span><br />
                  <br />
                  <span>model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])</span><br />
                  <br />
                  <span className="text-green-400"># Define Flower client</span><br />
                  <span>class DiabetesClient(fl.client.NumPyClient):</span><br />
                  <span>    def get_parameters(self, config):</span><br />
                  <span>        return model.get_weights()</span><br />
                  <span>    </span><br />
                  <span>    def fit(self, parameters, config):</span><br />
                  <span>        model.set_weights(parameters)</span><br />
                  <span>        model.fit(X_train, y_train, epochs=5, batch_size=32)</span><br />
                  <span>        return model.get_weights(), len(X_train), {}</span><br />
                  <br />
                  <span className="text-green-400"># Start Flower client</span><br />
                  <span>fl.client.start_numpy_client(server_address="tre.server:8080", client=DiabetesClient())</span><br />
                </div>
              </div>
            </div>
          )}
        </CardContent>
        
        {selectedTool && (
          <CardFooter className="bg-gray-50 border-t border-gray-200 px-4 py-3 flex justify-between">
            <Button variant="outline" onClick={() => setSelectedTool(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Tool Selection
            </Button>
            
            <Button>
              Start Analysis Session
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </CardFooter>
        )}
      </Card>
      
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 text-sm">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-amber-500" />
          </div>
          <div className="ml-3">
            <h3 className="font-medium text-amber-800">Important TRE Security Reminder</h3>
            <p className="mt-1 text-amber-700">
              All activities within the TRE are logged and monitored. Raw data may not be downloaded from the environment.
              Any attempt to extract unauthorized data will result in immediate access revocation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisInterface;
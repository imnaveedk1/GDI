import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AuthenticationInterface = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Authentication Options</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="relative bg-white rounded-lg shadow-sm p-5 flex flex-col items-center w-64 border-t-4 border-primary">
            <h4 className="font-semibold text-lg mb-2">Life Science Login (LS)</h4>
            <p className="text-sm text-gray-600 mb-4 text-center">The preferred authentication method for researchers and institutions.</p>
            <div className="text-sm text-gray-700 font-medium">Available Now</div>
          </div>
          
          <div className="relative bg-white rounded-lg shadow-sm p-5 flex flex-col items-center w-64 border-t-4 border-gray-400">
            <div className="absolute -top-2 -right-2 bg-amber-100 text-amber-800 rounded-full px-2 py-1 text-xs font-medium">Coming Soon</div>
            <h4 className="font-semibold text-lg mb-2">eIDAS</h4>
            <p className="text-sm text-gray-600 mb-4 text-center">European identification mechanism for cross-border authentication.</p>
            <div className="text-sm text-gray-400 font-medium">In Development</div>
          </div>
        </div>
      </div>
      
      <Card>
        <CardHeader className="bg-gray-50 border-b border-gray-200 px-4 py-3">
          <h3 className="font-medium text-gray-700">Life Science Login</h3>
        </CardHeader>
        
        <CardContent className="p-4">
          <Tabs defaultValue="lsaccount">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="lsaccount">LS Account</TabsTrigger>
              <TabsTrigger value="institutional">Institutional</TabsTrigger>
              <TabsTrigger value="thirdparty">Third-Party</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lsaccount" className="p-4">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="inline-block bg-primary-50 rounded-full p-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Life Science Account Login</h4>
                  <p className="text-sm text-gray-600 mb-4">Sign in with your dedicated Life Science account credentials.</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        id="remember-me" 
                        type="checkbox" 
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
                    </div>
                    
                    <a href="#" className="text-sm font-medium text-primary hover:text-primary-800">Forgot password?</a>
                  </div>
                  
                  <Button className="w-full">Sign In</Button>
                  
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <a href="#" className="text-sm font-medium text-primary hover:text-primary-800">Register now</a>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="institutional" className="p-4">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="inline-block bg-primary-50 rounded-full p-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Institutional Login</h4>
                  <p className="text-sm text-gray-600 mb-4">Select your institution to sign in with your institutional credentials.</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">Search for your institution</label>
                    <input 
                      type="text" 
                      id="institution" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="University, Research Institute, etc."
                    />
                  </div>
                  
                  <div className="bg-gray-50 rounded-md p-3 space-y-2 max-h-48 overflow-y-auto">
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                      <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center mr-3">
                        <span className="text-xs font-medium">UCD</span>
                      </div>
                      <span className="text-sm">University College Dublin</span>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                      <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center mr-3">
                        <span className="text-xs font-medium">TCD</span>
                      </div>
                      <span className="text-sm">Trinity College Dublin</span>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                      <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center mr-3">
                        <span className="text-xs font-medium">RCSI</span>
                      </div>
                      <span className="text-sm">Royal College of Surgeons Ireland</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">Continue</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="thirdparty" className="p-4">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="inline-block bg-primary-50 rounded-full p-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Third-Party Login</h4>
                  <p className="text-sm text-gray-600 mb-4">Sign in using one of the following third-party providers:</p>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <span className="text-sm">Sign in with Google</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                      <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#2aa4f4"></stop>
                        <stop offset="1" stopColor="#007ad9"></stop>
                      </linearGradient>
                      <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                      <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                    </svg>
                    <span className="text-sm">Sign in with Facebook</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                      <path fill="#24292F" d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"></path>
                      <path fill="#fff" d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z"></path>
                    </svg>
                    <span className="text-sm">Sign in with GitHub</span>
                  </button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthenticationInterface;
import { useState, useEffect } from "react";
import { Search, Filter, File, Bookmark, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getQueryFn, queryClient } from "@/lib/queryClient";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

// Type definitions
interface Dataset {
  id: number;
  name: string;
  description: string;
  dataType: string;
  source: string;
  accessRequirements: string;
  dateAdded: string;
  metadata: {
    quality: string;
    sampleSize: number;
    location: string;
    timeRange: string;
  };
}

interface DatasetsResponse {
  datasets: Dataset[];
}

const DataDiscoverySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("all");
  const [quality, setQuality] = useState("all");
  const [timeRange, setTimeRange] = useState("all");
  const [filteredDatasets, setFilteredDatasets] = useState<Dataset[]>([]);

  // Fetch datasets from the API
  const { data, isLoading, isError } = useQuery({
    queryKey: ['/api/datasets'],
  });
  
  // Filter datasets based on search and filter criteria
  useEffect(() => {
    if (data && data.datasets) {
      let filtered = [...data.datasets];
      
      // Apply search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          dataset => 
            dataset.name.toLowerCase().includes(query) || 
            dataset.description.toLowerCase().includes(query) ||
            dataset.dataType.toLowerCase().includes(query)
        );
      }
      
      // Apply location filter
      if (location !== 'all') {
        filtered = filtered.filter(
          dataset => 
            dataset.metadata?.location?.toLowerCase() === location.toLowerCase()
        );
      }
      
      // Apply quality filter
      if (quality !== 'all') {
        filtered = filtered.filter(
          dataset => 
            dataset.metadata?.quality?.toLowerCase() === quality.toLowerCase()
        );
      }
      
      // Apply time range filter
      if (timeRange !== 'all') {
        // This would typically involve more complex date filtering
        // For now, we'll just do a simple string match
        if (timeRange === 'last-year') {
          filtered = filtered.filter(
            dataset => 
              dataset.metadata?.timeRange?.includes('2024') ||
              dataset.metadata?.timeRange?.includes('2025')
          );
        } else if (timeRange === 'last-5-years') {
          filtered = filtered.filter(
            dataset => {
              const range = dataset.metadata?.timeRange || '';
              return range.includes('2021') || range.includes('2022') || 
                     range.includes('2023') || range.includes('2024') || 
                     range.includes('2025');
            }
          );
        }
      }
      
      setFilteredDatasets(filtered);
    }
  }, [data, searchQuery, location, quality, timeRange]);

  // Data Discovery Process Visualization
  const processSteps = [
    { icon: <Search className="text-primary" size={18} />, title: "Search", description: "Keywords, disease types" },
    { icon: <Filter className="text-primary" size={18} />, title: "Filter", description: "Location, quality, time" },
    { icon: <File className="text-primary" size={18} />, title: "Review", description: "Description, attributes" },
    { icon: <Bookmark className="text-primary" size={18} />, title: "Select", description: "Mark for request" }
  ];

  return (
    <div className="space-y-6">
      {/* Data Discovery Process Visualization */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Data Discovery Process</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-white rounded-md shadow-sm p-3 flex items-center w-48">
                <div className="bg-primary-100 rounded-full p-2 mr-3">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-medium text-sm">{step.title}</h4>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <div className="text-gray-400 mx-1">→</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dataset Search Interface */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-3">Dataset Search Interface</h3>
        <Card>
          <CardHeader className="bg-gray-50 border-b border-gray-200 px-4 py-3">
            <h4 className="font-medium text-gray-700">User Portal</h4>
          </CardHeader>
          
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <div className="flex-grow">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search datasets (e.g., cancer genomics, diabetes)"
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <Search size={16} />
                  </div>
                </div>
              </div>
              <Button>Search</Button>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label className="mb-1">Geographic Location</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="north-america">North America</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-1">Data Quality</Label>
                <Select value={quality} onValueChange={setQuality}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Quality Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Quality Levels</SelectItem>
                    <SelectItem value="high">High Quality</SelectItem>
                    <SelectItem value="medium">Medium Quality</SelectItem>
                    <SelectItem value="low">Low Quality</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-1">Time Range</Label>
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="last-year">Last Year</SelectItem>
                    <SelectItem value="last-5-years">Last 5 Years</SelectItem>
                    <SelectItem value="last-10-years">Last 10 Years</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results */}
            <Card>
              <CardHeader className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                <h5 className="font-medium text-gray-700">Search Results</h5>
                {isLoading ? (
                  <Skeleton className="h-4 w-24" />
                ) : (
                  <span className="text-sm text-gray-500">{filteredDatasets.length} datasets found</span>
                )}
              </CardHeader>
              <CardContent className="p-0 divide-y divide-gray-200">
                {isLoading ? (
                  // Loading skeleton
                  Array(3).fill(0).map((_, index) => (
                    <div key={index} className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Skeleton className="h-6 w-2/3" />
                        <Skeleton className="h-6 w-24" />
                      </div>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-6 w-24" />
                      </div>
                      <div className="flex justify-end">
                        <Skeleton className="h-9 w-24 mr-3" />
                        <Skeleton className="h-9 w-32" />
                      </div>
                    </div>
                  ))
                ) : isError ? (
                  <div className="p-4 text-center text-red-500">
                    Error loading datasets. Please try again.
                  </div>
                ) : filteredDatasets.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    No datasets found matching your criteria.
                  </div>
                ) : (
                  filteredDatasets.map((dataset: Dataset) => (
                    <div key={dataset.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h6 className="font-semibold text-gray-900">{dataset.name}</h6>
                        <Badge className={dataset.metadata?.quality === 'high' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}>
                          {dataset.metadata?.quality === 'high' ? 'High Quality' : 'Medium Quality'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {dataset.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                          Sample Size: {dataset.metadata?.sampleSize}
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                          {dataset.metadata?.location}
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                          {dataset.metadata?.timeRange}
                        </span>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="link" className="text-sm mr-3">
                          View Details
                        </Button>
                        <Button variant="outline" className="text-sm bg-primary-50 text-primary hover:bg-primary-100">
                          Request Access
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataDiscoverySearch;

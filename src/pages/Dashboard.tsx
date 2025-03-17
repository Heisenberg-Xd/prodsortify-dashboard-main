
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/dashboard/Sidebar';
import UploadArea from '@/components/dashboard/UploadArea';
import AlgorithmSelector from '@/components/dashboard/AlgorithmSelector';
import DataSummary from '@/components/dashboard/DataSummary';
import VisualizationPanel from '@/components/dashboard/VisualizationPanel';
import SearchFilter from '@/components/dashboard/SearchFilter';
import { toast } from 'sonner';
import { BarChart3, ChevronRight, ChevronsRight, PieChart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('kmeans');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDataSegmented, setIsDataSegmented] = useState(false);
  
  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    // In a real app, you would process the file here
  };
  
  const handleSegmentData = () => {
    if (!uploadedFile) {
      toast.error('Please upload a dataset first');
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setIsDataSegmented(true);
      toast.success('Data successfully segmented!');
    }, 2000);
  };
  
  const handleSearch = (query: string) => {
    toast.info(`Searching for: ${query}`);
  };
  
  const handleFilterChange = (filters: any) => {
    console.log('Filters applied:', filters);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <main 
        className={`transition-all duration-300 ease-in-out min-h-screen ${
          sidebarCollapsed ? 'ml-[70px]' : 'ml-[240px]'
        }`}
      >
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Analyze and segment your product data</p>
          </div>
          
          <Tabs defaultValue="upload" className="space-y-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md mb-8">
              <TabsTrigger value="upload">Upload</TabsTrigger>
              <TabsTrigger value="segment">Segment</TabsTrigger>
              <TabsTrigger value="visualize">Visualize</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-bold mb-4">Upload Dataset</h2>
                  <UploadArea onFileUploaded={handleFileUpload} />
                </div>
                
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">Data Summary</h2>
                  {uploadedFile ? (
                    <DataSummary />
                  ) : (
                    <div className="h-[300px] flex items-center justify-center border rounded-lg bg-white p-6">
                      <div className="text-center">
                        <BarChart3 size={48} className="mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium">No Data Available</h3>
                        <p className="text-muted-foreground mb-4">Upload a dataset to see the summary</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  onClick={() => document.querySelector('[data-value="segment"]')?.dispatchEvent(new MouseEvent('click'))}
                  disabled={!uploadedFile}
                  className="button-hover"
                >
                  Next: Configure Segmentation
                  <ChevronRight className="ml-2" size={18} />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="segment" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">Configure Segmentation</h2>
                  
                  <div className="space-y-6">
                    <AlgorithmSelector 
                      selectedAlgorithm={selectedAlgorithm} 
                      onChange={setSelectedAlgorithm}
                    />
                    
                    {/* Additional configuration options would go here */}
                    <div className="rounded-lg border border-border bg-background p-6">
                      <h3 className="text-lg font-medium mb-4">Parameters</h3>
                      <div className="text-muted-foreground">
                        Additional algorithm-specific parameters would be displayed here based on the selected algorithm.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Dataset</h2>
                  {uploadedFile ? (
                    <div className="rounded-lg border border-border bg-background p-6">
                      <div className="mb-4">
                        <h3 className="font-medium">{uploadedFile.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {(uploadedFile.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <DataSummary />
                    </div>
                  ) : (
                    <div className="h-[300px] flex items-center justify-center border rounded-lg bg-white p-6">
                      <div className="text-center">
                        <p className="text-muted-foreground">No dataset selected</p>
                        <Button 
                          variant="outline"
                          onClick={() => document.querySelector('[data-value="upload"]')?.dispatchEvent(new MouseEvent('click'))}
                          className="mt-4"
                        >
                          Go to Upload
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  onClick={() => document.querySelector('[data-value="upload"]')?.dispatchEvent(new MouseEvent('click'))}
                >
                  Back to Upload
                </Button>
                
                <Button 
                  onClick={handleSegmentData}
                  disabled={!uploadedFile || isProcessing}
                  className="button-hover"
                >
                  {isProcessing ? (
                    <>
                      <span className="animate-pulse">Processing...</span>
                    </>
                  ) : (
                    <>
                      Segment Data
                      <PieChart className="ml-2" size={18} />
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="visualize" className="animate-fade-in">
              <div className="space-y-8">
                <SearchFilter 
                  onSearch={handleSearch}
                  onFilterChange={handleFilterChange}
                />
                
                {isDataSegmented ? (
                  <VisualizationPanel />
                ) : (
                  <div className="h-[400px] flex items-center justify-center border rounded-lg bg-white">
                    <div className="text-center p-8">
                      <PieChart size={48} className="mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium">No Segmented Data</h3>
                      <p className="text-muted-foreground mb-4">Segment your data to see visualizations</p>
                      <Button 
                        onClick={() => document.querySelector('[data-value="segment"]')?.dispatchEvent(new MouseEvent('click'))}
                      >
                        Go to Segmentation
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

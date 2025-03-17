
import React from 'react';
import { BarChart, LineChart, PieChart, ChartPie, ChevronDown, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

// Sample data for charts
const segmentData = [
  { name: 'High Value', value: 35, color: '#2563eb' },
  { name: 'Mid Range', value: 45, color: '#3b82f6' },
  { name: 'Budget', value: 20, color: '#93c5fd' },
];

const productPerformanceData = [
  { name: 'Jan', highValue: 40, midRange: 24, budget: 10 },
  { name: 'Feb', highValue: 30, midRange: 28, budget: 11 },
  { name: 'Mar', highValue: 20, midRange: 27, budget: 14 },
  { name: 'Apr', highValue: 27, midRange: 26, budget: 16 },
  { name: 'May', highValue: 18, midRange: 30, budget: 18 },
  { name: 'Jun', highValue: 23, midRange: 34, budget: 16 },
  { name: 'Jul', highValue: 34, midRange: 30, budget: 15 },
];

const VisualizationPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <h2 className="text-2xl font-bold">Data Visualization</h2>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select segment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Segments</SelectItem>
              <SelectItem value="highValue">High Value</SelectItem>
              <SelectItem value="midRange">Mid Range</SelectItem>
              <SelectItem value="budget">Budget</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <RefreshCw size={16} />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="segments" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="segments" className="flex items-center gap-2">
            <PieChart size={16} />
            <span className="hidden sm:inline">Segments</span>
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex items-center gap-2">
            <BarChart size={16} />
            <span className="hidden sm:inline">Performance</span>
          </TabsTrigger>
          <TabsTrigger value="trends" className="flex items-center gap-2">
            <LineChart size={16} />
            <span className="hidden sm:inline">Trends</span>
          </TabsTrigger>
          <TabsTrigger value="distribution" className="flex items-center gap-2">
            <ChartPie size={16} />
            <span className="hidden sm:inline">Distribution</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="segments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Segments</CardTitle>
              <CardDescription>Distribution of products across segments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={segmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {segmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Segment Performance</CardTitle>
              <CardDescription>Monthly performance by segment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={productPerformanceData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="highValue" name="High Value" fill="#2563eb" />
                    <Bar dataKey="midRange" name="Mid Range" fill="#3b82f6" />
                    <Bar dataKey="budget" name="Budget" fill="#93c5fd" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="h-[400px] flex items-center justify-center border rounded-lg">
          <div className="text-center p-8">
            <LineChart size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">Trend Analysis</h3>
            <p className="text-muted-foreground">Upload and process data to view trends over time</p>
          </div>
        </TabsContent>

        <TabsContent value="distribution" className="h-[400px] flex items-center justify-center border rounded-lg">
          <div className="text-center p-8">
            <ChartPie size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">Attribute Distribution</h3>
            <p className="text-muted-foreground">Upload and process data to view attribute distribution</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VisualizationPanel;


import React from 'react';
import { BarChart, LineChart, PieChart, Table2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const mockData = {
  totalRows: 1450,
  totalColumns: 12,
  dataTypes: {
    numeric: 7,
    categorical: 4,
    date: 1
  },
  missingValues: 45,
}

const DataSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card className="smooth-transition hover:shadow-md">
        <CardHeader className="pb-2">
          <CardDescription>Total Records</CardDescription>
          <CardTitle className="text-2xl flex items-center justify-between">
            {mockData.totalRows.toLocaleString()}
            <Table2 className="text-muted-foreground" size={20} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            {mockData.totalColumns} columns total
          </div>
        </CardContent>
      </Card>
      
      <Card className="smooth-transition hover:shadow-md">
        <CardHeader className="pb-2">
          <CardDescription>Missing Values</CardDescription>
          <CardTitle className="text-2xl flex items-center justify-between">
            {mockData.missingValues}
            <div className="pill bg-amber-100 text-amber-600 text-xs">
              {((mockData.missingValues / (mockData.totalRows * mockData.totalColumns)) * 100).toFixed(2)}%
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-amber-500 rounded-full" 
              style={{ width: `${(mockData.missingValues / (mockData.totalRows * mockData.totalColumns)) * 100}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="smooth-transition hover:shadow-md">
        <CardHeader className="pb-2">
          <CardDescription>Numerical Features</CardDescription>
          <CardTitle className="text-2xl flex items-center justify-between">
            {mockData.dataTypes.numeric}
            <BarChart className="text-muted-foreground" size={20} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            {((mockData.dataTypes.numeric / mockData.totalColumns) * 100).toFixed(0)}% of total columns
          </div>
        </CardContent>
      </Card>
      
      <Card className="smooth-transition hover:shadow-md">
        <CardHeader className="pb-2">
          <CardDescription>Categorical Features</CardDescription>
          <CardTitle className="text-2xl flex items-center justify-between">
            {mockData.dataTypes.categorical}
            <PieChart className="text-muted-foreground" size={20} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            {((mockData.dataTypes.categorical / mockData.totalColumns) * 100).toFixed(0)}% of total columns
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataSummary;

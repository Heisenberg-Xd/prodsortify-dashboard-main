
import React, { useState, useRef } from 'react';
import { Upload, FileType, File, FilePlus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface UploadAreaProps {
  onFileUploaded: (file: File) => void;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onFileUploaded }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };
  
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };
  
  const handleFile = (file: File) => {
    // Check file type
    const validTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    
    if (!validTypes.includes(file.type)) {
      toast.error('Please upload a CSV or Excel file');
      return;
    }
    
    setSelectedFile(file);
    onFileUploaded(file);
    toast.success('File uploaded successfully');
  };
  
  const clearSelectedFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div 
      className={`border-2 border-dashed rounded-lg p-6 transition-all duration-200 ${
        isDragging 
          ? 'border-primary bg-primary/5' 
          : selectedFile 
            ? 'border-green-500 bg-green-50' 
            : 'border-border bg-background hover:border-primary/50 hover:bg-primary/5'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        ref={fileInputRef}
        className="hidden" 
        accept=".csv,.xls,.xlsx" 
        onChange={handleFileInput} 
      />
      
      <div className="flex flex-col items-center justify-center py-4">
        {selectedFile ? (
          <div className="w-full">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border mb-4">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-md mr-3">
                  <FileType size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={clearSelectedFile}
                className="text-muted-foreground hover:text-destructive"
              >
                <X size={18} />
              </Button>
            </div>
            <div className="flex gap-2 justify-center">
              <Button variant="outline" onClick={clearSelectedFile} className="button-hover">
                Remove File
              </Button>
              <Button className="button-hover">
                Process Data
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4 p-3 bg-primary/10 rounded-full">
              <Upload size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Upload Your Dataset</h3>
            <p className="text-muted-foreground text-center mb-4 max-w-md">
              Drag and drop your CSV or Excel file here, or click to browse
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Button 
                variant="outline" 
                className="button-hover"
                onClick={() => fileInputRef.current?.click()}
              >
                <FilePlus size={18} className="mr-2" />
                Browse Files
              </Button>
              <Button className="button-hover">
                <File size={18} className="mr-2" />
                Sample Dataset
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Supported formats: .csv, .xls, .xlsx
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadArea;

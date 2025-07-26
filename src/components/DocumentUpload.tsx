import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Upload, FileText, X, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DocumentUploadProps {
  onDocumentsChange: (files: File[]) => void;
  documents: File[];
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({
  onDocumentsChange,
  documents
}) => {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files).filter(
      file => file.type === 'application/pdf'
    );
    
    if (files.length === 0) {
      toast({
        title: "Invalid files",
        description: "Please upload PDF files only",
        variant: "destructive",
      });
      return;
    }
    
    if (documents.length + files.length > 10) {
      toast({
        title: "Too many files",
        description: "Maximum 10 documents allowed",
        variant: "destructive",
      });
      return;
    }
    
    onDocumentsChange([...documents, ...files]);
  }, [documents, onDocumentsChange, toast]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      onDocumentsChange([...documents, ...files]);
    }
  };

  const removeDocument = (index: number) => {
    const newDocs = documents.filter((_, i) => i !== index);
    onDocumentsChange(newDocs);
  };

  return (
    <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Document Collection
          <Badge variant="secondary">{documents.length}/10</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 transition-all duration-300 ${
            dragActive 
              ? 'border-primary bg-primary/5' 
              : 'border-muted-foreground/25 hover:border-primary/50'
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-intelligence rounded-xl flex items-center justify-center">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-lg font-medium">Upload PDF Documents</p>
              <p className="text-muted-foreground">Drag & drop or click to select files</p>
            </div>
            <Button variant="upload" size="lg">
              Choose Files
            </Button>
          </div>
        </div>

        {documents.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-muted-foreground">Uploaded Documents</h3>
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg border">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium truncate max-w-64">
                    {doc.name}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {(doc.size / 1024 / 1024).toFixed(1)}MB
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeDocument(index)}
                  className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {documents.length < 2 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            <span>Upload 2-10 related PDF documents for analysis</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
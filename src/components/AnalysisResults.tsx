import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, Download, Eye, Star, Clock, User, Target } from 'lucide-react';

interface AnalysisResultsProps {
  results: any;
  processing: boolean;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  results,
  processing
}) => {
  const downloadResults = () => {
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `document-analysis-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (processing) {
    return (
      <Card className="shadow-intelligence border-0 bg-gradient-to-br from-intelligence/5 to-primary/5">
        <CardContent className="py-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-intelligence to-primary rounded-full flex items-center justify-center animate-pulse">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Analyzing Documents</h3>
              <p className="text-muted-foreground">Processing your documents with AI intelligence...</p>
            </div>
            <div className="flex justify-center">
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!results) {
    return (
      <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/30">
        <CardContent className="py-12">
          <div className="text-center space-y-4 text-muted-foreground">
            <FileText className="w-16 h-16 mx-auto opacity-50" />
            <div>
              <h3 className="text-lg font-medium">Ready for Analysis</h3>
              <p>Upload documents and define your analysis parameters to get started</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Metadata Summary */}
      <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-intelligence" />
              Analysis Results
            </CardTitle>
            <Button onClick={downloadResults} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download JSON
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <FileText className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Documents</p>
                <p className="text-xs text-muted-foreground">
                  {results.metadata?.input_documents?.length || 0} files
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <User className="w-5 h-5 text-intelligence" />
              <div>
                <p className="text-sm font-medium">Persona</p>
                <p className="text-xs text-muted-foreground">
                  {results.metadata?.persona?.role || 'Not specified'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <Clock className="w-5 h-5 text-success" />
              <div>
                <p className="text-sm font-medium">Processed</p>
                <p className="text-xs text-muted-foreground">
                  {results.metadata?.processing_timestamp ? 
                    new Date(results.metadata.processing_timestamp).toLocaleString() : 
                    'Unknown'
                  }
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Extracted Sections */}
      {results.extracted_sections?.length > 0 && (
        <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Extracted Sections
              <Badge variant="secondary">{results.extracted_sections.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <div className="space-y-4">
                {results.extracted_sections.map((section: any, index: number) => (
                  <div key={index} className="p-4 bg-accent/30 rounded-lg border-l-4 border-l-primary">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Rank #{section.importance_rank}</Badge>
                        <Badge variant="secondary">{section.document}</Badge>
                        <Badge variant="outline">Page {section.page_number}</Badge>
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{section.section_title}</h4>
                    {section.content && (
                      <p className="text-sm text-muted-foreground">{section.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}

      {/* Sub-section Analysis */}
      {results.subsection_analysis?.length > 0 && (
        <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-intelligence" />
              Sub-section Analysis
              <Badge variant="secondary">{results.subsection_analysis.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <div className="space-y-4">
                {results.subsection_analysis.map((subsection: any, index: number) => (
                  <div key={index} className="p-4 bg-intelligence/5 rounded-lg border-l-4 border-l-intelligence">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{subsection.document}</Badge>
                      <Badge variant="outline">Page {subsection.page_number}</Badge>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Refined Analysis</h4>
                      <p className="text-sm text-muted-foreground">{subsection.refined_text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}

      {/* Raw JSON View */}
      <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-muted-foreground" />
            Raw JSON Output
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-64">
            <pre className="text-xs bg-muted/50 p-4 rounded-lg overflow-auto">
              {JSON.stringify(results, null, 2)}
            </pre>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
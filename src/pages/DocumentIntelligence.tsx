import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { DocumentUpload } from '@/components/DocumentUpload';
import { PersonaForm } from '@/components/PersonaForm';
import { JobForm } from '@/components/JobForm';
import { AnalysisResults } from '@/components/AnalysisResults';
import { Brain, Play, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-intelligence.jpg';

export default function DocumentIntelligence() {
  const { toast } = useToast();
  const [documents, setDocuments] = useState<File[]>([]);
  const [persona, setPersona] = useState({
    role: '',
    expertise: '',
    focus: ''
  });
  const [jobToBeDone, setJobToBeDone] = useState('');
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState(null);
  const [progress, setProgress] = useState(0);

  const canAnalyze = documents.length >= 2 && persona.role && jobToBeDone;

  const simulateAnalysis = async () => {
    setProcessing(true);
    setProgress(0);
    
    // Simulate processing steps
    const steps = [
      { message: "Extracting text from documents...", progress: 20 },
      { message: "Analyzing persona requirements...", progress: 40 },
      { message: "Identifying relevant sections...", progress: 60 },
      { message: "Ranking importance...", progress: 80 },
      { message: "Generating refined analysis...", progress: 100 }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProgress(step.progress);
      
      toast({
        title: "Processing",
        description: step.message,
      });
    }

    // Mock results
    const mockResults = {
      metadata: {
        input_documents: documents.map(doc => doc.name),
        persona: persona,
        job_to_be_done: jobToBeDone,
        processing_timestamp: new Date().toISOString()
      },
      extracted_sections: [
        {
          document: documents[0]?.name || "Document 1",
          page_number: 5,
          section_title: "Methodology Overview",
          importance_rank: 1,
          content: "This section contains the core methodological approach relevant to your analysis requirements."
        },
        {
          document: documents[1]?.name || "Document 2",
          page_number: 12,
          section_title: "Performance Benchmarks",
          importance_rank: 2,
          content: "Comprehensive evaluation metrics and comparative analysis against existing solutions."
        },
        {
          document: documents[0]?.name || "Document 1",
          page_number: 18,
          section_title: "Dataset Description",
          importance_rank: 3,
          content: "Detailed description of datasets used in the research with statistical properties."
        }
      ],
      subsection_analysis: [
        {
          document: documents[0]?.name || "Document 1",
          page_number: 5,
          refined_text: "The methodology section provides essential insights into the experimental design and validation approach that directly addresses your research focus areas."
        },
        {
          document: documents[1]?.name || "Document 2",
          page_number: 12,
          refined_text: "Performance metrics demonstrate significant improvements over baseline methods, with detailed statistical analysis supporting the claims."
        }
      ]
    };

    setResults(mockResults);
    setProcessing(false);
    
    toast({
      title: "Analysis Complete",
      description: "Document intelligence analysis has been completed successfully",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Document Intelligence Platform" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-primary/20" />
        </div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-intelligence to-primary rounded-2xl flex items-center justify-center shadow-intelligence">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground to-intelligence bg-clip-text text-transparent">
              Document Intelligence System
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Extract and prioritize the most relevant sections from your document collection based on specific personas and their job-to-be-done
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />
                CPU-only processing
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />
                &lt;60s analysis time
              </div>
              <div className="flex items-center gap-2 bg-intelligence/10 text-intelligence px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />
                ≤1GB model size
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interface */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Input Forms */}
          <div className="lg:col-span-2 space-y-8">
            <DocumentUpload 
              documents={documents}
              onDocumentsChange={setDocuments}
            />
            
            <PersonaForm 
              persona={persona}
              onPersonaChange={setPersona}
            />
            
            <JobForm 
              jobToBeDone={jobToBeDone}
              onJobChange={setJobToBeDone}
            />

            {/* Analysis Controls */}
            <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-success" />
                  Analysis Control
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {processing && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Processing documents...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
                
                <Button 
                  variant="intelligence"
                  size="lg"
                  className="w-full"
                  onClick={simulateAnalysis}
                  disabled={!canAnalyze || processing}
                >
                  {processing ? (
                    <>
                      <Brain className="w-5 h-5 mr-2 animate-pulse" />
                      Analyzing Documents...
                    </>
                  ) : (
                    <>
                      <Brain className="w-5 h-5 mr-2" />
                      Start Intelligence Analysis
                    </>
                  )}
                </Button>

                {!canAnalyze && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    <span>Upload 2+ documents, define persona and job-to-be-done to begin</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-1">
            <AnalysisResults 
              results={results}
              processing={processing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
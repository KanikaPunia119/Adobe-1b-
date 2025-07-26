import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { CheckSquare, Clock, AlertTriangle } from 'lucide-react';

interface JobFormProps {
  jobToBeDone: string;
  onJobChange: (job: string) => void;
}

export const JobForm: React.FC<JobFormProps> = ({
  jobToBeDone,
  onJobChange
}) => {
  const exampleJobs = [
    {
      category: "Research",
      example: "Prepare a comprehensive literature review focusing on methodologies and benchmarks",
      icon: "📚"
    },
    {
      category: "Business",
      example: "Analyze revenue trends and competitive positioning strategies",
      icon: "📊"
    },
    {
      category: "Education",
      example: "Identify key concepts and mechanisms for exam preparation",
      icon: "🎓"
    }
  ];

  return (
    <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-success" />
          Job-to-be-Done
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="job" className="text-sm font-medium flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Concrete Task Description
          </Label>
          <Textarea
            id="job"
            placeholder="Describe the specific task this persona needs to accomplish using the documents..."
            value={jobToBeDone}
            onChange={(e) => onJobChange(e.target.value)}
            className="min-h-24 transition-all duration-300 focus:shadow-lg"
          />
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-sm flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-intelligence" />
            Example Jobs by Category
          </h4>
          <div className="grid gap-3">
            {exampleJobs.map((item, index) => (
              <div 
                key={index}
                className="p-3 bg-accent/50 rounded-lg border cursor-pointer hover:bg-accent/70 transition-colors"
                onClick={() => onJobChange(item.example)}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 p-4 rounded-lg">
          <h4 className="font-medium text-sm mb-2">💡 Tips for Better Results</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Be specific about what information you need</li>
            <li>• Mention the intended output format or structure</li>
            <li>• Include any constraints or priorities for the analysis</li>
            <li>• Specify the depth of analysis required</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
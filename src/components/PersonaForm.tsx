import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { User, Target, Lightbulb } from 'lucide-react';

interface PersonaFormProps {
  persona: {
    role: string;
    expertise: string;
    focus: string;
  };
  onPersonaChange: (persona: { role: string; expertise: string; focus: string }) => void;
}

export const PersonaForm: React.FC<PersonaFormProps> = ({
  persona,
  onPersonaChange
}) => {
  const handleChange = (field: string, value: string) => {
    onPersonaChange({
      ...persona,
      [field]: value
    });
  };

  return (
    <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5 text-intelligence" />
          Persona Definition
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="role" className="text-sm font-medium flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            Role
          </Label>
          <Input
            id="role"
            placeholder="e.g., PhD Researcher in Computational Biology, Investment Analyst, Undergraduate Student"
            value={persona.role}
            onChange={(e) => handleChange('role', e.target.value)}
            className="transition-all duration-300 focus:shadow-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="expertise" className="text-sm font-medium flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-primary" />
            Expertise Areas
          </Label>
          <Textarea
            id="expertise"
            placeholder="Describe specific knowledge domains, skills, and technical background relevant to document analysis"
            value={persona.expertise}
            onChange={(e) => handleChange('expertise', e.target.value)}
            className="min-h-20 transition-all duration-300 focus:shadow-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="focus" className="text-sm font-medium flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            Focus Areas
          </Label>
          <Textarea
            id="focus"
            placeholder="What specific aspects, methodologies, or information types should be prioritized?"
            value={persona.focus}
            onChange={(e) => handleChange('focus', e.target.value)}
            className="min-h-20 transition-all duration-300 focus:shadow-lg"
          />
        </div>

        <div className="bg-accent/30 p-4 rounded-lg border-l-4 border-l-intelligence">
          <h4 className="font-medium text-sm mb-2">Examples</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Research: "Focus on methodologies, datasets, performance benchmarks"</li>
            <li>• Business: "Revenue trends, R&D investments, market positioning"</li>
            <li>• Academic: "Key concepts, mechanisms, exam preparation topics"</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
# Document Intelligence System

A sophisticated AI-powered document analysis platform that extracts and prioritizes the most relevant sections from your document collection based on specific personas and their job-to-be-done requirements.

## 🚀 Features

- *Intelligent Document Analysis*: Extract and prioritize relevant sections from PDF documents
- *Persona-Driven Processing*: Customize analysis based on user roles and expertise
- *Job-to-be-Done Framework*: Focus on specific tasks and objectives
- *Real-time Processing*: Fast analysis with progress tracking
- *Modern UI*: Beautiful, responsive interface with dark mode support
- *Export Functionality*: Download results as JSON for further processing

## 🛠 Technology Stack

- *Frontend*: React 18 with TypeScript
- *Styling*: Tailwind CSS with custom design system
- *UI Components*: Custom component library with Radix UI primitives
- *Build Tool*: Vite
- *Icons*: Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- *Node.js* (version 16.0 or higher)
- *npm* or *yarn* package manager
- *Git* for version control

## 🔧 Installation

1. *Clone the repository*
   bash
   git clone <repository-url>
   cd Adobe-1b-
   

2. *Install dependencies*
   bash
   npm install
   # or
   yarn install
   

3. *Start the development server*
   bash
   npm run dev
   # or
   yarn dev
   

4. *Open your browser*
   Navigate to http://localhost:5173 to see the application running.

## 📁 Project Structure


Adobe-1b-/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Base UI components (buttons, cards, etc.)
│   │   ├── AnalysisResults.tsx
│   │   ├── DocumentUpload.tsx
│   │   ├── JobForm.tsx
│   │   └── PersonaForm.tsx
│   ├── pages/               # Application pages
│   │   ├── DocumentIntelligence.tsx
│   │   └── Index.tsx
│   ├── assets/              # Static assets
│   │   └── hero-intelligence.jpg
│   └── index.css           # Global styles and design system
├── index.html              # HTML entry point
├── tailwind.config.ts      # Tailwind CSS configuration
└── README.md              # Project documentation


## 🎯 How to Use

### 1. Document Upload
- Upload 2-10 PDF documents using the drag-and-drop interface
- Supported format: PDF files only
- Maximum file size: No specific limit (reasonable sizes recommended)

### 2. Define Persona
Fill out the persona form with:
- *Role*: Specific role or position (e.g., "PhD Researcher in Computational Biology")
- *Expertise Areas*: Knowledge domains and technical background
- *Focus Areas*: Specific aspects or methodologies to prioritize

### 3. Job-to-be-Done
Describe the concrete task, such as:
- Research: "Prepare a comprehensive literature review focusing on methodologies"
- Business: "Analyze revenue trends and competitive positioning"
- Education: "Identify key concepts for exam preparation"

### 4. Run Analysis
- Click "Start Intelligence Analysis" to begin processing
- Monitor real-time progress with status updates
- View results in the structured output panel

### 5. Export Results
- Download analysis results as JSON format
- Results include extracted sections, importance rankings, and refined analysis

## 🎨 Design System

The application uses a custom design system defined in [src/index.css](src/index.css) with:

- *Color Palette*: HSL-based color system with semantic naming
- *Typography*: Consistent font weights and sizes
- *Spacing*: Standardized padding and margin scales
- *Components*: Reusable UI components with consistent styling
- *Animations*: Smooth transitions and micro-interactions

### Key Design Tokens

- *Primary Colors*: Blue-based primary palette for main actions
- *Intelligence Theme*: Purple gradient for AI-related features
- *Success States*: Green for completed actions
- *Semantic Colors*: Consistent error, warning, and info states

## 🧩 Component Architecture

### Core Components

1. **[DocumentUpload](src/components/DocumentUpload.tsx)**
   - Handles file upload with drag-and-drop
   - Validates PDF format and file limits
   - Displays uploaded document list

2. **[PersonaForm](src/components/PersonaForm.tsx)**
   - Collects user persona information
   - Role, expertise, and focus area inputs
   - Provides example personas

3. **[JobForm](src/components/JobForm.tsx)**
   - Captures job-to-be-done requirements
   - Category-based examples
   - Best practices guidance

4. **[AnalysisResults](src/components/AnalysisResults.tsx)**
   - Displays analysis results
   - Structured section extraction
   - JSON export functionality

5. **[DocumentIntelligence](src/pages/DocumentIntelligence.tsx)**
   - Main application page
   - Orchestrates the analysis workflow
   - Manages application state

## 🔧 Configuration

### Tailwind Configuration
The [tailwind.config.ts](tailwind.config.ts) extends the base Tailwind setup with:
- Custom color palette
- Extended spacing and sizing
- Custom animations
- Component-specific utilities

### Build Configuration
- *Vite*: Modern build tool with hot module replacement
- *TypeScript*: Type-safe JavaScript with strict configuration
- *CSS*: Tailwind CSS with custom design system

## 🚀 Deployment

### Build for Production
bash
npm run build
# or
yarn build


### Preview Production Build
bash
npm run preview
# or
yarn preview


The built files will be in the dist/ directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow TypeScript best practices
- Use the existing component patterns
- Maintain the design system consistency
- Add proper error handling
- Write meaningful commit messages

## 🐛 Troubleshooting

### Common Issues

1. *Build Errors*: Ensure all dependencies are installed with npm install
2. *Type Errors*: Check TypeScript configuration and component props
3. *Style Issues*: Verify Tailwind classes and custom CSS variables
4. *File Upload*: Ensure proper file format (PDF only)

### Development Server Issues
bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
npm run dev -- --force


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with React and TypeScript
- UI components inspired by modern design systems
- Icons provided by Lucide React
- Styling powered by Tailwind CSS

---

For more information or support, please open an issue in the repository.

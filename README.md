# Document Intelligence Platform

A powerful React-based document analysis platform that allows users to upload documents, define personas, and extract intelligent insights using AI-driven analysis.

## 🚀 Features

- **Document Upload**: Drag-and-drop PDF file upload with validation
- **Persona Definition**: Define custom roles, expertise areas, and focus points
- **Job-to-be-Done Framework**: Specify analysis objectives with predefined templates
- **Intelligent Analysis**: AI-powered document processing and insight extraction
- **Results Visualization**: Comprehensive analysis results with metadata, sections, and JSON output
- **Real-time Progress**: Live progress tracking during document processing

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── DocumentUpload.tsx
│   ├── PersonaForm.tsx
│   ├── JobForm.tsx
│   └── AnalysisResults.tsx
├── pages/               # Page components
│   ├── Index.tsx
│   ├── DocumentIntelligence.tsx
│   └── NotFound.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── index.css           # Global styles and design tokens
```

## 🎯 How to Use

1. **Upload Documents**: Drag and drop PDF files or click to browse
2. **Define Persona**: Specify your role, expertise areas, and focus points
3. **Set Objectives**: Choose from predefined job-to-be-done templates or write your own
4. **Run Analysis**: Click "Start Intelligence Analysis" to process documents
5. **Review Results**: Examine extracted sections, analysis, and raw JSON output

## 🎨 Design System

The project uses a comprehensive design system built with:
- **Semantic Color Tokens**: HSL-based color system defined in `index.css`
- **Component Variants**: Customizable shadcn/ui components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Built-in theme switching capabilities

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Using Lovable (Recommended)
1. Visit your [Lovable Project](https://lovable.dev/projects/c8701c58-e0f7-4c96-b293-08bca12ee2dd)
2. Click Share → Publish

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

## 🔧 Configuration

### Environment Variables
This project doesn't require environment variables for basic functionality.

### Customization
- Modify `tailwind.config.ts` for theme customization
- Update `index.css` for design token adjustments
- Customize components in `src/components/ui/` for UI modifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

'use client'

import { useState, useEffect } from 'react'
import TitleBar from './TitleBar'
import ActivityBar from './ActivityBar'
import Sidebar from './Sidebar'
import EditorArea from './EditorArea'
import StatusBar from './StatusBar'
import styles from './Editor.module.css'

export interface FileTab {
  id: string
  name: string
  content: string
  language: string
  isDirty: boolean
  path: string
}

export interface FileNode {
  id: string
  name: string
  type: 'file' | 'folder'
  path: string
  children?: FileNode[]
  language?: string
}

export default function Editor() {
  const [activePanel, setActivePanel] = useState<'explorer' | 'search' | 'extensions' | 'settings'>('explorer')
  const [tabs, setTabs] = useState<FileTab[]>([])
  const [activeTabId, setActiveTabId] = useState<string | null>(null)
  const [files, setFiles] = useState<FileNode[]>([])
  const [projectName, setProjectName] = useState('My Project')

  // Initialize with sample files
  useEffect(() => {
    const sampleFiles: FileNode[] = [
      {
        id: '1',
        name: 'src',
        type: 'folder',
        path: 'src',
        children: [
          { id: '2', name: 'index.tsx', type: 'file', path: 'src/index.tsx', language: 'typescript' },
          { id: '3', name: 'App.tsx', type: 'file', path: 'src/App.tsx', language: 'typescript' },
          { id: '4', name: 'styles.css', type: 'file', path: 'src/styles.css', language: 'css' },
        ]
      },
      {
        id: '5',
        name: 'public',
        type: 'folder',
        path: 'public',
        children: [
          { id: '6', name: 'index.html', type: 'file', path: 'public/index.html', language: 'html' },
        ]
      },
      { id: '7', name: 'package.json', type: 'file', path: 'package.json', language: 'json' },
      { id: '8', name: 'README.md', type: 'file', path: 'README.md', language: 'markdown' },
    ]
    setFiles(sampleFiles)

    // Open welcome tab
    const welcomeTab: FileTab = {
      id: 'welcome',
      name: 'Welcome',
      content: getWelcomeContent(),
      language: 'markdown',
      isDirty: false,
      path: 'welcome'
    }
    setTabs([welcomeTab])
    setActiveTabId('welcome')
  }, [])

  const openFile = (file: FileNode) => {
    if (file.type === 'folder') return

    // Check if already open
    const existingTab = tabs.find(t => t.path === file.path)
    if (existingTab) {
      setActiveTabId(existingTab.id)
      return
    }

    // Create new tab
    const newTab: FileTab = {
      id: file.id,
      name: file.name,
      content: getSampleContent(file.language || 'plaintext'),
      language: file.language || 'plaintext',
      isDirty: false,
      path: file.path
    }

    setTabs([...tabs, newTab])
    setActiveTabId(newTab.id)
  }

  const closeTab = (tabId: string) => {
    const newTabs = tabs.filter(t => t.id !== tabId)
    setTabs(newTabs)
    
    if (activeTabId === tabId) {
      setActiveTabId(newTabs.length > 0 ? newTabs[newTabs.length - 1].id : null)
    }
  }

  const updateTabContent = (tabId: string, content: string) => {
    setTabs(tabs.map(t => 
      t.id === tabId ? { ...t, content, isDirty: true } : t
    ))
  }

  const activeTab = tabs.find(t => t.id === activeTabId)

  return (
    <div className={styles.editor}>
      <TitleBar projectName={projectName} />
      <div className={styles.workbench}>
        <ActivityBar activePanel={activePanel} onPanelChange={setActivePanel} />
        <Sidebar 
          activePanel={activePanel}
          files={files}
          onFileOpen={openFile}
        />
        <EditorArea
          tabs={tabs}
          activeTabId={activeTabId}
          onTabChange={setActiveTabId}
          onTabClose={closeTab}
          onContentChange={updateTabContent}
        />
      </div>
      <StatusBar 
        fileName={activeTab?.name || ''}
        language={activeTab?.language || 'plaintext'}
        lineCount={activeTab?.content.split('\n').length || 0}
      />
    </div>
  )
}

function getWelcomeContent(): string {
  return `# Welcome to ZEditor

A powerful web-based code editor inspired by VSCode.

## Features

- 📝 **Monaco Editor** - The same editor that powers VSCode
- 🎨 **Syntax Highlighting** - Support for multiple languages
- 📁 **File Explorer** - Navigate your project structure
- 🔍 **Search** - Find across files
- ⚡ **Fast & Responsive** - Built with Next.js
- 🌐 **No Backend Required** - Pure frontend application

## Getting Started

1. Click on files in the explorer to open them
2. Edit code with full IntelliSense support
3. Use keyboard shortcuts like VSCode
4. Deploy to Vercel with one click

## Keyboard Shortcuts

- \`Ctrl+S\` / \`Cmd+S\` - Save file
- \`Ctrl+W\` / \`Cmd+W\` - Close tab
- \`Ctrl+P\` / \`Cmd+P\` - Quick file open
- \`Ctrl+F\` / \`Cmd+F\` - Find in file

---

**ZEditor** - Made with ❤️ using Next.js and Monaco Editor
`
}

function getSampleContent(language: string): string {
  const samples: Record<string, string> = {
    typescript: `import React from 'react'

interface Props {
  name: string
}

export const App: React.FC<Props> = ({ name }) => {
  return (
    <div className="app">
      <h1>Hello, {name}!</h1>
    </div>
  )
}
`,
    javascript: `function greet(name) {
  console.log(\`Hello, \${name}!\`)
}

greet('World')
`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  background: #0d1117;
  color: #e6edf3;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZEditor</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
`,
    json: `{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A web application",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "react": "^18.2.0",
    "next": "^14.0.0"
  }
}
`,
    markdown: `# Project Title

A brief description of your project.

## Installation

\`\`\`bash
npm install
\`\`\`

## Usage

\`\`\`bash
npm run dev
\`\`\`
`,
  }

  return samples[language] || `// ${language} file\n\n`
}

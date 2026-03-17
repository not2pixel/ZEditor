'use client'

import { useRef, useEffect } from 'react'
import MonacoEditor from '@monaco-editor/react'
import type { FileTab } from './Editor'
import styles from './EditorArea.module.css'

interface EditorAreaProps {
  tabs: FileTab[]
  activeTabId: string | null
  onTabChange: (tabId: string) => void
  onTabClose: (tabId: string) => void
  onContentChange: (tabId: string, content: string) => void
}

export default function EditorArea({
  tabs,
  activeTabId,
  onTabChange,
  onTabClose,
  onContentChange,
}: EditorAreaProps) {
  const activeTab = tabs.find(t => t.id === activeTabId)

  return (
    <div className={styles.editorArea}>
      <TabBar
        tabs={tabs}
        activeTabId={activeTabId}
        onTabChange={onTabChange}
        onTabClose={onTabClose}
      />
      <div className={styles.editorContainer}>
        {activeTab ? (
          <MonacoEditor
            key={activeTab.id}
            height="100%"
            language={activeTab.language}
            theme="vs-dark"
            value={activeTab.content}
            onChange={(value) => onContentChange(activeTab.id, value || '')}
            options={{
              fontSize: 14,
              fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
              fontLigatures: true,
              minimap: { enabled: true },
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              lineNumbers: 'on',
              renderWhitespace: 'selection',
              tabSize: 2,
              insertSpaces: true,
              automaticLayout: true,
              padding: { top: 16, bottom: 16 },
              cursorBlinking: 'smooth',
              cursorSmoothCaretAnimation: 'on',
              smoothScrolling: true,
              bracketPairColorization: { enabled: true },
            }}
            loading={
              <div className={styles.loading}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" opacity="0.25"/>
                  <path d="M12 2a10 10 0 0 1 0 20" strokeLinecap="round">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 12 12"
                      to="360 12 12"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
                <span>Loading Editor...</span>
              </div>
            }
          />
        ) : (
          <WelcomeScreen />
        )}
      </div>
    </div>
  )
}

function TabBar({
  tabs,
  activeTabId,
  onTabChange,
  onTabClose,
}: {
  tabs: FileTab[]
  activeTabId: string | null
  onTabChange: (tabId: string) => void
  onTabClose: (tabId: string) => void
}) {
  return (
    <div className={styles.tabBar}>
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`${styles.tab} ${tab.id === activeTabId ? styles.active : ''} ${tab.isDirty ? styles.dirty : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <FileIcon language={tab.language} />
            <span className={styles.tabName}>{tab.name}</span>
            {tab.isDirty && <span className={styles.dirtyIndicator}>●</span>}
            <button
              className={styles.closeBtn}
              onClick={(e) => {
                e.stopPropagation()
                onTabClose(tab.id)
              }}
              title="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function FileIcon({ language }: { language: string }) {
  const colors: Record<string, string> = {
    typescript: '#3178c6',
    javascript: '#f7df1e',
    html: '#e34c26',
    css: '#1572b6',
    json: '#000000',
    markdown: '#ffffff',
  }

  const color = colors[language] || '#858585'

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill={color} className={styles.fileIcon}>
      <path d="M2 2h8l2 2v10H2V2z"/>
    </svg>
  )
}

function WelcomeScreen() {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeContent}>
        <svg className={styles.welcomeLogo} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3L10.5 21L21 3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h1>ZEditor</h1>
        <p>A web-based code editor inspired by VSCode</p>
        <div className={styles.shortcuts}>
          <div className={styles.shortcut}>
            <kbd>Ctrl</kbd> + <kbd>P</kbd>
            <span>Quick Open</span>
          </div>
          <div className={styles.shortcut}>
            <kbd>Ctrl</kbd> + <kbd>S</kbd>
            <span>Save File</span>
          </div>
          <div className={styles.shortcut}>
            <kbd>Ctrl</kbd> + <kbd>W</kbd>
            <span>Close Tab</span>
          </div>
        </div>
      </div>
    </div>
  )
}

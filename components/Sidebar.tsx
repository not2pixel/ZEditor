'use client'

import { useState } from 'react'
import type { FileNode } from './Editor'
import styles from './Sidebar.module.css'

interface SidebarProps {
  activePanel: string
  files: FileNode[]
  onFileOpen: (file: FileNode) => void
}

export default function Sidebar({ activePanel, files, onFileOpen }: SidebarProps) {
  return (
    <div className={styles.sidebar}>
      {activePanel === 'explorer' && <ExplorerPanel files={files} onFileOpen={onFileOpen} />}
      {activePanel === 'search' && <SearchPanel />}
      {activePanel === 'extensions' && <ExtensionsPanel />}
      {activePanel === 'settings' && <SettingsPanel />}
    </div>
  )
}

function ExplorerPanel({ files, onFileOpen }: { files: FileNode[], onFileOpen: (file: FileNode) => void }) {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>EXPLORER</span>
      </div>
      <div className={styles.content}>
        <FileTree nodes={files} onFileOpen={onFileOpen} level={0} />
      </div>
    </div>
  )
}

function FileTree({ nodes, onFileOpen, level }: { nodes: FileNode[], onFileOpen: (file: FileNode) => void, level: number }) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['src', 'public']))

  const toggleFolder = (id: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedFolders(newExpanded)
  }

  return (
    <>
      {nodes.map(node => (
        <div key={node.id}>
          <div
            className={styles.fileItem}
            style={{ paddingLeft: `${8 + level * 16}px` }}
            onClick={() => node.type === 'folder' ? toggleFolder(node.id) : onFileOpen(node)}
          >
            {node.type === 'folder' ? (
              <>
                <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" style={{
                  transform: expandedFolders.has(node.id) ? 'rotate(90deg)' : 'rotate(0deg)'
                }}>
                  <path fill="currentColor" d="M6 4l4 4-4 4V4z"/>
                </svg>
                <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M1.5 2h5l1 1h6.5v10h-12.5V2z"/>
                </svg>
              </>
            ) : (
              <>
                <span className={styles.spacer} />
                <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2 2h8l2 2v10H2V2z"/>
                </svg>
              </>
            )}
            <span className={styles.fileName}>{node.name}</span>
          </div>
          {node.type === 'folder' && expandedFolders.has(node.id) && node.children && (
            <FileTree nodes={node.children} onFileOpen={onFileOpen} level={level + 1} />
          )}
        </div>
      ))}
    </>
  )
}

function SearchPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>SEARCH</span>
      </div>
      <div className={styles.content}>
        <input 
          type="text" 
          className={styles.searchInput} 
          placeholder="Search in files..."
        />
        <div className={styles.emptyState}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <p>No results found</p>
        </div>
      </div>
    </div>
  )
}

function ExtensionsPanel() {
  const extensions = [
    { name: 'Monaco Editor', description: 'Core editor engine', enabled: true },
    { name: 'Syntax Highlighting', description: 'Multi-language support', enabled: true },
    { name: 'Auto Save', description: 'Automatically save changes', enabled: false },
  ]

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>EXTENSIONS</span>
      </div>
      <div className={styles.content}>
        {extensions.map((ext, i) => (
          <div key={i} className={styles.extension}>
            <div className={styles.extHeader}>
              <span className={styles.extName}>{ext.name}</span>
              <span className={ext.enabled ? styles.enabled : styles.disabled}>
                {ext.enabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
            <p className={styles.extDesc}>{ext.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SettingsPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>SETTINGS</span>
      </div>
      <div className={styles.content}>
        <div className={styles.setting}>
          <label className={styles.settingLabel}>Theme</label>
          <select className={styles.select}>
            <option>Dark (GitHub)</option>
            <option>Light</option>
          </select>
        </div>
        <div className={styles.setting}>
          <label className={styles.settingLabel}>Font Size</label>
          <select className={styles.select}>
            <option>12px</option>
            <option>13px</option>
            <option>14px</option>
            <option>16px</option>
          </select>
        </div>
        <div className={styles.setting}>
          <label className={styles.settingLabel}>Tab Size</label>
          <select className={styles.select}>
            <option>2 spaces</option>
            <option>4 spaces</option>
          </select>
        </div>
      </div>
    </div>
  )
}

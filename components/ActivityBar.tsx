'use client'

import styles from './ActivityBar.module.css'

interface ActivityBarProps {
  activePanel: string
  onPanelChange: (panel: 'explorer' | 'search' | 'extensions' | 'settings') => void
}

export default function ActivityBar({ activePanel, onPanelChange }: ActivityBarProps) {
  const buttons = [
    { 
      id: 'explorer', 
      label: 'Explorer',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3h7l2 2h9v14H3V3z"/>
        </svg>
      )
    },
    { 
      id: 'search', 
      label: 'Search',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      )
    },
    { 
      id: 'extensions', 
      label: 'Extensions',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      )
    },
  ]

  const bottomButtons = [
    { 
      id: 'settings', 
      label: 'Settings',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      )
    },
  ]

  return (
    <div className={styles.activityBar}>
      <div className={styles.top}>
        {buttons.map(btn => (
          <button
            key={btn.id}
            className={`${styles.btn} ${activePanel === btn.id ? styles.active : ''}`}
            onClick={() => onPanelChange(btn.id as any)}
            title={btn.label}
          >
            {btn.icon}
          </button>
        ))}
      </div>
      <div className={styles.bottom}>
        {bottomButtons.map(btn => (
          <button
            key={btn.id}
            className={`${styles.btn} ${activePanel === btn.id ? styles.active : ''}`}
            onClick={() => onPanelChange(btn.id as any)}
            title={btn.label}
          >
            {btn.icon}
          </button>
        ))}
      </div>
    </div>
  )
}

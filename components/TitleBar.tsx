'use client'

import styles from './TitleBar.module.css'

interface TitleBarProps {
  projectName: string
}

export default function TitleBar({ projectName }: TitleBarProps) {
  return (
    <div className={styles.titlebar}>
      <div className={styles.left}>
        <svg className={styles.logo} width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M3 3L10.5 21L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className={styles.title}>ZEditor</span>
        <span className={styles.divider}>—</span>
        <span className={styles.project}>{projectName}</span>
      </div>
      <div className={styles.center}>
        {/* Menu items could go here */}
      </div>
      <div className={styles.right}>
        <div className={styles.status}>Web Editor</div>
      </div>
    </div>
  )
}

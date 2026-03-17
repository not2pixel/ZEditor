'use client'

import styles from './StatusBar.module.css'

interface StatusBarProps {
  fileName: string
  language: string
  lineCount: number
}

export default function StatusBar({ fileName, language, lineCount }: StatusBarProps) {
  return (
    <div className={styles.statusBar}>
      <div className={styles.left}>
        <div className={styles.item}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10.5 3.5L6 12 1.5 3.5h2L6 8l2.5-4.5h2z"/>
          </svg>
          <span>ZEditor</span>
        </div>
        {fileName && (
          <>
            <div className={styles.separator}>|</div>
            <div className={styles.item}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2h8l2 2v10H2V2z"/>
              </svg>
              <span>{fileName}</span>
            </div>
          </>
        )}
      </div>
      <div className={styles.right}>
        <div className={styles.item} title="Language">
          {getLanguageLabel(language)}
        </div>
        <div className={styles.item} title="Lines">
          {lineCount} lines
        </div>
        <div className={styles.item} title="Encoding">
          UTF-8
        </div>
        <div className={styles.item} title="Line Ending">
          LF
        </div>
      </div>
    </div>
  )
}

function getLanguageLabel(lang: string): string {
  const labels: Record<string, string> = {
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    html: 'HTML',
    css: 'CSS',
    json: 'JSON',
    markdown: 'Markdown',
    plaintext: 'Plain Text',
  }
  return labels[lang] || lang
}

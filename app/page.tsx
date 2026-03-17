'use client'

import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('@/components/Editor'), {
  ssr: false,
  loading: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'var(--bg-0)',
      color: 'var(--text-secondary)',
      fontSize: '14px'
    }}>
      <div>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <div style={{ marginTop: '16px' }}>Loading ZEditor...</div>
      </div>
    </div>
  )
})

export default function Home() {
  return <Editor />
}

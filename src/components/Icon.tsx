const paths = {
  download: 'M12 3v12m-4-4 4 4 4-4M5 15v5h14v-5',
  github: 'M9 19c-4 1.5-4-2-6-2.5m12 5v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.3-3.5 4.7 4.7 0 0 0-.1-3.5S17.7 1.2 15 3a13.3 13.3 0 0 0-7 0C5.3 1.2 4.3 1.5 4.3 1.5a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 3 8.5c0 5 3 6.2 6 6.5a3.4 3.4 0 0 0-1 2.6V22',
  linkedin: 'M4 9v11M4 4v.01M9 20V9m0 4a4 4 0 0 1 8 0v7m3-7v7',
  mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
  video: 'M3 5h18v14H3zM10 9l5 3-5 3z',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18',
  game: 'M7 7h10c3 0 4 3 5 7 1 5-3 4-6 1H8c-3 3-7 4-6-1 1-4 2-7 5-7Zm0 3v4m-2-2h4m6 0h.01m3-1h.01',
} as const

export function Icon({ name }: { name: keyof typeof paths }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}

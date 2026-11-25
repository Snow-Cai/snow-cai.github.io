export function Jellyfish({ className = '' }: { className?: string }) {
  return (
    <span className={`jellyfish ${className}`} aria-hidden="true">
      <span className="jellyfish-tentacles">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className="jellyfish-bell">
        <span className="jellyfish-face"><span className="jellyfish-smile" /></span>
      </span>
    </span>
  )
}

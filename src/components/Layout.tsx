import type { ReactNode } from 'react'
import { displayName, fullName, profile } from '../data/profile'
import { sitePath } from '../paths'
import { Icon } from './Icon'
import { Jellyfish } from './Jellyfish'

const navigation = [
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
]

export function ResumeLink({ className = '' }: { className?: string }) {
  if (!profile.resume) return null

  return <a className={className} href={sitePath(profile.resume)} download><Icon name="download" /> Download Résumé</a>
}

function ItchIcon() {
  return <img src={sitePath('media/brand/itchio-white.svg')} alt="" className="icon itch-icon" />
}

export function ItchGamesLink() {
  return (
    <a className="button button-secondary" href={profile.itch} target="_blank" rel="noopener noreferrer">
      <ItchIcon /> View All Games on itch.io
    </a>
  )
}

export function ProfileLinks({ includeEmail = false }: { includeEmail?: boolean }) {
  const links = [
    { label: 'GitHub', href: profile.github, icon: 'github' },
    { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
    { label: 'itch.io', href: profile.itch, icon: 'itch' },
    ...(includeEmail ? [{ label: profile.email || 'Email', href: profile.email ? `mailto:${profile.email}` : undefined, icon: 'mail' }] as const : []),
  ] as const

  return (
    <ul className="profile-links flex flex-wrap items-center">
      {links.filter(link => link.href).map(({ label, href, icon }) => (
        <li key={icon}>
          {icon === 'itch'
            ? <a href={href} target="_blank" rel="noopener noreferrer"><ItchIcon />{label}</a>
            : <a href={href}><Icon name={icon} />{label}</a>}
        </li>
      ))}
    </ul>
  )
}

export function Layout({ children, home = false }: { children: ReactNode; home?: boolean }) {
  const sectionLink = (id: string) => `${home ? '' : sitePath()}#${id}`

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href={sitePath()} aria-label={`${displayName}, home`}>
            <span className="brand-mark" aria-hidden="true">{profile.initials}</span>
            <span>{displayName}</span>
          </a>
          <nav aria-label="Main navigation" className="main-nav">
            {navigation.map(({ id, label }) => <a href={id === 'work' ? sitePath('projects/') : sectionLink(id)} key={id}>{label}</a>)}
          </nav>
          <a className="header-contact" href={sectionLink('contact')}>Contact</a>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="shell flex flex-wrap items-center justify-between gap-3">
          <span className="footer-signature"><Jellyfish className="footer-jellyfish jellyfish-blue" />{fullName}</span>
          <a href={home ? '#main' : sitePath()}>{home ? 'Back to top' : 'Portfolio home'}</a>
        </div>
      </footer>
    </>
  )
}

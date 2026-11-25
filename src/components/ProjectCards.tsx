import type { Project } from '../data/projects'
import { sitePath } from '../paths'
import { rememberProjectScroll } from '../projectNavigation'
import { Icon } from './Icon'

export function TechList({ entries }: { entries: string[] }) {
  if (entries.length === 0) return null
  return <ul className="tech-list flex flex-wrap gap-2" aria-label="Project technologies and topics">{entries.map(entry => <li key={entry}>{entry}</li>)}</ul>
}

export function ProjectCategories({ categories }: Pick<Project, 'categories'>) {
  return (
    <ul className="project-category-list flex flex-wrap" aria-label="Project categories">
      {categories.map(category => <li key={category}>{category}</li>)}
    </ul>
  )
}

export function ProjectVisual({ project }: { project: Project }) {
  const cover = project.cover ?? project.screenshots?.[0]

  return (
    <div className="project-visual">
      {cover ? (
        <img src={sitePath(cover.src)} alt={cover.alt} loading={project.featured ? 'eager' : 'lazy'} />
      ) : (
        <div className="project-cover-fallback" aria-hidden="true"><Icon name="game" /></div>
      )}
    </div>
  )
}

export function ProjectActions({ project, showSource = false }: { project: Project; showSource?: boolean }) {
  const { demo, video } = project
  const repository = showSource ? project.repository : undefined
  if (!demo && !repository && !video) return null

  return (
    <div className="project-links flex flex-wrap gap-2">
      {demo && (
        <a className="button button-primary" href={demo.href} target="_blank" rel="noopener noreferrer">
          {demo.kind === 'download' ? <><Icon name="download" /> Download Demo</> : <><Icon name="game" /> Play Game</>}
        </a>
      )}
      {repository && <a href={repository} className="button button-secondary"><Icon name="code" /> Source Code</a>}
      {video && (
        <a className="button button-secondary" href={'href' in video ? video.href : sitePath(video.src)} target="_blank" rel="noopener noreferrer">
          <Icon name="video" /> Project Video
        </a>
      )}
    </div>
  )
}

export function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const href = sitePath(`projects/${project.slug}/`)

  return (
    <article className={`project-card${wide ? ' featured-card' : ''}`}>
      <ProjectVisual project={project} />
      <div className="project-copy">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <ProjectCategories categories={project.categories} />
        <div className="project-card-footer">
          <TechList entries={project.stack.slice(0, 4)} />
          <div className="project-card-actions">
            <a className="button button-secondary project-cta" aria-label={`View project ${project.title}`} href={href} onClick={rememberProjectScroll}>View Project</a>
            <ProjectActions project={project} />
          </div>
        </div>
      </div>
    </article>
  )
}

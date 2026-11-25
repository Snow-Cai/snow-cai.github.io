import type { ReactNode } from 'react'
import type { Project } from '../data/projects'
import { Layout } from '../components/Layout'
import { ProjectActions, ProjectCategories, ProjectVisual, TechList } from '../components/ProjectCards'
import { sitePath } from '../paths'
import { backToProjectList } from '../projectNavigation'

function DetailSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="detail-section"><h2>{title}</h2>{children}</section>
}

function DetailList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null

  return (
    <DetailSection title={title}>
      <ul className="detail-list">{items.map(item => <li key={item}>{item}</li>)}</ul>
    </DetailSection>
  )
}

function GameplayVideo({ video }: { video: Extract<NonNullable<Project['video']>, { src: string }> }) {
  return (
    <figure>
      <video controls playsInline preload="none" src={sitePath(video.src)} aria-label={video.description}>
        {video.captions && <track kind="captions" src={sitePath(video.captions)} srcLang="en" label="English" default />}
        <a href={sitePath(video.src)}>Download gameplay video</a>
      </video>
      <figcaption>{video.description}</figcaption>
    </figure>
  )
}

export function ProjectPage({ project }: { project: Project }) {
  const { title, category, overview, stack, screenshots, video, resources } = project
  const localVideo = video && 'src' in video ? video : undefined
  const gallery = project.cover ? screenshots : screenshots?.slice(1)
  const hasMedia = Boolean(gallery?.length || localVideo || resources?.length)

  return (
    <Layout>
      <main id="main" className="shell detail-page" tabIndex={-1}>
        <a className="back-link" href={sitePath('projects/')} onClick={backToProjectList}>Back to projects</a>
        <header className="detail-header">
          <p className="eyebrow">{category} · <time dateTime={String(project.year)}>{project.year}</time></p>
          <h1>{title}</h1>
          <p>{overview}</p>
          <ProjectCategories categories={project.categories} />
          <TechList entries={stack} />
          <ProjectActions project={project} showSource />
        </header>
        <ProjectVisual project={project} />
        <div className={hasMedia ? 'detail-grid' : 'detail-content'}>
          <div>
            <DetailList title="My Contributions" items={project.contributions} />
            <DetailList title="Technical Implementation" items={project.implementation} />
            <DetailList title="Challenges & Solutions" items={project.challenges} />
            <DetailList title="Outcomes & Achievements" items={project.outcomes} />
          </div>
          {hasMedia && (
            <DetailSection title="Project Media">
              <div className="media-gallery">
                {gallery?.map(screenshot => (
                  <img key={screenshot.src} src={sitePath(screenshot.src)} alt={screenshot.alt} loading="lazy" />
                ))}
                {localVideo && <GameplayVideo video={localVideo} />}
                {resources?.length ? (
                  <ul className="flex flex-wrap gap-3" aria-label="Project resources">
                    {resources.map(resource => (
                      <li key={resource.href}><a className="button button-secondary" href={resource.href}>{resource.label}</a></li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </DetailSection>
          )}
        </div>
      </main>
    </Layout>
  )
}

export function NotFound() {
  return (
    <Layout>
      <main id="main" className="shell detail-page missing-page" tabIndex={-1}>
        <h1>Page not found</h1>
        <a className="button button-primary" href={sitePath('projects/')}>View Projects</a>
      </main>
    </Layout>
  )
}

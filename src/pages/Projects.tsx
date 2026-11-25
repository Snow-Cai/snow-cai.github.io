import { useState } from 'react'
import { ItchGamesLink, Layout } from '../components/Layout'
import { ProjectCard } from '../components/ProjectCards'
import { projectCategories, projects } from '../data/projects'
import { useProjectListScroll } from '../projectNavigation'

const filters = ['All Projects', ...projectCategories] as const
type Filter = (typeof filters)[number]

export function Projects() {
  const [filter, setFilter] = useState<Filter>(() =>
    filters.find(category => category === history.state?.projectListFilter) ?? 'All Projects',
  )
  useProjectListScroll()

  function selectFilter(category: Filter) {
    history.replaceState({ ...history.state, projectListFilter: category }, '')
    setFilter(category)
  }
  const visibleProjects = filter === 'All Projects'
    ? projects
    : projects.filter(project => project.categories.includes(filter))
  const years = [...new Set(visibleProjects.map(project => project.year))]

  return (
    <Layout>
      <main id="main" className="shell detail-page" tabIndex={-1}>
        <header className="detail-header catalog-header">
          <h1>All Projects</h1>
          <ItchGamesLink />
        </header>
        <div className="project-filters flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {filters.map(category => (
            <button className="project-filter" type="button" key={category} aria-pressed={filter === category} onClick={() => selectFilter(category)}>
              {category}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">{visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} shown</p>
        {visibleProjects.length > 0 ? (
          years.map(year => (
            <section className="catalog-year" key={year} aria-labelledby={`year-${year}`}>
              <h2 id={`year-${year}`}>{year}</h2>
              <div className="project-grid catalog-grid">
                {visibleProjects.filter(project => project.year === year).map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          ))
        ) : <p className="pending-note">No projects in this category yet.</p>}
      </main>
    </Layout>
  )
}

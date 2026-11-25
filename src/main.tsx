import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { projects } from './data/projects'
import { Home } from './pages/Home'
import { NotFound, ProjectPage } from './pages/ProjectPage'
import { Projects } from './pages/Projects'
import { currentPath } from './paths'
import './styles.css'

const path = currentPath()
const project = projects.find(entry => path === `projects/${entry.slug}`)
const catalog = path === 'projects'

if (project) document.title = `${project.title} | Snow Cai`
else if (catalog) document.title = 'All Projects | Snow Cai'
else if (path) document.title = 'Page not found | Snow Cai'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {!path ? <Home /> : catalog ? <Projects /> : project ? <ProjectPage project={project} /> : <NotFound />}
  </StrictMode>,
)

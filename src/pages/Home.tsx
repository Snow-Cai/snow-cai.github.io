import type { ReactNode } from 'react'
import { ItchGamesLink, Layout, ProfileLinks, ResumeLink } from '../components/Layout'
import { Jellyfish } from '../components/Jellyfish'
import { ProjectCard } from '../components/ProjectCards'
import { education, experience, profile, skillGroups } from '../data/profile'
import { projects } from '../data/projects'
import { sitePath } from '../paths'
import { useProjectListScroll } from '../projectNavigation'

function Section({ id, label, title, children }: { id: string; label?: string; title: string; children: ReactNode }) {
  return (
    <section className="home-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        {label && <p className="eyebrow">{label}</p>}
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      {children}
    </section>
  )
}

export function Home() {
  const featured = projects.filter(project => project.featured)

  useProjectListScroll(true)

  return (
    <Layout home>
      <main id="main" className="shell" tabIndex={-1}>
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span />{profile.role}</p>
            <h1 id="intro-title">{profile.givenName} <span>“{profile.preferredName}”</span> {profile.familyName}</h1>
            <p className="hero-description">{profile.introduction}</p>
            <div className="hero-actions flex flex-wrap gap-3">
              <a className="button button-primary" href="#work">View Projects</a>
              <ResumeLink className="button button-secondary" />
            </div>
            <ProfileLinks />
          </div>
          <div className="hero-art" aria-hidden="true">
            <Jellyfish className="hero-jellyfish-pink" />
            <Jellyfish className="hero-jellyfish-blue jellyfish-blue" />
            <span className="jellyfish-bubbles"><span /><span /><span /></span>
          </div>
        </section>

        <Section id="work" label="Portfolio" title="Featured Projects">
          {featured[0] && <ProjectCard project={featured[0]} wide />}
          <div className="project-grid">
            {featured.slice(1).map(project => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <div className="catalog-links flex flex-wrap gap-3">
            <a className="button button-primary" href={sitePath('projects/')}>View All Projects</a>
            <ItchGamesLink />
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <div className="skill-grid">
            {skillGroups.map(group => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="experience-list">
            {experience.map(item => (
              <article className="experience-item" key={item.title}>
                <time dateTime={item.dateTime}>{item.dates}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p className="experience-context">{item.context}</p>
                  <ul>{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="about" title="About Me">
          <div className="about-grid">
            <p>{profile.about}</p>
            <dl className="education">
              {education.map(item => <div key={item.degree}><dt>{item.degree}</dt><dd>{item.dates}</dd></div>)}
            </dl>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="contact-panel">
            <ProfileLinks includeEmail />
            <ResumeLink className="button button-secondary" />
          </div>
        </Section>
      </main>
    </Layout>
  )
}

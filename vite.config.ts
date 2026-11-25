import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { projects } from './src/data/projects.ts'

export default defineConfig({
  base: process.env.PORTFOLIO_BASE || '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'portfolio-static-pages',
      apply: 'build',
      async writeBundle({ dir }, bundle) {
        const entry = bundle['index.html']
        if (entry?.type !== 'asset' || typeof entry.source !== 'string' || !dir) {
          throw new Error('Expected a built portfolio index.html')
        }
        const html = entry.source
        const catalogDir = resolve(dir, 'projects')
        await mkdir(catalogDir, { recursive: true })
        await writeFile(resolve(catalogDir, 'index.html'), html.replace(/<title>.*?<\/title>/, '<title>All Projects | Snow Cai</title>'))
        await Promise.all(projects.map(async (project) => {
          const pageDir = resolve(catalogDir, project.slug)
          await mkdir(pageDir, { recursive: true })
          const title = project.title.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
          const page = html.replace(/<title>.*?<\/title>/, () => `<title>${title} | Snow Cai</title>`)
          await writeFile(resolve(pageDir, 'index.html'), page)
        }))
        await writeFile(resolve(dir, '404.html'), html.replace(/<title>.*?<\/title>/, '<title>Page not found | Snow Cai</title>'))
      },
    },
  ],
})

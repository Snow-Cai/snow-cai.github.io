interface Profile {
  givenName: string
  preferredName: string
  familyName: string
  initials: string
  role: string
  introduction: string
  about: string
  email?: string
  github?: string
  linkedin?: string
  itch: string
  resume?: string
}

export const profile: Profile = {
  givenName: 'Xuerou',
  preferredName: 'Snow',
  familyName: 'Cai',
  initials: 'SC',
  role: 'Software Engineer & Game Developer',
  introduction: 'I’m a Computer Science & Engineering master’s student at the University of Nevada, Reno. My work spans Unity gameplay systems, AI integration, and data analysis.',
  about: 'I’m completing my master’s in Computer Science & Engineering at the University of Nevada, Reno, where I also earned my bachelor’s. I’m interested in building interactive software, especially the systems behind gameplay, simulations, and AI-driven features.',
  email: 'snow040919@gmail.com',
  github: 'https://github.com/Snow-Cai',
  linkedin: 'https://www.linkedin.com/in/xuerou-cai-71b282337/',
  itch: 'https://mioolm.itch.io/',
}

export const displayName = `${profile.preferredName} ${profile.familyName}`
export const fullName = `${profile.givenName} “${profile.preferredName}” ${profile.familyName}`

interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'Languages & Web', skills: ['C', 'C++', 'C#', 'Python', 'JavaScript', 'R', 'SQL', 'HTML'] },
  { title: 'Software Engineering', skills: ['Algorithms', 'Data Structures', 'API Integration', 'Unit Testing', 'Agile Development'] },
  { title: 'Game Development', skills: ['Unity', 'Gameplay Programming', 'Gameplay Testing', 'A*', 'RRT', 'Potential-Field Navigation'] },
  { title: 'AI & Machine Learning', skills: ['Multimodal AI', 'Large Language Models', 'Diffusion Models', 'Video Generation', 'Model Evaluation'] },
  { title: 'Data & Reporting', skills: ['Dataset Preparation', 'Data Analysis', 'Microsoft Excel', 'Crystal Reports'] },
  { title: 'Development Tools', skills: ['Git', 'GitHub', 'Visual Studio Code', 'Wireshark'] },
]

interface Experience {
  title: string
  context: string
  dates: string
  dateTime: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    title: 'Undergraduate Research Intern',
    context: 'University of Nevada, Reno · Reno, NV',
    dates: 'Dec 2025 – May 2026',
    dateTime: '2026-05',
    highlights: [
      'Built and evaluated video generation pipelines for text and image inputs using multimodal AI, language models, and diffusion models.',
      'Prepared datasets, ran experiments, and analyzed model performance.',
    ],
  },
  {
    title: 'AI Software Engineer Intern',
    context: 'Pluto in Aquarius · Reno, NV',
    dates: 'Aug 2025 – Dec 2025',
    dateTime: '2025-12',
    highlights: [
      'Designed modular JavaScript workflows for client intake, content scheduling, and social media analytics.',
      'Defined the inputs and outputs for each stage and selected APIs and tools so the workflows could be adapted for multiple clients.',
    ],
  },
  {
    title: 'Public Service Intern',
    context: 'State of Nevada · Carson City, NV',
    dates: 'Feb 2024 – Mar 2025',
    dateTime: '2025-03',
    highlights: [
      'Used SQL and Excel to organize data and support interdepartmental analysis and reporting.',
      'Prepared internal reports and documentation to support communication across agencies.',
    ],
  },
]

export const education = [
  { degree: 'M.S. in Computer Science & Engineering', dates: 'Expected May 2027' },
  { degree: 'B.S. in Computer Science & Engineering', dates: 'May 2026' },
]

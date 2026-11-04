import './style.css'

/* ------------------------------------------------------------------
   EDIT THIS BLOCK. Everything on the page comes from the data below.
   Images go in the `public/images/` folder (create it if needed).
   Example: put your photo at public/images/me.jpg and keep '/images/me.jpg'.
------------------------------------------------------------------- */

type Project = {
  title: string
  blurb: string
  image: string
  tags: string[]
  live?: string
  code?: string
}

type Job = {
  role: string
  place: string
  when: string
  points: string[]
}

type SkillGroup = {
  name: string
  items: string[]
}

const profile = {
  name: 'Nathaniel Ochoa',
  role: 'I.T Specialist',
  tagline: 'Assisting In Dealership Network Infrastructure ',
  photo: '/public/images/Fernando.1.jpg',
  email: 'nate@billluke.com',
  github: 'https://github.com/natebillluke',
}

const about = {
  paragraphs: [
    ' ',
    'Helping & Securing A Family Owned Dealership Creating Email Accounts Setting Up Work Stations Providing VOIP and providing On Hands help'
    , '',
  ],
  photos: [
    { src: '/images/about-1.jpg', alt: 'Me at my desk' },
    { src: '/images/about-2.jpg', alt: 'Me away from the keyboard' },
  ],
}

const projects: Project[] = [
  {
    title: 'Home Lab',
    blurb: 'Self Hosted Network Stack Building & Deploying Personal Tools',
    image: '/images/project-1.jpg',
    tags: ['JellyFin', 'Proxmox'],
  },
  {
    title: 'Portfolio',
    blurb: '',
    image: '/images/project-2.jpg',
    tags: ['HTML', 'CSS'],
    code: '#',
  },
  {
    title: 'Project three',
    blurb: 'Small projects count. Show what you built and what you learned.',
    image: '/images/project-3.jpg',
    tags: ['JavaScript'],
    live: '#',
  },
]

const skills: SkillGroup[] = [
  { name: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { name: 'Tools', items: ['Git', 'GitHub', 'Vite', 'npm', 'VS Code', 'Reynolds & Reynolds', 'Adobe'] },
  { name: 'Environments', items: ['Windows', 'Linux (Arch)'] },
]

const experience: Job[] = [
  {
    role: 'IT Specialist Dodge',
    place: 'Bill Luke ',
    when: '2025 to now',
    points: ['One line on what you did and the result.', 'Another line, ideally with a number.'],
  },
  {
    role: 'PHX Engine Specialist',
    place: 'Auto Machine Shop',
    when: '2022 to 2025',
    points: ['Disassembaling Engines,Clean Engine Components,Build Engine Crates.Receive & Ship Engine.'],
  },
  {
    role: 'Bank Teller',
    place: 'Wells Fargo',
    when: '2019 to 2020',
    points: ['Complete Memeber Transactions, Update Current Members, Create Trust and Build Report With Members'],
  },
]

/* ------------------------------------------------------------------
   Rendering. You can leave everything below alone at first.
------------------------------------------------------------------- */

const app = document.querySelector<HTMLDivElement>('#app')!

const imageSlot = (src: string, alt: string, cls: string, eager = false): string => `
  <figure class="slot ${cls}">
    <img src="${src}" alt="${alt}" decoding="async"${eager ? '' : ' loading="lazy"'} />
    <figcaption class="slot-hint">Add an image at public${src}</figcaption>
  </figure>`

const projectCards = projects
  .map(
    (p, i) => `
  <article class="project${i === 0 ? ' project-lead' : ''}">
    ${imageSlot(p.image, `${p.title} screenshot`, 'project-img')}
    <div class="project-body">
      <h3>${p.title}</h3>
      <p>${p.blurb}</p>
      <ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
      <div class="links">
        ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live site</a>` : ''}
        ${p.code ? `<a href="${p.code}" target="_blank" rel="noopener">Source code</a>` : ''}
      </div>
    </div>
  </article>`,
  )
  .join('')

const skillGroups = skills
  .map(
    (g) => `
  <div class="skill-group">
    <h3>${g.name}</h3>
    <ul class="chips">${g.items.map((s) => `<li>${s}</li>`).join('')}</ul>
  </div>`,
  )
  .join('')

const jobs = experience
  .map(
    (j) => `
  <li class="job">
    <div class="job-head">
      <h3>${j.role}</h3>
      <p class="job-meta">${j.place}, ${j.when}</p>
    </div>
    <ul>${j.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>
  </li>`,
  )
  .join('')

app.innerHTML = `
  <header class="nav">
    <a class="brand" href="#top">${profile.name}</a>
    <nav aria-label="Main">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a class="nav-cta" href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <h1>${profile.name}</h1>
        <p class="hero-role">${profile.role}</p>
        <p class="hero-tagline">${profile.tagline}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#projects">See my projects</a>
          <a class="btn" href="#contact">Get in touch</a>
        </div>
      </div>
      <div class="hero-photo">
        ${imageSlot(profile.photo, `Portrait of ${profile.name}`, 'portrait', true)}
      </div>
    </section>

    <section id="about" class="section">
      <h2>About</h2>
      <div class="about">
        <div class="about-text">
          ${about.paragraphs.map((p) => `<p>${p}</p>`).join('')}
        </div>
        <div class="about-photos">
          ${about.photos.map((p, i) => imageSlot(p.src, p.alt, `about-photo about-photo-${i + 1}`)).join('')}
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <h2>Projects</h2>
      <div class="projects">${projectCards}</div>
    </section>

    <section id="skills" class="section">
      <h2>Skills</h2>
      <div class="skills">${skillGroups}</div>
    </section>

    <section id="experience" class="section">
      <h2>Experience</h2>
      <ol class="timeline">${jobs}</ol>
    </section>

    <section id="contact" class="section contact">
      <h2>Contact</h2>
      <p class="contact-lead">Have a project or a role in mind? Send a note.</p>
      <div class="contact-links">
        <a class="btn btn-primary" href="mailto:${profile.email}">${profile.email}</a>
        <a class="btn" href="${profile.github}" target="_blank" rel="noopener">GitHub</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>&copy; ${new Date().getFullYear()} ${profile.name}</p>
  </footer>
`

/* Show a friendly placeholder when an image file is missing. */
document.querySelectorAll<HTMLImageElement>('.slot img').forEach((img) => {
  const markEmpty = (): void => {
    img.closest('.slot')?.classList.add('empty')
  }
  img.addEventListener('error', markEmpty)
  if (img.complete && img.naturalWidth === 0) markEmpty()
})
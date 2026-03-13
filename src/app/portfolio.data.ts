import { PortfolioData } from './portfolio.models';

export const PORTFOLIO_DATA: PortfolioData = {
  name: 'Jishnu V',
  role: 'Angular Developer & Software Engineer',
  location: 'Kochi, India',
  email: 'jishnukyr@gmail.com',
  phone: '+91 9645792624',
  intro: 'Building fast, reliable product interfaces for finance and enterprise teams.',
  summary:
    'Software developer with 4+ years of hands-on experience designing, developing, and improving web applications. Strong in Angular-based frontend architecture, UI delivery, performance tuning, and cross-team collaboration in Agile environments.',
  availability: 'Open to impactful frontend and full-stack product roles.',
  resumeHref: 'assets/documents/JishnuV_AngularDeveloper_Resume.pdf',
  portrait: {
    src: 'assets/images/jishnu-portrait.webp',
    alt: 'Portrait of Jishnu V'
  },
  metrics: [
    { value: '4+', label: 'Years of experience' },
    { value: '6+', label: 'Production projects shipped' },
    { value: 'Angular 16+', label: 'Modern UI delivery' }
  ],
  primaryLinks: [
    { label: 'Email me', href: 'mailto:jishnukyr@gmail.com', icon: 'fa-regular fa-envelope' },
    { label: 'Call me', href: 'tel:+919645792624', icon: 'fa-solid fa-phone' },
    {
      label: 'Download resume',
      href: 'assets/documents/JishnuV_AngularDeveloper_Resume.pdf',
      icon: 'fa-regular fa-file-lines'
    }
  ],
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jishnu-valappinakath/' },
    { label: 'GitHub', href: 'https://github.com/jishnukayyur' }
  ],
  expertise: [
    'Angular application architecture',
    'Enterprise dashboard and workflow UI',
    'Trading , Sales ERP and finance domain products',
    'Performance tuning and bug fixing',
    'Agile delivery and release support'
  ],
  experience: [
    {
      company: 'Thomsun Infocare',
      role: 'Senior Software Engineer',
      period: 'September 2024 - Present',
      location: 'Kochi, India',
      summary: 'Working on a trading and finance ERP platform with Angular on the frontend and .NET on the backend.',
      highlights: [
        'Built user-focused modules that improved operational workflows and client-facing usability.',
        'Contributed to Angular frontend delivery alongside backend API integration in .NET.',
        'Optimized performance, resolved critical defects, and supported timely production releases.',
        'Participated in Scrum ceremonies and translated customer feedback into product improvements.'
      ]
    },
    {
      company: 'Geojit Technologies',
      role: 'Software Engineer',
      period: 'January 2022 - June 2024',
      location: 'Kochi, India',
      summary: 'Delivered multiple Angular applications and internal finance platforms used across Geojit teams and branches.',
      highlights: [
        'Developed and tested new software features across trading, reporting, and back-office products.',
        'Contributed to maintainable UI workflows for internal teams in a detail-oriented delivery environment.',
        'Worked closely with teammates to meet deadlines in a fast-paced Agile process.',
        'Supported product quality through hands-on debugging, refinement, and release readiness.'
      ]
    }
  ],
  projects: [
    {
      name: 'Trading ERP',
      headline: 'Angular + .NET finance platform',
      description:
        'Designed and developed frontend components for a trading ERP system, while supporting API integration and cross-team delivery for enterprise finance workflows.',
      stack: ['Angular', '.NET', 'TypeScript', 'Finance Domain']
    },
    {
      name: 'SPICE',
      headline: 'Back-office financial system for Geojit',
      description:
        'Maintained and enhanced a large internal web application used across Geojit branches in India as part of a 6-member team.',
      stack: ['Angular', 'Java Services', 'Enterprise UI']
    },
    {
      name: 'GLIME',
      headline: 'Client configuration workflow app',
      description:
        'Built standalone workflow screens connected to the SPICE ecosystem, including payment gateway and confirmation-oriented flows.',
      stack: ['Angular', 'Workflow Design', 'Back-office Tools']
    },
    {
      name: 'SPARC',
      headline: 'Angular 15 branch operations platform',
      description:
        'Worked as a frontend developer on a branch-facing back-office system used across Geojit locations, integrating Angular 15 with Java-based services.',
      stack: ['Angular 15', 'Java Services', 'Operations Platform']
    },
    {
      name: 'GTL Assist',
      headline: 'Process automation for trading teams',
      description:
        'Delivered frontend workflows for a process-automation product that handled trading file downloads, AD login, and internal operational tasks.',
      stack: ['Angular 16', 'AD Login', 'Java Services']
    },
    {
      name: 'Smartfolios & Query Builder',
      headline: 'Investment and reporting products',
      description:
        'Supported an equity investment platform and a user query builder that generated tailored reports through intuitive Angular-based frontends.',
      stack: ['Angular 7-16', 'Reporting UI', 'Investment Platform']
    }
  ],
  skills: [
    {
      title: 'Frontend',
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'CSS']
    },
    {
      title: 'UI Libraries',
      items: ['Angular Material', 'PrimeNG', 'NG-ZORRO', 'Bootstrap', 'Syncfusion']
    },
    {
      title: 'Backend & Data',
      items: ['.NET Core', 'Java Services', 'MSSQL']
    }
  ],
  education: [
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Kerala Government Polytechnic / Department of Technical Education',
      period: 'July 2017 - May 2020',
      description:
        'Built a strong foundation in computer engineering principles, practical software development, and technical problem solving.'
    }
  ]
};

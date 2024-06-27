interface Project {
  projectName: string
  projectLink: string
  imageSrc: string
  altText: string
  description: string
  technologies: string[]
  githubLink: string
}

export const projectsData: Record<string, Project> = {
  weatherapi: {
    projectName: 'Weather API',
    projectLink: 'https://weather-api.pushed.nz/',
    imageSrc: '/w.png',
    altText: 'Weather API Project',
    description:
      'Allows users to see weather forecasts, including current conditions, temperature, and wind data. This project was a chance to practice using external APIs and deploying a live site with included dotenv files. I based the location on my hometown of Wellington, New Zealand and used the MeteoSource API to source the data.',
    technologies: [
      'React',
      'Express',
      'superagent',
      'TypeScript',
      'Weather API',
      'Vite',
    ],
    githubLink: 'https://github.com/jack-crawford-1/weather-api',
  },
  communitygarden: {
    projectName: 'Community Garden',
    projectLink: 'https://github.com/jack-crawford-1/garden-map',
    imageSrc: '/gardenmap.png',
    altText: 'Community Garden Project',
    description:
      'This was a personal project that allows users to find, share, and manage green spaces or community gardens. This was built during bootcamp as a solo project allowing me to practice full-stack development including authentication and database management, as well as integrating external APIs for location and information, and mapping services from Google Maps API. Have deployed a previous version of this project using Dokku and plan to deploy this version to Vercel.',
    technologies: [
      'Next.js',
      'Next Auth',
      'React',
      'TypeScript',
      'Prisma',
      'SQLite3',
      'Google Maps API',
      'Multer',
      'dotenv',
    ],
    githubLink: 'https://github.com/jack-crawford-1/garden-map',
  },
  todoapp: {
    projectName: 'Todo App',
    projectLink: 'https://todo-fullstack.pushed.nz/',
    imageSrc: '/todo-project.png',
    altText: 'Todo App Project',
    description:
      ' The Todo app allow for full CRUD operations on a database with user authentication and protected routes. This was my first time using auth0 for authentication and was a great opportunity to practice full-stack development with React and Express. The app wil show only todos for the specific user that is logged in.',
    technologies: [
      'React',
      'Express',
      'express-jwt',
      'auth0',
      'sqlite3',
      'superagent',
      'react-query',
    ],
    githubLink: 'https://github.com/jack-crawford-1/fullstack-todo-app',
  },
  nasaapi: {
    projectName: 'Nasa API',
    projectLink: '',
    imageSrc: '/nasa-img.png',
    altText: 'Nasa API Project',
    description:
      '(NOT CURRENTLY DEPLOYED) This app allows users to view the Image Of The Day sourced from the NASA API with React and TypeScript. It was a fun way to practice using external APIs and a good excuse to look at pictures of space.',
    technologies: [
      'React',
      'Express',
      'Knex',
      'TypeScript',
      'NASA API',
      'superagent',
      'dotenv',
    ],
    githubLink: 'https://github.com/jack-crawford-1/nasa-api.git',
  },
  pokemonapi: {
    projectName: 'PokemonAPI',
    projectLink: 'https://pokedex-api-sage.vercel.app/',
    imageSrc: '/pokemon-project.png',
    altText: 'Pokemon Project',
    description:
      'This app allows users to view detailed information on their favorite Pokemon. Using React Router and the Pokemon API and deployed through Vercel, this was an extension of a challenge in class to practice using external APIs and routing in React.',
    technologies: [
      'React',
      'Express',
      'TypeScript',
      'Poke API',
      'React Router',
    ],
    githubLink: 'https://github.com/jack-crawford-1/Pokedex',
  },
  groupproject: {
    projectName: 'DevAcademy Group Project',
    projectLink: 'https://optimisticweather.pushed.nz/',
    imageSrc: '/ow.png',
    altText: 'Group Project',
    description:
      'This was our final group project during bootcamp, a weather app that allows users to find activities and events for a specific location based on the weather forecast. This was build over 5 days with a team of 4 developers and was a great opportunity to practice working in an agiile environment based on real-world conditions where we problem solved as a group and worked on a shared codebase using git and GitHub',
    technologies: [
      'React',
      'Express',
      'Knex',
      'sqlite3',
      'TypeScript',
      'openai',
      'Weather API',
      'EventFinda API',
      'supertest',
    ],
    githubLink: 'https://github.com/tohora-2024/optimisticweather',
  },
  minipiano: {
    projectName: 'Mini Piano using Tone.js',
    projectLink: 'https://github.com/jack-crawford-1/Piano-app-tonejs-react',
    imageSrc: '/piano.png',
    altText: 'Piano app Tone.js with React',
    description:
      "A mini piano app that uses React with custom CSS for the UI, TypeScript for type safety, and Tone.js for the sound synthesis. It uses React's state management and event handling to manage key presses and chord playback. The app also leverages hooks like useState and useEffect to handle real-time updates and user interactions.",
    technologies: ['React', 'Tone.js', 'TypeScript', 'Vite'],
    githubLink: 'https://github.com/jack-crawford-1/Piano-app-tonejs-react',
  },

  boilerplate: {
    projectName: 'React / Express Boilerplate: Fullstack',
    projectLink: 'https://github.com/jack-crawford-1/React-Express-Boilerplate',
    imageSrc: '/boilerplate.png',
    altText: 'Fullstack Boilerplate Project',
    description: `
    This full-stack app boilerplate leverages modern technologies and best practices to provide a robust foundation for building web applications. The project includes authentication setup using Auth0 and features well-structured API endpoints for both server-side functionality and external data fetching. Internal routes handle server-side logic and responses, while external routes use fetch and superagent to retrieve data from third-party APIs.

  `,
    technologies: [
      'React',
      'Express',
      'Auth0',
      'SQLite',
      'Docker',
      'Procfile',
      'fetch',
      'superagent',
    ],
    githubLink: 'https://github.com/jack-crawford-1/React-Express-Boilerplate',
  },
}

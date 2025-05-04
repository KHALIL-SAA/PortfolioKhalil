import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'postgresSite',
    description: 'postgresSite',
    demoLink: 'https://github.com/KHALIL-SAA/postgresSite',
    tags: ['Postgres', 'SQL'],
  },
  {
    name: 'QUANTIKgame',
    description: 'QUANTIKgame',
    demoLink: 'https://github.com/KHALIL-SAA/QUANTIKgame',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['PHP', 'MYSQL', 'CSS']
  },
  {
    name: 'BlogSymfony',
    description: 'BlogSymfony',
    demoLink: 'https://github.com/KHALIL-SAA/BlogSymfony',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Symfony', 'TWIG', 'MySQL', 'PHP']
  },
  {
    name: 'SQUADRO-game',
    description : 'SQUADRO-game',
    demoLink: 'https://github.com/KHALIL-SAA/SQUADRO-game',
    tags: ['PHP', 'MYSQL', 'CSS']
  },
  {
    name: 'Random-and-Pseudo-Random',
    description: 'Random-and-Pseudo-Random',
    demoLink: 'https://github.com/KHALIL-SAA/Random-and-Pseudo-Random',
    tags: ['C','CMAKE']
  },
  {
    ...(await getRepositoryDetails('syakirurahman/pokemon-catcher')),
    name: 'ThreadFusion',
    demoLink: 'https://github.com/KHALIL-SAA/ThreadFusion',
    tags: ['C','CMAKE']
  }
]

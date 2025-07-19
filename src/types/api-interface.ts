export enum ProjectCategory {
  WEB_DEVELOPMENT = 'WEB_DEVELOPMENT',
  MOBILE_DEVELOPMENT = 'MOBILE_DEVELOPMENT',
  BACKEND_SYSTEMS = 'BACKEND_SYSTEMS',
  DATA_SCIENCE = 'DATA_SCIENCE',
  FULL_STACK = 'FULL_STACK',
  ALL = '',
}

export type TypeExperience = {
  type: 'WORK' | 'EDUCATION'
}

export const categoryDisplayNames: Record<ProjectCategory, string> = {
  [ProjectCategory.WEB_DEVELOPMENT]: 'Desenvolvimento Web',
  [ProjectCategory.MOBILE_DEVELOPMENT]: 'Desenvolvimento Mobile',
  [ProjectCategory.BACKEND_SYSTEMS]: 'Sistemas Backend',
  [ProjectCategory.DATA_SCIENCE]: 'Ciência de Dados',
  [ProjectCategory.FULL_STACK]: 'Full Stack',
  [ProjectCategory.ALL]: 'Todos',
}

export interface PropsData {
  id: number
  title: string
  date: string
  description: string
  linkDemo: string
  shortDescription: string
  linkGithub: string
  highlighted?: boolean
  category: ProjectCategory
  imageUrl?: string
}

export interface PropsResponseRepositories {
  repository: PropsData[]
  totalItems: number
}

export interface PropsExperience {
  id: number
  title: string
  description: string
  startDate: string
  endDate: string
  location: string
  organization: string
  type: TypeExperience
  mode: string
}

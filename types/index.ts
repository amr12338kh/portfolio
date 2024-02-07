export interface ProjectsProps {
    id: number,
    title: string,
    img: string,
    description: string,
    website_link: string,
    code_link: string,

}

export interface ProjectsItemProps {
    item: [ProjectsProps]
}

export interface HeroProps {
  banner: {
    url: string
  }
  hero_id: number
  logo: {
    url: string
  }
}
export interface SkillsDataProps {
    skill_Image: {
        url: string
      },
      skill_id: number,
      skill_title: string
}

export interface WhatIBringProps {
    title: string,
    description: string,
    itemId: number,
    image: {
      url: string
    }
}

export interface WhyChooseMeProps {
    title: string,
    description: string,
    itemId: number,
    image: {
      url: string
    }
}

export interface ProjectsDataProps {
    projectId: number,
    title: string,
    release: boolean,
    projectLink: string,
    projectCode: string,
    date: string,
    description: string,
    createdAt: string,
    isFav: boolean,
    projectImage: {
      url: string,
    }
}

export interface AboutProps {
    id: number,
    image: {
      url: string,
    }
    description: string,
    subtitle: string,
}


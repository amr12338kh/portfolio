import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { 
  ProjectsDataProps,
  AboutProps,
  SkillsDataProps,
  WhatIBringProps,
  WhyChooseMeProps, 
  HeroProps,
} from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const HYGRAPH_ENDPOINT = `${process.env.HYGRAPH_ENDPOINT}`;

async function fetchData<T>(query: string): Promise<T> {
  if (!HYGRAPH_ENDPOINT) {
    throw new Error("HYGRAPH_ENDPOINT is not defined");
  }

  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 3600, // 1 Hour
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  return json.data;
}

export const getHero = async (): Promise<HeroProps> => {
  const query = `
  query Hero {
    hero(where: {hero_id: 1}) {
      banner {
        url
      }
      hero_id
      logo {
        url
      }
    }
  }`;

  return (await fetchData<{ hero: HeroProps; }>(query)).hero;
}

export const getProjects = async (): Promise<ProjectsDataProps[]> => {
  const query = `
    query Projects {
      projects_Data {
        projectId
        title
        release
        projectLink
        projectCode
        date
        description
        createdAt
        isFav
        projectImage {
          url
        }
      }
    }`;

  return (await fetchData<{ projects_Data: ProjectsDataProps[]; }>(query)).projects_Data;
}

export const getSkills = async (): Promise<SkillsDataProps[]> => {
  const query = `
    query Skills {
      skills_Data {
        skill_Image {
          url
        }
        skill_id
        skill_title
      }
    }`;

  return (await fetchData<{ skills_Data: SkillsDataProps[]; }>(query)).skills_Data;
}

export const getAbout = async (): Promise<AboutProps> => {
  const query = `
    query About {
      about(where: {aboutId: 1}) {
        id
        image {
          url
        }
        description
        subtitle
      }
    }`;

  return (await fetchData<{ about: AboutProps; }>(query)).about;
}

export const getWhatIBrings = async (): Promise<WhatIBringProps[]> => {
  const query = `
    query WhatIBring {
      whatIBrings {
        title
        description
        itemId
        image {
          url
        }
      }
    }`;

  return (await fetchData<{ whatIBrings: WhatIBringProps[]; }>(query)).whatIBrings;
}

export const getWhyChoose = async (): Promise<WhyChooseMeProps[]> => {
  const query = `
    query WhyChoose {
      whyChooses {
        title
        description
        itemId
        image {
          url
        }
      }
    }`;

  return (await fetchData<{ whyChooses: WhyChooseMeProps[]; }>(query)).whyChooses;
}

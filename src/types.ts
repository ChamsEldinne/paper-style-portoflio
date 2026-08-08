export interface ProfileData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  status: string;
  photoUrl: string;
  about: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string; // "Present" allowed
  link?: string;
  bullets: string[];
  tech?: string[];
}

export interface Project {
  id: string;
  title: string;
  period?: string;
  link?: string;
  bullets: string[];
  tech: string[];
  assets?: Assets[];
}

interface Assets{
  id: string;
  type : "video" | "image";
  src: string;
}




export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  location?: string;
}

export interface Language {
  id: string;
  name: string;
  level: string;
}

export interface GalleryState {
  title: string;
  images: string[];
  index: number;
}


export interface PortfolioProps {
  profile?: ProfileData;
  skillGroups?: SkillGroup[];
  experiences?: Experience[];
  projects?: Project[];
  education?: Education[];
  languages?: Language[];
  contact?: ContactInfo;
}


export interface ContactInfo {
  email: string;
  phone: string;
  base: string;
  github: string;
  linkedin: string;
  signatureName: string;
  poweredByName: string;
  date: string;
}



export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface BlogPostData {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  author: string;
  tags: string[];
  sections: BlogSection[];
}


export interface BlogIndexProps {
  posts?: BlogPostPreview[];
  getHref?: (slug: string) => string;
}


export interface BlogPostPreview {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
}


export interface BlogPostProps {
  post: BlogPostData;
  backHref?: string;
  siteUrl?: string; // used to build share links; defaults to current location
}


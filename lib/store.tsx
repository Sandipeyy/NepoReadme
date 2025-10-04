import { create } from "zustand"

export interface Project {
  name: string
  description: string
  url: string
}

export interface ReadmeConfig {
  username: string
  name: string
  tagline: string
  bio: string
  email: string
  currentWork: string
  currentlyLearning: string
  funFact: string
  twitter: string
  linkedin: string
  instagram: string
  youtube: string
  devto: string
  medium: string
  discord: string
  website: string
  donation: string
  skills: string[]
  projects: Project[]
  theme: string
  widgets: {
    stats: boolean
    languages: boolean
    streak: boolean
    trophies: boolean
    activity: boolean
    profileViews: boolean
    topRepos: boolean
  }
}

interface ReadmeStore {
  config: ReadmeConfig
  updateConfig: (updates: Partial<ReadmeConfig>) => void
}

export const useReadmeStore = create<ReadmeStore>((set) => ({
  config: {
    username: "",
    name: "",
    tagline: "",
    bio: "",
    email: "",
    currentWork: "",
    currentlyLearning: "",
    funFact: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    youtube: "",
    devto: "",
    medium: "",
    discord: "",
    website: "",
    donation: "",
    skills: [],
    projects: [],
    theme: "radical",
    widgets: {
      stats: true,
      languages: true,
      streak: true,
      trophies: false,
      activity: false,
      profileViews: false,
      topRepos: false,
    },
  },
  updateConfig: (updates) =>
    set((state) => ({
      config: { ...state.config, ...updates },
    })),
}))
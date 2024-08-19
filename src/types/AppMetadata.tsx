// AppMetadata type

export default interface AppMetadata {
  name: string;
  id: string;
  platform: string;
  description: string;
  changelog: string;
  screenshots: string[];
  icon: string;
  categories: string[];
  ratings: Rating;
  reviews: Review[];
  downloads: number;
  developer: Developer;
}

export type Review = {
  name: string;
  createdAt: Date;
  ratings: number;
  content: string;
};

export type Rating = {
  count: number;
  average: number;
};

export type Developer = {
  name: string;
  url: string;
}
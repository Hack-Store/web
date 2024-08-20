// AppMetadata type

export default interface AppMetadata {
  name: string;
  id: string;
  platform: Platform;
  size: number;
  description: string;
  changelog: string;
  screenshots: Screenshot[];
  icon: string;
  categories: string[];
  ratings: Rating;
  reviews: Review[] | [];
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
};

export type Screenshot = {
  url: string;
  caption?: string;
  type: ScreenshotSize;
};

export enum ScreenshotSize {
  Narrow = "narrow",
  Wide = "wide",
}

export enum Platform {
  ANDROID = "android",
  IOS = "ios",
  WEB = "web",
}

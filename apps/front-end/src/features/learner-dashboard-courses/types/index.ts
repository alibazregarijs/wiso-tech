import { StaticImageData } from 'next/image';

export type LearnerCoursesT = {
  id: string;
  title: string;
  author: string;
  image: StaticImageData;
  progress: number;
  completed: boolean;
};

export type PageProps = {
  params: Promise<{ id?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

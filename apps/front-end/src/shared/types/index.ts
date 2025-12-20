import { StaticImageData } from 'next/image';

export type CoursesT = {
  id: string;
  title: string;
  author: string;
  image: StaticImageData;
  progress: number;
  completed: boolean;
};
export type coursesProps = {
  courses: CoursesT[];
  className?: string;
};

import { StaticImageData } from 'next/image';

export type LevelT = 'Beginner' | 'Intermediate' | 'Hard';

export type CoursesT = {
  id: string;
  title: string;
  author: string;
  level: LevelT;
  image: StaticImageData;
  progress: number;
  completed: boolean;
};

export type coursesProps = {
  courses: CoursesT[];
  className?: string;
};

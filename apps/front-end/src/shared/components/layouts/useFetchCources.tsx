'use client'; // Required for Next.js App Router

import { StaticImageData } from 'next/image';

// --- YOUR TYPES ---
export type CoursesT = {
  id: string;
  title: string;
  author: string;
  image: string | StaticImageData; // Adjusted slightly for mock compatibility
  progress: number;
  completed: boolean;
};

// Response schema typically includes data + metadata (total pages)
type CoursesResponse = {
  data: CoursesT[];
  meta: {
    total: number;
    totalPages: number;
    currentPage: number;
  };
};

// --- MOCK API FUNCTION ---
// In a real app, this would be: return axios.get(`/api/courses?page=${page}&limit=${limit}`)
export const fetchCourses = async (page: number, limit: number): Promise<CoursesResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock Data Generation
  const allCourses = Array.from({ length: 50 }).map((_, i) => ({
    id: (i + 1).toString(),
    title: `Mastering React - Module ${i + 1}`,
    author: 'John Doe',
    image: 'https://via.placeholder.com/150', // Placeholder image
    progress: Math.floor(Math.random() * 100),
    completed: Math.random() > 0.5,
  }));

  const start = (page - 1) * limit;
  const end = start + limit;
  const slicedData = allCourses.slice(start, end);

  return {
    data: slicedData,
    meta: {
      total: allCourses.length,
      totalPages: Math.ceil(allCourses.length / limit),
      currentPage: page,
    },
  };
};

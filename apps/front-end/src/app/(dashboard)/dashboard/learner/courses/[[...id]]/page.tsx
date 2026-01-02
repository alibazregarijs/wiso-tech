import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';

import LearnerNavbar from '@src/features/learner-dashboard/components/LearnerNavbar';
import { inProgressItems } from '@src/features/learner-dashboard/constants';
import ListCourses, {
  type techT,
} from '@src/features/learner-dashboard-courses/components/ListCourses';
import { type PageProps } from '@src/features/learner-dashboard-courses/types';
import Devider from '@src/shared/components/ui/atoms/Devider/Devider';
import Text from '@src/shared/components/ui/atoms/Text/Text';
import { LevelT } from '@src/shared/types';

// --- 1. The Dynamic Component ("The Hole") ---
// This component runs on the server at Request Time.
// It is the only part that waits for the URL parameters.
const CourseListContainer = async ({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  // ✅ ACTION: We await the params INSIDE the Suspense boundary
  const searchParams = await searchParamsPromise;

  // const page = Number(searchParams.page) || 1;
  const tech = (searchParams.tech as string) || undefined;
  const level = (searchParams.level as string) || undefined;

  // const { data, totalPages } = await db.courses.findMany({
  //   where: {
  //     tech: tech,
  //     level: level
  //   },
  //   take: 10,
  //   skip: (page - 1) * 10,
  // });

  return <ListCourses courses={inProgressItems} tech={tech as techT} level={level as LevelT} />;
};

// --- 2. The Static Shell (The Page) ---
// This component runs at Build Time (mostly).
// It sends the Navbar and Title to the browser INSTANTLY.
const Page = (props: PageProps) => {
  // ❌ IMPORTANT: Do NOT await searchParams here.
  // We pass the Promise down to the child.

  return (
    <div className="bg-green-dark-100 min-h-screen">
      {/* Static Content: Renders immediately */}
      <LearnerNavbar />
      <Devider />
      <div className="mt-8 flex flex-col gap-4 px-4">
        <Text as="h1" className="font-lexend text-4xl font-bold text-white">
          All Courses
        </Text>
        <Text as="p" className="text-gray-light-100 text-sm">
          Expand your knowledge and skills with our extensive course library.
        </Text>
      </div>
      <Devider className="mx-4 mt-8" />

      {/* Dynamic Content: Streams in later */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center p-10">
            <CircularProgress sx={{ color: 'white' }} />
          </div>
        }
      >
        <CourseListContainer searchParamsPromise={props.searchParams} />
      </Suspense>
    </div>
  );
};

export default Page;

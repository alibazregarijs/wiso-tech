import Filtration from '@src/features/learner-dashboard-courses/components/Filtration';
import CoursesCard from '@src/shared/components/layouts/CoursesCard';
import Pagination from '@src/shared/components/layouts/Pagination';
import Devider from '@src/shared/components/ui/atoms/Devider/Devider';
import { CoursesT, LevelT } from '@src/shared/types';

export type techT = 'React' | 'CSS' | 'JavaScript';

export type ListCoursesProps = {
  courses: CoursesT[];
  tech: techT;
  level: LevelT;
};

const ListCourses = ({ courses, tech, level }: ListCoursesProps) => {
  // Filter logic (derived state)
  const filteredItems = courses.filter((item) => {
    return (
      item?.title?.toLowerCase()?.includes(tech?.toLowerCase()) ||
      item?.level?.toLowerCase()?.includes(level?.toLowerCase())
    );
  });

  return (
    <>
      <Filtration />
      <Devider className="mx-4 mt-8" />

      <div className="mt-4 px-4">
        {filteredItems.length > 0 ? (
          <CoursesCard className="grid md:grid-cols-2 lg:grid-cols-4" courses={filteredItems} />
        ) : (
          <div className="text-center text-white">No courses found.</div>
        )}
      </div>

      <div>
        <Pagination items={filteredItems} />
      </div>
    </>
  );
};

export default ListCourses;

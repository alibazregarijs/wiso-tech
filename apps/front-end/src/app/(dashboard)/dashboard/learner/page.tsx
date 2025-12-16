import LearnerGoals from '@src/features/dashboard/learner/components/LearnerGoals';
import LearnerInProgress from '@src/features/dashboard/learner/components/LearnerInProgress';
import LearnerMyMentor from '@src/features/dashboard/learner/components/LearnerMyMentor';
import LearnerNavbar from '@src/features/dashboard/learner/components/LearnerNavbar';
import Devider from '@src/shared/components/ui/atoms/Devider/Devider';
import Text from '@src/shared/components/ui/atoms/Text/Text';

const page = () => {
  return (
    <div className="bg-green-dark-100 min-h-screen px-4">
      <LearnerNavbar />
      <Devider className="mx-0 opacity-30" />
      <div className="mt-10">
        <Text as="h1" className="font-lexend text-4xl font-bold text-white">
          Welcome Back Alex!
        </Text>
      </div>
      <div className="mt-6 grid h-full w-full grid-cols-12 grid-rows-12 gap-6">
        <div className="col-span-12 row-span-12 h-full md:col-span-6 md:row-span-6 lg:col-span-8 lg:row-span-5">
          <LearnerGoals />
        </div>
        <div className="col-span-12 row-span-12 md:col-span-6 md:row-span-6 lg:col-span-4 lg:row-span-7">
          <LearnerMyMentor />
        </div>
        <div className="col-span-8 row-span-8">
          <LearnerInProgress />
        </div>
        <div className="col-span-4 row-span-4 bg-amber-800">div4</div>
      </div>
    </div>
  );
};

export default page;

import LearnerGoals from '@src/features/dashboard/learner/components/LearnerGoals';
import LearnerNavbar from '@src/features/dashboard/learner/components/LearnerNavbar';
import Devider from '@src/shared/components/ui/atoms/Devider/Devider';
import Text from '@src/shared/components/ui/atoms/Text/Text';

const page = () => {
  return (
    <div className="bg-green-dark-100 min-h-screen">
      <LearnerNavbar />
      <Devider className="mx-0 opacity-30" />
      <div className="mt-10 px-4">
        <Text as="h1" className="font-lexend text-4xl font-bold text-white">
          Welcome Back Alex!
        </Text>
      </div>
      <div className="grid h-screen w-full grid-cols-12 grid-rows-12 gap-6 px-4">
        <div className="col-span-8 row-span-5">
          <LearnerGoals />
        </div>
        {/* <div className="col-span-4 row-span-7 bg-amber-950">div2</div>
        <div className="col-span-8 row-span-8 bg-red-500">div3</div>
        <div className="col-span-4 row-span-4 bg-blue-600">div4</div> */}
      </div>
    </div>
  );
};

export default page;

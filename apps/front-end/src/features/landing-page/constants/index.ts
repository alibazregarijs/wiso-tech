import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import mentoringMan from '@src/public/landing/mentoring-man.webp';
import mentoringWoman from '@src/public/landing/mentoring-woman.webp';
import userImage1 from '@src/public/landing/user-1.png';
import userImage2 from '@src/public/landing/user-2.png';
import userImage3 from '@src/public/landing/user-3.png';

export const cardItems = [
  {
    id: 'personal',
    title: 'Personalized Learning Paths',
    description:
      'Tailor your learning journey with custom goals and track your progress every step of the way.',
    icon: TrackChangesIcon, // store the component itself
  },

  {
    id: 'mentorship',
    title: '1-on-1 Mentorship',
    description: 'Connect with industry experts for dedicated guidance, feedback, and support.',
    icon: GroupsIcon,
  },
  {
    id: 'resources',
    title: 'Resource Library',
    description:
      'Access a curated collection of courses, articles, and tools to accelerate your growth.',
    icon: MenuBookIcon,
  },
];

export const steps = [
  { id: 'step-1', label: 1 },
  { id: 'step-2', label: 2 },
  { id: 'step-3', label: 3 },
];

export const stepsToturial = [
  {
    id: 'step-toturial-1',
    title: 'Create Your Profile',
    description: 'Sign up as a learner or mentor and tell us about your goals and expertise.',
  },
  {
    id: 'step-toturial-2',
    title: 'Find Your Match',
    description: 'Our smart algorithm suggests the best mentors or mentees for you.',
  },
  {
    id: 'step-toturial-3',
    title: 'Start Growing',
    description: 'Schedule sessions, set goals, and track your progress together.',
  },
];

export const forLearnersItems = [
  {
    id: 'forLearners',
    firstTitle: 'FOR LEARNERS',
    secondTitle: 'Your Personal Growth Journey',
    description: ` Take control of your career development with tools designed for
            success. Set goals, find courses, and get expert guidance every step
            of the way.`,
    firstCheckBoxLabel: 'Track milestones and see your progress in real-time.',
    secondCheckBoxLabel: 'Discover courses and resources tailored to your goals.',
    thirdCheckBoxLabel: 'Connect with mentors who have the experience you need.',
    image: mentoringMan,
  },
  {
    id: 'forMentors',
    firstTitle: 'FOR MENTORS',
    secondTitle: 'Share Your Expertise, Shape a Future',
    description:
      'Make a lasting impact by guiding the next generation of talent. Our platform provides the tools to manage mentees, share knowledge, and schedule sessions with ease.',
    firstCheckBoxLabel: 'Easily manage your schedule and mentee communications.',
    secondCheckBoxLabel: 'Share resources, articles, and feedback in one place.',
    thirdCheckBoxLabel: 'Join a community of experts and expand your network',
    image: mentoringWoman,
  },
];

export const userMentorsLeanersItems = [
  {
    id: 'user-1',
    description: `"Wiso was a game-changer for my career transition. My mentor provided
                invaluable insights that I couldn't find anywhere else."`,
    image: userImage1,
    name: 'Alex Johnson',
    career: 'Software Engineer at TeachCorp',
  },
  {
    id: 'user-2',
    description: `"As a mentor, it's incredibly rewarding to see my mentees grow. The platform makes it so easy to connect and make a real difference."`,
    image: userImage2,
    name: 'Samantha Lee',
    career: 'Product Manager at Innovate Inc.',
  },
  {
    id: 'user-3',
    description: `"The structured learning paths combined with direct access to a mentor helped me land my dream internship. Highly recommend!"`,
    image: userImage3,
    name: 'David Chen',
    career: 'Student at University of Tech',
  },
];

export const footerItems = [
  {
    id: 'footer-col-3',
    title1: 'Legal',
    title2: 'Terms of Service',
    title3: 'Privacy Policy',
    title4: '',
    title5: '',
  },
  {
    id: 'footer-col-1',
    title1: 'Platform',
    title2: 'Features',
    title3: 'For Learners',
    title4: 'For Mentors',
    title5: 'Pricing',
  },

  {
    id: 'footer-col-2',
    title1: 'Company',
    title2: 'About Us',
    title3: 'Careers',
    title4: 'Contact',
    title5: 'Blog',
  },
];

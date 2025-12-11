import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import mentoringMan from '@src/public/landing/mentoring-man.webp';
import mentoringWoman from '@src/public/landing/mentoring-woman.webp';

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

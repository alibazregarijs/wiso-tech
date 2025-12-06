import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';

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
    description:
      'Connect with industry experts for dedicated guidance, feedback, and support.',
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

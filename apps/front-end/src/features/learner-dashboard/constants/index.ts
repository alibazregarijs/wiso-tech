import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import cssImage from '@src/public/learner/css2.webp';
import uiImage from '@src/public/learner/ui.webp';

export const inProgressItems = [
  {
    id: 'progress-1',
    title: 'Advanced CSS and Sass',
    author: 'john schmedtmann',
    image: uiImage,
    progress: 0,
    completed: true,
  },
  {
    id: 'progress-2',
    title: 'UI/UX Design Principles',
    author: 'john Doe',
    image: cssImage,
    progress: 25,
    completed: true,
  },
  {
    id: 'progress-3',
    title: 'UI/UX Design Principles',
    author: 'john Doe',
    image: cssImage,
    progress: 65,
    completed: true,
  },
  {
    id: 'progress-4',
    title: 'Advanced CSS and Sass',
    author: 'john schmedtmann',
    image: uiImage,
    progress: 15,
    completed: true,
  },
];

export const sharedResourcesItems = [
  {
    id: 'shared-1',
    title: 'React Best Practices',
    sharedBy: 'Shared by John Doe',
    icon: PictureAsPdfIcon,
  },
  {
    id: 'shared-2',
    title: 'Awsome Design Patterns',
    sharedBy: 'Shared by John Williams',
    icon: PlayCircleOutlineIcon,
  },
  {
    id: 'shared-3',
    title: 'CSS Best Practices',
    sharedBy: 'Shared by David Chen',
    icon: InsertDriveFileIcon,
  },
];

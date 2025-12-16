import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';
import React from 'react';

import Button from '@src/shared/components/ui/atoms/Button/Button';
import Text from '@src/shared/components/ui/atoms/Text/Text';

const LearnerMyMentor = () => {
  return (
    <div className="bg-green-dark-200 mt-6 flex flex-col gap-4 rounded-lg">
      <div className="mt-6 flex flex-col items-center justify-center gap-4">
        <Text as="h2" className="font-inter text-2xl font-bold text-white">
          My Mentor
        </Text>
        <Avatar
          className="border-green-light-100 border-2"
          src="https://avatars.githubusercontent.com/u/10188296?v=4"
          alt="Mentor"
          sx={{
            width: 80,
            height: 80,
          }}
        />
        <div className="flex flex-col items-center justify-center">
          <Text as="h2" className="font-inter text-xl font-bold text-white">
            David Chen
          </Text>
          <Text as="p" className="font-inter text-gray-light-100 text-sm">
            Senior Front-end Engineer at TechCorp
          </Text>
        </div>
      </div>
      <div className="mb-6 flex flex-col gap-2 px-4">
        <Button variant="regular" className="flex items-center justify-center gap-2 p-3">
          <CalendarMonthIcon />
          Schedule a Session
        </Button>
        <Button variant="secondary" className="flex items-center justify-center gap-2 p-3">
          <SendIcon />
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default LearnerMyMentor;

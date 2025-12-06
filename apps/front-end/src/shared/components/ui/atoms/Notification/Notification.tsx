import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

type Props = Readonly<React.HTMLAttributes<HTMLButtonElement>> & {
  isNotifications: boolean;
  count?: number; // optional count badge
};

export default function Notification({
  isNotifications,
  count,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className="text-text-secondary hover:text-primary relative p-2"
    >
      {/* MUI icon */}
      <NotificationsNoneIcon className="text-2xl text-white" />

      {/* Notification badge */}
      {isNotifications && (
        <span className="absolute top-1 right-1 flex items-center justify-center">
          {count ? (
            // Number badge
            <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              {count}
            </span>
          ) : (
            // Dot badge
            <>
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </>
          )}
        </span>
      )}
    </button>
  );
}

'use client';

import { Pagination, Stack, Box } from '@mui/material';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import React from 'react';

// 1. Import Next.js Navigation hooks
import { LearnerCoursesT } from '@src/features/learner-dashboard-courses/types';

export default function ProjectsList({ items }: { items: LearnerCoursesT[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 2. GET CURRENT PAGE FROM URL (Default to 1 if missing)
  // We parse the string '3' into number 3
  const page = Number(searchParams.get('page')) || 1;

  // 4. Handle Change: UPDATE URL instead of State
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    // Create new params to keep existing filters (e.g., ?status=active&page=2)
    const params = new URLSearchParams(searchParams);
    params.set('page', value.toString());

    // Push the new URL. Next.js detects this and re-renders the component.
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Box>
        {/* Render Items */}
        {items?.map((_, i) => (
          <div key={i}>
            Project Item {i} (Page {page})
          </div>
        ))}
      </Box>

      <Pagination
        count={10}
        page={page} // Driven by URL
        onChange={handleChange} // Updates URL
        color="primary"
      />
    </Stack>
  );
}

// auth.ts
import { prisma } from '@repo/prisma-config';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, token }) => {
      // 1. Destructure 'token' here

      // 2. Define your base URL (use env var for production, localhost for dev)
      const baseURL =
        process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

      // 3. Construct the link manually
      // This creates: http://localhost:3000/reset-password?token=xyz...
      const resetLink = `${baseURL}/reset-password?token=${token}`;

      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: user.email,
        subject: 'Reset Your Password',
        html: `
          <h1>Reset Password</h1>
          <p>Click the link below to reset your password:</p>
          <a href="${resetLink}">${resetLink}</a>
          <p>If you didn't request this, please ignore this email.</p>
        `,
      });
    },
  },

  // ... rest of your user config
  user: {
    additionalFields: {
      username: { type: 'string', required: true },
      profilePhoto: { type: 'string', required: true },
      yearsOfExperience: { type: 'number', required: true },
      expertise: { type: 'string[]', required: true },
      userType: {
        type: ['MENTOR', 'LEARNER'], // or Object.values(UserType) if you want it dynamic
        required: true,
      },
      // ... your other fields
    },
  },
});

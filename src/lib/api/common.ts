import { unstable_cache } from 'next/cache';

export const getDailyPrompt = unstable_cache(
  async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice', {
        cache: 'no-store',
      });
      const data = await res.json();
      return data.slip.advice;
    } catch {
      return 'Hôm nay của bạn thế nào?';
    }
  },
  ['daily-prompt'],
  {
    revalidate: 60 * 60 * 24,
    tags: ['daily-prompt'],
  },
);

'use server';

import { revalidatePath } from 'next/cache';

export const action = async () => {
  // pause for 100ms
  await new Promise((resolve) => setTimeout(resolve, 100));

  console.log('Revalidating...');

  revalidatePath('/');

  return {
    msg: 'Now revalidating...',
  };
};

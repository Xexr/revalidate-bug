'use server';

import { revalidatePath } from 'next/cache';

export const action = async () => {
  console.log('Revalidating...');

  revalidatePath('/');

  return {
    msg: 'Now revalidating...',
  };
};

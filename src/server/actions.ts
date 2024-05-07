'use server';

import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';
import { getData } from './server';

const authAction = createSafeActionClient({
  async middleware() {
    const currentHeaders = headers();
    const middlewareMsg = currentHeaders.get('x-hello-from-middleware');
    console.log('next-safe-action:', middlewareMsg);

    if (!middlewareMsg) {
      throw new Error('middleware message not found');
    }

    if (middlewareMsg !== 'hello world') {
      throw new Error('middleware message not correct');
    }

    return { middlewareMsg };
  },

  handleServerErrorLog(e) {
    if (e instanceof Error && e.cause instanceof Error) {
      console.error('[Action Error]', e.message);
      console.error('[Cause]', e.cause.message);
      return;
    }
    console.error('[Action Error]', 'Unknown error');
  },
});

export const action = authAction(
  z.undefined(),
  async (_, { middlewareMsg }) => {
    console.log('Revalidating...');

    console.log('action:', middlewareMsg);

    const data = await getData(5);
    console.log(data);

    revalidatePath('/catchall');
    revalidatePath('/slug');

    return {
      msg: 'Now revalidating...',
    };
  }
);

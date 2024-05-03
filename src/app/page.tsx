import { getData } from '@/server/server';
import { revalidatePath } from 'next/cache';

export const runtime = 'edge';

const page = async () => {
  const action = async () => {
    'use server';

    // pause for 100ms
    await new Promise((resolve) => setTimeout(resolve, 100));

    console.log('Revalidating...');

    revalidatePath('/');
  };

  const data = await getData();

  return (
    <div className="flex w-full items-center p-5 flex-col gap-5">
      <h1>{data}</h1>
      <form action={action}>
        <button className="bg-slate-600 rounded-md p-2 text-gray-200 hover:opacity-80">
          Test action
        </button>
      </form>
    </div>
  );
};
export default page;

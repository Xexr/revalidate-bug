import { action } from '@/server/actions';
import { getData } from '@/server/server';

export const runtime = 'edge';

interface Props {
  searchParams: {
    id: string;
  };
}

const page = async ({ searchParams: { id } }: Props) => {
  console.log(id);

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

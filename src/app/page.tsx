import { getData } from '@/server/server';
import Button from './_components/Button';

export const runtime = 'edge';

const page = async () => {
  const data = await getData();

  return (
    <div className="flex w-full items-center p-5 flex-col gap-5">
      <h1>{data}</h1>
      <Button />
    </div>
  );
};
export default page;

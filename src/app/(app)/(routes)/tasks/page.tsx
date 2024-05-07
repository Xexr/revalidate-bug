import Button from '@/app/(app)/_components/Button';
import Quote from '@/app/(app)/_components/Quote';
import { getData } from '@/server/server';

export const runtime = 'edge';

const page = async () => {
  const data = await getData(4);

  return (
    <div className="flex w-full items-center p-5 flex-col gap-5">
      <Quote quote={data} />
      <Button />
    </div>
  );
};
export default page;

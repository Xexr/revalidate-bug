import Button from '@/app/(app)/_components/Button';
import { getData } from '@/server/server';

export const revalidate = 0;

const page = async () => {
  const data = await getData(4);

  return (
    <div className="flex w-full items-center p-5 flex-col gap-5">
      <h1>{data}</h1>
      <Button />
    </div>
  );
};
export default page;

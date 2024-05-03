import Button from '@/app/_components/Button';
import { getData } from '@/server/server';

export async function generateMetadata({ params }: Props) {
  const data = await getData();
  return {
    title: data,
  };
}

export const runtime = 'edge';

interface Props {
  params: {
    id: string;
  };
}

const page = async ({ params: { id } }: Props) => {
  console.log(id);

  const data = await getData();

  return (
    <div className="flex w-full items-center p-5 flex-col gap-5">
      <h1>{data}</h1>
      <Button />
    </div>
  );
};
export default page;

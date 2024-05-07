import Image from 'next/image';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <section className="mx-auto flex w-full items-center justify-center pt-10">
      Hello
      <Image
        src="/grid.svg"
        alt="Loading..."
        width={80}
        height={80}
        className="h-14 w-14"
      />
    </section>
  );
}

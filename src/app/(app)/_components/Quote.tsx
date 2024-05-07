'use client';

interface Props {
  quote: string;
}

const Quote = ({ quote }: Props) => {
  return <h1>{quote}</h1>;
};
export default Quote;

'use client';

import { action } from '@/server/actions';

const Button = () => {
  return (
    <button
      className="bg-slate-600 rounded-md p-2 text-gray-200 hover:opacity-80"
      onClick={async () => {
        const result = await action();
        console.log(result.msg);
      }}
    >
      Change quote
    </button>
  );
};
export default Button;

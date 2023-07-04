'use client';
import { usePathname, useRouter } from 'next/navigation';
import { startTransition, useState, useTransition } from 'react';

export default function Search({ disabled }: { disabled?: boolean }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const [isPending, setIsPending] = useTransition();
  const [search, setSearch] = useState('');

  function handleSearch(term: string) {
    const params = new URLSearchParams(window.location.search);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
    setSearch(term);
  }

  return (
    <div className='mt-5 max-w-md'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative rounded-md shadow-sm'>
        <input
          type='text'
          name='search'
          id='search'
          className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md text-black'
          placeholder='Search'
          disabled={disabled}
          onChange={(e) => handleSearch(e.target.value)}
          value={search}
        />
      </div>
      {isPending && (
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
          <svg
            className='animate-spin h-5 w-5 text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
}

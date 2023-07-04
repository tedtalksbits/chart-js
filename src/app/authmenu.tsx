import { signIn, signOut } from 'next-auth/react';
import React from 'react';

export default function AuthMenu({
  user,
  active,
}: {
  user: any;
  active: boolean;
}) {
  return (
    <div>
      {user ? (
        <button
          className={`border w-full p-2 ${
            active ? 'text-white bg-indigo-500' : 'text-black'
          } `}
          onClick={() => signOut()}
        >
          Logout
        </button>
      ) : (
        <button className='border w-full p-2 ' onClick={() => signIn('github')}>
          Login
        </button>
      )}
    </div>
  );
}

import { getServerSession } from 'next-auth';
import { Navbar } from './navbar';
import { getSession } from 'next-auth/react';

export default async function Nav() {
  const session = await getServerSession();
  return <Navbar user={session?.user} />;
}

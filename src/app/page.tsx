import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { queryBuilder } from '../../lib/planetscale';
import { Card, Text, Title } from '@tremor/react';
import SimpleTable from '@/components/Table';
import Search from '@/components/Search';

interface HomeProps {
  seachParams: { q: string };
}
export const dynamic = 'force-dynamic';
export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession();
  const search = searchParams.q ?? '';
  const users = await queryBuilder
    .selectFrom('users')
    .select(['id', 'name', 'email', 'username'])
    .where('name', 'like', `%${search}%`)
    .execute();

  return (
    <main className='p-4'>
      <Title>Dashboard</Title>
      <Text>Hi {session?.user?.name || 'placeholder'}!</Text>
      <Search />
      <Card className='mt-6'>
        <SimpleTable
          headers={['id', 'name', 'email', 'username']}
          rows={users}
        />
      </Card>
    </main>
  );
}

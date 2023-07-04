import {
  AreaChart,
  BarList,
  Card,
  Flex,
  Grid,
  Metric,
  Text,
  Title,
} from '@tremor/react';
import React from 'react';

const expenses = [
  {
    id: 1,
    name: 'Rent',
    value: 500,
  },
  {
    id: 2,
    name: 'Car',
    value: 200,
  },
  {
    id: 3,
    name: 'Groceries',
    value: 100,
  },
  {
    id: 4,
    name: 'Entertainment',
    value: 300,
  },
];

const transactions = [
  {
    id: 1,
    name: 'Salary',
    value: 2000,
  },
  {
    id: 2,
    name: 'Freelance',
    value: 1000,
  },
  {
    id: 3,
    name: 'Savings',
    value: 500,
  },
];

const payments = [
  {
    id: 1,
    name: 'Rent',
    value: 500,
  },
  {
    id: 2,
    name: 'Car',
    value: 200,
  },
  {
    id: 3,
    name: 'Groceries',
    value: 100,
  },
  {
    id: 4,
    name: 'Entertainment',
    value: 300,
  },
];

const data = [
  {
    category: 'Expenses',
    data: expenses,
    stat: expenses.reduce((acc, curr) => acc + curr.value, 0),
  },
  {
    category: 'Transactions',
    data: transactions,
    stat: transactions.reduce((acc, curr) => acc + curr.value, 0),
  },
  {
    category: 'Payments',
    data: payments,
    stat: payments.reduce((acc, curr) => acc + curr.value, 0),
  },
];

const savings = [
  {
    Month: 'January 23',
    Savings: 1000,
    Previous: 500,
  },
  {
    Month: 'February 23',
    Savings: 2000,
    Previous: 1000,
  },
  {
    Month: 'March 23',
    Savings: 3000,
    Previous: 4000,
  },
  {
    Month: 'April 23',
    Savings: 4000,
    Previous: 3000,
  },
  {
    Month: 'May 23',
    Savings: 2340,
    Previous: 1240,
  },
  {
    Month: 'June 23',
    Savings: 2020,
    Previous: 2240,
  },
];

const Playground = () => {
  return (
    <div className='p-4'>
      <Grid numItems={2} numItemsLg={3} className='gap-4'>
        {data.map((item) => (
          <Card key={item.category}>
            <Title>{item.category}</Title>
            <Flex>
              <Metric>${item.stat}</Metric>
              <Text>Total</Text>
            </Flex>
            <Flex className='mt-6'>
              <Text>Category</Text>
              <Text className='text-right'>value</Text>
            </Flex>
            <BarList
              className='mt-2'
              data={item.data}
              valueFormatter={(number: number) =>
                Intl.NumberFormat('us').format(number).toString()
              }
            />
          </Card>
        ))}
      </Grid>
      <Card className='mt-4'>
        <Title>Expenses</Title>
        <AreaChart
          data={savings}
          categories={['Savings', 'Previous']}
          index='Month'
        />
      </Card>
    </div>
  );
};

export default Playground;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from '@tremor/react';

export default async function SimpleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: any[];
}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {headers.map((header, index) => (
            <TableHeaderCell key={`${header}-${index}`}>
              {header}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={`${row}-${index}`}>
            {Object.values(row).map((value, index) => (
              <TableCell key={`${value}-${index}`}>
                <Text>{value?.toString()}</Text>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

import React from "react";

export type ColumnDef<T> = {
  title: string;
} & (
  | {
      field: keyof T; // Field yang merujuk ke properti dalam tipe T
      render?: undefined; // Pastikan tidak ada render jika field digunakan
    }
  | {
      render: (rowData: T) => React.ReactNode; // Fungsi render yang mengembalikan ReactNode
      field?: undefined; // Pastikan tidak ada field jika render digunakan
    }
);

interface TableProps<T> {
  columnDefs: ColumnDef<T>[]; // Definisi kolom tabel
  data: T[]; // Data tabel
}

const Table = <T,>({ columnDefs, data }: TableProps<T>) => {
  return (
    <table className="min-w-full divide-y overflow-hidden rounded-lg divide-gray-800 shadow-lg">
      <thead className="bg-green-200">
        <tr>
          {columnDefs.map((column, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((rowData, index) => (
          <tr key={index} className="cursor-pointer hover:bg-gray-100">
            {columnDefs.map((column, colIndex) => (
              <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                {column.field
                  ? (rowData[column.field] as unknown as React.ReactNode) // Tampilkan data berdasarkan field
                  : column.render
                  ? column.render(rowData) // Tampilkan data dengan render custom
                  : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

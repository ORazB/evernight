import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Index() {
  const { news, flash } = usePage().props;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">News List</h1>
      {flash?.success && (
        <div className="bg-green-200 text-green-800 p-2 rounded mb-3">
          {flash.success}
        </div>
      )}

      <Link
  href={route("news.create")}
  as="button"
  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow"
>
  + Add News
</Link>


      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Judul</th>
            <th className="p-2 border">Deskripsi</th>
            <th className="p-2 border">Kategori</th>
            <th className="p-2 border">Author</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item.id} className="border">
              <td className="p-2 border">{item.id}</td>
              <td className="p-2 border">{item.judul}</td>
              <td className="p-2 border">{item.deskripsi}</td>
              <td className="p-2 border">{item.kategori}</td>
              <td className="p-2 border">{item.author}</td>
              <td className="p-2 border space-x-2">
                <Link
                  href={route("news.edit", item.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </Link>
                <Link
                  href={route("news.destroy", item.id)}
                  method="delete"
                  as="button"
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

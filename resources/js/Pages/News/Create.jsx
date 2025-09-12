import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import ImageDrop from "@/Components/ImageDrop";

export default function Create() {
  const { data, setData, post, errors } = useForm({
    judul: "",
    deskripsi: "",
    kategori: "",
    author: "",
    image: null, // add this
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("news.store"), {
      forceFormData: true,
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create News</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Judul</label>
          <input
            type="text"
            value={data.judul}
            onChange={(e) => setData("judul", e.target.value)}
            className="border p-2 w-full"
          />
          {errors.judul && <div className="text-red-500">{errors.judul}</div>}
        </div>

        <div>
          <label className="block">Deskripsi</label>
          <textarea
            value={data.deskripsi}
            onChange={(e) => setData("deskripsi", e.target.value)}
            className="border p-2 w-full"
          />
          {errors.deskripsi && <div className="text-red-500">{errors.deskripsi}</div>}
        </div>

        <div>
          <label className="block">Kategori</label>
          <input
            type="text"
            value={data.kategori}
            onChange={(e) => setData("kategori", e.target.value)}
            className="border p-2 w-full"
          />
          {errors.kategori && <div className="text-red-500">{errors.kategori}</div>}
        </div>

        {/* Dropzone */}
        <ImageDrop onFileSelect={(file) => setData("image", file)} error={errors.image} />
          
        <div>
          <label className="block">Author</label>
          <input
            type="text"
            value={data.author}
            onChange={(e) => setData("author", e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <Link href={route("news.index")} className="px-4 py-2 border rounded">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

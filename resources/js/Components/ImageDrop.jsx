import { useDropzone } from "react-dropzone";
import { useState } from "react";

export default function ImageDrop({ onFileSelect, error }) {
  const [preview, setPreview] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    multiple: false,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setPreview(URL.createObjectURL(file));
      onFileSelect(file);
    },
  });

  return (
    <div>
      <label className="block">Image</label>
      <div
        {...getRootProps({
          className:
            "border-dashed border-2 border-gray-400 rounded-lg p-6 text-center cursor-pointer",
        })}
      >
        <input {...getInputProps()} />
        {preview ? (
          <img src={preview} alt="preview" className="h-32 mx-auto" />
        ) : (
          <p>Drag & drop an image here, or click to select</p>
        )}
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}

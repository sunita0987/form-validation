import React from "react";
import { useState } from "react";
const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleUpload = () => {
    if (!image) return alert("No image selected");
    const formData = new FormData();
    formData.append("image", image);
    alert("Image ready for upload (implement API call)");
  };
  return (
    <div className="max-w-md mx-auto p-4 border-3 border-gray-400 rounded-lg shadow-md mt-20 items-center mb-10">
      <h2 className="text-xl font-semibold mb-4 text-center text-red-600">
        Upload Image
      </h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0 file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mb-4 max-w-full h-auto rounded-md border"
        />
      )}
      <button
        onClick={handleUpload}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer font-bold"
      >
        Upload
      </button>
    </div>
  );
};
export default ImageUpload;

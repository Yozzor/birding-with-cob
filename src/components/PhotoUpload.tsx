'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface PhotoUploadProps {
  onPhotoSelect: (file: File | null, previewUrl: string | null) => void;
  currentPhoto?: string | null;
}

export default function PhotoUpload({ onPhotoSelect, currentPhoto }: PhotoUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentPhoto || null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onPhotoSelect(file, url);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const removePhoto = () => {
    setPreviewUrl(null);
    onPhotoSelect(null, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-3">
      <label className="block pixel-font text-xs text-gray-700 font-semibold">
        Bird Photo
      </label>
      
      {previewUrl ? (
        <div className="relative">
          <div className="pokedex-text-area p-2">
            <Image
              src={previewUrl}
              alt="Bird photo preview"
              width={200}
              height={150}
              className="w-full h-32 object-cover rounded"
            />
          </div>
          <button
            type="button"
            onClick={removePhoto}
            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
          >
            ✕
          </button>
        </div>
      ) : (
        <div
          className={`pokedex-text-area p-4 border-2 border-dashed transition-colors cursor-pointer ${
            isDragging 
              ? 'border-blue-400 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <p className="pixel-font text-xs text-gray-600">
              Click to upload or drag & drop
            </p>
            <p className="pixel-font text-xs text-gray-500 mt-1">
              JPG, PNG, WebP (max 5MB)
            </p>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

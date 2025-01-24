import { useState } from 'react';

const VideoUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      setUploading(true);
      const formData = new FormData();
      formData.append('video', selectedFile);

      try {
        await fetch('/api/videos/upload', {
          method: 'POST',
          body: formData,
        });
        setSelectedFile(null);
        onUpload();
      } catch (error) {
        console.error('Error uploading video:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-6">
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="flex-1 py-2 px-4 mr-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-md"
        />
        <button 
          type="submit" 
          disabled={!selectedFile || uploading} 
          className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
    </form>
  );
};

export default VideoUpload;
// import React from 'react';

const VideoList = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div key={video._id} className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-900">{video.name}</h2>
          </div>
          <video controls width="100%" className="mb-4">
            <source src={`/${video.manifestPath}`} type="application/x-mpegURL" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
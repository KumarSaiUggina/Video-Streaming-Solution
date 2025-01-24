import  { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";

export default function StreamPage() {
  const videoSources = [
    import.meta.env.VITE_VIDEO1_SOURCE_URL,
    import.meta.env.VITE_VIDEO2_SOURCE_URL,
    import.meta.env.VITE_VIDEO3_SOURCE_URL,
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Video Player */}
          <div className="flex-1">
            <VideoPlayer src={videoSources[currentVideoIndex]}></VideoPlayer>
            <div className="flex justify-center mt-4">
              <button
                onClick={playNextVideo}
                className="px-6 py-2 bg-blue-500 text-white rounded"
              >
                Play Next Video
              </button>
            </div>
          </div>

          {/* Right: Responsive Scrollable Video Cards */}
          <div className="lg:w-1/3">
            <div
              className="flex lg:flex-col flex-row gap-4 pb-4 
  lg:overflow-y-scroll overflow-x-auto 
  max-h-[500px] lg:max-h-[calc(100vh-200px)] 
  scrollbar-hidden"
            >
              {videoSources.map((source, index) => (
                <div
                  key={index}
                  className={`card rounded-sm  bg-base-100 image-full w-96 shadow-xl flex-shrink-0 ${
                    currentVideoIndex === index
                      ? "border-4 border-blue-500"
                      : ""
                  }`}
                  onClick={() => setCurrentVideoIndex(index)}
                >
                  
                  <div className="card-body bg-white">
                    <h2 className="card-title text-slate-900 ">{`Video ${index + 1}`}</h2>
                    <p>
                      {currentVideoIndex === index
                        ? "Currently playing"
                        : "Click to play this video."}
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn  text-white">
                        {currentVideoIndex === index ? "Playing" : "Play Now"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

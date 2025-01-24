// import React from 'react'
import videojs from "video.js";
import Hls from "hls.js";
import "video.js/dist/video-js.css";
import { useEffect, useRef } from "react";

function VideoPlayer({ src }) {
  const videoRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    playerRef.current = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: "none",
      breakpoints: {
        tiny: 300,
        xsmall: 400,
        small: 500,
        medium: 600,
        large: 700,
        xlarge: 800,
        huge: 900
      },

      
      enableSmoothSeeking: true,
      experimentalSvgIcons: true,
      nativeControlsForTouch: true,
    });

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        videoRef.current.play();
      });
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = src;
      videoRef.current.addEventListener("canplay", () => {
        videoRef.current.play();
      });
    } else {
      console.log("video format not supported");
    }
  }, [src]);
  return (
    <div className="my-8 flex justify-center items-center">
      <div data-vjs-players className="w-full max-w-3xl">
        <video
          ref={videoRef}
          className="video-js vjs-control-bar rounded-lg shadow-lg w-full h-[400px]" // Set a custom height
        ></video>
      </div>
    </div>
  );
}

export default VideoPlayer;

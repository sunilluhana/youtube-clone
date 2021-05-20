import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h1>Recommended</h1>
      <div className="recommendedVideos__videos">
        <VideoCard title="Hello world" />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideos;

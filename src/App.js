import React, { useEffect, useRef } from "react";
import VideoPlayer from "./VideoPlayer";

import "./styles.css";

export default function App() {
  const src = "https://stream.mux.com/S1zlotvu400FxqKdGCIfKMx8GAwQ54qum.m3u8";
  const videoRef = useRef(null);
  // const src =

  useEffect(() => {
    console.log("debug videoRef", videoRef.current);
  }, []);

  return (
    <div className="App">
      <h1>React Player Debug</h1>
      <VideoPlayer />
    </div>
  );
}

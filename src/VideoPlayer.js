import mux from "mux-embed";
import React, { useEffect, useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const initTime = Date.now();
      mux.monitor(videoRef.current, {
        debug: true,
        data: {
          env_key: "ENV_KEY", // required
          // Metadata fields
          player_name: "Main Player", // any arbitrary string you want to use to identify this player
          player_init_time: initTime
          // ...
        }
      });
    }
  }, [videoRef]);

  return (
    <video
      controls
      ref={videoRef}
      src="https://muxed.s3.amazonaws.com/leds.mp4"
      style={{ width: "100%", maxWidth: "500px" }}
    />
  );
}

import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import "./styles/App.css";

const App: React.FC = () => {
    const test_VOD_HLS =
        "https://stream.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg.m3u8";
    const test_LIVE_HLS_pbs = "";

    return (
        <div className="App">
            <h1>Modern React Video Player</h1>
            <VideoPlayer videoSrc={test_VOD_HLS} />
        </div>
    );
};

export default App;

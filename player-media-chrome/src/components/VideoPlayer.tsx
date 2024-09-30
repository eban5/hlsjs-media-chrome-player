import React from "react";
import "media-chrome";
import "media-chrome/menu";
import "hls-video-element";

import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaLoadingIndicator,
    MediaVolumeRange,
    MediaPlaybackRateButton,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
    MediaCaptionsButton,
    MediaAirplayButton,
    MediaPipButton,
    MediaFullscreenButton,
    MediaPosterImage,
    MediaLiveButton,
} from "media-chrome/react";

import { MediaCaptionsMenuButton, MediaCaptionsMenu } from "media-chrome/react/menu";

interface VideoPlayerProps {
    videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
    // const videoRef = useRef<HTMLVideoElement | null>(null);

    // useEffect(() => {
    //     if (Hls.isSupported() && videoRef.current) {
    //         const hls = new Hls();
    //         hls.loadSource(videoSrc);
    //         hls.attachMedia(videoRef.current);

    //         hls.on(Hls.Events.MANIFEST_PARSED, () => {
    //             console.log("HLS Manifest loaded, video is ready.");
    //         });

    //         return () => {
    //             hls.destroy();
    //         };
    //     }
    // }, [videoSrc]);

    return (
        <MediaController>
            <video slot="media" src={videoSrc} preload="auto" muted crossOrigin="">
                <track
                    label="English"
                    kind="captions"
                    srcLang="en"
                    src="https://media-chrome.mux.dev/examples/vanilla/vtt/elephantsdream/captions.en.vtt"
                    default
                />
                <track
                    label="Japanese"
                    kind="captions"
                    srcLang="ja"
                    src="https://media-chrome.mux.dev/examples/vanilla/vtt/elephantsdream/captions.ja.vtt"
                />
            </video>

            <MediaLoadingIndicator>
            </MediaLoadingIndicator>

            <MediaControlBar>
                <MediaPlayButton></MediaPlayButton>
                <MediaSeekBackwardButton></MediaSeekBackwardButton>
                <MediaSeekForwardButton></MediaSeekForwardButton>
                <MediaMuteButton></MediaMuteButton>
                <MediaVolumeRange></MediaVolumeRange>
                <MediaLiveButton></MediaLiveButton>
                <MediaTimeDisplay showDuration></MediaTimeDisplay>
                <MediaTimeRange></MediaTimeRange>
                <MediaCaptionsMenu anchor="auto" hidden=""></MediaCaptionsMenu>
                <MediaCaptionsMenuButton></MediaCaptionsMenuButton>
                <MediaPlaybackRateButton></MediaPlaybackRateButton>
                <MediaFullscreenButton></MediaFullscreenButton>
            </MediaControlBar>
        </MediaController>
    );
};

export default VideoPlayer;

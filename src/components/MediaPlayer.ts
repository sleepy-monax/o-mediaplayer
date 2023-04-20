import { Component, useRef, useState } from "@odoo/owl";
import { MediaControls } from "./MediaControls";
import { Spinner } from "./icons/Spinner";
import { css } from "./css";

css`
.o-mediaplayer-container {
    background-color: black;
}
`;

export class MediaPlayer extends Component {
    static template = "o-mediaplayer-MediaPlayer";
    static components = { MediaControls, Spinner };

    static props = {
        src: String,
        thumbnail: String,
        autoplay: Boolean,
        loop: Boolean,
        muted: Boolean,
        showControls: Boolean,
        allowFullscreen: Boolean,
    }

    declare videoRef: { el: HTMLVideoElement | null };
    declare state: { isPlaying: boolean };

    setup() {
        this.state = useState({
            isPlaying: false
        });

        this.videoRef = useRef<HTMLVideoElement>("o-mediaplayer-video");
    }
};

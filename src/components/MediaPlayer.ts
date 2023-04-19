import { Component } from "@odoo/owl";
import { MediaControls } from "./MediaControls";

export class MediaPlayer extends Component {
    static template = "o-mediaplayer-MediaPlayer";
    static components = { MediaControls };
    static props = {
        src: String,
        thumbnail: String,

        autoplay: Boolean,
        loop: Boolean,
        muted: Boolean,
        showControls: Boolean,
        allowFullscreen: Boolean,
    }

    setup() {

    }
};
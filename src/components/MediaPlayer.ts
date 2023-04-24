import { Component, useRef, useState, useSubEnv, onMounted } from "@odoo/owl";
import { MediaControls } from "./MediaControls";
import { Spinner } from "./icons/Spinner";
import { IconButton } from "./icons/Icon";


export class MediaPlayer extends Component {
    static template = "o-mediaplayer-MediaPlayer";
    static components = { MediaControls, Spinner, IconButton };

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
    declare state: {
        isPlaying: boolean,
        isMuted: boolean,
        isFullscreen: boolean,
        volume: number,
        time: number,
        duration: number,
    };

    setup() {
        this.state = useState({
            isPlaying: false,
            isMuted: false,
            isFullscreen: false,
            volume: 1,
            time: 0,
            duration: 0,
        });

        this.videoRef = useRef<HTMLVideoElement>("o-mediaplayer-video");

        useSubEnv({
            settings: {
                autoplay: this.props.autoplay,
                loop: this.props.loop,
                muted: this.props.muted,
                showControls: this.props.showControls,
                allowFullscreen: this.props.allowFullscreen,
            },
            player: {
                el: this.videoRef.el,
                isPlaying: this.state.isPlaying,
                isMuted: this.state.isMuted,
                isFullscreen: this.state.isFullscreen,
                volume: this.state.volume,
                time: this.state.time,
                duration: this.state.duration,

                playPause: this.playPause.bind(this),
                toggleMute: this.toggleMute.bind(this),
                changeTime: this.changeTime.bind(this),
            },
        });

        onMounted(() => {
            this.videoRef.el!.addEventListener("timeupdate", () => {
                this.state.time = this.videoRef.el!.currentTime;
            });

            this.videoRef.el!.addEventListener("durationchange", () => {
                this.state.duration = this.videoRef.el!.duration;
            });

            this.videoRef.el!.addEventListener("play", () => {
                this.state.isPlaying = true;
            });

            this.videoRef.el!.addEventListener("pause", () => {
                this.state.isPlaying = false;
            });

            this.videoRef.el!.addEventListener("volumechange", () => {
                this.state.volume = this.videoRef.el!.volume;
            });

            this.videoRef.el!.addEventListener("loadedmetadata", () => {
                this.state.duration = this.videoRef.el!.duration;
            });

            this.videoRef.el!.addEventListener("ended", () => {
                this.state.isPlaying = false;
            });
        });
    }

    playPause() {
        this.state.isPlaying = !this.state.isPlaying;
        if (this.state.isPlaying) {
            this.videoRef.el?.play();
        } else {
            this.videoRef.el?.pause();
        }
    }

    toggleMute() {
        this.state.isMuted = !this.state.isMuted;
        this.videoRef.el!.muted = this.state.isMuted;
    }

    toggleFullscreen() {
        this.state.isFullscreen = !this.state.isFullscreen;
        if (this.state.isFullscreen) {
            this.videoRef.el!.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    changeTime(time: number) {
        this.videoRef.el!.currentTime = time;
    }

};

import { onMounted, useRef, useState } from "@odoo/owl";
import { TOGGLE, Toggle } from "../utils/toggle";
import { getFullscreenElement } from "../utils/getFullscreenElement";
import { IMediaPlayer } from "../model/IMediaPlayer";
import { IPlaybackSettings } from "../model/IPlaybackSettings";
import { IMediaState } from "../model/IMediaState";
import { Ref } from "../utils/ref";

/**
 * Create a media player
 * @param hostRef Reference to the host element used to request fullscreen
 * @param settings Playback settings for the media player
 * @returns a media player object
 */
export function usePlayer(hostRef: Ref, settings: IPlaybackSettings): IMediaPlayer {
    const state = useState<IMediaState>({
        isStarted: false,
        isReady: false,
        isPlaying: false,
        isMuted: false,
        isFullscreen: false,
        volume: 1,
        time: 0,
        duration: 0,
    })

    // Handle media events
    const mediaRef = useRef<HTMLVideoElement>("o-mediaplayer-media");
    onMounted(() => {
        if (settings.autoplay) {
            mediaRef.el!.play();
        }

        if (settings.muted) {
            mediaRef.el!.muted = true;
            state.isMuted = true;
        }

        if (settings.loop) {
            mediaRef.el!.loop = true;
        }

        if (!mediaRef.el) {
            console.error("Media player is not ready yet");
        }

        mediaRef.el?.addEventListener("timeupdate", () => {
            state.time = mediaRef.el!.currentTime;
        });

        mediaRef.el?.addEventListener("durationchange", () => {
            state.duration = mediaRef.el!.duration;
        });

        mediaRef.el?.addEventListener("play", () => {
            state.isPlaying = true;
        });

        mediaRef.el?.addEventListener("pause", () => {
            state.isPlaying = false;
        });

        mediaRef.el?.addEventListener("volumechange", () => {
            state.volume = mediaRef.el!.volume;
        });

        mediaRef.el?.addEventListener("loadedmetadata", () => {
            state.duration = mediaRef.el!.duration;
        });

        mediaRef.el?.addEventListener("ended", () => {
            state.isPlaying = false;
        });
    });


    function stop() {
        mediaRef.el?.pause();
        mediaRef.el!.currentTime = 0;
        state.isPlaying = false;
    }

    function setPlaying(val: boolean | Toggle) {
        if (val === TOGGLE) {
            mediaRef.el?.paused ? mediaRef.el?.play() : mediaRef.el?.pause();
        } else {
            val ? mediaRef.el?.play() : mediaRef.el?.pause();
        }
    }

    function setMuted(val: boolean | Toggle) {
        if (val === TOGGLE) {
            mediaRef.el!.muted = !mediaRef.el!.muted;
        } else {
            mediaRef.el!.muted = val;
        }
    }

    function setFullscreen(val: boolean | Toggle) {
        if (val === TOGGLE) {
            if (getFullscreenElement()) {
                document.exitFullscreen();
            } else {
                hostRef.el!.requestFullscreen();
            }
        } else {
            val ? document.exitFullscreen() :
                hostRef.el!.requestFullscreen();
        }
    }

    function seek(time: number) {
        mediaRef.el!.currentTime = time;
    }

    return {
        get media() {
            return mediaRef.el;
        },
        stop,
        setPlaying,
        setMuted,
        setFullscreen,
        seek,
        ...state,
    }
}

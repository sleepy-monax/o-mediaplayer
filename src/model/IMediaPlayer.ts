import { Toggle } from "../utils/toggle";
import IMediaState from "./IMediaState";

export default interface IMediaPlayer extends IMediaState {
    /** Reference to the video element */
    media: HTMLVideoElement | null;

    /** Stop the media and set isPlaying to false */
    stop: () => void;

    /** Play pause the media, pass TOGGLE to toggle the state */
    setPlaying: (val: boolean | Toggle) => void;

    /** Mute or unmute the media, pass TOGGLE to toggle the state */
    setMuted: (val: boolean | Toggle) => void;

    /** Set the fullscreen state, pass TOGGLE to toggle the state */
    setFullscreen: (val: boolean | Toggle) => void;

    /** Seek to a specific time in the media */
    seek: (time: number) => void;
}

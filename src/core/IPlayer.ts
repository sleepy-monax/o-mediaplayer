export interface IPlayer {
    el: HTMLVideoElement | null;
    isPlaying: boolean;
    isMuted: boolean;
    isFullscreen: boolean;
    volume: number;
    time: number;
    duration: number;

    playPause: () => void;
    toggleMute: () => void;
    changeTime: (time: number) => void;
}
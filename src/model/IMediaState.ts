export interface IMediaState {
    /** Was the player started for the first time, default to true when autoplay is true */
    isStarted: boolean;

    /** Is the player ready to play */
    isReady: boolean

    /** Is the media currently playing */
    isPlaying: boolean;

    /** Is the media currently muted, default to true when muted is true */
    isMuted: boolean;

    /** Is the media currently fullscreen */
    isFullscreen: boolean;

    /** The current volume of the media, default to 1 when volume is not set */
    volume: number;

    /** The current time of the media */
    time: number;

    /** The duration of the media, -1 indicates that the duration is unknown this commonly happens when the media is not ready yet or it's an HLS stream */
    duration: number;
}

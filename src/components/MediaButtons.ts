import { Component, xml } from '@odoo/owl';
import { IconButton } from './icons/Icon';
import { IPlayer } from '../core/IPlayer';

class MediaButton extends Component {
    static components = { IconButton };
    declare player: IPlayer;

    setup() {
        this.player = this.env.player;
    }
}

export class FullscreenButton extends MediaButton {
    static template = xml`
        <IconButton t-if="!player.isFullscreen" icon="fullscreen" onClick="player.toggleFullscreen" />
        <IconButton t-if="player.isFullscreen" icon="fullscreen-exit" onClick="player.toggleFullscreen" />
    `;
}

export class PlayPauseButton extends MediaButton {
    static template = xml`
        <IconButton t-if="!player.isPlaying" icon="play" onClick="player.playPause" />
        <IconButton t-if="player.isPlaying" icon="pause" onClick="player.playPause" />
    `;
}

export class MuteButton extends MediaButton {
    static template = xml`
        <IconButton t-if="!player.isMuted" icon="volume-up" onClick="player.toggleMute" />
        <IconButton t-if="player.isMuted" icon="volume-off" onClick="player.toggleMute" />
    `;
}
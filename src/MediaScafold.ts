import { Component, useSubEnv, xml } from "@odoo/owl";
import { IMediaPlayer } from "./model/IMediaPlayer";

interface IPlayerScalfoldProps {
    player: IMediaPlayer;
}

/**
 * This is the scaffold for the media player. It manages the layout based on the
 * current state of the player. It doesn't provide any control, it just provides
 * some slots for the controls to be placed in.
 */
export class PlayerScafold extends Component<IPlayerScalfoldProps> {
    static template = xml`
        <div>
            <video class="o-mediaplayer-media" t-ref="o-mediaplayer-media">
                <source t-att-src="props.src" />
            </video>

            <!-- 
                Controls visible when the video is playing
            -->
            <MediaOverlay t-if="player.isStarted">
                <div class="o-mediaplayer-flex">
                    <t t-slot="playing-upper" />
                </div>
                <div class="o-mediaplayer-center>
                    <t t-slot="playing-center" />
                </div>
                <div class="o-mediaplayer-flex">
                    <t t-slot="playing-lower" />
                </div>
            </MediaOverlay>

            <!-- 
                Controls visible before the video is playing
                Like thumbnails and play button 
            -->
            <MediaOverlay t-if="!player.isStarted">
                <div>
                    <t t-slot="idle-background" />
                </div>
                <div>
                    <t t-slot="idle-center" />
                </div>
            </MediaOverlay>

            <!--
                Controls visible when the video is loading
            -->
            <MediaOverlay t-if="player.isReady">
                <div>
                    <t t-slot="loading-center" />
                </div>
            </MediaOverlay>

            <!-- 
                For other user defined overlays 
            -->
            <t t-slot="default" />
        </div>
    `;

    declare player: IMediaPlayer;
    setup() {
        this.player = this.props.player;
        useSubEnv({ player: this.player })
    }
}

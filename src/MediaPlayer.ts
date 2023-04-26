import { Component, useRef, xml } from "@odoo/owl";
import { IPlaybackSettings } from "./model/IPlaybackSettings";
import { IMediaPlayer } from "./model/IMediaPlayer";
import { PlayerScafold } from "./MediaScafold";
import { Spinner } from "./icons/Spinner";
import { Spacer } from "./components";

import {
    PlayPauseControl,
    MuteControl,
    FullscreenControl,
    ShareControl,
    VolumeControl,
    SeekControl
} from "./controls";

import {
    useFormfactor,
    usePlayer
} from "./hooks";


interface IMediaPlayerProps extends IPlaybackSettings {
    thumbnail?: string;
    shareUrl?: string;
    showControls?: boolean;
    allowFullscreen?: boolean;
    allowShare?: boolean;
}

/**
 * This is the main component that is used to play media.
 * It provides a scaffold for the controls to be placed in.
 * 
 * It also provides a set of controls that can be used to play media.
 */
export class MediaPlayer extends Component<IMediaPlayerProps> {
    static components = {
        PlayerScafold,
        Spinner,
        Spacer,
        PlayPauseControl,
        MuteControl,
        FullscreenControl,
        ShareControl,
        VolumeControl,
        SeekControl
    };

    static template = xml`
        <PlayerScafold t-ref='host'>
            <t t-set-slot="playing-upper">
                <MediaSpacer />
                <ShareControl />
            </t>
            
            <t t-set-slot="playing-lower">
                <VFlex>
                    <SeekControl />

                    <HFlex>
                        <PlayPauseControl />
                        <MuteControl />
                        <VolumControl />
                        <MediaSpacer />
                        <FullscreenControl />
                    </HFlex>
                </VFlex>
            </t>
            
            <t t-set-slot="idle-center">
                <PlayPauseControl t-if="isMobile" />
            </t>
            
            <t t-set-slot="idle-background">
                <img class="object-fit-cover h-100 w-100" t-att-src="props.thumbnail" />
            </t>

            <t t-set-slot="loading-center">
                <MediaSpinner />
            </t>
        </PlayerScafold>
    `;

    declare player: IMediaPlayer;
    declare isMobile: boolean;

    setup(): void {
        const hostRef = useRef<HTMLDivElement>("host");
        this.player = usePlayer(hostRef, {
            src: this.props.src,
            autoplay: this.props.autoplay,
            loop: this.props.loop,
            muted: this.props.muted,
        });
        this.isMobile = useFormfactor() === "mobile";
    }
}

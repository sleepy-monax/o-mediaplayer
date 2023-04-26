import { Component } from "@odoo/owl";
import { IMediaPlayer } from "../model/IMediaPlayer";

export interface IBaseControlProps {
}

/**
 * Base class for all media controls.
 * Provides an accessor to the player.
 */
export class BaseControl<Props extends IBaseControlProps = IBaseControlProps> extends Component<Props> {
    get player(): IMediaPlayer {
        return this.env.player;
    }
}

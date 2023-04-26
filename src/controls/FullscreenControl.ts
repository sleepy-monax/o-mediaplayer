import { xml } from "@odoo/owl";
import { IconButton } from "../icons/IconButton";
import { BaseControl } from "./BaseControl";
import { TOGGLE } from "../utils/toggle";

export class FullscreenControl extends BaseControl {
    static components = [IconButton]
    static template = xml`
        <IconButton t-if="player.isFullscreenn" icon="play" onClick="onClick" />
        <IconButton t-else icon="pause" onClick="onClick" />
    `

    setup() {
        super.setup();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.player.setFullscreen(TOGGLE);
    }
}

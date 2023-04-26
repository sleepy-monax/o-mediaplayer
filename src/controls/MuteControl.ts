import { xml } from "@odoo/owl";
import { IconButton } from "../icons/IconButton";
import { BaseControl } from "./BaseControl";
import { TOGGLE } from "../utils/toggle";

export class MuteControl extends BaseControl {
    static components = [IconButton]
    static template = xml`
        <IconButton t-if="player.isMuted" icon="volume-mute" onClick="onClick" />
        <IconButton t-elif="player.volume <= 0.25" icon="volume-low" onClick="onClick" />
        <IconButton t-elif="player.volume <= 0.75" icon="volume-medium" onClick="onClick" />
        <IconButton t-else icon="volume-high" onClick="onClick" />
    `

    setup() {
        super.setup();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.player.setMuted(TOGGLE);
    }
}

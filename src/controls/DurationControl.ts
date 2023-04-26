import { xml } from "@odoo/owl";
import { BaseControl } from "./BaseControl";

export class DurationControl extends BaseControl {
    static template = xml`
        <t t-esc="player.time"/> / <t t-esc="player.duration"/>
    `;
}

import { Component, xml } from "@odoo/owl";
import { css } from "../utils/css";

css`
.o-mediaplayer-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
`

/**
 * This an overlay that is used to display controls on top of the media player.
 */
export class Overlay extends Component {
    static template = xml`
        <div class="o-mediaplayer-overlay">
            <t t-slot="default" />
        </div>
    `
}

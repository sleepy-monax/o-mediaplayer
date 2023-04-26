import { Component, xml } from "@odoo/owl";
import { css } from "../utils/css";

css`
.o-mediaplayer-hflex {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.o-mediaplayer-vflex {
    display: flex;
    flex-direction: column;
    height: 100%;
}
`

export class HFlex extends Component {
    static template = xml`
        <div class="o-mediaplayer-hflex">
            <t t-slot="default" />
        </div>
    `;
}

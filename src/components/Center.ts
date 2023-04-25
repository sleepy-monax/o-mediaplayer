import { Component, xml } from "@odoo/owl";
import { css } from "../utils/css";

css`
.o-mediaplayer-center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
`

export default class Center extends Component {
    static template = xml`
        <div class="o-mediaplayer-center">
            <t t-slot="default" />
        </div>
    `;
}

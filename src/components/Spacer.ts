import { Component, xml } from "@odoo/owl";
import { css } from "../utils/css";

css`
.o-mediaplayer-spacer {
    flex: 1;
}
`

export default class Spacer extends Component {
    static template = xml`
        <div clas="o-mediaplayer-spacer" />
    `;
}

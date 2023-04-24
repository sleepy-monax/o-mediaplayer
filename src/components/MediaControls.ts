import { Component } from "@odoo/owl";
import { IconButton } from "./icons/Icon";
import { css } from "./css";

css`
.o-mediaplayer-volume {
}
`;

export class MediaControls extends Component {
    static template = "o-mediaplayer-MediaControls";
    static components = { IconButton };
};
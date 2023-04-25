import { Component, xml } from "@odoo/owl";
import { css } from "../utils/css";

export interface IIconProps {
    icon: string;
}

css`
.o-mediaplayer-Icon {
    .o-icon {
        display: inline-block;
        fill: #fff;
        height: 2em;
        margin: 0.5em;
    }
}
`;

export default class Icon extends Component<IIconProps> {
    static props = {
        icon: String,
    };

    static template = xml`
        <div class="o-mediaplayer-Icon">
            <t t-call="{{this.iconTemplate}}" />
        </div>
    `;

    get iconTemplate(): string {
        return `o-mediaplayer-icon.${this.props.icon}`;
    }
}

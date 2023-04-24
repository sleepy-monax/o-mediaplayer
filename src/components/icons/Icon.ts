import { Component, xml } from "@odoo/owl";
import { css } from "../css";

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

export class Icon extends Component {
    static props = {
        icon: String,
    };

    static template = xml`
    <div class="o-mediaplayer-Icon">
        <t t-call="{{this.iconTemplate}}" />
    </div>
    `;

    declare iconTemplate: string;

    setup() {
        this.iconTemplate = `o-mediaplayer-icon.${this.props.icon}`;
    }
}

css`
.o-mediaplayer-IconButton {
    cursor: pointer;

    .o-icon {
        display: inline-block;
        fill: #fff;
        height: 2em;
        margin: 0.5em;

        &:hover {
            fill: #ccc;
        }
    }
}
`;

export class IconButton extends Icon {
    static props = {
        icon: String,
        onClick: Function,
    };

    static template = xml`
    <div class="o-mediaplayer-IconButton" t-on-click="props.onClick">
        <t t-call="{{this.iconTemplate}}" />
    </div>
    `;


}
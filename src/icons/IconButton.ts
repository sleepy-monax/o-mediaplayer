import { Component, xml } from "@odoo/owl";
import { css } from "../utils/css";
import { IIconProps } from "./Icon";

export interface IIconButtonProps extends IIconProps {
    onClick: () => void;
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

            &:active {
                fill: #aaa;
            }
        }
    }
`;

export class IconButton extends Component<IIconButtonProps> {
    static props = {
        icon: String,
        onClick: Function,
    };

    static template = xml`
        <button class="o-mediaplayer-IconButton" t-on-click="onClick">
            <t t-call="{{iconTemplate}}" />
        </button>
    `;


    setup() {
        this.onClick = this.onClick.bind(this);
    }

    get iconTemplate(): string {
        return `o-mediaplayer-icon.${this.props.icon}`;
    }

    onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.onClick();
    }
}

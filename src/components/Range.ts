import { Component, xml } from "@odoo/owl";
import { css } from "../utils/css";

interface IRangeProps {
    foreground: string;
    background: string;

    value: number;
    min: number;
    max: number;
    onChange: (val: number) => void;
}

css`
.o-mediarange-track {
}

.o-mediarange-fill {
}

.o-mediarange-thumb {
}
`

/**
 * Customisable input range component.
 */
export default class Range extends Component<IRangeProps> {
    static template = xml`
        <div class="o-mediarange-track">
            <div class="o-mediarange-fill" />
                <div class="o-mediarange-thumb" />
            </div>
        </div>
    `

    static props = {
        foreground: String,
        background: String,

        value: Number,
        min: Number,
        max: Number,
        onChange: Function,
    };
}

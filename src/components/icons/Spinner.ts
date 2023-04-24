import { Component, xml } from "@odoo/owl"

export class Spinner extends Component {
    static props = {
        class: String,
    };

    static template = xml`
    <div t-att-class="this.props.class" >
        <svg class="spinner-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
            <style>
                @keyframes dash {
                    0% {
                        stroke-dashoffset: 120;
                        stroke-width: 2px;
                    }
                    35%, 50% {
                        stroke-dashoffset: 0;
                        stroke-width: 8px;
                    }
                    85%, 100% {
                        stroke-dashoffset: -120;
                        stroke-width: 2px;   
                    }
                }
                @keyframes rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                #spinner-svg {
                    animation: rotate 1s linear infinite;
                }
                #spinner {
                    stroke-dasharray: 120, 120;
                    animation: dash 2.5s ease infinite;
                }
            </style>
            <circle id="spinner" cy="25" cx="25" r="19" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
    </div>
    `;
}

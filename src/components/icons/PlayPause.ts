import { Component, xml } from "@odoo/owl"

export class PlayPause extends Component {
    static props = {
        isPlaying: Boolean,
    };

    static template = xml`
            <svg t-if="props.isPlaying" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>play</title><path d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>
            <svg t-else="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pause</title><path d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>
        `;
}

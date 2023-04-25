export default function getFullscreenElement(): Element | null {
    // NOTE: Most browsers should support the standard `fullscreenElement` property
    //       but some browsers like Safari only support the prefixed version
    //       See: https://caniuse.com/mdn-api_document_fullscreenelement
    return document.fullscreenElement ||
        document['webkitFullscreenElement'] ||
        document['mozFullScreenElement'] ||
        document['msFullscreenElement'];
}

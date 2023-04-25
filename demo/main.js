const { MediaPlayer } = o_mediaplayer;
const {
    xml,
    Component,
    App,
    whenReady
} = owl;

class Demo extends Component {
    static template = xml`
        <div>
            <MediaPlayer 
                src="'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4'"
                thumbnail="'https://upload.wikimedia.org/wikipedia/commons/b/b7/Earth_%2816530938850%29.jpg'"/>
        </div>
    `;

    static components = { MediaPlayer };
};

whenReady(async () => {
    try {
        const templates = await (await fetch("../build/o_mediaplayer.xml")).text();
        const root = new App(Demo);
        root.addTemplates(templates);
        root.mount(document.body, { dev: true });
    } catch (e) {
        console.error(e)
        console.error(e.cause)
    }
});


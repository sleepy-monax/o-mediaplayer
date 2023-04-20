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
                src="'https://file-examples.com/storage/feee5c69f0643c59da6bf13/2017/04/file_example_MP4_1920_18MG.mp4'"
                thumbnail="'https://upload.wikimedia.org/wikipedia/commons/b/b7/Earth_%2816530938850%29.jpg'"/>
        </div>
    `;

    static components = { MediaPlayer };
};

whenReady(async () => {
    const templates = await (await fetch("../build/o_mediaplayer.xml")).text();
    const root = new App(Demo);
    root.addTemplates(templates);
    root.mount(document.body, { dev: true });
});


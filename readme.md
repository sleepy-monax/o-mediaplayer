# o-mediaplayer

A simple media player for [Owl](odoo.github.io/owl/)

# Trying it out

```bash
$ npm i

$ npm run start 

# The demo will auto reload on file change
```

## Exemple

```xml
<MediaPlayer src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4" />
```


## Props

The following props are available for customizing the player:

| Name            | Type    | Default | Description                |
| --------------- | ------- | ------- | -------------------------- |
| src             | string  |         | The source of the media    |
| thumbnail       | string  |         | The thumbnail of the media |
| width           | string  | 100%    | The width of the player    |
| height          | string  | 100%    | The height of the player   |
| muted           | boolean | false   | Mute the player            |
| loop            | boolean | false   | Loop the player            |
| autoplay        | boolean | false   | Autoplay the player        |
| showControls    | boolean | true    | Show the controls          |
| allowFullscreen | boolean | true    | Allow fullscreen           |

## Contributing

- Open a pull request or an issue on this repository.
- Make sure you have [signed the CLA](https://github.com/odoo/odoo/blob/16.0/doc/cla/sign-cla.md) on [odoo repository](https://github.com/odoo/odoo).

Most of [odoo contribution guidelines](https://github.com/odoo/odoo/wiki/Contributing#making-pull-requests) apply here.
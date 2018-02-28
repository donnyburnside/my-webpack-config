# My Webpack Config

![stag](https://github.com/donnyburnside/my-webpack-config/blob/master/resources/img/stag.png)

Exactly what it says on the tin. I use this config as a base across many of my projects and keep it updated accordingly.

## How to Use
Using this repository as a base, let's assume you have a directory in your project where you keep your pre-production frontend assets (`/resources`). Inside this folder, we group our assets by _type_ (`resources/css`, `resources/js`, `resources/img`) and we want to have Webpack _do it's thing_ and output our _compiled_ assets to another directory (`/public`).

With these conditions met, this webpack config is ready to go. Just copy it into the root of your project and ensure you install all of the dependencies that are in this repositories `package.json` file. You can do this by running `npm install --save-dev PACKAGE1 PACKAGE2`.

Also in the `package.json` file, you may want to copy `scripts`, which adds a couple of helpful commands, and `browserslist`, which is used by Autoprefixer and most other plugins you may choose to add later.

## Help
##### I get an error ...
In some cases, installing plugins with the `@next` flag can help resolve errors, especially around major updates. In this case just change your command to `npm install --save-dev PACKAGE1@next`.  If that doesn't help then the next best thing is to see whether others are having your issue by visiting the plugins GitHub page and following on from there.

## Changelog
- **1.0.0** - Initial version.

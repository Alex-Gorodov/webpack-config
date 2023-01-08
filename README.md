# Basic WebPack configuration.

Automating processes of compiling style preprocessors, compile ReactJS
and TypeScript to JS, compile JS to the version supported by your browser.
Minimizing the CSS, HTML and JS files.

Add this folder to your project and change content in 'src' folder to your own. 
Then run ```npm i``` for installing a package and any packages that it depends on.

## What is inside:

- [TypeScript](https://www.typescriptlang.org/) (4.9.4)
- [React](https://reactjs.org/) (18.2)
- [babel](https://babeljs.io/)
- [ESlint](https://eslint.org/)
- CSS, [Less](https://lesscss.org/), [SCSS](https://sass-lang.com/)
- Terser (JS-minimizer)
- styles minimizer
- HMTL-loader
- file-loader
- dev-server

## Scripts:

- ```dev``` - compile and load files and put it into 'dist' folder - in dev-mode
- ```build``` - make the same thing like 'dev', but in prod-mode
- ```watch``` - keep running after building
- ```start``` - starting dev-server at port 8800
- ```stats``` - starting webpack-bundle-analyzer at port 8888 and create stats.json file

## TODO:

- PostCSS
- Graphic's optimization, webp-format
- SVG sprites
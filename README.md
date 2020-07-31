<p align="center">
  <a href="https://www.gatsbyjs.org">
<img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby p5.js Starter
</h1>

This is a ✏✏✏ WIP ✏✏✏ Gatsby starter that integrates with p5.js. View a live version of it at https://gatsby-p5-gallery-starter.herokuapp.com/.

I created it because I love working in p5.js and wanted a way to display my sketches, but I couldn't find any pre-existing scaffolding to do so in the [Gatsby Starter Library](https://www.gatsbyjs.org/starters/?v=2). So I decided to create my own, so that others can easily show off their awesome sketches.

In this README, I've written detailed instructions on how to use this starter. If anything is not working for you, please create an issue, and I'll get right on it.

## TODO
- [x] Add instructions on adding your own p5.js sketch
- [x] Refactor SketchWrapper using React Hooks API
- [ ] Add tests that all gallery images have sketches and all sketches have gallery images

## ✨ Features
- [gatsby](https://www.gatsbyjs.org/), obviously!
- React integration for [p5.js](https://p5js.org/) sketches. Note that this does not use `react-p5-wrapper` -- I've [written my own wrapper](https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/components/sketchWrapper.jsx) for this starter.
- responsive css-grid gallery with [Sass](https://sass-lang.com/)

## 🚀 Getting Started

### 0. Make sure you have the basics.

- ***Node.js***
In order to use this template, you need to have node.js installed. Run `node -v` on the command line, and if a version is displayed, you're good to go. If not, check out Gatsby's instructions on the [**appropriate installation**](https://www.gatsbyjs.org/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system) for your machine.

- ***Git***
You need Git in order to use Gatsby. If you don't have Git, get it using [**these instructions**](https://www.gatsbyjs.org/tutorial/part-zero/#install-git).

- ***Gatsby CLI***
You'll need to install this node.js package globally, with `sudo npm install -g gatsby-cli`. Enter your password when prompted. Once it's finished installing, view the available commands by running `gatsby --help`.

*NOTE!* 
If you already have gatsby-cli, and you're seeing an error related to a missing dependency called `ink`, you need to update your gatsby-cli by running `npm update gatsby`. More information on this issue can be found [here](https://github.com/gatsbyjs/gatsby/issues/22109).

### 1. Create a Gatsby site.

Don't just clone this repo. Instead, use the Gatsby CLI to create a new site, specifying the starter project.

```sh
gatsby new <your-project-name> https://github.com/doubledherin/gatsby-p5-starter.git
```

This will create a new Gatsby project based on a clone of this repo.

### 2. 🔥 Fire it up!
`cd` into the new project directory that was created, then run
```sh
gatsby develop
```

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is GraphiQL, a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Notice that you also have hot reloading out of the box: make an edit to `src/pages/index.js`. Save your changes and the browser will update in real time.

🔥 Hot reloading is hot hot hot. 🔥

### 3. Set up your Github repo.

Create a new repository on Github and then add it as the origin remote locally with 

```sh
git remote add origin <url-of-your-github-repo>
```

Push your local `master` branch to the remote:

```sh
git push origin master
```
## Add Your Own Content

### How to Prepare a p5.js Sketch to be Added to Your Gallery

#### TL;DR
1. Copy [this sketch template](https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/templates/sketchTemplate.js) and paste it into `src/scripts/sketches`, making sure to name it exactly the same as the still image that will represent it in the gallery. (As you can see, all of the p5.js functions are namespaced with `p.` in this template so as not to dilute the global namespace.)
2. Copy your sketch's global variables into the "Initialize variables" section. The copy the body of your `setup`, `draw` and other p5.js built-in functions into the namespaced versions of them in the template (i.e. copy the body of your `setup()` function into `p.setup()`). If you are using a p5 function that isn't in the template, you can add it, just make sure to namespace it too.
3. If your editor has an eslint plugin, the linter should be hollering right about now about a bunch of undefined variables related to p5. For each one of this, add a `p.` namespace before it.
4. If you're using a p5 function or class that's already namespaced with `p5`, such as `p5.Vector`, uncomment [this line](https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/templates/sketchTemplate.js#L3) in the template.

Once you've done all that you should be good to go. If you want to know why the heck you need to do this, read "The Deets," below.

#### The Deets
By default, all p5.js functions are in the global namespace (i.e. bound to the window object). This means you can run into conflicts with other libraries and other global variables.

To avoid trouble with this issue, I've set this starter up to rely on the "instance mode" of p5.js. In "instance mode", all p5 functions are bound up in a single variable which can be used as a namespace. [Here](https://p5js.org/examples/instance-mode-instantiation.html) is an example of this kind of sketch on the p5.js site. As you can see, the [sketch template](https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/templates/sketchTemplate.js) you need to use to add a new p5.js sketch to the gallery follows this same pattern. Then, the p5 instance is instantiated in [this wrapper component](https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/components/sketchWrapper.jsx).

For more information about instance mode, check out the [p5.js docs on it](https://p5js.org/reference/#/p5/p5), or even better, [watch this](https://www.youtube.com/watch?v=Su792jEauZg&feature=youtu.be).

### The Gallery

#### How to Add a p5.js Work to the Gallery

Make sure to read the `How to Prepare Your p5.js Sketch for This Site` section before proceeding.

To add a p5.js work to the gallery, you need to add 2 things to your repo:
1. The still image for the Gallery page
2. The p5.js file itself (called a "sketch")

*Both the image and the p5.js sketch need to have the same filename.* For example, if the name of your sketch is "New World Order," the image should be called `new-world-order.png` and the sketch should be called `new-world-order.js`.

Place the image in the `src/static/images/gallery/p5/` directory.

Place the sketch in the `src/scripts/sketches` directory.

The title of the artwork that displays when hovering on an item in the gallery is automatically derived from the image filename with [this function](https://github.com/doubledherin/gatsby-p5-starter/blob/a6fed6a7953147580f602268173c91994d8ffe09/src/pages/gallery.jsx#L53).

#### How to Add a Still Image to the Gallery (for non-p5.js works)
The benefit of using this starter is that it's easy to add p5.js works to the gallery, but if you just want to add a still image, you can do that too -- just add the image to `static/images/gallery` and make sure not to put it in the `/p5` subdirectory.

### The Home Page
To change which p5.js sketch appears on the home page, change [this import](https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/pages/index.jsx#L5) to point to the sketch file you want on the homepage.

### The About Page
Replace [this image](https://github.com/doubledherin/gatsby-p5-starter/tree/master/src/images/about) with yours.

To move the image elsewhere on the page, put [this line](https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/pages/about.jsx#L22) where you'd like the image to appear within the content.

### The Content Page
Simply replace the static content found [here](https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/pages/contact.jsx#L10-L11).

### Add or Remove Entire Pages
One of the nice things about Gatsby is that pages are generated automatically if they live in the `pages/` directory. So to create a new page, simply add a new .jsx file to that directory.

To add the new page to the header navigation list, add a new `Navlink` item for it [here](https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/components/layout/header/index.jsx#L35-L38).

To make sure the new header nav item animates nicely in mobile like the others, make sure it is accounted for [here](https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/styles/components/layout/header/_media.scss#L65-L75). Each nav item should have an `&:nth-of-type(<n>)` entry, and the `transition-delay` should be incremented by `0.1s` for each successive item.

## 💫 Deployment
This starter has instructions on deployment to Heroku, but if you're interested in hosting your  site somewhere else, there are plenty of options; check out the [**Gatsby docs**](https://www.gatsbyjs.org/docs/deploying-and-hosting/).

1. If you don't already have a Heroku account, create one for free [here](https://signup.heroku.com/).
2. Make sure you're logged in and go to your dashboard, at https://dashboard.heroku.com/apps.
3. In the top right corner, click "New", then "Create New App".
4. Enter a name for your app and choose a region. Ignore the 'Add to pipeline' option unless you need it (unlikely). Click "Create app".
5. If you don't have it already, download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). If you're not sure, type `heroku -v` on the command line. If a version is printed to the terminal, you have the Heroku CLI. If not, you don't.
6. Once you have the Heroku CLI, you should be able to log in to Heroku on the command line. Do that by running `heroku login`
7. Add a heroku remote for your app: `heroku git:remote -a <your-heroku-app-name>`
8. Set the heroku/node.js and heroku-buildpack-static buildpacks on your application:

```
heroku buildpacks:set heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static.git
```

Heroku will automatically detect and run the build script from your package.json.

9. Heroku can only deploy from the master branch. Run `git push heroku master` to deploy what's on your local `master` branch; run `git push heroku <local-branch-name>:master` to deploy what's on your local branch. 

Once it completes, your app should be deployed to your-app-name.herokuapp.com. 

That should be all you need, but more information on deploying to Heroku can be found [here](https://www.gatsbyjs.org/docs/deploying-to-heroku/).

## Customizations

### Typography
This starter uses [Typography.js](http://kyleamathews.github.io/typography.js/) with the Bootstrap theme. To choose a different theme or to customize your own theme, follow [these Typography.js docs](http://kyleamathews.github.io/typography.js/) or these [Gatbsy-Typography ones](https://www.gatsbyjs.org/docs/typography-js/).


### Gallery Page
The images in the Gallery are automatically optimized for fluid responsive rendering using the `gatsby-image`, `gatsby-plugin-sharp`, and `gatsby-transformer-sharp`. They are dynamically rendered via GraphQL queries enabled by the `gatsby-source-filesystem` plugin.

Any image in `src/static/images/gallery` will appear on the Gallery page, and the text for the image is based on the filename. So if you want the text for your image to be "P5 Is Awesome", the filename of the image needs to be `p5-is-awesome.<file extension>`.

Clicking on any image in the gallery will redirect you to a page with a full-screen representation of the gallery item. The pages for each gallery item are generated dynamically in the gatsby-node.js config file. For more information on how this works, see the [Gatsby tutorial of programatically creating pages](https://www.gatsbyjs.org/tutorial/part-seven/).

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.



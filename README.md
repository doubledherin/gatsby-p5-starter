<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby p5.js Starter
</h1>

This is a Gatsby starter that integrates with p5.js.

## ✨ Features

- [p5.js](https://p5js.org/)
- [Emotion CSS Library](https://emotion.sh/docs/introduction)

Note that this does not use `react-p5-wrapper` -- no need.

## 🚀 Getting Started

0. **Make sure you have the basics.**

    ***Node.js***
    In order to use this template, you need to have node.js installed. Run `node -v` on the command line, and if a version is displayed, you're good to go. If not, check out Gatsby's instructions on the [**appropriate installation**](https://www.gatsbyjs.org/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system) for your machine.

    ***Git***
    If you don't have Git, get it using [**these instructions**](https://www.gatsbyjs.org/tutorial/part-zero/#install-git).

    ***Gatsby CLI***
    You'll need to install this node.js package globally, with `sudo npm install -g gatsby-cli`. Enter your password when prompted. Once it's finished installing, view the available commands by running `gatsby --help`.

1.  **Create a Gatsby site.**
    *Don't just clone this repo.* Instead, use the Gatsby CLI to create a new site, specifying the starter project.
    
    ```sh
    gatsby new <your-project-name> https://github.com/doubledherin/gatsby-p5-starter.git
    ```

    This will create a new Gatsby project based on a clone of this repo.

2.  **Make some config changes.**

    `cd` into your repo's directory. You'll see that Git is already initialized.

    In the `config.js` file, change the `pathPrefix` entry to match the name of your repo, prefaced with `/`. (By default, the path prefix is set to `/my-gatsby-p5-site`. If your repo name is `foo`, change the path prefix to `/foo`.)
    
    Also change `siteUrl` to replace `your-username` with your Github username. For example if your username is `foobar`, the `siteUrl` should be set to `'https://foobar.github.io'`.

3.  **Fire it up!**

    ```sh
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is GraphiQL, a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Notice that you also have hot reloading out of the box: make an edit to `src/pages/index.js`. Save your changes and the browser will update in real time.

    Hot reloading is hot hot hot. 

4.  **Set up your Github repo.**

    Create a new repository on Github and then add it as the origin remote locally with 
    
    ```sh
    git remote add origin <url-of-your-github-repo>
    ```

    Commit your config changes and push:

    ```sh
    git add config.js
    git commit -m "Initial commit"
    git push origin master
    ```
    
## 💫 Deployment to Github Pages

You have 2 choices for Github deployment: 
- Option 1: a github.io path of your subdomain (e.g. `<username>.github.io/<pathPrefix>`), or
- Option 2: your github.io subdomain (e.g. `<username>.github.io`) 

### Option 1: Deployment to a github.io path
1. Create a local `gh-pages` branch and push it to Github, then return to the `master` branch.
```sh
git checkout -b gh-pages
git push origin gh-pages
git checkout master
```
2. In your Github repo, click Settings, then scroll all the way down to **Github Pages**. Confirm that your source page for Github Pages is set to `gh-pages` (if it isn't set it to `gh-pages`).
3. Run `npm run deploy` and *a few minutes after the deploy completes*, you should see the site at `<username>.github.io/<pathPrefix>`.

### Option 2: (Not currently working) Deployment to your github.io subdomain
1. In your Github repo, click Settings, scroll down to Github Pages, and select `master` for your source page.
2. In your `package.json`, under `scripts`, change the entry for `"deploy"` by removing `--prefix-paths` and by adding `-b master` to the end. It should look like this: `"deploy": "gatsby build && gh-pages -d public -b master"`
3. Run `npm run deploy` and  *a few minutes after the deploy completes*, you should see the site at `username.github.io`.
4. If you'd like, remove the `pathPrefix` entry in the `gatsby-config.js` file, as it's only needed for deployment to a specific path.

## 💫 Deployment to Other Nice Places
If you're interested in hosting your  site somewhere other than Github Pages, check out the [**Gatsby docs**](https://www.gatsbyjs.org/docs/deploying-and-hosting/). There are tons of options.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.



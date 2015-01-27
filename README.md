# Packadic github pages theme
This project aims to be the most feature rich github pages theme.


## Features
- Github user pages theme.
- Github project pages can inherit the theme. Use your project's gh-pages. Navigation can be added by your project to your user pages.
- Grunt tasks for: documentation generation (custom jsdoc, phpdoc, javadoc, code coverage theme integration). Create awesome integrated documentation.
- Bootstrap 3 SCSS, jquery (ui), font-awesome,
- Online posts/pages editor. Create/edit content using oauth2, ace editor etc.


## Directory and files overview
This includes directories that will be created when running tasks.  
  
#### Directories
| Directory | Description |
|:----------|:------------|
| . | the root directory is a git repo that points to a remote repo that holds all your source files. NOT the github user pages repo (ex: username.github.io)
| dev | src will be exported to dev. This will serve as a local test version which can be served at http://0.0.0.0:4000. The difference between `dev` and `dist` is that `dev` contains minified, concat, etc |
| dist | the dist folder is a git repo that points to remote the user github pages repo. it will have minified, concat, etc files |
| grunt | contains grunt tasks and config files |
| src | contains source files for the website |
| test | contains some tests |
| _includes | This directory is a git repo pointing to the remote `shared-theme-files`. This will be a submodule for your user pages and for every project page. contains all required files to mimick the user repo |
  
#### Git repositories
| Directory | Description |
|:----------|:------------|
| . | The project root directory is the `SOURCE` repository |
| dist | The `username.github.io` github user pages repository |
| _includes | the `shared-theme-files` repository that will be submoduled for all (user and project) gh-pages |
  
#### Files  
| File | Description |
|:----------|:------------|
| .bowerrc | bower components will be installed into `src/assets/vendor` |
| CHANGELOG.md | Contains all changes. This will be auto updated every npm version with all commit messages |
| serve.sh | executing this will serve the `dev` directory |
  
The other files and directories should be self-explenatory
  
## Grunt

#### Tasks
| Task | Description |
|:----------|:------------|
| packadic:init | initializes packadic, should be runned only once when cloning the repo locally |
| build | builds the `src` into `dev` |
| dist | builds the `src` into `dev` into `dist` |
| publish:<version> | Publishes the `source`, `dist` and `_includes` to remote, also bumps the package.json version, auto generates the changelog etc | 
  
#### Configuration
tba
  
## Credits
#### Contributors
- [Robin Radic](https://github.com/robinradic)  
  
#### Third party plugins
## License
Copyright 2015 - Robin Radic.
[MIT License](http://radic.mit-license.org)

# ts-vue-severi

This site is published at https://severikupari1.github.io/vue-amb-typescript/

Built storybook for this application found https://severikupari1.github.io/vue-amb-typescript/story/

Mock server used https://jsonplaceholder.typicode.com/

**This is a simple article list (with CRUD Operation) to showcase the usage of:**

- Vue
- Vuex and Modules
- vue-router
- Typescript (Class based API)
- Axios
- Code splitting/ Lazy loading
- Cypress e2e tests -> [.gif](src/assets/vue-amb-cypress.gif)
  ![Cypress](./src/assets/vue-amb-cypress.gif)
- Jest component testing [here](tests/unit/NavBar.spec.ts)
- Storybook for components [here](src/stories/navbar.stories.js)
### Styling

- SASS/SCSS pre-processor is used for CSS styling.
- Basic responsive design
- Element UI library is used to enhance the look and feel of the app.
- CSS Resets

### Vuex

Using Vuex to store some common data and accessing them using Helpers in components. Using modular approach by creating specific modules to store and access data.

### Typing

Class based API approach is used here. Using `vue-property-decorator` to decorate modules in Component files.
Using `vuex-module-decorators` to decorate Vuex modules and `vuex-class` library to access the Vuex properties such as `state`, `actions`, `getters` etc in components.

### Ci/Cd pipeline using github actions 
[main.yml](.github/workflows/main.yml)
When code is pushed to master pipeline builds vue app and storybook.
Built code hosted with github pages and build result found in gh-pages branch.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your unit tests

```
yarn run test:unit
```

### Run your e2e (cypress) tests in cypress ui

```
yarn run test:e2e
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

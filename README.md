<a ID="readme-top"></a>

<div align="center">

# ⭐ React Portfolio ⭐

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.w3schools.com/js/)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?style=for-the-badge&logo=nodedotjs&logoColor=fff)](https://nodejs.org/en)
[![Express Badge](https://img.shields.io/badge/Express-000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)
[![GitHub Badge](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/justinsta624/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)

</div>
</div>

## Outcome

Followings are the outcomes of the challenge 20:

* The URL of the functional, deployed application </br>
[Deployed application: NETLIFY](https://melodious-kleicha-6ffc72.netlify.app/) </br>

* The URL of the GitHub repository, with a unique name and a README that describes the project </br>
[Repository for this challenge](https://github.com/justinsta624/ReactFolio)


## Screenshots

The following images show the web application's appearance and functionality:

![Screenshot 2024-03-03 222406](https://github.com/justinsta624/ReactFolio/assets/143357899/be458bff-4150-4ff6-8840-74df460b477d)
![Screenshot 2024-03-03 222426](https://github.com/justinsta624/ReactFolio/assets/143357899/e03f2a49-6428-4edf-86d9-5f7507d30487)
![Screenshot 2024-03-03 222517](https://github.com/justinsta624/ReactFolio/assets/143357899/26273bd6-ef7f-4f6c-9970-a7aa53863ffe)
![Screenshot 2024-03-03 222540](https://github.com/justinsta624/ReactFolio/assets/143357899/45b94882-b016-4f7a-bbc6-fe9a3db90b51)

<div align="center">

</div>
</div>

## Table of contents

- [Outcome](#outcome)
- [Screenshots](#screenshots)
- [User Story](#user-story)
- [Acceptance Critiera](#acceptance-criteria)
- [Tasks](#tasks)
- [Technologies Used](#technologies-used)
- [Reference](#reference)
- [License](#license)

## User Story <a ID="user-story"></a>

### This application was developed with this user story in mind:

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acceptance Criteria <a ID="acceptance-criteria"></a>

### This application was developed with the below User acceptance criteria:

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different
sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title
corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN the browser URL changes and I am presented with the corresponding section below the navigation
and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed
applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles,
and their profile on a third platform (Stack Overflow, Twitter)
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tasks

* Create a portfolio using React skills, which will help set apart from other developers whose portfolios don’t use the latest technologies.
* Deploy this application to Netlify. Follow the instructions in the Git Guide or consult the [Docs on Netlify](https://vitejs.dev/guide/static-deploy.html#netlify) to create a build that you can deploy.
* Use `vite` to build portfolio, which will include the following:
  - A single `Header` component that appears on multiple pages
  - A single `Navigation` component within the header that will use `Link` components from `react-router-dom` to conditionally render the different sections of your portfolio
  - A single `Project` component that will be used multiple times in the Portfolio section
  - A single `Footer` component that appears on multiple pages

### Vite: Steps to follow

1. In the command line, navigate to the desired parent folder and run `npm create vite@latest`.
2. Enter the desired name of new project folder.
3. From the first list of options, select framework; for activities in class, we'll be using `React`.
4. From the second list of options, select variant; for activities in class, we'll be using `JavaScript`.
5. `cd` into your newly created project folder and run `npm install`.
6. Run `npm dev`/`npm run dev` and navigate to the prompted URL to see application.

### Further customization

1. Navigate to `package.json` and modify the `scripts` object so that it looks like this example:
```json
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```
* Note the addition of the `"start": "vite"` script.

2. Navigate to the `vite.config.js` file and edit the export object so that it looks like this example:
```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

### Projects

For each project that is featured in portfolio, include the following:

* An image of the deployed application (either a short animated GIF or screenshot)
* The title of the project
* A link to the deployed application
* A link to the corresponding GitHub repository

### Design

* Use mobile-first design.
* Choose a color palette that distinguishes your site from the default Bootstrap theme and unstyled HTML sites. Refer to resources like [Coolors](https://coolors.co/) or another color scheme generator to help you create something that will stand out.
* Ensure that the font size is large enough to read and that the colors don't cause eye strain.
* Consider using animations and React component libraries. Note that this will not affect your grade, but it might impact how potential employers gauge your knowledge.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies used <a ID="technologies-used"></a>

- **Node.js**: Runtime environment for executing server-side JavaScript code.
- **Express**: Web application framework for building RESTful APIs.
- **React**: Open-source JS library used for building user interfaces or UI components, particularly for single-page applications where user interactions are dynamic and frequent.
- **Webpack**: Module bundler that helps bundle and manage static assets for web application.
- **HTML5**:  The latest version of the standard markup language used to create and structure content on the application.
- **Vite**: Build tool and development server for modern web development projects.
- **Heroku**: Cloud platform that offers easy deployment and management of web applications.
- **Netlify**: Web development platform that provides a variety of services to simplify the process of building, deploying, and managing modern web projects.
- **Coolors**: Online platform and mobile application that helps users generate color schemes for various design projects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Reference

- [React Docs: Getting Started](https://react.dev/learn)
- [Vite Docs: Getting Started](https://vitejs.dev/guide/)
- [React Docs on JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React Docs on state](https://react.dev/learn/managing-state)
- [React Docs on Hooks](https://react.dev/reference/react)
- [React Router quick start guide](https://reactrouter.com/en/main/start/tutorial)
- [Vitest Docs on testing](https://vitest.dev/guide/)
- [React Docs on lists and keys](https://react.dev/learn/rendering-lists)
- [Vite Docs on deploying with Netlify](https://vitejs.dev/guide/static-deploy.html#netlify-with-git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This application can be used in conjunction with licensing covered in  <b>MIT License</b>
</div>
</div>
(Click on the badge for details of the license)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
© 2024 Hanbyeol Justin Lee. Confidential and Proprietary. All Rights Reserved.

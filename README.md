### New Install Getting Started

---

First, install the dependencies:

```bash
npm install
```

run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Each Folder is a route / Section of the site

- create in each folder

  - page.jsx - main content - add the default component

  ```javascript
   const {page name} = () => {
    return
    <div>
      Hello World!
    </div>;
    };

    export default {page name};
  ```

- {page}.module.css - styling

- layout.js in app folder wrapps the whole app
  - put here the components you want to use on every page
    - navbar
    - footer
    - etc

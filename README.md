# NomadLife

# Run

Run in mobile:

```
npm run mobile
```

Run in pwa:

```
npm run pwa
```

# Folder Structure:

**Key Points:**

- **`app/`:** The heart of your application, housing the main module and its submodules.
  - **`core/`:** Essential services (e.g., logging, configuration), guards, and interceptors that are used throughout the application.
    - **`authentication/`:** Services and guards related to user authentication and authorization.
    - **`http/`:** Interceptors to handle HTTP requests and responses globally.
    - **`services/`:** Other core services that provide common functionalities.
  - **`shared/`:** Reusable components, directives, pipes, and utility functions.
    - **`components/`:** Generic components like buttons, modals, and other UI elements.
    - **`directives/`:** Custom directives to enhance HTML elements with additional behavior.
    - **`pipes/`:** Custom pipes to transform data for display in templates.
    - **`utils/`:** Helper functions and utilities used across the application.
  - **`features/`:** Modules dedicated to specific features or functionalities of your app.
    - **`home/`:** Module responsible for the home page.
      - **`components/`:** Components specific to the home page.
      - **`pages/`:** Main content pages within the home feature.
      - **`services/`:** Services related to the home page functionality.
      - **`home.module.ts`:** Module definition for the home feature.
    - **`finances/`:** Module responsible for managing product-related features.
      - **(Similar structure to `home/`)**
    - **`...`:** Other feature modules following a similar structure.
  - **`app-routing.module.ts`:** Module for defining routes and navigation within the application.
  - **`app.component.ts`:** Root component of the application.
  - **`app.module.ts`:** Main application module that bootstraps the app.
- **`assets/`:** Static resources like images, fonts, and other files.
- **`environments/`:** Configuration files for different environments (development, production, etc.).
- **`index.html`:** The main HTML entry point for your Angular application.
- **`main.ts`:** The main TypeScript file that bootstraps the Angular application.

**Benefits:**

- **Scalability:** Easily add new features by creating new feature modules.
- **Organization:** Clear and intuitive folder structure for better maintainability.
- **Reusability:** Promotes code reusability through shared components and modules.
- **Maintainability:** Each feature module is self-contained, making it easier to test and manage.

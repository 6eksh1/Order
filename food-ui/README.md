# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploying to Vercel (avoid 404 on refresh)

This app uses React Router with client-side routes. On Vercel, direct access to routes like `/login` or `/profile` can return 404 unless SPA rewrites are configured.

### Required setup

- Set the Vercel project **Root Directory** to `food-ui`
- Keep this rewrite in [vercel.json](vercel.json):

```json
{
	"rewrites": [
		{ "source": "/((?!.*\\.).*)", "destination": "/index.html" }
	]
}
```

### Why this works

- Routes without file extensions are sent to `index.html`
- Static files like `.js`, `.css`, images, and fonts are served normally
- React Router handles page routing in the browser after `index.html` loads

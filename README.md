# SvelteKit template

This project includes my preferred setup for building a Sveltekit project, this includes the following libraries:

1. Sveltekit - configured with Typescript, a standard create-app built from `sv create app`
2. Prettier - syntax formatting, with my preferred configuration in `.prettierrc`
3. Eslint - linting for obvious syntax errors
4. Shadcn + Tailwind - components and CSS
5. Docker scripts + Postgres - if database is needed scripts available to run Postgres
6. lucide-svelte - icon library
7. mode-watcher - used for dark/light mode switching
8. svelte-sonner - used to create toasts throughout the application

# Usage

This project comes with a few scripts to be aware of:

1. `npx dev` - used to run Vite - by default services will be running on port 10001
2. `npx build` - used to prepare a production build, which can then be deployed as desired
3. `npx db` - used to setup the database if it is needed, you will also need to edit the `src/hooks.server.ts` and un-comment the prisma components
4. `npx preview` - used to serve the built solution, without the hot reloading capabilities of vite
5. `npx check` - checks svelte-kit configuration
6. `npx check:watch` - same as check, but watches
7. `npx lint` - checks with prettier and eslint for syntax formatting and errors
8. `npx format` - uses prettier to run the formatter, this will update files
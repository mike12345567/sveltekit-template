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
9. Prisma + Postgres - If storage is needed this comes with scripts to run a local Postgres container and setup prisma to use it

By default this does not setup the database connections, if you need these then please update the [hooks.server.ts](https://github.com/mike12345567/sveltekit-template/blob/main/src/hooks.server.ts) to configure Prisma (un-comment lines). You can also update the `yarn dev` script to run `yarn db` before startup to make sure the local DB is configured.

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

# Shadcn components

Shadcn components can be found at: https://www.shadcn-svelte.com/docs/components

Components can be added with: `npx shadcn-svelte@latest add <component>`

## Launch

- `yarn && yarn dev`
- `localhost:8080`

## Stack

- Frontend: React, Redux Toolkit, Tailwind CSS
- Project management: Yarn Workspaces, TypeScript path aliases, tsconfig-paths-plugin
- Build: Webpack
    - Transpilation, ts-node: SWC
        - ~60x speed improvement over babel, tsc. Better performance than esbuild.
        - Supports HMR with react-refresh (esbuild-loader doesn't).
    - Minification: ESBuild
        - 10x+ performance compared to terser, swc.
- Linters: ESLint, Prettier
    - VSCode Extensions: Typescript import sorter, Headwind, Inline-sql-syntax
- Testing: Jest, React Testing Library

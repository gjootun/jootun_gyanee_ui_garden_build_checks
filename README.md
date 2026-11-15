# UI Component Library – Assignment 13 (Build Checks)

React + TypeScript component library (Button, Label, Text, Dropdown, RadioButton, Table, Card, HeroImage, etc.) with automated code-quality checks.

| Check      | Tool                         | Runs in                          |
| ---------- | ---------------------------- | -------------------------------- |
| Formatting | Prettier                     | pre-commit hook + GitHub Actions |
| Linting    | ESLint                       | pre-commit hook + GitHub Actions |
| Tests      | Jest + React Testing Library | pre-commit hook + GitHub Actions |
| Build      | Docker (multi-stage, nginx)  | `docker build` / GitHub Actions  |

## Run with Docker (localhost:8018)

The Dockerfile builds the production Create React App build and serves it with nginx from the working directory `jootun_gyanee_ui_garden_build_checks`.

```bash
docker build -t jootun_gyanee_coding_assignment13 .
docker run -d --name jootun_gyanee_coding_assignment13 -p 8018:8018 jootun_gyanee_coding_assignment13
```

Open <http://localhost:8018> (or <http://127.0.0.1:8018>).

Stop and remove the container:

```bash
docker rm -f jootun_gyanee_coding_assignment13
```

## Run locally without Docker

```bash
npm install --legacy-peer-deps   # also installs the Husky git hook
npm start                        # dev server
npm run storybook                # Storybook on port 6006
```

Scripts: `npm run format`, `npm run format:check`, `npm run lint`, `npm run lint:fix`, `npm run test:ci`, `npm run build`.

## Husky pre-commit checks

`.husky/pre-commit` runs:

```bash
npm run format:check && npm run lint && npm run test:ci
```

If any check fails, the commit is rejected, so code that does not pass Prettier, ESLint and the tests cannot be committed.

Demonstration (each of these was blocked with `husky - pre-commit script failed`):

1. **Prettier:** a badly formatted file (`export const x = {a:1,b:2}`).
2. **ESLint:** an unused variable (`const unused = 1;`), since `--max-warnings 0` is set.
3. **Tests:** a failing test (`expect(1).toBe(2)`).

## GitHub Actions

`.github/workflows/build-checks.yml` runs on every push and pull request: install, Prettier, ESLint, tests, and a production build. If the local hook is bypassed (for example with `git commit --no-verify`), the same checks run on GitHub, the run fails with a red ✗, and GitHub notifies the committer that the build failed.

# jootun_gyanee_ui_garden - Assignment 12 Component Library

A UI component library built with React, TypeScript, Styled Components and Storybook, served in Docker on port 8083.

## Components

Button, Label, Text, Table (TableHeader, TableRow, TableCell, TableFooter), Dropdown, RadioButton, Img, HeroImage, Card.

Each component folder in `src/components` contains:
`Component.tsx`, `Component.stories.tsx`, `Component.types.tsx`, `Component.tests.tsx`, `index.ts`.

## 1. Prerequisites

- Node.js 18 or newer (check with `node -v`)
- Docker Desktop, running (check with `docker --version`)

## 2. Project setup

```bash
npm install --legacy-peer-deps
```

## 3. Run Storybook

```bash
npm run storybook
```

Open http://localhost:6006. Each component has a **Default** and a **Disabled** story. Use the **Controls** panel to change the text and background color. Press Ctrl+C to stop.

## 4. Run the tests

```bash
npm test
```

PowerShell, single run: `$env:CI="true"; npm test`

Every component has 2 tests:

1. the component is visible
2. the color changes when the component is in the disabled state

Expected result: 13 test suites, 26 tests passed.

## 5. Docker build and deployment

```bash
docker build -t jootun_gyanee_ui_garden .
docker run -d --name jootun_gyanee_coding_assignment12 -p 8083:8083 jootun_gyanee_ui_garden
```

Open http://localhost:8083.

The Dockerfile creates a production build of the create-react-app library and serves it with nginx from the working directory `jootun_gyanee_ui_garden`.

Stop and remove the container:

```bash
docker stop jootun_gyanee_coding_assignment12
docker rm jootun_gyanee_coding_assignment12
```

## 6. Verifying the Assignment 12 requirements

- [ ] The site loads at http://localhost:8083 and shows every component
- [ ] `docker ps` shows the container name `jootun_gyanee_coding_assignment12`
- [ ] The Dockerfile builds a production build and uses the working dir `jootun_gyanee_ui_garden`
- [ ] Each component folder has the 5 required files (see `src/components`)
- [ ] Styled Components are used for all styling
- [ ] Responsive: resize the browser below 600px and the layout adapts
- [ ] Storybook Controls change the text and background color
- [ ] Every component has a Default story and a Disabled story (greyed out, `not-allowed` cursor)
- [ ] `npm test` passes: 2 tests per component (visible, disabled color change)

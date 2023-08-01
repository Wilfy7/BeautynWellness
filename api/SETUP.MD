# BEAUTYNWELLNESS

## Getting Started

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js
- npm or Yarn (preferred)

### Installation

1. Clone the repository or download the project files.

2. Install project dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### Configuration

1. Run `npm init` to initialize a new Node.js project and follow the prompts to set up your `package.json` file.

2. Install TypeScript and its types for Node.js:

```bash
npm install typescript @types/node --save-dev
```

### TypeScript Configuration

3. Create a `tsconfig.json` file in the root of your project to specify TypeScript compilation settings:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Scripts

4. Add the following scripts to the `package.json` to facilitate TypeScript compilation and running your application:

```json
"scripts": {
  "build": "tsc",
  "start": "node ./dist/index.js"
}
```

### Running the Project

Make sure to have a server running.

5. Build the TypeScript code:

```bash
npm run build
```

### Running in Development Mode

If you want to run the application in development mode, you can use `ts-node`:

```bash
yarn add ts-node
```

Now, you can use `ts-node` to directly run the TypeScript files:

```bash
ts-node src/index.ts
```

## Contributing

1. run npm init
2. run : npm install typescript @types/node --save-dev
3. Create a TypeScript configuration file:

Create a tsconfig.json file in the root of your project to specify TypeScript compilation settings:

json
Copy code
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

4. Add scripts to the package.json:

Add the following scripts to the scripts section in your package.json to facilitate TypeScript compilation and running your application:

json
Copy code
"scripts": {
"build": "tsc",
"start": "node ./dist/index.js"
}

5. Make sure to have a sever running

6. npm run build

7. yarn add ts-node

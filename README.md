# BlockProffer Frontend

This is the frontend for the BlockProffer project. It is a React app.

# How to Connect React App with Tailwind CSS

This is a quick guide on how to connect a React app with Tailwind CSS.

## Install Tailwind CSS

```bash
npm install -D tailwindcss
```

## Create Tailwind CSS Configuration File

```bash
npx tailwindcss init
```

## Add content to the tailwind.config.js file

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Make A File called input.css in src folder

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Delete the src/App.css file

## Delete the src/index.css file

## Start the Tailwind CLI Build Process

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

## Import the output.css file in index.js

```js
import './dist/output.css'
```

## Add Tailwind CSS Classes to index.html

```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link href="/dist/output.css" rel="stylesheet">
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="https://cdn.tailwindcss.com"></script>
  </body>
</html>

```

## Add Tailwind CSS Classes to React Components

```js
import React from 'react'


function App() {
  return (
    <div className="bg-gray-200">
      <h1 className="text-4xl text-center">Hello World</h1>
    </div>
  )
}

export default App
```

# How to Connect Tailwind CSS with Daisy UI

This is a quick guide on how to connect Tailwind CSS with Daisy UI.

## Install Daisy UI

```bash
npm install daisyui
```

## Add content to the tailwind.config.js file

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
```

## Add content to the index.html file

```html


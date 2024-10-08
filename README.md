# Tailwind_CSS

Nodejs need to be Installed in the system.
install tailwindcss using npm -> npm install tailwindcss

npm init -y  -----creates package.json



create src folder and public folder
In src folder -> create styles.css file
                then add tailwin to the css :
                    @import base;
                    @import components;
                    @import utilities;

                it gets the functionalities
                it then process the style and spits out final Output to the public folder.
                Therefore we need to register certain different scripts.


In package.json:-
    "scripts" :{
        "build-css": "tailwindcss build src/styles.css -o public/styles.css"
    }

now, npm run build-css

<link rel="stylesheet" href="stylesheet"> in the html

npm install live-server -g    --------- setup a local development server
live-server foldername
here, live-server public

-------------------------------------------------------------------------------------------------------------------------------
If the styles are not reflecting:-

1) Run the following command in the terminal:
npx tailwindcss init

This creates a file tailwind.config.js in the root directory i.e. same directory as package.json

2) Update the file content as follows:

module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

3) Run the following command in the terminal:
npm run build-css

4) Run the following command in the terminal:
npx tailwindcss -i ./src/styles.css -o ./public/styles.css --watch

That did it for me!

Further reference: https://tailwindcss.com/docs/installation


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nike Project
<!-- Go through the tailwind documentation!! -->

install via vite
<!-- creating your project -->
1) npm create vite@latest ./ -- --template react 

doesn't require cd because we are already in that folder
then,
<!-- install tailwind css -->
2) npm install -D tailwindcss postcss autoprefixer

3) npx tailwindcss init -p

4) <!-- configure tailwind paths -->
In tailwind.config.js :- 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

5) <!-- Add the Tailwind directives to your CSS -->
In src > index.css :-

@tailwind base;
@tailwind components;
@tailwind utilities;

6) 
<!-- Start using Tailwind in your project -->
src > App.jsx :-

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

also, remove App.css folder

7) npm run dev

<!-- more useful tips  -->
<!-- Specially for this specific project -->
GitHub Code : https://github.com/adrianhajdin/nike_...
GitHub Gist Code Snippets & Dark Mode Script: https://gist.github.com/adrianhajdin/...
Assets: https://drive.google.com/file/d/1ccqj...
Tailwind Play - https://play.tailwindcss.com/
Tailwind CSS - https://tailwindcss.com/

delete the assets folder then download assets from the link and copy-paste folder
In index.css file -> copy-paste code from github gist
similarly do the same for tailwind.config.js
also to eslint.config.js <!-- for more presentable and readable -->
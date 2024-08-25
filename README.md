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
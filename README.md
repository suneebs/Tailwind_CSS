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
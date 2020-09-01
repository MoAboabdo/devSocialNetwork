# devSocialNetwork
Developer Social network 
This is a MERN stack application,I was practicing to build MERN STACK project from a course on the internet,
It is a small social network app that includes authentication, profiles and forum posts.
This project can be developed through me


Quick Start rocket

Add a default.json file in config folder with the following

{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}


Install server dependencies

npm install


Install client dependencies

cd client
npm install

Run both Express & React from root

npm run dev

Build for production

cd client
npm run build

**PAY ATTENTION TO MEMORY/ENERGY USAGE. APP HAS NOT BEEN OPTIMIZED YET AND IS STILL IN DEVELOPMENT**
App relies on Node.js v8.4.0
`npm install node`
---
in order to get this to work you must first generate an ssl key/cert for your server.
enter these commands in your terminal and follow the instructions if prompted.
1.
  ```bash
  openssl genrsa -out ./ssl/key.pem
  ```
2.
  ```bash
  openssl req -new -key key.pem -out ./ssl/csr.pem
  ```
3.
  ```bash
  openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out ./ssl/cert.pem
  ```

after this you can remove the csr file
`rm ./ssl/csr.pem`

---

okay now you're ready to start the server
`node app.js`

you should see the console output that it's listening on port 3000. you're all set to go!
head over to https://localhost:3000 to see it live :D **it is very important that you
visit using https protocol for the Twitch module!**
---
###TO CUSTOMIZE:###

basically just set the channel to your favorite streamer's username, i've included some very popular ones from the home page so you can get an idea.

##NEXT STEPS## 

1. most of the work happens in the final script element on the index page. ideally this migrates to an external JavaScript file that is called on page load
2. i'd like to get more user interface features to allow for customization on the frontend; hence the external .js file
3. party mode :0 ;)

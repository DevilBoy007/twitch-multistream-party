**PAY ATTENTION TO MEMORY/ENERGY USAGE. APP HAS NOT BEEN OPTIMIZED YET AND IS STILL IN DEVELOPMENT**

App relies on Node.js v8.4.0

`npm install node`
---

- there are two versions of the app that utilize different embedding methods provided by Twitch:
  1. **placeholder embed**
    - relies on Twitch api v1.js file to create stream players and inject iframes into placeholder divs
  2. **iframe embed**
    - relies on Twitch iframe embed and requires parent site as url param, which we set as `localhost`

- in order to get this to work you must first generate an ssl key/cert for each of your https servers.

`cd` into `iframe` and `placeholder` directories, then follow this process in each of the subdirectories you have just navigated to, then

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
```bash
rm ./ssl/csr.pem
```

---

okay now you're ready to start the server!

```bash
node app.js
```
from either directory (/placeholder,/iframe)

you should see the console output that it's `listening on port 3000` (`3001` if you're using the iframe version) 

**you're all set to go!**
head over to https://localhost:3000 to see it live :D **it is very important that you
visit using https protocol for the Twitch module!**
---
**TO CUSTOMIZE:**

basically just set the channel to your favorite streamer's username, i've included some very popular ones from the home page so you can get an idea.

**NEXT STEPS** 

1. most of the work happens in the final script element on the index page. ideally this migrates to an external JavaScript file that is called on page load
2. i'd like to get more user interface features to allow for customization on the frontend; hence the external .js file
3. party mode (in-progress...)

# .env Access Fix - TODO

## Steps:
1. [x] Create .gitignore and add .env
2. [x] Create example .env file
3. [x] Edit package.json - add dotenv dependency  
4. [x] Edit server.js - load dotenv at top
5. [x] Run `npm install`
6. [ ] Test: Add vars to .env, restart server, check process.env

Current: All setup done. Copy .env.example to .env, add your vars (e.g. SECRET=foo), then run `npm start`. Vars now accessible via process.env.VARNAME.


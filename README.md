### SECTOR FRONTEND

**NodeJS • Webpack • AngularJS • Stylus+Nib+Rucksack (Bootstrap3 24x grid) • Karma+Jasmine**

### Install Dependencies

```
npm install
npm install -g bower
npm install -g webpack
npm install -g webpack-dev-server
npm install -g karma
```

### Run the Application

```
NODE_ENV=development webpack-dev-server --harmony --history-api-fallback --inline --progress
```

Now browse to the app at `http://localhost:8080/`.

### Make the clean build

```
NODE_ENV=production rimraf dist && webpack --harmony --bail --progress --profile
```

# Website

A static website to show details for wedding of Neem Serra and Mark Katerberg

# Requirements
You will need `npm` and `bower` installed.

# Starting

Run the following to build the files in `./app` into their release version which lives in `./dist`. This will watch the development files and automatically rebuild the `./dist` folder when needed.
```
gulp
```

To actually serve the files to view them in the browser, run the following:

```
npm serve
```

To combine the two previous commands concurrently (to watch and serve the files), run the following:

```
npm start
```

# Releasing

The application is hosted on [divshot](http://docs.divshot.com/guides/getting-started).

You will need the divshot tools installed:

```
npm install -g divshot-cli
```

Then you will need to log in with your credentials (it will prompt you): 

```
divshot login
```

After your changes are all checked in (including your `./dist` directory), you can push it up to development:

```
divshot push
```

You can then verify your changes and once you are confident in them, you can push to production:

```
divshot promote development production
```

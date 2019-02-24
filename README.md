# DARP

## Get it running

Make sure you have npm (ideally version 10.x). If you don't have npm
installed, I'd recommend installing
[nvm](https://github.com/creationix/nvm). Once you have nvm installed,
cd to this repository and run

```sh
nvm install
```

to get the right version of node.

To install dependencies, run

```sh
npm install
```

Finally, to run the development server, do

```sh
npm start
```

## Building for production

Set up as above, then run

```sh
npm run build
```

which will build the static site in the `build` directory. Copy this
to your server.

If you are running under Apache, you may need to add an .htaccess file
that looks like this:

```
RewriteEngine On
RewriteBase %PUBLIC_URL%
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

Replace `%PUBLIC_URL%` with the URL the app is running under (for
example, "/darp"). This should match whatever is set in `.env`.

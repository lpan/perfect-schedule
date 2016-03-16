import Express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

// Webpack Requirements
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Initialize the Express App
const app = new Express();

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// Import required modules
import apiRoutes from './routes/api.routes';
import { serverConfig } from './config';

// Populate database with course data
import feedData from './util/feedData';

feedData();

// Apply body Parser and server public assets and routes
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../static')));
app.use('/api', apiRoutes);

// Render Initial HTML
function renderFullPage() {
  const cssPath = process.env.NODE_ENV === 'production' ? '/css/app.min.css' : '/css/app.css';
  const gridPath = '/css/flexboxgrid.min.css';
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Perfect Schedule | A Free and Opensource Schedule Generator</title>
        <link rel="shortcut icon" href="/img/icon.png" />
        <link rel="stylesheet" href=${cssPath} />
        <link rel="stylesheet" href=${gridPath} />
      </head>
      <body>
        <div id="root"></div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `;
}

app.get('/', (req, res) => {
  res.send(renderFullPage());
});

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default app;

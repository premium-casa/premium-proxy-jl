require("newrelic");
// Dependencies
const express = require("express");
const proxy = require("http-proxy-middleware");
const bodyParser = require("body-parser");

// Config
const { routes } = require("./config.json");

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public/dist`));

// for (route of routes) {
//     app.use(route.route,
//         proxy({
//             target: route.address,
//             pathRewrite: (path, req) => {
//                 return path.split('/').slice(2).join('/'); // Could use replace, but take care of the leading '/'
//             }
//         })
//     );
// }

app.use("/MoreHomes", proxy("http://3.19.54.230:3005/MoreHomes"));

app.listen(PORT, () => {
  console.log("Proxy listening on port " + PORT);
});

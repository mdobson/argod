## Argod: Run proxies on the command line!

Simple utility that is callable via `argod` and will allow you to run exported proxies.

### Getting Started

1. Create your proxy 

```javascript
var argo = require("argo");

module.exports = argo().target("http://mdob.io/mdob/sandbox");
```

2. Save it to a file.
3. Run it with `argod` `argod -p 4000 index.js`

### Usage
```
 Usage: argod [options] [proxy_file]

   Options:

      -h, --help                 output usage information
      -V, --version              output the version number
      -p, --port [port]          Port to run your proxy on. Default: 3000
      -h, --hostname [hostname]  Hostname for proxy to listen on. Default: Localhost
      -b, --backlog              Backlog setting.
      -c, --cert [cert]          Certificate setting. Required for SSL
      -k, --key [key]            Key setting. Required for SSL
```


System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  meta: {
    "/local_packages/kendo/js/*": {
      "format": "global",
      "deps": [
        "jquery-min"
      ]
    },
    "bootstrap": {
      "format": "cjs",
      "deps": [
        "jquery"
      ]
    }
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.2.0",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.3",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.2",
    "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.1",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.2",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.2",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0",
    "aurelia-validation": "npm:aurelia-validation@0.6.7",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "clean-css": "npm:clean-css@3.4.12",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.21",
    "fetch": "github:github/fetch@0.11.0",
    "font-awesome": "npm:font-awesome@4.5.0",
    "jquery": "npm:jquery@2.2.3",
    "jquery-min": "npm:jquery@2.2.3",
    "kendo-ui": "/local_packages/kendo/js/kendo.all.min",
    "lodash": "npm:lodash@4.11.2",
    "periscope-framework": "npm:periscope-framework@0.0.9",
    "periscope-ui": "npm:periscope-ui@0.0.4",
    "periscope-widgets-chartjs": "npm:periscope-widgets-chartjs@0.0.3",
    "periscope-widgets-datatables": "npm:periscope-widgets-datatables@0.0.2",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:argparse@1.0.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:asn1.js@4.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@1.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.2",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.2",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.2",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.2": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-validation@0.6.7": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:bootstrap@3.3.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:btoa@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:datatables.net-bs@1.10.11": {
      "datatables.net": "npm:datatables.net@1.10.11",
      "jquery": "npm:jquery@2.2.3"
    },
    "npm:datatables.net-keytable-bs@2.1.1": {
      "datatables.net-bs": "npm:datatables.net-bs@1.10.11",
      "datatables.net-keytable": "npm:datatables.net-keytable@2.1.1",
      "jquery": "npm:jquery@2.2.3"
    },
    "npm:datatables.net-keytable@2.1.1": {
      "datatables.net": "npm:datatables.net@1.10.11",
      "jquery": "npm:jquery@2.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:datatables.net-scroller@1.4.1": {
      "datatables.net": "npm:datatables.net@1.10.11",
      "jquery": "npm:jquery@2.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:datatables.net-select-bs@1.1.2": {
      "datatables.net-bs": "npm:datatables.net-bs@1.10.11",
      "datatables.net-select": "npm:datatables.net-select@1.1.2",
      "jquery": "npm:jquery@2.2.3"
    },
    "npm:datatables.net-select@1.1.2": {
      "datatables.net": "npm:datatables.net@1.10.11",
      "jquery": "npm:jquery@2.2.3"
    },
    "npm:datatables.net@1.10.11": {
      "jquery": "npm:jquery@2.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.11.3",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:form-data@1.0.0-rc3": {
      "async": "npm:async@1.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.11",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:formidable@1.0.17": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:js-yaml@3.6.0": {
      "argparse": "npm:argparse@1.0.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima": "npm:esprima@2.7.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:lodash-compat@3.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@4.11.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.23.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mime-types@2.1.11": {
      "mime-db": "npm:mime-db@1.23.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.6.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:pegjs@0.9.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:periscope-framework@0.0.9": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.3",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.2",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "lodash": "npm:lodash@4.11.2",
      "moment": "npm:moment@2.13.0",
      "numeral": "npm:numeral@1.5.3",
      "pegjs": "npm:pegjs@0.9.0",
      "swagger-client": "npm:swagger-client@2.1.14"
    },
    "npm:periscope-ui@0.0.4": {
      "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.3",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.2",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.2",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0",
      "bootstrap": "npm:bootstrap@3.3.6",
      "jquery": "npm:jquery@2.2.3",
      "lodash": "npm:lodash@4.11.2",
      "periscope-framework": "npm:periscope-framework@0.0.9",
      "swagger-client": "npm:swagger-client@2.1.14"
    },
    "npm:periscope-widgets-chartjs@0.0.3": {
      "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.3",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.2",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.2",
      "chartist": "npm:chartist@0.9.7",
      "lodash": "npm:lodash@4.11.2",
      "periscope-framework": "npm:periscope-framework@0.0.9"
    },
    "npm:periscope-widgets-datatables@0.0.2": {
      "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.3",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.2",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.2",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0",
      "bootstrap": "npm:bootstrap@3.3.6",
      "datatables.net": "npm:datatables.net@1.10.11",
      "datatables.net-bs": "npm:datatables.net-bs@1.10.11",
      "datatables.net-keytable": "npm:datatables.net-keytable@2.1.1",
      "datatables.net-keytable-bs": "npm:datatables.net-keytable-bs@2.1.1",
      "datatables.net-scroller": "npm:datatables.net-scroller@1.4.1",
      "datatables.net-select": "npm:datatables.net-select@1.1.2",
      "datatables.net-select-bs": "npm:datatables.net-select-bs@1.1.2",
      "jquery": "npm:jquery@2.2.3",
      "lodash": "npm:lodash@4.11.2",
      "periscope-framework": "npm:periscope-framework@0.0.9",
      "swagger-client": "npm:swagger-client@2.1.14"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.0.27-1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:superagent@1.8.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.2.1",
      "cookiejar": "npm:cookiejar@2.0.6",
      "debug": "npm:debug@2.2.0",
      "extend": "npm:extend@3.0.0",
      "form-data": "npm:form-data@1.0.0-rc3",
      "formidable": "npm:formidable@1.0.17",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "methods": "npm:methods@1.1.2",
      "mime": "npm:mime@1.3.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@2.3.3",
      "readable-stream": "npm:readable-stream@1.0.27-1",
      "reduce-component": "npm:reduce-component@1.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:swagger-client@2.1.14": {
      "btoa": "npm:btoa@1.1.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cookiejar": "npm:cookiejar@2.0.6",
      "js-yaml": "npm:js-yaml@3.6.0",
      "lodash-compat": "npm:lodash-compat@3.10.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "superagent": "npm:superagent@1.8.3"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "config/default-dashboard-configuration.js",
      "index.html!github:systemjs/plugin-text@0.0.3.js",
      "index.js",
      "main.js",
      "partials/app-footer.html!github:systemjs/plugin-text@0.0.3.js",
      "partials/app-footer.js",
      "partials/breadcrumbs.html!github:systemjs/plugin-text@0.0.3.js",
      "partials/breadcrumbs.js",
      "partials/dashboards-list.html!github:systemjs/plugin-text@0.0.3.js",
      "partials/dashboards-list.js",
      "partials/history.html!github:systemjs/plugin-text@0.0.3.js",
      "partials/history.js",
      "partials/nav-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "partials/nav-bar.js",
      "partials/nav-menu.html!github:systemjs/plugin-text@0.0.3.js",
      "partials/nav-menu.js",
      "partials/system-info.html!github:systemjs/plugin-text@0.0.3.js",
      "partials/system-info.js"
    ],
    "vendor-build.js": [
      "github:github/fetch@0.11.0.js",
      "github:github/fetch@0.11.0/fetch.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-css@0.1.21.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.0.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.0/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.2.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.2/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.3.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.3/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.2.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.2/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.1.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.1/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.2.1.js",
      "npm:aurelia-path@1.0.0-beta.1.2.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.2.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.2/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.2.1.js",
      "npm:aurelia-router@1.0.0-beta.1.2.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.1/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.3.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.3/aurelia-templating.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:btoa@1.1.2.js",
      "npm:btoa@1.1.2/index.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:chartist@0.9.7.js",
      "npm:chartist@0.9.7/dist/chartist.css!github:systemjs/plugin-css@0.1.21.js",
      "npm:chartist@0.9.7/dist/chartist.js",
      "npm:component-emitter@1.2.1.js",
      "npm:component-emitter@1.2.1/index.js",
      "npm:cookiejar@2.0.6.js",
      "npm:cookiejar@2.0.6/cookiejar.js",
      "npm:datatables.net-bs@1.10.11.js",
      "npm:datatables.net-bs@1.10.11/css/datatables.bootstrap.css!github:systemjs/plugin-css@0.1.21.js",
      "npm:datatables.net-bs@1.10.11/js/dataTables.bootstrap.js",
      "npm:datatables.net-keytable-bs@2.1.1/css/keyTable.bootstrap.css!github:systemjs/plugin-css@0.1.21.js",
      "npm:datatables.net-keytable@2.1.1.js",
      "npm:datatables.net-keytable@2.1.1/js/dataTables.keyTable.js",
      "npm:datatables.net-scroller@1.4.1.js",
      "npm:datatables.net-scroller@1.4.1/js/dataTables.scroller.js",
      "npm:datatables.net-select-bs@1.1.2/css/select.bootstrap.css!github:systemjs/plugin-css@0.1.21.js",
      "npm:datatables.net-select@1.1.2.js",
      "npm:datatables.net-select@1.1.2/js/dataTables.select.js",
      "npm:datatables.net@1.10.11.js",
      "npm:datatables.net@1.10.11/js/jquery.dataTables.js",
      "npm:font-awesome@4.5.0.js",
      "npm:font-awesome@4.5.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.20.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:jquery@2.2.3.js",
      "npm:jquery@2.2.3/dist/jquery.js",
      "npm:js-yaml@3.6.0.js",
      "npm:js-yaml@3.6.0/index.js",
      "npm:js-yaml@3.6.0/lib/js-yaml.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/common.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/dumper.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/exception.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/loader.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/mark.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/schema.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/schema/core.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/schema/default_full.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/schema/default_safe.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/schema/failsafe.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/schema/json.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/binary.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/bool.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/float.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/int.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/js/function.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/js/regexp.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/js/undefined.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/map.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/merge.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/null.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/omap.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/pairs.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/seq.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/set.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/str.js",
      "npm:js-yaml@3.6.0/lib/js-yaml/type/timestamp.js",
      "npm:lodash-compat@3.10.2/array/indexOf.js",
      "npm:lodash-compat@3.10.2/array/last.js",
      "npm:lodash-compat@3.10.2/chain/lodash.js",
      "npm:lodash-compat@3.10.2/collection/each.js",
      "npm:lodash-compat@3.10.2/collection/find.js",
      "npm:lodash-compat@3.10.2/collection/forEach.js",
      "npm:lodash-compat@3.10.2/collection/includes.js",
      "npm:lodash-compat@3.10.2/collection/map.js",
      "npm:lodash-compat@3.10.2/date/now.js",
      "npm:lodash-compat@3.10.2/function/bind.js",
      "npm:lodash-compat@3.10.2/function/restParam.js",
      "npm:lodash-compat@3.10.2/internal/LazyWrapper.js",
      "npm:lodash-compat@3.10.2/internal/LodashWrapper.js",
      "npm:lodash-compat@3.10.2/internal/arrayCopy.js",
      "npm:lodash-compat@3.10.2/internal/arrayEach.js",
      "npm:lodash-compat@3.10.2/internal/arrayMap.js",
      "npm:lodash-compat@3.10.2/internal/arraySome.js",
      "npm:lodash-compat@3.10.2/internal/baseAssign.js",
      "npm:lodash-compat@3.10.2/internal/baseCallback.js",
      "npm:lodash-compat@3.10.2/internal/baseClone.js",
      "npm:lodash-compat@3.10.2/internal/baseCopy.js",
      "npm:lodash-compat@3.10.2/internal/baseCreate.js",
      "npm:lodash-compat@3.10.2/internal/baseEach.js",
      "npm:lodash-compat@3.10.2/internal/baseFind.js",
      "npm:lodash-compat@3.10.2/internal/baseFindIndex.js",
      "npm:lodash-compat@3.10.2/internal/baseFor.js",
      "npm:lodash-compat@3.10.2/internal/baseForIn.js",
      "npm:lodash-compat@3.10.2/internal/baseForOwn.js",
      "npm:lodash-compat@3.10.2/internal/baseGet.js",
      "npm:lodash-compat@3.10.2/internal/baseIndexOf.js",
      "npm:lodash-compat@3.10.2/internal/baseIsEqual.js",
      "npm:lodash-compat@3.10.2/internal/baseIsEqualDeep.js",
      "npm:lodash-compat@3.10.2/internal/baseIsMatch.js",
      "npm:lodash-compat@3.10.2/internal/baseLodash.js",
      "npm:lodash-compat@3.10.2/internal/baseMap.js",
      "npm:lodash-compat@3.10.2/internal/baseMatches.js",
      "npm:lodash-compat@3.10.2/internal/baseMatchesProperty.js",
      "npm:lodash-compat@3.10.2/internal/baseProperty.js",
      "npm:lodash-compat@3.10.2/internal/basePropertyDeep.js",
      "npm:lodash-compat@3.10.2/internal/baseSetData.js",
      "npm:lodash-compat@3.10.2/internal/baseSlice.js",
      "npm:lodash-compat@3.10.2/internal/baseToString.js",
      "npm:lodash-compat@3.10.2/internal/baseValues.js",
      "npm:lodash-compat@3.10.2/internal/binaryIndex.js",
      "npm:lodash-compat@3.10.2/internal/binaryIndexBy.js",
      "npm:lodash-compat@3.10.2/internal/bindCallback.js",
      "npm:lodash-compat@3.10.2/internal/bufferClone.js",
      "npm:lodash-compat@3.10.2/internal/composeArgs.js",
      "npm:lodash-compat@3.10.2/internal/composeArgsRight.js",
      "npm:lodash-compat@3.10.2/internal/createBaseEach.js",
      "npm:lodash-compat@3.10.2/internal/createBaseFor.js",
      "npm:lodash-compat@3.10.2/internal/createBindWrapper.js",
      "npm:lodash-compat@3.10.2/internal/createCtorWrapper.js",
      "npm:lodash-compat@3.10.2/internal/createFind.js",
      "npm:lodash-compat@3.10.2/internal/createForEach.js",
      "npm:lodash-compat@3.10.2/internal/createHybridWrapper.js",
      "npm:lodash-compat@3.10.2/internal/createPartialWrapper.js",
      "npm:lodash-compat@3.10.2/internal/createWrapper.js",
      "npm:lodash-compat@3.10.2/internal/equalArrays.js",
      "npm:lodash-compat@3.10.2/internal/equalByTag.js",
      "npm:lodash-compat@3.10.2/internal/equalObjects.js",
      "npm:lodash-compat@3.10.2/internal/getData.js",
      "npm:lodash-compat@3.10.2/internal/getFuncName.js",
      "npm:lodash-compat@3.10.2/internal/getLength.js",
      "npm:lodash-compat@3.10.2/internal/getMatchData.js",
      "npm:lodash-compat@3.10.2/internal/getNative.js",
      "npm:lodash-compat@3.10.2/internal/indexOfNaN.js",
      "npm:lodash-compat@3.10.2/internal/initCloneArray.js",
      "npm:lodash-compat@3.10.2/internal/initCloneByTag.js",
      "npm:lodash-compat@3.10.2/internal/initCloneObject.js",
      "npm:lodash-compat@3.10.2/internal/isArrayLike.js",
      "npm:lodash-compat@3.10.2/internal/isHostObject.js",
      "npm:lodash-compat@3.10.2/internal/isIndex.js",
      "npm:lodash-compat@3.10.2/internal/isIterateeCall.js",
      "npm:lodash-compat@3.10.2/internal/isKey.js",
      "npm:lodash-compat@3.10.2/internal/isLaziable.js",
      "npm:lodash-compat@3.10.2/internal/isLength.js",
      "npm:lodash-compat@3.10.2/internal/isObjectLike.js",
      "npm:lodash-compat@3.10.2/internal/isStrictComparable.js",
      "npm:lodash-compat@3.10.2/internal/mergeData.js",
      "npm:lodash-compat@3.10.2/internal/metaMap.js",
      "npm:lodash-compat@3.10.2/internal/realNames.js",
      "npm:lodash-compat@3.10.2/internal/reorder.js",
      "npm:lodash-compat@3.10.2/internal/replaceHolders.js",
      "npm:lodash-compat@3.10.2/internal/setData.js",
      "npm:lodash-compat@3.10.2/internal/shimKeys.js",
      "npm:lodash-compat@3.10.2/internal/toObject.js",
      "npm:lodash-compat@3.10.2/internal/toPath.js",
      "npm:lodash-compat@3.10.2/internal/wrapperClone.js",
      "npm:lodash-compat@3.10.2/lang/cloneDeep.js",
      "npm:lodash-compat@3.10.2/lang/isArguments.js",
      "npm:lodash-compat@3.10.2/lang/isArray.js",
      "npm:lodash-compat@3.10.2/lang/isEmpty.js",
      "npm:lodash-compat@3.10.2/lang/isFunction.js",
      "npm:lodash-compat@3.10.2/lang/isNative.js",
      "npm:lodash-compat@3.10.2/lang/isObject.js",
      "npm:lodash-compat@3.10.2/lang/isPlainObject.js",
      "npm:lodash-compat@3.10.2/lang/isString.js",
      "npm:lodash-compat@3.10.2/lang/isTypedArray.js",
      "npm:lodash-compat@3.10.2/lang/isUndefined.js",
      "npm:lodash-compat@3.10.2/object/keys.js",
      "npm:lodash-compat@3.10.2/object/keysIn.js",
      "npm:lodash-compat@3.10.2/object/pairs.js",
      "npm:lodash-compat@3.10.2/object/values.js",
      "npm:lodash-compat@3.10.2/support.js",
      "npm:lodash-compat@3.10.2/utility/identity.js",
      "npm:lodash-compat@3.10.2/utility/noop.js",
      "npm:lodash-compat@3.10.2/utility/property.js",
      "npm:lodash@4.11.2.js",
      "npm:lodash@4.11.2/lodash.js",
      "npm:moment@2.13.0.js",
      "npm:moment@2.13.0/moment.js",
      "npm:numeral@1.5.3.js",
      "npm:numeral@1.5.3/numeral.js",
      "npm:pegjs@0.9.0.js",
      "npm:pegjs@0.9.0/lib/compiler.js",
      "npm:pegjs@0.9.0/lib/compiler/asts.js",
      "npm:pegjs@0.9.0/lib/compiler/javascript.js",
      "npm:pegjs@0.9.0/lib/compiler/opcodes.js",
      "npm:pegjs@0.9.0/lib/compiler/passes/generate-bytecode.js",
      "npm:pegjs@0.9.0/lib/compiler/passes/generate-javascript.js",
      "npm:pegjs@0.9.0/lib/compiler/passes/remove-proxy-rules.js",
      "npm:pegjs@0.9.0/lib/compiler/passes/report-infinite-loops.js",
      "npm:pegjs@0.9.0/lib/compiler/passes/report-left-recursion.js",
      "npm:pegjs@0.9.0/lib/compiler/passes/report-missing-rules.js",
      "npm:pegjs@0.9.0/lib/compiler/visitor.js",
      "npm:pegjs@0.9.0/lib/grammar-error.js",
      "npm:pegjs@0.9.0/lib/parser.js",
      "npm:pegjs@0.9.0/lib/peg.js",
      "npm:pegjs@0.9.0/lib/utils/arrays.js",
      "npm:pegjs@0.9.0/lib/utils/classes.js",
      "npm:pegjs@0.9.0/lib/utils/objects.js",
      "npm:periscope-framework@0.0.9.js",
      "npm:periscope-framework@0.0.9/cache/cache-manager.js",
      "npm:periscope-framework@0.0.9/cache/cache-storage.js",
      "npm:periscope-framework@0.0.9/cache/memory-cache-storage.js",
      "npm:periscope-framework@0.0.9/config/dashboard-configuration.js",
      "npm:periscope-framework@0.0.9/data/data-holder.js",
      "npm:periscope-framework@0.0.9/data/data-source.js",
      "npm:periscope-framework@0.0.9/data/query-expression-evaluator.js",
      "npm:periscope-framework@0.0.9/data/query.js",
      "npm:periscope-framework@0.0.9/data/schema/providers/schema-provider.js",
      "npm:periscope-framework@0.0.9/data/schema/providers/static-schema-provider.js",
      "npm:periscope-framework@0.0.9/data/schema/providers/swagger-schema-provider.js",
      "npm:periscope-framework@0.0.9/data/schema/schema-object.js",
      "npm:periscope-framework@0.0.9/data/service/data-service.js",
      "npm:periscope-framework@0.0.9/data/service/json-data-service.js",
      "npm:periscope-framework@0.0.9/data/service/static-json-data-service.js",
      "npm:periscope-framework@0.0.9/dsl/dsl-expression-manager-factory.js",
      "npm:periscope-framework@0.0.9/dsl/dsl-expression-manager.js",
      "npm:periscope-framework@0.0.9/dsl/expression-parser-factory.js",
      "npm:periscope-framework@0.0.9/dsl/expression-parser.js",
      "npm:periscope-framework@0.0.9/dsl/grammar.js",
      "npm:periscope-framework@0.0.9/helpers/converters/value-format.js",
      "npm:periscope-framework@0.0.9/helpers/data-helper.js",
      "npm:periscope-framework@0.0.9/helpers/guid-helper.js",
      "npm:periscope-framework@0.0.9/helpers/string-helper.js",
      "npm:periscope-framework@0.0.9/helpers/url-helper.js",
      "npm:periscope-framework@0.0.9/index.js",
      "npm:periscope-framework@0.0.9/infrastructure/dashboard-manager.js",
      "npm:periscope-framework@0.0.9/infrastructure/factory.js",
      "npm:periscope-framework@0.0.9/layout/dashboards/dashboard-base.js",
      "npm:periscope-framework@0.0.9/layout/widgets/chart.js",
      "npm:periscope-framework@0.0.9/layout/widgets/data-source-configurator.js",
      "npm:periscope-framework@0.0.9/layout/widgets/detailed-view.js",
      "npm:periscope-framework@0.0.9/layout/widgets/grid.js",
      "npm:periscope-framework@0.0.9/layout/widgets/search-box.js",
      "npm:periscope-framework@0.0.9/layout/widgets/widget.js",
      "npm:periscope-framework@0.0.9/navigator/dashboardbehavior/change-route-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/dashboardbehavior/create-widget-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/dashboardbehavior/dashboard-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/dashboardbehavior/manage-navigation-stack-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/dashboardbehavior/replace-widget-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/events/widget-event-message.js",
      "npm:periscope-framework@0.0.9/navigator/events/widget-event.js",
      "npm:periscope-framework@0.0.9/navigator/navigation-history.js",
      "npm:periscope-framework@0.0.9/navigator/periscope-router.js",
      "npm:periscope-framework@0.0.9/navigator/widgetbehavior/data-activated-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/widgetbehavior/data-field-selected-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/widgetbehavior/data-filter-changed-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/widgetbehavior/data-filter-handle-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/widgetbehavior/data-selected-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/widgetbehavior/data-source-changed-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/widgetbehavior/data-source-handle-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/widgetbehavior/settings-handle-behavior.js",
      "npm:periscope-framework@0.0.9/navigator/widgetbehavior/widget-behavior.js",
      "npm:periscope-framework@0.0.9/state/state-discriminator.js",
      "npm:periscope-framework@0.0.9/state/state-url-parser.js",
      "npm:periscope-framework@0.0.9/state/storage.js",
      "npm:periscope-framework@0.0.9/state/user-state-storage.js",
      "npm:periscope-ui@0.0.4.js",
      "npm:periscope-ui@0.0.4/bootstrap-dashboard.js",
      "npm:periscope-ui@0.0.4/default-detailed-view.js",
      "npm:periscope-ui@0.0.4/default-search-box.js",
      "npm:periscope-ui@0.0.4/periscope-ui.js",
      "npm:periscope-ui@0.0.4/swagger-data-source-configurator.js",
      "npm:periscope-widgets-chartjs@0.0.3.js",
      "npm:periscope-widgets-chartjs@0.0.3/bar-chart.js",
      "npm:periscope-widgets-chartjs@0.0.3/index.js",
      "npm:periscope-widgets-chartjs@0.0.3/periscope-widget-chartjs.css!github:systemjs/plugin-css@0.1.21.js",
      "npm:periscope-widgets-datatables@0.0.2.js",
      "npm:periscope-widgets-datatables@0.0.2/grid-dt.js",
      "npm:periscope-widgets-datatables@0.0.2/index.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js",
      "npm:q@1.4.1.js",
      "npm:q@1.4.1/q.js",
      "npm:reduce-component@1.0.1.js",
      "npm:reduce-component@1.0.1/index.js",
      "npm:superagent@1.8.3.js",
      "npm:superagent@1.8.3/lib/client.js",
      "npm:superagent@1.8.3/lib/is-object.js",
      "npm:superagent@1.8.3/lib/request-base.js",
      "npm:superagent@1.8.3/lib/request.js",
      "npm:swagger-client@2.1.14.js",
      "npm:swagger-client@2.1.14/index.js",
      "npm:swagger-client@2.1.14/lib/auth.js",
      "npm:swagger-client@2.1.14/lib/client.js",
      "npm:swagger-client@2.1.14/lib/helpers.js",
      "npm:swagger-client@2.1.14/lib/http.js",
      "npm:swagger-client@2.1.14/lib/resolver.js",
      "npm:swagger-client@2.1.14/lib/schema-markup.js",
      "npm:swagger-client@2.1.14/lib/spec-converter.js",
      "npm:swagger-client@2.1.14/lib/types/model.js",
      "npm:swagger-client@2.1.14/lib/types/operation.js",
      "npm:swagger-client@2.1.14/lib/types/operationGroup.js"
    ]
  }
});
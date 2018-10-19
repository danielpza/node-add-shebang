# add-shebang

Adds node shebang to all your bin files declared in your package.json

    $ cat package.json
    {
      "bin": { // works with "bin": "dist/cli.js" too
        "my-app": "dist/cli.js"
      },
      "scripts": {
        "build": "tsc && add-shebang"
      }
    }
    $ npm run build
    ...
    $ cat dist/cli.js
    #!/usr/bin/env node
    // rest of your code, without this comment ;-)

# `@cloud-technology/input-buffer` #

*A Zero-Dependency JSON-Buffer-Serializer Prompt via Node.js*

...

## Table of Contents ##

- [Usage](#usage)
    - [Development](#development)
    - [Common-JS](#common-js)
    - [Modules](#modules)

## Usage ##

`@cloud-technology/input-buffer` uses the latest Node.js LTS version; to quickly enable, run `nvm use`.

- See [installation guide](https://github.com/nvm-sh/nvm#about) for a quick walk-through on installing `nvm`.

### Development ###

**Recommended** - Testing Mode

Locally developing with `jest` file-watchers helps ensure non-breaking change are introduced.

1. Install Dependencies
    ```bash
    npm install --quiet
    ```
2. Build `*.ts` File(s), Enabling TSC File-Watching
    ```bash
    npm run build
    ```
3. Open an Additional TTY and Run
    ```bash
    npm run start
    ```

Lastly, continue with development.

For alternative build & unit-testing commands, please refer to the [commands list](#usage).

### Common-JS ###

```node
const Main = async () => {
    const { $ } = await import("@cloud-technology/input-buffer");
    
    // ...
}

( async () => await Main() )();
```

### Modules ###

```node
import { $ } from "@cloud-technology/input-buffer";

// ...
```

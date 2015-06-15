# gobble-ng-annotate

Convert angular code to the minification-safe annotated format using ngAnnotate.

## Installation

If you haven’t installed gobble yet, [do that first][1]. This is your usual
npm install.

```bash
npm install gobble-ng-annotate --save-dev
```

## Usage

In your gobblefile, you can now use the transformation.

```js
import 'gobble';

export default gobble('my-angular-stuff').transform('ng-annotate', opts);
```

When you provide the first transform arg as a string, Gobble goes looking for it
on its own; no need to `require`. However you can also `require` it and pass in
the module itself instead of a string.

## Options

Options are identical those normally used with ng-annotate, except that
sourcemaps are active by default and "add" mode is active by default.

[1]: https://github.com/gobblejs/gobble
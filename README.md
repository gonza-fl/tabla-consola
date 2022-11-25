# Multiplication Table

First test with yargs and chalk.

Notes:

> Make sure you have Node.js v16 or higher

> You will see the outputs in the folder named output



To install dependencies

```js
npm --save install
```

Enter the folder and run the program with

```js
node src/ [options]
```

Flags

```sh
Options:
  --help     Show help                                 [boolean]
  --version  Show version number                       [boolean]
  -b, --base     -b Base number to create a multiplication table.           [number] [required]
  -s, --show     -s Show multiplication table result. [boolean] [default: false]
  -l, --limit    -l Limit of multiplication table.         [number] [default: 10]
```

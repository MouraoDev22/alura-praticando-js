# NPrompt

**Simple async prompt for Node.js using modern ES modules**

Node.js does not provide a built in `prompt()` like browsers.
This tiny package gives you a clean, promise based solution that works perfectly with `async/await`.

---

## Installation

Install directly from GitHub:

```bash
npm install github:MouraoDev22/nprompt
```

Or from npm (if published):

```bash
npm install nprompt
```

---

## Requirements

Node.js **18+ recommended**

Your project must use ES modules. Add this to your `package.json`:

```json
{
  "type": "module"
}
```

---

## Quick Start

```js
import prompt from "nprompt";

const name = await prompt("What is your name?");
console.log(`Hello ${name}`);
```

The function always returns a **string**.

---

## Working With Numbers

```js
import prompt from "nprompt";

const age = Number(await prompt("Your age:"));
console.log(age);
```

---

## Example With Validation

```js
import prompt from "nprompt";

async function getPositiveNumber() {
  let value = Number(await prompt("Enter a number:"));

  while (isNaN(value) || value <= 0) {
    value = Number(await prompt("Invalid input. Enter a valid number:"));
  }

  return value;
}

const number = await getPositiveNumber();
console.log(number);
```

---

## Why This Exists

Browsers have `prompt()`.
Node.js does not.

This package provides a minimal, modern and promise based alternative using `readline`.

No setup. No boilerplate. Just ask and get input.

---

## API

### `prompt(question)`

| Parameter | Type   | Description                |
| --------- | ------ | -------------------------- |
| question  | string | Text shown in the terminal |

**Returns:** `Promise<string>`

---

## License

MIT License

---

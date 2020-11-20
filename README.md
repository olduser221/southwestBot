# Southwest Bot

Auto check in bot for Southwest Airlines.

![Image of Confirmation](https://cdn.discordapp.com/attachments/649460201837035546/779378337436532766/unknown.png)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install .
```

## Usage

Everything is straight forward except for time which can be confusing, its in 24 hour format. Note that if your check in time is `6:05` in the morning please enter it as `6:5`.

```bash
node main.js CONFIRMATION_NUMBER FIRST_NAME LAST_NAME TIME
----------------------------------------------------------
node main.js A1B2C3 John Doe 6:5

or

node main.js A1B2C3 John Doe 10:55
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
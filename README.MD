# Greek Holidays 🇬🇷

Easily get the fixed and movable holidays for Greece in any given year.

## Installation

```bash
npm install greek-holidays
```

## Usage

Here's a quick start guide on how to use the greekHolidays function.

```typescript
const { greekHolidays } = require('greek-holidays');

// Get holidays for 2023
const holidays2023 = greekHolidays("2023");

console.log(holidays2023);
```

This will return an array of objects, each having a **date** and **name** in Greek.

## Features

- Retrieve all national holidays of Greece for a given year.
- Includes both fixed date holidays and movable holidays based on the Orthodox Easter.
- Automatically removes Labour Day (Εργατική Πρωτομαγιά) if it falls on a weekend or coincides with another holiday.


## API

### greekHolidays(year: string): Holiday[]
- **year:** The year for which you want to fetch the holidays. Should be a string, e.g., "2023".
Returns an array of **Holiday** objects:

```typescript
type Holiday = {
  date: string;
  name: string;
};
```
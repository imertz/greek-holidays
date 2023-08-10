type Holiday = {
  date: string;
  name: string;
};

export function kinitesArgies(year: number) {
  let e = 10;

  if (year > 1600) {
    const year2 = Math.floor(year / 100);
    e = 10 + year2 - 16 - Math.floor((year2 - 16) / 4);
  }
  if (year < 1583) {
    e = 0;
  }
  const a = year % 19;
  const b = (19 * a + 15) % 30;
  const c = (year + Math.floor(year / 4) + b) % 7;
  const L = b - c;
  const p = L + e;
  const d = 1 + ((p + 27 + Math.floor((p + 6) / 40)) % 31);
  const m = 3 + Math.floor((p + 26) / 30) - 1;
  const oneDay = 60 * 1000 * 60 * 24;
  const pascha = new Date(Date.UTC(year, m, d));
  const katharaDeftera = new Date(pascha.getTime() + oneDay * -48)
    .toISOString()
    .split("T")[0];
  const megParaskevi = new Date(pascha.getTime() + oneDay * -2)
    .toISOString()
    .split("T")[0];
  const deftPascha = new Date(pascha.getTime() + oneDay)
    .toISOString()
    .split("T")[0];
  const agiouPnefmatos = new Date(pascha.getTime() + oneDay * 50)
    .toISOString()
    .split("T")[0];

  return [
    { date: katharaDeftera, name: "Καθαρά Δευτέρα" },
    { date: megParaskevi, name: "Μεγάλη Παρασκευή" },
    { date: deftPascha, name: "Δευτέρα του Πάσχα" },
    { date: agiouPnefmatos, name: "Αγίου Πνεύματος" },
  ];
}

export function greekHolidays(year: string): Holiday[] {
  const y = parseInt(year);

  // Fixed Date Holidays
  const fixedHolidays: Holiday[] = [
    { date: `${year}-01-01`, name: "Πρωτοχρονιά" },
    { date: `${year}-01-06`, name: "Θεοφάνεια" },
    { date: `${year}-03-25`, name: "Ευαγγελισμός της Θεοτόκου" },
    { date: `${year}-05-01`, name: "Εργατική Πρωτομαγιά" },
    { date: `${year}-08-15`, name: "Κοίμηση της Θεοτόκου" },
    { date: `${year}-10-28`, name: "Ημέρα του Όχι" },
    { date: `${year}-12-25`, name: "Χριστούγεννα" },
    { date: `${year}-12-26`, name: "Επόμενη των Χριστουγέννων" },
  ];

  const movableHolidays: Holiday[] = kinitesArgies(parseInt(year));
  const holidays = [...fixedHolidays, ...movableHolidays].sort((a, b) =>
    a.date > b.date ? 1 : -1
  );
  //   if 05-01 is weekend or another holiday, remove it
  // check if 05-01 is weekend
  const firstMay = holidays.find((h) => h.name === `Εργατική Πρωτομαγιά`);
  if (firstMay) {
    const firstMayCount = holidays.filter(
      (h) => h.date === `${year}-05-01`
    ).length;

    if (firstMayCount > 1) {
      holidays.splice(holidays.indexOf(firstMay), 1);
    }
    const firstMayDate = new Date(firstMay.date);
    const day = firstMayDate.getDay();
    if (day === 0 || day === 6) {
      holidays.splice(holidays.indexOf(firstMay), 1);
    }

    // get count of 05-01 holidays
  }

  return holidays;
}

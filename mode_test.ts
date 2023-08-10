import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { greekHolidays } from "./mod.ts";

Deno.test("Αργίες 2016", () => {
  assertEquals(
    [
      { date: "2016-01-01", name: "Πρωτοχρονιά" },
      { date: "2016-01-06", name: "Θεοφάνεια" },
      { date: "2016-03-14", name: "Καθαρά Δευτέρα" },
      { date: "2016-03-25", name: "Ευαγγελισμός της Θεοτόκου" },
      { date: "2016-04-29", name: "Μεγάλη Παρασκευή" },
      { date: "2016-05-02", name: "Δευτέρα του Πάσχα" },
      { date: "2016-06-20", name: "Αγίου Πνεύματος" },
      { date: "2016-08-15", name: "Κοίμηση της Θεοτόκου" },
      { date: "2016-10-28", name: "Ημέρα του Όχι" },
      { date: "2016-12-25", name: "Χριστούγεννα" },
      { date: "2016-12-26", name: "Επόμενη των Χριστουγέννων" },
    ],
    greekHolidays("2016")
  );
});

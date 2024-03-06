import { observable } from "@legendapp/state";

export const state$ = observable({
  expenses: [
    { id: "1", title: "Groceries", amount: 50.0 },
    { id: "2", title: "Electric Bill", amount: 75.0 },
  ],
});
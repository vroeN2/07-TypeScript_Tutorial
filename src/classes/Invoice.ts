import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string, 
    private details: string, 
    public amount: number,
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

// with 'implements HasFormatter' we basically say that 'Invoice' must follow 'HasFormatter' rules, so in this case it needs to have a 'format()' method. It does, so there is no error.
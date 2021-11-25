export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
// with 'implements HasFormatter' we basically say that 'Invoice' must follow 'HasFormatter' rules, so in this case it needs to have a 'format()' method. It does, so there is no error.

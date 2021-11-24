// to avoid very long declarations, we can assign a type to variable first, and then use that variable as type for function required variables:

type stringOrNum = string | number;
type objWithName = { name: string, uid: stringOrNum };

const logDetails = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of  ${uid}`);
}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}
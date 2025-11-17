const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

/*
bill > 50 && bill < 300 ? console.log(`The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill * 0.15 + bill}`)
    : console.log(`The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill * 0.2 + bill}`);
*/
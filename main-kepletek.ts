import binomialCoefficient from "./binomialCoefficient";

let negyesTalalatok = (binomialCoefficient(5, 4) * binomialCoefficient(85, 1) / binomialCoefficient(90, 5));
let harmasTalalatok = (binomialCoefficient(5, 3) * binomialCoefficient(85, 2) / binomialCoefficient(90, 5));
let kettesTalalatok = (binomialCoefficient(5, 2) * binomialCoefficient(85, 3) / binomialCoefficient(90, 5));
let egyesTalalatok = (binomialCoefficient(5, 1) * binomialCoefficient(85, 4) / binomialCoefficient(90, 5));
console.log(`${negyesTalalatok} -> ${1 / negyesTalalatok}`);
console.log(`${harmasTalalatok} -> ${1 / harmasTalalatok}`);
console.log(`${kettesTalalatok} -> ${1 / kettesTalalatok}`);
console.log(`${egyesTalalatok} -> ${1 / egyesTalalatok}`);


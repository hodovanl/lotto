import hanyTalalatStimmel from "./hanyTalalatStimmel";

let kihuzottSzamok: [number, number, number, number, number] = [1, 14, 19, 25, 87];

let osszesLetezoSzelveny: Array<[number, number, number, number, number]> = [];
for (let a = 1; a <= 86; a++) {
    for (let b = a + 1; b <= 87; b++) {
        for (let c = b + 1; c <= 88; c++) {
            for (let d = c + 1; d <= 89; d++) {
                for (let e = d + 1; e <= 90; e++) {
                    osszesLetezoSzelveny.push([a, b, c, d, e]);
                }
            }
        }
    }
}

let nullasTalalatok = 0;
let egyesTalalatok = 0;
let kettesTalalatok = 0;
let harmasTalalatok = 0;
let negyesTalalatok = 0;
let otosTalalatok = 0;

for (let sz of osszesLetezoSzelveny) {
    let hts = hanyTalalatStimmel(kihuzottSzamok, sz);
    switch (hts) {
        case 0:
            nullasTalalatok++;
            break;
        case 1:
            egyesTalalatok++;
            break;
        case 2:
            kettesTalalatok++;
            break;
        case 3:
            harmasTalalatok++;
            break;
        case 4:
            negyesTalalatok++;
            break;
        case 5:
            otosTalalatok++;
            break;
    }
}

let osszesLetezoSzelvenyCount = osszesLetezoSzelveny.length;

console.log(osszesLetezoSzelvenyCount / nullasTalalatok);
console.log(osszesLetezoSzelvenyCount / egyesTalalatok);
console.log(osszesLetezoSzelvenyCount / kettesTalalatok);
console.log(osszesLetezoSzelvenyCount / harmasTalalatok);
console.log(osszesLetezoSzelvenyCount / negyesTalalatok);
console.log(osszesLetezoSzelvenyCount / otosTalalatok);

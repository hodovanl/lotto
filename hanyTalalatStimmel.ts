let hanyTalalatStimmel = (kihuzottSzamok: [number, number, number, number, number],
    szelveny: [number, number, number, number, number]): number => {
    let n = 0;
    for (let kihuzottSzam of kihuzottSzamok) {
        if (szelveny.indexOf(kihuzottSzam) !== -1) n++;
    }
    return n;
}

export default hanyTalalatStimmel;
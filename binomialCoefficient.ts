let binomialCoefficient = (n: number, k: number) => {

    // Checkuing if n and k are integer
    if (Number.isNaN(n) || Number.isNaN(k)) {
        return NaN;
    }

    if (k < 0 || k > n) {
        return 0
    }

    if (k === 0 || k === n) {
        return 1
    }

    if (k === 1 || k === n - 1) {
        return n
    }

    let res = n;
    for (let i = 2; i <= k; i++) {
        res *= (n - i + 1) / i;
    }

    return Math.round(res);
}

export default binomialCoefficient;

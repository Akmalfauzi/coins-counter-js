const coins = [50, 1000, 400, 50, 300, 1200, 1000, 25, 50, 45, 100];

function countDenominations(arr) {
    const result = {};

    for (const coin of arr) {
        result[coin] = (result[coin] || 0) + 1;
    }

    return result;
}

function displayResult(result, originalArray) {
    const uniqueOrder = [];
    const seen = new Set();

    for (const coin of originalArray) {
        if (!seen.has(coin)) {
            uniqueOrder.push(coin);
            seen.add(coin);
        }
    }

    const formatted = uniqueOrder.map(coin => `${result[coin]}x ${coin}`);

    console.log("coins = [");
    formatted.forEach((item, index) => {
        const comma = index === formatted.length - 1 ? '' : ',';
        console.log(`  ${item}${comma}`);
    });
    console.log("]");
}

function getFormattedArray(result, originalArray) {
    const uniqueOrder = [];
    const seen = new Set();

    for (const coin of originalArray) {
        if (!seen.has(coin)) {
            uniqueOrder.push(coin);
            seen.add(coin);
        }
    }

    return uniqueOrder.map(coin => `${result[coin]}x ${coin}`);
}

const counted = countDenominations(coins);

displayResult(counted, coins);

const formattedArray = getFormattedArray(counted, coins);
console.log("\n", formattedArray);

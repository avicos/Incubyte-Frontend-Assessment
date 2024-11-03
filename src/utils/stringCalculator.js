
export function add(numbers) {
    if (!numbers) return 0;

    let delimiters = [',', '\n', ';'];

    // Check for custom delimiter
    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        const customDelimiter = numbers.substring(2, delimiterEndIndex);
        delimiters.push(customDelimiter);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

   
    const numberList = splitByDelimiters(numbers, delimiters);
    let total = 0;
    const negativeNumbers = [];

    for (const num of numberList) {
        if (num) { 
            const number = parseInt(num, 10);
            if (isNaN(number)) continue; 
            if (number < 0) negativeNumbers.push(number);
            else total += number;
        }
    }

    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    return total;
}


function splitByDelimiters(string, delimiters) {
    let result = [string];
    for (let delimiter of delimiters) {
        let tempResult = [];
        for (let part of result) {
            tempResult = tempResult.concat(part.split(delimiter));
        }
        result = tempResult;
    }
    return result;
}

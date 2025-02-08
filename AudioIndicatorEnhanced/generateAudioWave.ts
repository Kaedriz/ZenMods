// 18 values
// from 0.5 to 1.3
// continuos

function generateRandomList(start: number, end: number, numValues: number, mean: number, stdDev: number): number[] {
    const values: number[] = [];
    for (let i = 0; i < numValues; i++) {
      const value = Math.random() * (end - start) + start;
      const normalizedValue = (value - start) / (end - start);
      const meanAdjustedValue = normalizedValue * stdDev + mean;
      const finalValue = Math.max(start, Math.min(end, meanAdjustedValue));
      values.push(finalValue);
    }
    return values;
  }
  
  const randomList = generateRandomList(0.3, 1.5, 18, 1.1, 0.4);

let result = '';

for (let number of randomList) {
	// console.log(number.toFixed(2));
    result = result.concat(`1 ${number.toFixed(2)};`);
}

console.log(result);

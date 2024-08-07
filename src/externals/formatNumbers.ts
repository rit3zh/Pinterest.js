export function formatNumberWithLabel(number: number): string {
  if (number < 1_000) {
    return number.toString();
  }

  const units = ["K", "M", "B"];
  const threshold = 1_000;

  let unitIndex = -1;
  let scaledNumber = number;

  while (scaledNumber >= threshold && unitIndex < units.length - 1) {
    scaledNumber /= threshold;
    unitIndex++;
  }

  const formattedNumber =
    scaledNumber % 1 === 0 ? scaledNumber.toFixed(0) : scaledNumber.toFixed(1);

  return `${formattedNumber}${units[unitIndex]}`;
}

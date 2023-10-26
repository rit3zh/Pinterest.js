export function formatDate(date: Date, format: string): string {
  const pad = (n: number) => (n < 10 ? "0" + n : n.toString());
  const formattedDate = format
    .replace(/yyyy/g, date.getFullYear().toString())
    .replace(/MM/g, pad(date.getMonth() + 1))
    .replace(/dd/g, pad(date.getDate()))
    .replace(/HH/g, pad(date.getHours()))
    .replace(/mm/g, pad(date.getMinutes()))
    .replace(/ss/g, pad(date.getSeconds()));
  return formattedDate;
}

export function formatNumberWith8Decimals(num) {
  const locale = navigator ? navigator.language : "en-US"; //Default to english USA if no runtime info
  const formatted = num.toLocaleString(locale, {
    minimumFractionDigits: 0, // Do not force decimal places if not needed
    maximumFractionDigits: 8, // Allow up to 8 decimal places if needed
  });


  return formatted;
}

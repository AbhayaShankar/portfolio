export function capitalizeWords(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

export function convertHyphenToCapitalized(str) {
  const newName = str.split("-").map(capitalizeWords).join(" ");
  return newName;
}

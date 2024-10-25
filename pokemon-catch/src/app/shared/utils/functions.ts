export function isRainy(rain: any): boolean {
  return rain === 'Rain' ? true : false;
}

export function changeHyphenToBlackSpace(text: string): string {
  return text.replace('-', ' ');
}

export function convertFistLetterToUpperCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

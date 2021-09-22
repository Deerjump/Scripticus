export const noMentions = { allowedMentions: { users: [] } };

export function isNumber(val: string | number): boolean {
  return !isNaN(Number(val));
}

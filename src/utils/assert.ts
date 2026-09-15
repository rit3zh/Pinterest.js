/**
 * Throws unless `value` is a non-empty string.
 *
 * Every endpoint validates its required identifiers the same way, so the check
 * lives here to keep the error message consistent.
 *
 * @param value - The value to validate.
 * @param label - Name of the parameter, used in the error message.
 */
export function assertNonEmpty(
  value: string | undefined,
  label: string,
): asserts value is string {
  if (!value || value.trim() === "") {
    throw new TypeError(`[pinterest.js] ${label} must be a non-empty string`);
  }
}

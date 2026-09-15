/** Extracts the contents of every `data-relay-response` script tag. */
export function parseSpecificScriptTags(html: string): string[] {
  const scriptTagRegex =
    /<script\b[^>]*data-relay-response\b[^>]*>([\s\S]*?)<\/script>/gi;
  const scriptContents: string[] = [];
  let match;

  while ((match = scriptTagRegex.exec(html)) !== null) {
    scriptContents.push(match[1]);
  }

  return scriptContents;
}

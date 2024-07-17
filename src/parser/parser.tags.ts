export function parseSpecificScriptTags(html: string) {
  const scriptTagRegex =
    /<script\b[^>]*data-relay-response\b[^>]*>([\s\S]*?)<\/script>/gi;
  const scriptContents = [];
  let match;

  while ((match = scriptTagRegex.exec(html)) !== null) {
    scriptContents.push(match[1]);
  }

  return scriptContents;
}

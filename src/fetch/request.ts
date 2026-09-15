/** Thin wrapper around `fetch` so every caller sends requests the same way. */
export class FetchRequest {
  /** Fetches a URL and parses the response as JSON. */
  public async get<T = any>(url: string, headers?: HeadersInit): Promise<T> {
    const response = await this.send(url, headers);
    return response.json() as Promise<T>;
  }

  /** Fetches a URL and returns the response body as text. */
  public async getText(url: string, headers?: HeadersInit): Promise<string> {
    const response = await this.send(url, headers);
    return response.text();
  }

  private async send(url: string, headers?: HeadersInit): Promise<Response> {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(
        `[pinterest.js] Request failed with ${response.status} ${response.statusText}`,
      );
    }
    return response;
  }
}

export default new FetchRequest();

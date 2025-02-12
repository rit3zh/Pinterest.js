class FetchRequest {
  public async get(url: string, headers?: HeadersInit) {
    const request = await fetch(url, { headers });
    const response = await request.json();
    return response;
  }

  async getText(url: string, body?: BodyInit) {
    const request = await fetch(url, { body });
    const response = await request.text();
    return response;
  }
}

export default new FetchRequest();

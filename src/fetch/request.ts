class FetchRequest {
  public async get(url: string, body?: BodyInit) {
    const request = await fetch(url, { body });
    const response = await request.json();
    return response;
  }
}

export default new FetchRequest();

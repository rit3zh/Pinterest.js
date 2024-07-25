interface IApi {
  baseURL: string;
  endpoints?: any;
}
export const Api: IApi = {
  baseURL: "https://pinterest.com",
  endpoints: {
    searchApi: "",
  },
};

interface IApi {
  baseURL: string;
  endpoints?: any;
}
export const Api: IApi = {
  baseURL: "https://www.pinterest.com",
  endpoints: {
    searchApi: "",
  },
};

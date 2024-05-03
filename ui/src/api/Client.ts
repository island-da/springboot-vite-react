import axios, { AxiosResponse } from "axios";

class Client {
  post<T>(url: string, params?: Record<string, any>): Promise<T> {
    const headers = { "Content-Type": "application/json" };
    return axios
      .post(url, params, { headers: headers })
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error) => {
        throw error.response.data;
      });
  }

  get<T>(url: string): Promise<T> {
    return axios
      .get(url)
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error) => {
        throw error.response.data;
      });
  }
}

export default new Client();

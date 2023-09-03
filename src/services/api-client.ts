import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.api-ninjas.com",
  headers: {
    "x-api-key": "ymHXrcsanOMyyVGFwglrcg==8wPBoqE6DKQn5DvN",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (id?: string | number, params?: { [key: string]: string }) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id, { params })
      .then((res) => res.data);
  };

  getSearch = (params?: { [key: string]: string }) => {
    return axiosInstance
      .get<T>(this.endpoint, { params })
      .then((res) => res.data);
  };
}

export default APIClient;

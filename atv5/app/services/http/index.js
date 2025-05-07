import axios from "axios";

class AxiosService {
  static instance;

  axios = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })

  getInstance() {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService();
    }

    return AxiosService.instance;
  }

  getAxios() {
    return this.axios;
  }
}

const axiosService = new AxiosService().getInstance();

const http = axiosService.getAxios();

export default http;
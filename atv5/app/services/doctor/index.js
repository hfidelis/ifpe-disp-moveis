import http from "../http";

class DoctorService {
  static instance;

  getInstance() {
    if (!DoctorService.instance) {
      DoctorService.instance = new DoctorService();
    }

    return DoctorService.instance;
  }

  async getTopDoctors() {
    return new Promise((resolve, reject) => {
      http
        .get("/top-doctors")
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

const doctorService = new DoctorService().getInstance();

export default doctorService;
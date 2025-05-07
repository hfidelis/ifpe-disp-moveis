import http from "../http";

class TripService {
  static instance;

  getInstance() {
    if (!TripService.instance) {
      TripService.instance = new TripService();
    }

    return TripService.instance;
  }

  async getPopularDestinations() {
    return new Promise((resolve, reject) => {
      http
        .get("/popular-destinations")
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getRecommendedDestinations() {
    return new Promise((resolve, reject) => {
      http
        .get("/recommended-destinations")
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

const tripService = new TripService().getInstance();

export default tripService;
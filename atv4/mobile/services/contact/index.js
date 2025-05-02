import http from "../http";

class ContactService {
  static instance;

  getInstance() {
    if (!ContactService.instance) {
      ContactService.instance = new ContactService();
    }

    return ContactService.instance;
  }

  async getContacts() {
    return new Promise((resolve, reject) => {
      http
        .get("/contacts")
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async createContact(contact) {
    return new Promise((resolve, reject) => {
      http
        .post("/contacts", contact)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async updateContact(contact) {
    return new Promise((resolve, reject) => {
      http
        .put(`/contacts/${contact.id}`, contact)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async deleteContact(id) {
    return new Promise((resolve, reject) => {
      http
        .delete(`/contacts/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

const contactService = new ContactService().getInstance();

export default contactService;

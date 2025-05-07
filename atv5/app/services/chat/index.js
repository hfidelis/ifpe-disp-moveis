import http from "../http";

class ChatService {
  static instance;

  getInstance() {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }

    return ChatService.instance;
  }

  async getChats() {
    return new Promise((resolve, reject) => {
      http
        .get("/chats")
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

const chatService = new ChatService().getInstance();

export default chatService;
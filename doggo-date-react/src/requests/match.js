import { BASE_URL } from "./config.js";

const Match = {
  create(id, params) {
    return fetch(`${BASE_URL}/doggos/${id}/matches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/matches/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(res => res.json());
  }
};

export default Match;

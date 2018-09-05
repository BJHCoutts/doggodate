import { BASE_URL } from "./config";

const Doggo = {
  all() {
    return fetch(`${BASE_URL}/doggos`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(response => response.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/doggos/${id}`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/doggos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/doggos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(res => res.json());
  }
};

export default Doggo;

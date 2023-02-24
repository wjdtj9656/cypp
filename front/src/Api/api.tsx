import axios from "axios";

// localhost:3306
// mysql:3306

// let URL = "http://10.0.2.2:8080/api";
let URL = "https://cypp.link:8000";
// let URL = "http://localhost:8000";
// if (window.location.hostname === "localhost") {
//   URL = `http://localhost:8080/api`;
// } else {
//   URL = `http://${window.location.hostname}/api`;
// }

const apiInstance = () => {
  const instance = axios.create({
    baseURL: URL,
    timeout: 30000,
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  });
  return instance;
};
export default apiInstance;

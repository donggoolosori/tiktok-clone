import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-clone-kdj.herokuapp.com/",
});

export default instance;

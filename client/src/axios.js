import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-clone-dongjune.herokuapp.com/",
});

export default instance;

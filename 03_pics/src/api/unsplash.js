import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID oiYR1w06TLMO7muxAHpjr8vmofpJ8Y-e4_sKgpWkgXM",
  },
});

import axios from "axios";
import { RootUrl, OnlineUrl } from "./Config";

// const Get = (path, root) => (data) => {
const Get = (path, root) => {
  // promise itu sebuah asyncrounus memberikan delay
  const promise = new Promise((resolve, reject) => {
    // axios.get(`${RootUrl}/${path}`).then(
    axios.get(`${root ? OnlineUrl : RootUrl}/${path}`).then(
      (res) => {
        // console.log(res);
        resolve(res.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Get;

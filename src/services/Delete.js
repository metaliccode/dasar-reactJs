import axios from "axios";
import { RootUrl, OnlineUrl } from "./Config";

const Delete = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${root ? OnlineUrl : RootUrl}/${path}`).then(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Delete;

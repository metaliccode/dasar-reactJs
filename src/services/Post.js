import axios from "axios";
import { RootUrl, OnlineUrl } from "./Config";

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root ? OnlineUrl : RootUrl}/${path}`, data).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Post;

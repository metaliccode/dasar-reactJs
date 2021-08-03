import axios from "axios";
import { RootUrl, OnlineUrl } from "services/Config";

const Put = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${root ? OnlineUrl : RootUrl}/${path}`, data).then(
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

export default Put;

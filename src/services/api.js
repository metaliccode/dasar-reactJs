import Get from "services/Get";
import Post from "services/Post";
import Put from "services/Put";
import Delete from "services/Delete";

// config

// Get

// Post

//POST
const postNewsBlog = (data) => Post("posts", false, data);

//PUT
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data);

//DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false);

// GET
const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getComments = () => Get("comments", true);

const API = {
  getNewsBlog,
  getComments,
  postNewsBlog,
  updateNewsBlog,
  deleteNewsBlog,
};

export default API;

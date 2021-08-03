import React, { Component } from "react";
import Post from "pages/API/Post";
import axios from "axios";
import API from "services/api";

export default class Blog extends Component {
  state = {
    post: [],
    formBlog: {
      id: 1,
      title: "",
      body: "",
      userID: 1,
    },
    isUpdate: false,
    comments: [],
  };

  getAPI = () => {
    // API.getNewsBlog.then((result) => {
    API.getNewsBlog().then((result) => {
      this.setState({
        post: result,
      });
    });

    // API.getComments().then((result) => {
    //   // console.log(result);
    //   this.setState({
    //     comments: result,
    //   });
    // });

    // axios
    //   .get("http://localhost:3004/posts?_sort=id&_order=desc")
    //   .then((res) => {
    //     // console.log(res);
    //     this.setState({
    //       post: res.data,
    //     });
    //   });
  };

  postDataAPI = () => {
    API.postNewsBlog(this.state.formBlog).then((res) => {
      this.getAPI();
      this.setState({
        formBlog: {
          id: 1,
          title: "",
          body: "",
          userID: 1,
        },
      });
    });

    // axios.post("http://localhost:3004/posts", this.state.formBlog).then(
    //   (res) => {
    //     console.log(res);
    //     this.getAPI();
    //     this.setState({
    //       formBlog: {
    //         id: 1,
    //         title: "",
    //         body: "",
    //         userID: 1,
    //       },
    //     });
    //   },
    //   (err) => {
    //     console.log("Error ", err);
    //   }
    // );
  };

  putDataAPI = () => {
    API.updateNewsBlog(this.state.formBlog, this.state.formBlog.id).then(
      (res) => {
        this.getAPI();
        this.setState({
          isUpdate: false,
          formBlog: {
            id: 1,
            title: "",
            body: "",
            userID: 1,
          },
        });
      }
    );

    // axios
    //   .put(
    //     `http://localhost:3004/posts/${this.state.formBlog.id}`,
    //     this.state.formBlog
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     this.getAPI(res);
    //     this.setState({
    //       isUpdate: false,
    //       formBlog: {
    //         id: 1,
    //         title: "",
    //         body: "",
    //         userID: 1,
    //       },
    //     });
    //   });
  };

  handleRemove = (dataid) => {
    // console.log(dataid);
    API.deleteNewsBlog(dataid).then((res) => {
      this.getAPI();
    });
    // API.deleteNewsBlog(data).then((res) => {
    //   this.getAPI();
    // });

    // menggunnakan backtick untuk string
    // axios
    //   .delete(`http://localhost:3004/posts/${data}`)
    //   // .then((res) => console.log(res));
    //   .then((res) => this.getAPI(res));
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlog: data,
      isUpdate: true,
    });
  };

  handleFormChange = (event) => {
    // console.log("form onChange", event.target);
    let formBlogNew = { ...this.state.formBlog };
    let Timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogNew["id"] = Timestamp;
    }
    // console.log("form onChange", event.target.name);
    formBlogNew[event.target.name] = event.target.value;
    // console.log("init state :", this.state.formBlogNew);
    // console.log("new value :", formBlogNew);
    // let title = event.target.value;
    this.setState(
      {
        formBlog: formBlogNew,
      }
      // () => {
      //   console.log("Value object form", this.state.formBlog);
      // }
      // membuat id unice Time stamp
    );
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataAPI();
    } else {
      // console.log(this.state.formBlog);
      this.postDataAPI();
    }
  };

  handleDetail = (id) => {
    // untuk berpindah halaman dengan id tanpa Link action nya kita triger dari method
    this.props.history.push(`/detail/${id}`);
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   // .then((json) => console.log(json));
    //   .then((json) =>
    //     this.setState({
    //       post: json,
    //     })
    //   );

    // menggunakan axios dia mereturn header kelebihannya
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    // axios.get("http://localhost:3004/posts").then((res) => {
    //   this.setState({
    //     post: res.data,
    //   });
    // });
    this.getAPI();
  }

  render() {
    return (
      <React.Fragment>
        <p>Blog Post</p>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="add title ..."
            onChange={this.handleFormChange}
            value={this.state.formBlog.title}
          />
          <br />
          <label htmlFor="body">Blog Content</label>
          <textarea
            type="text"
            name="body"
            placeholder="add title ..."
            onChange={this.handleFormChange}
            value={this.state.formBlog.body}
          />
          <br />
          <button onClick={this.handleSubmit}>Simpan</button>
        </div>
        {/* {this.state.comments.map((comment, index) => {
          return <p key={index}>{comment.email}</p>;
        })} */}
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              // title={post.title}
              // desc={post.body}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
              goDetail={this.handleDetail}
            ></Post>
          );
        })}
      </React.Fragment>
    );
  }
}

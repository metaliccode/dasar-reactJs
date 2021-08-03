import axios from "axios";
import React, { Component } from "react";

export default class DetailPost extends Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };

  componentDidMount() {
    // console.log(this.props.match.params.postid);
    let id = this.props.match.params.postid;
    axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      console.log(res);
      let post = res.data;
      this.setState({
        post: {
          title: post.title,
          body: post.body,
        },
      });
    });
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
      </div>
    );
  }
}

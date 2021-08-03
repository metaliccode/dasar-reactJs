import React from "react";

export default function Post(props) {
  return (
    <div className="post">
      <img
        src="https://placeimg.com/200/150/tech"
        alt=""
        width="200"
        height="150"
      />
      <br />
      {/* untuk detail sepesipik  */}
      <a href="">
        <h4 onClick={() => props.goDetail(props.data.id)}>
          {props.data.title}
        </h4>
      </a>
      <p>{props.data.body}</p>
      <button onClick={() => props.remove(props.data.id)}>Remove</button>
      &nbsp;
      <button onClick={() => props.update(props.data)}>Update</button>
      <br />
      <hr />
    </div>
  );
}

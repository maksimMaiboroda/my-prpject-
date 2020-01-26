import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = props => {
  let newPostElements = React.createRef();

  let newPostData = props.oldPostData.map(post => (
    <Posts message={post.message} likesCount={post.likesCount} />
  ));

  let addPost = () => {
    props.dispatch({type: "ADD-POST"});
  };

  let onPostChange = () => {
    let text = newPostElements.current.value;
    props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
  };

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div className={classes.textareaPost}>
        <textarea
          onChange={onPostChange}
          ref={newPostElements}
          value={props.newPostText}
        />
      </div>
      <div className={classes.buttonAddPost}>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>{newPostData}</div>
    </div>
  );
};

export default MyPosts;

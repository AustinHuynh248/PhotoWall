// remove

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index,
  };
}

// adding the post
export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}

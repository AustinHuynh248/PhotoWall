import Posts from "../Data/posts";

const postReducer = function posts(state = Posts, action) {
  switch (action.type) {
    case "REMOVE_POST":
      return [
        // slicing the array before and after the post and sum them together to form the array
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "ADD_POST":
      return [...state, action.post];
    default:
      return state;
  }
};

export default postReducer;

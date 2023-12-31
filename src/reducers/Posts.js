//reducer is a function which takes states and action and based on the action type then we do some logic
//our state will always be posts so we are replacing state,action to posts,action

export default (posts = [], action) => {
  switch (action.type) {
    case "DELETE":
      return posts.filter((post) => post._id !== action.payload);
    case "UPDATE":
    case "LIKE":
    case "DISLIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];

    default:
      return posts;
  }
};

import axios from "axios";

/**
 * Function that gets user data
 * @param {*} id User id
 * @returns User data
 */
async function getData(id) {
  try {
    // fetch user data using axios
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    // fetch post data using axios
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    // add posts data to user data
    user.posts = posts;

    // return user data
    return user;
  } catch (error) {
    console.log(error);
  }
}

// export getData function
export default getData;

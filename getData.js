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

    // return user data merged with posts
    return { ...user, posts };
  } catch (error) {
    console.log(error);
  }
}

// export getData function
export default getData;

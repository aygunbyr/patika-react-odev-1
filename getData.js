import axios from "axios";

async function getData(id) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  user.posts = posts;

  return user;
}

export default getData;

import axios from "axios";

export async function getUserProfile(accessToken: string) {
  // Do some API call to a user profile service

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  return response.data;
}

import DogClient from "../../clients/DogClient";

export default async function getAllBreeds() {
  try {
    const response = await DogClient.get("/breeds/list/all");
    return response.data.message;
  } catch (error) {
    return [];
  }
}

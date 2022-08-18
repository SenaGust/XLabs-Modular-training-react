import DogClient from "../../clients/DogClient";

interface DogObject {
  [key: string]: Array<string>;
}

export default async function getAllBreeds(): Promise<DogObject> {
  try {
    const response = await DogClient.get("/breeds/list/all");
    return response.data.message;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

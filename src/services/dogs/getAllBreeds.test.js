import DogClient from "../../clients/DogClient";
import getAllBreeds from "./getAllBreeds";

jest.mock("../../clients/DogClient", () => ({ get: jest.fn() }))

describe('getAllBreeds', () => {
    it('should return correctly when success path', async () => {
        DogClient.get.mockResolvedValue({
            data: {
                message: {
                    "affenpinscher": [],
                    "african": [],
                    "airedale": [],
                    "akita": [],
                    "appenzeller": [],
                },
                status: "success"
            }
        })

        const result = await getAllBreeds();

        expect(result).toEqual({
            affenpinscher: [],
            african: [],
            airedale: [],
            akita: [],
            appenzeller: []
        })
    })
    it('should return correctly when error path', async () => {
        DogClient.get.mockRejectedValue(new Error())

        const result = await getAllBreeds();

        expect(result).toEqual([])
    })
})


import { merge } from "../src/index";

describe("merge test", () => {
    it("test", () => {
        expect(merge([],[],[])).toEqual([0, 1])
    })
})
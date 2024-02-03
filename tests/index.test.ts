import { merge } from "../src/index";

describe("merge function test", () => {
    it("test with 3 empty array", () => {
        expect(merge([],[],[])).toEqual([])
    });
    it("test with 2 empty array", () => {
        expect(merge([0, 5, 6],[],[])).toEqual([0 , 5, 6])
    });
    it("test with 1 empty array", () => {
        expect(merge([0, 5, 6],[],[10, 8, 1])).toEqual([0, 1, 5, 6, 8, 10])
    });
    it("test with full array", () => {
        expect(merge([0, 5, 6],[3, 6, 7, 9],[10, 8, 1])).toEqual([0, 1, 3, 5, 6, 6, 7, 8, 9, 10])
    });
})
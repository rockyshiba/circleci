import { rectangleArea } from "../math";

describe("rectangleArea", () => {
    it("returns the correct area", () => {
        expect(rectangleArea(1, 1)).toBe(1);
    })
});
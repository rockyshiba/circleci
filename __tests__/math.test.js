import { rectangleArea, circleArea } from "../math";

describe("rectangleArea", () => {
    it("returns the correct area", () => {
        expect(rectangleArea(1, 1)).toBe(1);
    });

    it("this will fail", () => {
        return false;
    });
});

describe("circleArea", () => {
    it("returns the correct area", () => {
        expect(circleArea(3)).toBe(28.27);
    });

    it("does not return strings", () => {
        expect(circleArea(3)).not.toBe("28.27");
    });
});
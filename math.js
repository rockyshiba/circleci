/**
 * Returns the area of a rectangle by multiplying length and height.
 * @param {number} length 
 * @param {number} height 
 * @return {number} length x height
 */
export function rectangleArea(length, height){
    return length * height;
}

/**
 * Returns the area of a circle with a given radius
 * @param {number} radius 
 * @return {number} pi * r ^ 2
 */
export function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
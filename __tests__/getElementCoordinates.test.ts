import { RectWithCoordinates } from "RectWithCoordinates";
test("Should return correct coordinates relative to the top left corner of a rectangle", () => {
	const element = new RectWithCoordinates({
		width: 200,
		height: 200,
		viewportPositionX: 10,
		viewportPositionY: 20,
	});
	expect(element.getElementCoordinates([150, 150])).toStrictEqual([140, 130]);
});

test("Should return correct coordinates relative to the top left corner of a rectangle with border", () => {
	const element = new RectWithCoordinates({
		width: 200,
		height: 200,
		borderWidth: { left: 10, right: 0, top: 20, bottom: 0 },
		viewportPositionX: 10,
		viewportPositionY: 20,
	});
	expect(element.getElementCoordinates([150, 150])).toStrictEqual([130, 110]);
});

test("Should return correct out of bounds coordinates relative to the top left corner of a rectangle", () => {
	const element = new RectWithCoordinates({
		width: 200,
		height: 200,
		viewportPositionX: 10,
		viewportPositionY: 20,
	});
	expect(
		element.getElementCoordinates([5, 10], { noOutOfBounds: false }),
	).toStrictEqual([-5, -10]);
	expect(
		element.getElementCoordinates([250, 250], { noOutOfBounds: false }),
	).toStrictEqual([240, 230]);
});
test('Should return correctly "cropped out" coordinates to keep them inside of bounds', () => {
	const element = new RectWithCoordinates({
		width: 200,
		height: 200,
		viewportPositionX: 10,
		viewportPositionY: 20,
	});
	expect(
		element.getElementCoordinates([5, 10], {
			noOutOfBounds: true,
		}),
	).toStrictEqual([0, 0]);
	expect(
		element.getElementCoordinates([250, 250], {
			noOutOfBounds: true,
		}),
	).toStrictEqual([200, 200]);
});

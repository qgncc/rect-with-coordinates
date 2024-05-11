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
    element.getElementCoordinates([5, 10], { noOutOfBounds: false })
  ).toStrictEqual([-5, -10]);
  expect(
    element.getElementCoordinates([250, 250], { noOutOfBounds: false })
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
    })
  ).toStrictEqual([0, 0]);
  expect(
    element.getElementCoordinates([250, 250], {
      noOutOfBounds: true,
    })
  ).toStrictEqual([200, 200]);
});

test("Should return correct coordinates relatively to another origin", () => {
  const element = new RectWithCoordinates({
    width: 200,
    height: 200,
    viewportPositionX: 10,
    viewportPositionY: 20,
    origin: [30, 30],
  });
  expect(element.getElementCoordinates([150, 150])).toStrictEqual([110, 100]);
  expect(
    element.getElementCoordinates([150, 150], {
      customOrigin: [12, 43],
    })
  ).toStrictEqual([128, 87]);
});

test('Should return correctly "cropped out" coordinates relatively to another origin to keep them inside of bounds', () => {
  const element = new RectWithCoordinates({
    width: 200,
    height: 200,
    viewportPositionX: 10,
    viewportPositionY: 20,
    origin: [20, 20],
  });
  expect(
    element.getElementCoordinates([5, 10], {
      noOutOfBounds: true,
    })
  ).toStrictEqual([-20, -20]);
  expect(
    element.getElementCoordinates([250, 250], {
      noOutOfBounds: true,
    })
  ).toStrictEqual([180, 180]);
  expect(
    element.getElementCoordinates([5, 10], {
      noOutOfBounds: true,
      customOrigin: [30, 30],
    })
  ).toStrictEqual([-30, -30]);
  expect(
    element.getElementCoordinates([250, 250], {
      noOutOfBounds: true,
      customOrigin: [30, 30],
    })
  ).toStrictEqual([170, 170]);
});

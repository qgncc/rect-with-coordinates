import { getValueOrTrue, getValueOrZero } from "utils";
import {
  RectCoordinates,
  GetElementCoordinatesOptions,
  ViewportCoordinates,
  RectBounds,
  RectData,
} from ".";
import { Coordinates } from "types";

export class RectWithCoordinates {
  /**
   * bounds of a rectangle in viewport coordinates
   * @type {RectBounds}
   * @protected
   */
  protected bounds: RectBounds;
  protected fullWidth: number;
  protected fullHeight: number;
  protected innerWidth: number;
  protected innerHeight: number;
  protected origin: Coordinates;
  private cropByBounds(
    coordinates: RectCoordinates,
    customOrigin?: RectCoordinates
  ): RectCoordinates {
    const [x, y] = coordinates;
    const [originX, originY] = customOrigin ? customOrigin : this.origin;
    const leftBound = 0 - originX;
    const rightBound = this.innerWidth - originX;
    const topBound = 0 - originY;
    const bottomBound = this.innerHeight - originY;
    const croppedX =
      x < leftBound ? leftBound : x > rightBound ? rightBound : x;
    const croppedY =
      y < topBound ? topBound : y > bottomBound ? bottomBound : y;
    return [croppedX, croppedY];
  }
  constructor(element: RectData) {
    const {
      borderWidth,
      height,
      width,
      viewportPositionX: elementX,
      viewportPositionY: elementY,
      origin,
    } = element;
    this.bounds = {
      top: elementY + getValueOrZero(borderWidth?.top),
      right: elementX + (width - getValueOrZero(borderWidth?.right)),
      bottom: elementY + (height - getValueOrZero(borderWidth?.bottom)),
      left: elementX + getValueOrZero(borderWidth?.left),
    };
    this.fullWidth = width;
    this.fullHeight = height;
    this.innerWidth =
      width -
      getValueOrZero(borderWidth?.left) -
      getValueOrZero(borderWidth?.right);
    this.innerHeight =
      height -
      getValueOrZero(borderWidth?.top) -
      getValueOrZero(borderWidth?.bottom);
    this.origin = origin ? origin : [0, 0];
  }

  transformViewportCoordinates(
    viewportCoordinates: ViewportCoordinates,
    options?: GetElementCoordinatesOptions
  ): RectCoordinates {
    const noOutOfBounds = getValueOrTrue(options?.noOutOfBounds);
    const [originX, originY] = options?.customOrigin
      ? options.customOrigin
      : this.origin;
    const [viewportX, viewportY] = viewportCoordinates;
    const elementX = viewportX - this.bounds.left - originX;
    const elementY = viewportY - this.bounds.top - originY;
    const elementCoords: RectCoordinates = [elementX, elementY];
    return noOutOfBounds
      ? this.cropByBounds(elementCoords, options?.customOrigin)
      : elementCoords;
  }
}

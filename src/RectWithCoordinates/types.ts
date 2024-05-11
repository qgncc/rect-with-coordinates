import { Coordinates } from "types";

export type GetElementCoordinatesOptions = {
  /**
   * @property {boolean} if true, function "crops" values of x and y
   * so they stay in bounds
   */
  noOutOfBounds?: boolean;
  customOrigin?: Coordinates;
};

export type ViewportCoordinates = Coordinates;

export type RectCoordinates = Coordinates;
export type BorderInfo = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

export interface RectData {
  width: number;
  height: number;
  viewportPositionX: number;
  viewportPositionY: number;
  borderWidth?: BorderInfo;
  /**
   * @property {[number,number]} coordinates of origin relative to top left corner
   * of a rectangle
   */
  origin?: Coordinates;
}

export type RectBounds = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

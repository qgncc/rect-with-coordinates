import { Coordinates } from "types";

export type GetElementCoordinatesOptions = {
	noOutOfBounds?: boolean;
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
}

export type RectBounds = {
	left: number;
	right: number;
	top: number;
	bottom: number;
};

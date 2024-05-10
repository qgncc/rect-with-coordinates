import { getValueOrTrue, getValueOrZero } from "utils";
import {
	RectCoordinates,
	GetElementCoordinatesOptions,
	ViewportCoordinates,
	RectBounds,
	RectData,
} from ".";

export class RectWithCoordinates {
	protected bounds: RectBounds;
	protected fullWidth: number;
	protected fullHeight: number;
	protected innerWidth: number;
	protected innerHeight: number;
	private cropByBounds(coordinates: RectCoordinates): RectCoordinates {
		const [x, y] = coordinates;
		const croppedX = x < 0 ? 0 : x > this.innerWidth ? this.innerWidth : x;
		const croppedY =
			y < 0 ? 0 : y > this.innerHeight ? this.innerHeight : y;
		return [croppedX, croppedY];
	}
	constructor(element: RectData) {
		const {
			borderWidth,
			height,
			width,
			viewportPositionX: elementX,
			viewportPositionY: elementY,
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
	}

	getElementCoordinates(
		viewportCoordinates: ViewportCoordinates,
		options?: GetElementCoordinatesOptions,
	): RectCoordinates {
		const noOutOfBounds = getValueOrTrue(options?.noOutOfBounds);
		const [viewportX, viewportY] = viewportCoordinates;
		const elementOriginX = viewportX - this.bounds.left;
		const elementOriginY = viewportY - this.bounds.top;
		const elementOriginCoords: RectCoordinates = [
			elementOriginX,
			elementOriginY,
		];
		return noOutOfBounds
			? this.cropByBounds(elementOriginCoords)
			: elementOriginCoords;
	}
}

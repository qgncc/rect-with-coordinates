import { getHTMLElementBorders } from "utils";
import { RectWithCoordinates } from "RectWithCoordinates";

export class HTMLElementWithCoordinates<
	ElementType extends HTMLElement,
> extends RectWithCoordinates {
	htmlElement: Element;
	constructor(htmlElement: ElementType) {
		const borders = getHTMLElementBorders(htmlElement);
		const elementMeasurements = htmlElement.getBoundingClientRect();
		super({
			borderWidth: borders,
			height: elementMeasurements.height,
			width: elementMeasurements.width,
			viewportPositionX: elementMeasurements.left,
			viewportPositionY: elementMeasurements.top,
		});
		this.htmlElement = htmlElement;
	}
}

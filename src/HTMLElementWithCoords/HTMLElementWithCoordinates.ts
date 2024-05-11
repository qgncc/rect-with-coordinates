import { getHTMLElementBorders } from "utils";
import { RectData, RectWithCoordinates } from "RectWithCoordinates";

export class HTMLElementWithCoordinates<
  ElementType extends HTMLElement,
> extends RectWithCoordinates {
  htmlElement: Element;
  constructor(htmlElement: ElementType, options?: Pick<RectData, "origin">) {
    const borders = getHTMLElementBorders(htmlElement);
    const elementMeasurements = htmlElement.getBoundingClientRect();
    super({
      borderWidth: borders,
      height: elementMeasurements.height,
      width: elementMeasurements.width,
      viewportPositionX: elementMeasurements.left,
      viewportPositionY: elementMeasurements.top,
      ...options,
    });
    this.htmlElement = htmlElement;
  }
}

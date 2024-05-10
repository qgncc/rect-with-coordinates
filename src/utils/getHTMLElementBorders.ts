import { BorderInfo } from "RectWithCoordinates/types";

/**
 * removes "px" from string and returns number
 * @param {[string]} pixelsString
 */
const getPixels = (pixelsString: string) => parseInt(pixelsString);
/**
 * Returns object that contains width of every border in pixels
 * @param {[HTMLElement]} htmlElement any html element
 */
export const getHTMLElementBorders = (htmlElement: HTMLElement): BorderInfo => {
	const styles = getComputedStyle(htmlElement);
	return {
		top: getPixels(styles.borderTopWidth),
		right: getPixels(styles.borderRightWidth),
		bottom: getPixels(styles.borderBottomWidth),
		left: getPixels(styles.borderLeftWidth),
	};
};

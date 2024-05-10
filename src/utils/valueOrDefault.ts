export const getValueOrDefault = <V, D>(
	value: V | undefined,
	defaultValue: D,
): V | D => (value !== undefined ? value : defaultValue);

export const getValueOrZero = <V>(value: V | undefined) =>
	getValueOrDefault(value, 0);

export const getValueOrNull = <V>(value: V | undefined) =>
	getValueOrDefault(value, null);

export const getValueOrEmptyString = <V>(value: V | undefined) =>
	getValueOrDefault(value, "");

export const getValueOrEmptyArray = <V>(value: V | undefined) =>
	getValueOrDefault(value, []);

export const getValueOrEmptyObject = <V>(value: V | undefined) =>
	getValueOrDefault(value, {});

export const getValueOrTrue = <V>(value: V | undefined) =>
	getValueOrDefault(value, true);

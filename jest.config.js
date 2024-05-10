export default {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	transform: {
		"^.+\\.ts?$": "ts-jest",
		// process `*.tsx` files with `ts-jest`
	},
	modulePaths: ["<rootDir>/src/"],
};

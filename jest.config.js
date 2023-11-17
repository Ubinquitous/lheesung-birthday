/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['./setupTests.ts'],
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
}

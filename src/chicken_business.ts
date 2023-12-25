// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const chicken_business: CustomThemeConfig = {
	name: 'chicken-business',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "var(--color-surface-900)",
		"--theme-font-color-dark": "var(--color-surface-300)",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-primary-50)",
		"--on-secondary": "var(--color-surface-900)",
		"--on-tertiary": "var(--color-surface-900)",
		"--on-success": "var(--color-surface-900)",
		"--on-warning": "var(--color-surface-50)",
		"--on-error": "var(--color-surface-900)",
		"--on-surface": "var(--color-surface-50)",
		// =~= Theme Colors  =~=
		// primary | #2C333E 
		"--color-primary-50": "223 224 226", // #dfe0e2
		"--color-primary-100": "213 214 216", // #d5d6d8
		"--color-primary-200": "202 204 207", // #cacccf
		"--color-primary-300": "171 173 178", // #abadb2
		"--color-primary-400": "107 112 120", // #6b7078
		"--color-primary-500": "44 51 62", // #2C333E
		"--color-primary-600": "40 46 56", // #282e38
		"--color-primary-700": "33 38 47", // #21262f
		"--color-primary-800": "26 31 37", // #1a1f25
		"--color-primary-900": "22 25 30", // #16191e
		// secondary | #5D9CA4 
		"--color-secondary-50": "231 240 241", // #e7f0f1
		"--color-secondary-100": "223 235 237", // #dfebed
		"--color-secondary-200": "215 230 232", // #d7e6e8
		"--color-secondary-300": "190 215 219", // #bed7db
		"--color-secondary-400": "142 186 191", // #8ebabf
		"--color-secondary-500": "93 156 164", // #5D9CA4
		"--color-secondary-600": "84 140 148", // #548c94
		"--color-secondary-700": "70 117 123", // #46757b
		"--color-secondary-800": "56 94 98", // #385e62
		"--color-secondary-900": "46 76 80", // #2e4c50
		// tertiary | #C5A253 
		"--color-tertiary-50": "246 241 229", // #f6f1e5
		"--color-tertiary-100": "243 236 221", // #f3ecdd
		"--color-tertiary-200": "241 232 212", // #f1e8d4
		"--color-tertiary-300": "232 218 186", // #e8daba
		"--color-tertiary-400": "214 190 135", // #d6be87
		"--color-tertiary-500": "197 162 83", // #C5A253
		"--color-tertiary-600": "177 146 75", // #b1924b
		"--color-tertiary-700": "148 122 62", // #947a3e
		"--color-tertiary-800": "118 97 50", // #766132
		"--color-tertiary-900": "97 79 41", // #614f29
		// success | #759465 
		"--color-success-50": "234 239 232", // #eaefe8
		"--color-success-100": "227 234 224", // #e3eae0
		"--color-success-200": "221 228 217", // #dde4d9
		"--color-success-300": "200 212 193", // #c8d4c1
		"--color-success-400": "158 180 147", // #9eb493
		"--color-success-500": "117 148 101", // #759465
		"--color-success-600": "105 133 91", // #69855b
		"--color-success-700": "88 111 76", // #586f4c
		"--color-success-800": "70 89 61", // #46593d
		"--color-success-900": "57 73 49", // #394931
		// warning | #964F4C 
		"--color-warning-50": "239 229 228", // #efe5e4
		"--color-warning-100": "234 220 219", // #eadcdb
		"--color-warning-200": "229 211 210", // #e5d3d2
		"--color-warning-300": "213 185 183", // #d5b9b7
		"--color-warning-400": "182 132 130", // #b68482
		"--color-warning-500": "150 79 76", // #964F4C
		"--color-warning-600": "135 71 68", // #874744
		"--color-warning-700": "113 59 57", // #713b39
		"--color-warning-800": "90 47 46", // #5a2f2e
		"--color-warning-900": "74 39 37", // #4a2725
		// error | #D8C8BD 
		"--color-error-50": "249 247 245", // #f9f7f5
		"--color-error-100": "247 244 242", // #f7f4f2
		"--color-error-200": "245 241 239", // #f5f1ef
		"--color-error-300": "239 233 229", // #efe9e5
		"--color-error-400": "228 217 209", // #e4d9d1
		"--color-error-500": "216 200 189", // #D8C8BD
		"--color-error-600": "194 180 170", // #c2b4aa
		"--color-error-700": "162 150 142", // #a2968e
		"--color-error-800": "130 120 113", // #827871
		"--color-error-900": "106 98 93", // #6a625d
		// surface | #2C333E 
		"--color-surface-50": "223 224 226", // #dfe0e2
		"--color-surface-100": "213 214 216", // #d5d6d8
		"--color-surface-200": "202 204 207", // #cacccf
		"--color-surface-300": "171 173 178", // #abadb2
		"--color-surface-400": "107 112 120", // #6b7078
		"--color-surface-500": "44 51 62", // #2C333E
		"--color-surface-600": "40 46 56", // #282e38
		"--color-surface-700": "33 38 47", // #21262f
		"--color-surface-800": "26 31 37", // #1a1f25
		"--color-surface-900": "22 25 30", // #16191e
		
	}
}
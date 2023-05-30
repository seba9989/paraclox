import { css } from '@emotion/react'

type borderType = 'top' | 'left' | 'right' | 'bottom' | 'full'

export default function BorderStyle(borderType: borderType) {
	return css`
		border-color: transparent;
		${borderType === 'full'
			? css`
					border: 0.5rem solid;
			  `
			: css`
					border-${borderType}: 0.5rem solid;
			`}
		border-image-source: url('https://raw.githubusercontent.com/seba9989/paraclox/main/src/assets/UI/borders/default/dark.png');
		border-image-slice: 10;
		background-clip: padding-box;
	`
}

export const cssGrid = (columnStart, columnEnd, rowStart, rowEnd) => `
	grid-column-start: ${columnStart};
	grid-column-end: ${columnEnd};
	grid-row-start: ${rowStart};
	grid-row-end: ${rowEnd};
`

export const Animation = (move) => `
	move_${move} 30s linear infinite;
`

export const cssGrid = (columnStart, columnEnd, rowStart, rowEnd) => `
	grid-column-start: ${columnStart};
	grid-column-end: ${columnEnd};
	grid-row-start: ${rowStart};
	grid-row-end: ${rowEnd};
`

export const Animation = (move) => `
	move_${move} 30s linear infinite;
`

export const PlateStyle = (height, top, left, position, heightMedia, topMedia, leftMedia, topMedia1) => `
  height: ${height};
  position: absolute;
  top: ${top};
  left: ${left};

  @media screen and (max-width: 600px) {
    position: ${position};
    height: ${heightMedia};
		top: ${topMedia};
		left: ${leftMedia};
  }

	@media screen and (max-width: 320px) {
		top: ${topMedia1};
  }
`

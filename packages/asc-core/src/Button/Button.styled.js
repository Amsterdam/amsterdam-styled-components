import styled from 'styled-components'

// TODO: Put generics in a theme
// TODO: Add correct font

function getArrowStyling (arrowPos, color) {
  switch (arrowPos) {
    case null:
      return color
    case 'right':
      return `linear-gradient(-135deg, transparent 14px, ${color} 0) top right,
              linear-gradient(-45deg, transparent 14px, ${color} 0) bottom
              right`
    case 'left':
      return `linear-gradient(135deg, transparent 14px, ${color} 0) top left,
              linear-gradient(45deg, transparent 14px, ${color} 0) bottom
              left`
  }
}

function getPaddingBasedOnArrow (arrowPos) {
  switch (arrowPos) {
    case null:
      return '0 10px 0 10px'
    case 'right':
      return ' 0 30px 0 10px'
    case 'left':
      return ' 0 10px 0 30px'
  }
}

function getBackgroundColor (color, hover) {
  switch (color) {
    case null:
      return hover ? '#CFCFCF' : '#E8E8E8'
    case 'primary':
      return hover ? '#B90000' : '#EC0000'
    case 'secondary':
      return hover ? '#002f66' : '#004699'
  }
}

function getFontColor (color) {
  switch (color) {
    case null:
      return '#000'
    default:
      return '#FFF'
  }
}

export const ButtonStyled = styled.button`
  border: none;
  color: ${({ color }) => getFontColor(color)};

  height: 38px;
  cursor: pointer;
  font-size: 1em;
  line-height: 1em;
  font-family: "AvenirNextLTW01-Regular", verdana, sans-serif;

  background: ${({ arrowPos, color }) => (
    getArrowStyling(arrowPos, getBackgroundColor(color, false))
  )};
  background-size: 100% 50%;
  background-repeat: no-repeat;
  padding: ${({ arrowPos }) => getPaddingBasedOnArrow(arrowPos)};

  &:hover {
    background: ${({ arrowPos, color }) => (
    getArrowStyling(arrowPos, getBackgroundColor(color, true))
  )};
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
`

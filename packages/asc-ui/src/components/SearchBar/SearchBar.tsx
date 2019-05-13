import React from 'react'
import { ReactComponent as Search } from '@datapunt/asc-assets/lib/Icons/Search.svg'
import styled from '../../styled-components'
import IconButton from '../IconButton'
import { InputStyle } from '../../styles/components'
import IconButtonStyle from '../../styles/components/IconButtonStyle'
import { svgFill } from '../../styles/utils'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      styledComponent: any
    }
  }
}

type InputProps = {
  placeholder?: string
  onChange: any
  inputRef: any
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  inputRef,
  ...otherProps
}) => {
  return (
    <InputStyle
      placeholder={placeholder}
      onChange={onChange}
      ref={inputRef}
      {...otherProps}
    />
  )
}

const SearchBarStyle = styled.div`
  display: flex;

  ${InputStyle} {
    width: 500px;
  }

  ${IconButtonStyle} {
    margin-left: 5px;
    padding: 10px;
    width: 40px;
    height: 40px;
    & svg {
      ${svgFill('tint', 'level1')};
    }
  }
`

type Props = {
  minWidth?: string
  maxWidth?: string
  padding?: string
  styledComponent?: any
  onClick: any
  onChange: any
}

export const SearchBarContext = React.createContext({})

const SearchBar: React.FC<Props> = ({
  children,
  styledComponent,
  onClick,
  onChange,
  ...otherProps
}) => {
  const ON_TEXT_CHANGED = 'onTextChanged'
  const ON_SUBMIT = 'onSubmit'
  const Style = styled(styledComponent)``
  const inputRef = React.useRef<HTMLInputElement>(null)

  const initialState = {
    text: '',
  }

  const reducer = (state: any, action: any) => {
    console.log('TCL: reducer -> action', action)
    switch (action.type) {
      case ON_TEXT_CHANGED:
        return {
          ...state,
          text: action.payload,
        }
      case ON_SUBMIT:
        return {
          ...state,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = React.useReducer(reducer, { ...initialState })

  const handleTextChanged = (event: Event) => {
    console.log('handleChanged', event.target)
  }
  
  const handleSubmit = () => {
    console.log('handleSubmit')
    
    dispatch({
      type: '',
      payload: null,
    })
    // event.on({ type: ON_SUBMIT, payload: state.text })
  }

  return (
    <SearchBarContext.Provider
      value={{
        ...state,
        handleTextChanged,
        handleSubmit,
      }}
    >
      <Style {...otherProps}>
        <Input
          onChange={handleTextChanged}
          inputRef={inputRef}
        />
        <IconButton
          aria-label="Search"
          color="secondary"
          onClick={handleSubmit}
        >
          <Search />
        </IconButton>
        {children}
      </Style>
    </SearchBarContext.Provider>
  )
}

SearchBar.defaultProps = {
  styledComponent: SearchBarStyle,
}

export default SearchBar
export { SearchBarStyle, InputStyle, IconButtonStyle }

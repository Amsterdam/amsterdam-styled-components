import React from 'react'
import ownerDocument from '../../utils/ownerDocument'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import MenuButton from './MenuButton'
import MenuList from './MenuList'
import { KeyboardKeys } from '../../types'

type Props = {
  position?: MenuStyleProps.Position
  label?: string
  mobile?: boolean
  icon?: React.ReactNode
  menuButton?: React.ReactNode
  id?: any
}

export const MenuContext = React.createContext({})

const Menu: React.FC<Props> = ({
  id,
  label,
  children,
  mobile,
  menuButton,
  position,
  icon,
}) => {
  const menuRef = React.useRef<HTMLDivElement>(null)

  const initialState = {
    open: false,
    mobile,
    expandedChild: false,
    expandedChildIndex: -1,
    selectedChild: -1,
    nrOfChildren: React.Children.count(children),
    nrOfChildrenChild: 0,
  }

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'setSelectedChild':
        return {
          ...state,
          selectedChild: action.payload,
        }
      case 'setExpandedChild':
        return {
          ...state,
          nrOfChildren: state.nrOfChildren + action.payload.nrOfChildren,
          nrOfChildrenChild: action.payload.nrOfChildren,
          expandedChild: true,
          expandedChildIndex: action.payload.expandedChildIndex,
          selectedChild: action.payload.expandedChildIndex,
        }
      case 'resetExpandedChild':
        return {
          ...state,
          nrOfChildren: initialState.nrOfChildren,
          nrOfChildrenChild: initialState.nrOfChildrenChild,
          expandedChild: initialState.expandedChild,
          expandedChildIndex: initialState.expandedChildIndex,
        }
      case 'toggleMenu':
        return {
          ...state,
          open: !state.open,
        }
      case 'resetMenu':
        return {
          ...initialState,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = React.useReducer(reducer, { ...initialState })

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    const { selectedChild, nrOfChildren, open } = state

    if (!open) {
      return
    }
    const firstChild = 0
    const lastChild = nrOfChildren - 1

    if (event.key === KeyboardKeys.ArrowDown) {
      event.preventDefault()
      dispatch({
        type: 'setSelectedChild',
        payload: selectedChild === lastChild ? firstChild : selectedChild + 1,
      })
    }

    if (event.key === KeyboardKeys.ArrowUp) {
      event.preventDefault()
      dispatch({
        type: 'setSelectedChild',
        payload:
          selectedChild === firstChild || selectedChild === nrOfChildren
            ? lastChild
            : selectedChild - 1,
      })
    }
  }

  const handleOnClick = () => {
    dispatch({ type: 'toggleMenu' })
  }

  const handleOnClose = () => {
    setTimeout(() => {
      const element = menuRef && (menuRef.current as HTMLInputElement)
      const currentFocus = ownerDocument(element).activeElement
      if (!element.contains(currentFocus)) {
        dispatch({ type: 'resetMenu' })
      }
    })
  }

  const setExpandedChild = (
    nrOfChildren: number,
    expandedChildIndex: number,
  ) => {
      dispatch({
        type: 'setExpandedChild',
        payload: {
          nrOfChildren,
          expandedChildIndex: (expandedChildIndex > state.expandedChildIndex && state.expandedChildIndex > -1) ? expandedChildIndex - state.nrOfChildrenChild : expandedChildIndex
        },
      })
  }

  const setSelectedChild = (index: number) => {
    dispatch({ type: 'setSelectedChild', payload: index })
  }

  const resetExpandedChild = () => {
    dispatch({ type: 'resetExpandedChild' })
  }

  const { open } = state

  return (
    <MenuContext.Provider
      value={{
        ...state,
        setSelectedChild,
        handleOnKeyDown,
        setExpandedChild,
        resetExpandedChild,
      }}
    >
      <MenuStyle.MenuWrapperStyle
        id={id}
        ref={menuRef}
        onKeyDown={handleOnKeyDown}
        onBlur={handleOnClose}
        onMouseLeave={() => setTimeout(handleOnClick, 200)}
      >
        <MenuButton
          {...{
            icon,
            open,
            position,
            square: mobile,
            label,
          }}
          onMouseOut={() => !open && setTimeout(handleOnClick, 200)}
          onClick={handleOnClick}
        />
        <MenuList
          {...{
            position,
            id,
            open,
          }}
          onClose={handleOnClose}
        >
          {children}
        </MenuList>
      </MenuStyle.MenuWrapperStyle>
    </MenuContext.Provider>
  )
}

export default Menu

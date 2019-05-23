import React from 'react'
import ownerDocument from '../../utils/ownerDocument'
import { MenuStyleProps } from './index'
import MenuBar from './MenuBar'
import MenuDropDown from './MenuDropDown'
import { KeyboardKeys } from '../../types'

type Props = {
  position?: MenuStyleProps.Position
  mobile?: boolean
  icon?: React.ReactNode
  buttonHeight?: number
  id?: any
}

export const MenuContext = React.createContext({})

const Menu: React.FC<Props> = ({
  id,
  children,
  mobile,
  buttonHeight,
  position,
  icon,
}) => {
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
          expandedChild: false,
          expandedChildIndex: initialState.expandedChildIndex,
          selectedChild: action.payload,
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

  const [state, dispatch] = React.useReducer(reducer, initialState)

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    const {
      selectedChild,
      nrOfChildren,
      nrOfChildrenChild,
      open,
      expandedChild,
      expandedChildIndex,
    } = state

    if (!open && !expandedChild) {
      return
    }
    const firstChild = 0
    const lastChild = expandedChild
      ? expandedChild + nrOfChildrenChild
      : nrOfChildren - 1

    if (event.key === KeyboardKeys.ArrowDown) {
      event.preventDefault()
      if (selectedChild === lastChild) {
        resetExpandedChild()
      } else {
        dispatch({
          type: 'setSelectedChild',
          payload: selectedChild === lastChild ? firstChild : selectedChild + 1,
        })
      }
    }

    if (event.key === KeyboardKeys.ArrowUp) {
      event.preventDefault()

      dispatch({
        type: 'setSelectedChild',
        payload:
          selectedChild === firstChild ? expandedChildIndex : selectedChild - 1,
      })
    }
  }

  const handleOnClick = () => {
    dispatch({ type: 'toggleMenu' })
    setSelectedChild(initialState.selectedChild)
  }

  const handleOnClose = (ref: any) => {
    setTimeout(() => {
      const element = ref && (ref.current as HTMLInputElement)
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
        expandedChildIndex:
          expandedChildIndex > state.expandedChildIndex &&
          state.expandedChildIndex > -1
            ? expandedChildIndex - state.nrOfChildrenChild
            : expandedChildIndex,
      },
    })
  }

  const setSelectedChild = (index: number) => {
    dispatch({ type: 'setSelectedChild', payload: index })
  }

  const resetExpandedChild = () => {
    dispatch({ type: 'resetExpandedChild', payload: state.expandedChildIndex })
  }

  const clonedChildren = React.Children.map(children, (child, index) => {
    const { expandedChild, expandedChildIndex, nrOfChildrenChild } = state
    return React.cloneElement(child as React.ReactElement<any>, {
      index:
        expandedChild && index > expandedChildIndex
          ? nrOfChildrenChild + expandedChildIndex + index - expandedChildIndex
          : index,
    })
  })

  return (
    <MenuContext.Provider
      value={{
        ...state,
        setSelectedChild,
        onKeyDown: handleOnKeyDown,
        onClick: handleOnClick,
        onClose: handleOnClose,
        setExpandedChild,
        resetExpandedChild,
      }}
    >
      {mobile ? (
        <MenuDropDown icon={icon}>{clonedChildren}</MenuDropDown>
      ) : (
        <MenuBar>{clonedChildren}</MenuBar>
      )}
    </MenuContext.Provider>
  )
}

Menu.defaultProps = {
  buttonHeight: 50,
}

export default Menu

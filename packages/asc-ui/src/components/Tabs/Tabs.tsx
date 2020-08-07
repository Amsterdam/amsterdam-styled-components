import React, {
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import useFocusWithArrows from '../../utils/hooks/useFocusWithArrows'
import { Tab, TabProps } from './Tab'
import TabButton from './TabButton'
import TabList from './TabList'

// For more information about the accessibility features of this code check out the following references:
// - https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html

const TabPanel = styled.div.attrs({
  role: 'tabpanel',
  tabIndex: 0,
})``

export interface TabsProps {
  /**
   * A descriptive label for the tabs, required for accessibility.
   */
  label: string
  /**
   * The children for the tabs, only `Tab` components are allowed.
   */
  children: ReactElement<PropsWithChildren<TabProps>, typeof Tab>[]
}

function formatTabId(id: string) {
  return `tab-${id}`
}

function formatPanelId(id: string) {
  return `panel-${id}`
}

export const Tabs: React.FC<TabsProps> = ({ label, children }) => {
  const allTabs = children.map(({ props }) => props.id)
  const firstTab = allTabs[0] ?? ''
  const [selectedTab, setSelectedTab] = useState(firstTab)
  const tabListRef = useRef<HTMLDivElement>(null)
  const { keyDown } = useFocusWithArrows(tabListRef, true, true, true)

  return (
    <>
      <TabList aria-label={label} onKeyDown={keyDown} ref={tabListRef}>
        {children.map(({ props }) => {
          const { id, label: tabLabel, ...otherProps } = props
          const isSelected = id === selectedTab
          const tabId = formatTabId(id)
          const panelId = formatPanelId(id)

          const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
            setSelectedTab(id)
            otherProps.onClick?.(event)
          }

          return (
            <TabButton
              {...otherProps}
              key={id}
              id={tabId}
              aria-controls={panelId}
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={onClick}
              isSelected={isSelected}
            >
              {tabLabel}
            </TabButton>
          )
        })}
      </TabList>
      {children.map(({ props }) => {
        const isSelected = props.id === selectedTab
        const tabId = formatTabId(props.id)
        const panelId = formatPanelId(props.id)

        return (
          <TabPanel
            key={props.id}
            id={panelId}
            aria-labelledby={tabId}
            hidden={!isSelected}
          >
            {props.children}
          </TabPanel>
        )
      })}
    </>
  )
}

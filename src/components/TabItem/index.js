import './index.css'

const TabItem = props => {
  const {eachTabItem, onUpdateActiveTabId, isActiveTab} = props

  const {displayText, tabId} = eachTabItem

  const activeTabClassName = isActiveTab ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    onUpdateActiveTabId(tabId)
  }

  return (
    <li className="each-tab-item">
      <button
        type="button"
        className={`tab-item-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        <p className>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem

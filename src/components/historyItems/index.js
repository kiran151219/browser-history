import './index.css'

const historyItems = props => {
  const {historyDetails, deleteHistory} = props
  const {logoUrl, timeAccessed, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-list-container">
      <div className="history-content">
        <p className="time-accessed">{timeAccessed}</p>
        <img
          src={logoUrl}
          alt="domain logo"
          className="logo-img"
          key="logoUrl"
        />
        <p className="domain-url">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button className="delete-button" onClick={onDelete}>
        <img
          className="delete-logo"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default historyItems

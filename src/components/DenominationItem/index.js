// Write your code here
import './index.css'

const DenominationItem = props => {
  const {item, withdraw} = props
  const {value} = item
  const onBtnClick = () => {
    withdraw(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onBtnClick}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

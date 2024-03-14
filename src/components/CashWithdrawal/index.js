// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdraw = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container d-flex flex-row justify-content-center align-items-center">
        <div className="content-container">
          <div className="profile-container d-flex flex-row">
            <div className="profile">
              <h1 className="profile-alphabet">S</h1>
            </div>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="balance-amount-container">
              <p className="balance-amount">{amount}</p>
              <p className="balance-amount-text">In Rupees</p>
            </div>
          </div>
          <div>
            <div className="withdraw-container">
              <p className="withdraw-heading">Withdraw</p>
              <p className="withdraw-description">CHOOSE SUM (IN RUPEES)</p>
              <div className="btn-container-parent d-flex justify-content-center">
                <ul className="btn-container">
                  {denominationsList.map(each => (
                    <DenominationItem
                      item={each}
                      key={each.id}
                      withdraw={this.withdraw}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

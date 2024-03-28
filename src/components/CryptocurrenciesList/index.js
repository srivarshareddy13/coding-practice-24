// Write your JS code here
import Component from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => {
    ;<div>
      <p>Coin Type</p>
      <div>
        <p>USD</p>
        <P>EURO</P>
      </div>
    </div>
  }
  renderCryptocurrencies = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div>
        {this.renderCryptocurrenciesHeader()}
        <ul>
          {cryptocurrenciesData.map(each => (
            <CryptocurrencyItem key={each.id} currencyDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrencies()}
      </div>
    )
  }
}
export default CryptocurrenciesList

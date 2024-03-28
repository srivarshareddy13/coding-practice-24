// Write your code here
import CryptocurrenciesList from '../CryptocurrenciesList'
import Loader from 'react-loader-spinner'
import {Component} from 'react'

const apiUrl= "https://apis.ccbp.in/crypto-currency-converter"
class CryptocurrencyTracker extends Component {
  state = {
    currencyData: [],
    isLoading: true,
  }
  componentDidMount() {
    this.getCryptocurrencies()
  }
  getCryptocurrencies = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    this.setState({
      currencyData: data.map(each => ({
        id: each.id,
        currencyLogoUrl: each.currency_logo,
        currencyName: each.currency_name,
        usdValue: each.usd_value,
        euroValue: each.euro_value,
      })),
      isLoading: false,
    })
  }
  renderCryptocurrenciesList = () => {
    const {currencyData} = this.state

    return <CryptocurrenciesList cryptocurrenciesData={currencyData} />
  }
  renderLoader = () => {
    <div data-testid="loader">
      <Loader type="TailSpin" color="#ffffff" height={80} width={80} />
    </div>
  }
  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}
export default CryptocurrencyTracker

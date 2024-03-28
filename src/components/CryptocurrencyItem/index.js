// Write your JS code here

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} = currencyDetails

  return (
    <li>
      <div>
        <img src={currencyLogoUrl} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem

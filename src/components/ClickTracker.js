import React from "react";

import { Button } from "./Button";
// const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAADbUlEQVRIS71XMUsjQRR+W513hwlE4UwnulopFlqqSAjaprDwBwiCtWhha6ONNiqigmChiIXYJKRJoaVCak1MCskqaI5VLmc3997bnXVMZs1mOXyBsDv75vvme++bSda4uroSsVgHtLV9AxmGeyGUAQNvnHsDPwIEJXkJbqI3Vo/gPKDvv29vUK1Wwbi7uxPV6m8wzV6IRqKE6wXhSixl2OOjBfhOICqcpObYtg2FQgFiHTEwKlZF/Pj+EwduwewzmbwO7n0lIa4YC7/sVyS9LaJAE2q1P2BYlYroisfBfqEHBejDB5EoKv8P9FKAxDbNPhQWgYcHCxUjcbwrzlo4oYjkvUheV/YQYt8xsbyMiYJoMY8WEWOp47/iTj+oJESOiU7ZI2wJtb/BFyDAtl9YiImknn+Qw3p0FVOpVRM1lD1E08lIRRKArWtHperiLeuBSm1hqbvezem6wbZfcSIazp3obKRgId1Lc6Psl49hcampx6hYF80Aws5pSsyGc/ee3+pV8qC5gYiDkgclJbzAxM3IWyFtmdiPvFXSUMT15HTPe97HvX57oKVS60xEY62Shlasqv5SYrWnX1ZqnZFCm+vs7EykUiluYbFYhJ6enk9Pse3tbdjf3+eco6MjmJmZ4UPm9PQUZmdnm+J4Pe7u7haHh4dwf38PBwcHkMlkGoilqqenJ1hfX+ecy8tLGBsbAyGc/z+04OXlZTAMA05OTrQ4EphdTcSlUonHaJIEkklqKZ+fnz9UhPKpShSTk5NwfX3N22tkZKQBR1XDxBMTEyKXy/E4bQ1SvbKyAolEAubm5jyg+jaoio+Pj71q0UIHBgZgb28PpqamtG3zJR4dHWVlGxsbcH5+DslkknspY21tDZaWlmB1dRUWFxdBJVbLPj097f+zqFM8ODgIW1tbsLu7C/39/b79ogpRdShUf9D45uYmdHZ2ag8YrWJ1wvDwMANSBXRBysvlMoyPjzcQ0zwSoDtStebCP/i8yp2dHQbNZrM8WRfz8/M8vLCwwOaSeapJdfvcI6btdHNzw4ZIp9PcFzmZVFHoekk5FxcXXBFpTN22rCdnYvUAyefzMDQ0xCDUO2koCUoEpJIOEQppLrqWLqdr3UGkktdqNfkKUw31K6Ot/yeD3itMDF9hnJe2GL60tbWKEyr/zX1p+weByKo0qjnrFQAAAABJRU5ErkJggg=='


export class ClickTracker extends React.Component {

  state = {
    lastPressed: null,
    prova: <h1>prova</h1>
  }


  tracker = (event, isImage = false) => {

    isImage
      ? this.setState({
        lastPressed: {
          type: 'img',
          value: event
        }
      })
      : this.setState({
        lastPressed: {
          type: 'text',
          value: event.currentTarget.innerText
        }
      })
  }

  /* tracker = (event) => {
    this.setState({
      lastPressed: event.currentTarget.name
    })
  } */

  render() {
    return (
      <div>
        <Button clickHandler={this.tracker} content='Primo' />
        <Button clickHandler={this.tracker} content='Secondo' />
        <Button clickHandler={this.tracker} content='Terzo' />
        <br />
        <Button name='1' clickHandler={() => this.tracker(process.env.PUBLIC_URL + "number1.png", true)} content={<img src={process.env.PUBLIC_URL + "number1.png"} height='30px' alt='Numero 1' />} />
        <Button name='2' clickHandler={() => this.tracker(process.env.PUBLIC_URL + "number2.png", true)} content={<img src={process.env.PUBLIC_URL + "number2.png"} height='30px' alt='Numero 2' />} />
        <Button name='3' clickHandler={() => this.tracker(process.env.PUBLIC_URL + "number3.png", true)} content={<img src={process.env.PUBLIC_URL + "number3.png"} height='30px' alt='Numero 3' />} />

        {/* <button name='1' onClick = { this.tracker } > <img src={img} height= '30px' alt='Numero 1' /> </button>
        <button name='2' onClick = { this.tracker } > <img src={img} height= '30px' alt='Numero 2' /> </button>
        <button name='3' onClick = { this.tracker } > <img src={img} height= '30px' alt='Numero 3' /> </button> */}

        {<h1>Last clicked: {this.state.lastPressed && (this.state.lastPressed.type === 'text' ? <button>{this.state.lastPressed.value}</button> : <button><img src={this.state.lastPressed.value} height={30} alt="last pressed" /></button>)}</h1>}
      </div>
    )
  }
}

// Funziona, ma non ha risposto ancora alla domanda, perchè anche qui si ricrea il tag img.
//C'è il modo di renderizzare direttamente event.currentTarget così com'è, senza sapere/controllare cosa contenga? 
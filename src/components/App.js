import React, { Component } from 'react';
import '../App.css';
import Header from "./header";
import SubTitle from "./subTitle";
import NumberInput from "./numberInput";
import Sorter from "./sorter";
import GeneratedNumbers from "./generatedNumbers";
import ExportButton from "./exportButton";
import Statistics from "./statistics";
import Error from "./error";
import saveAs from 'file-saver';

class App extends Component {
  state = {
    error: false,
    message: "",
    limit: 1,
    phoneNumbers: [],
    min: null,
    max: null,
    total: 0,
    sorter: 'asc',
    countryCode: '',
    startingDigit: '1' // Default starting digit
  };

  generateRandomPhoneNumber = event => {
    event.preventDefault();
    const { limit, countryCode, startingDigit } = this.state;
    if (limit <= 0 || limit > 10000) return this.setState({
      error: true,
      message: "The number entered exceeds/below the accepted limit"
    });
    let phoneNumbers = [];
    let phoneNumber = 0;
    while (phoneNumber < limit) {
      let generatedNumber = startingDigit + Math.floor(Math.random() * 900000000 + 100000000).toString().slice(1); // Ensure 10-digit number starting with the specified digit
      phoneNumbers.push(countryCode + generatedNumber);
      phoneNumber++;
    }
    return this.setState({
      phoneNumbers
    }, async () => {
      await this.setStatistics();
      this.sortPhoneNumbers()
    });
  };

  onGetUserInput = async event => {
    event.preventDefault();
    const limit = event.target.value;
    try {
      if (Math.floor(Number(limit))) {
        this.setState({
          limit
        })
      }
    } catch (e) {
      console.log('an error has occurred', e.message)
    }
  };

  onCountryCodeChange = async event => {
    event.preventDefault();
    const countryCode = event.target.value;
    this.setState({ countryCode });
  };

  onStartingDigitChange = async event => {
    event.preventDefault();
    const startingDigit = event.target.value;
    this.setState({ startingDigit });
  };

  setStatistics = () => {
    const { phoneNumbers } = this.state;
    if (phoneNumbers.length > 0) {
      const min = Math.min(...phoneNumbers);
      const max = Math.max(...phoneNumbers);
      const total = phoneNumbers.length;
      this.setState({
        min,
        max,
        total
      })
    }
  };

  exportPhoneNumbers = () => {
    const { phoneNumbers } = this.state;
    if (phoneNumbers.length > 0) {
      saveAs(new Blob(phoneNumbers, { type: "text/csv;charset=utf-8" }), 'phoneNumbers.csv')
    }
  };

  sortPhoneNumbers = () => {
    const { sorter, phoneNumbers } = this.state;
    if (!phoneNumbers.length > 0) return;
    if(sorter === 'asc'){
      this.setState({
        phoneNumbers : phoneNumbers.sort((a,b) => 0 - (a > b ? -1 : 1))
      });
    } else {
      this.setState({
        phoneNumbers : phoneNumbers.sort((a,b) => 0 - (a > b ? 1 : -1))
      })
    }
  };

  onSortChange = event => {
    event.preventDefault();
    const sorter = event.target.value;
    this.setState({
      sorter
    }, () => this.sortPhoneNumbers());
  };

  render() {
    const { error, message, phoneNumbers, min, max, total } = this.state;
    return (
        <div>
          <Header/>
          <div>
            <SubTitle/>
            <div className="App-body">
              <Error
                  error={error}
                  message={message}
              />
              <NumberInput
                  onClick={this.generateRandomPhoneNumber}
                  onChange={this.onGetUserInput}
                  onCountryCodeChange={this.onCountryCodeChange}
                  onStartingDigitChange={this.onStartingDigitChange}
              />
              <Sorter
                  phoneNumbers={phoneNumbers}
                  onChange={this.onSortChange}
              />
              <GeneratedNumbers
                  phoneNumbers={phoneNumbers}
              />
              <ExportButton
                  phoneNumbers={phoneNumbers}
                  onClick={this.exportPhoneNumbers}
              />
              <Statistics
                  phoneNumbers={phoneNumbers}
                  min={min}
                  max={max}
                  total={total}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default App;

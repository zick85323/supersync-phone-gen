import React, {Component} from 'react';
import './App.css';
import Header from "./components/header";
import SubTitle from "./components/subTitle";
import NumberInput from "./components/numberInput";
import Sorter from "./components/sorter";
import GeneratedNumbers from "./components/generatedNumbers";
import ExportButton from "./components/exportButton";
import Statistics from "./components/statistics";
import Error from "./components/error";

class App extends Component {

  state = {
    error: false,
    message: "",
    limit: 1,
    phoneNumbers: [],
    min: null,
    max: null,
    total: 0
  };

  generateRandomPhoneNumber = event => {
    event.preventDefault();
    const { limit } = this.state;
    if (limit > 10000) return this.setState({
      error: true,
      message: "The number entered exceeds the accepted limit"
    });
    let phoneNumbers = [];
    let phoneNumber = 0;
    while (phoneNumber < limit) {
      phoneNumbers.push('0' + Math.floor(Math.random() * 900000000 + 100000000));
      phoneNumber++;
    }
    return this.setState({
      phoneNumbers
    }, () => this.setStatistics());
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
      this.setState({
        error: true,
        message: "Error occurred while parsing the input"
      })
    }
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
              />
              <Sorter/>
              <GeneratedNumbers
                  phoneNumbers={phoneNumbers}
              />
              <ExportButton/>
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

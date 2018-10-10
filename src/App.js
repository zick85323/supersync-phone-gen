import React, {Component} from 'react';
import './App.css';
import Header from "./components/header";
import SubTitle from "./components/subTitle";
import NumberInput from "./components/numberInput";
import Sorter from "./components/sorter";
import GeneratedNumbers from "./components/generatedNumbers";
import ExportButton from "./components/exportButton";
import Statistics from "./components/statistics";

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <div >
            <SubTitle/>
            <div className="App-body">
              <NumberInput/>
              <Sorter/>
              <GeneratedNumbers/>
              <ExportButton/>
              <Statistics/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

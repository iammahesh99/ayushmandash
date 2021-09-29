import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props){

    super();
    {
      this.state={
        data:[],
        value: "",
        wheel:false

      }
    }
  }

  onValueChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value })

  }
  handleClick=(e)=>{
    e.preventDefault();

    const {  value} = this.state;
    this.setState({wheel:true})
    this.callAgent(value);


  }
  callAgent(value, obj) {

    const { data} = this.state

    const url = "https://ayushmanchat.herokuapp.com?name=" + value;

    fetch(url)
      .then(response => (response.json()))
      .then(result => {
     // console.log(result);
      this.setState({ data: result, wheel:false })

      }).catch(error => {

      console.log(error);
      });




  }
  render() {
    return (
      <div className="App">
        <h1> Ayushman card Detail !</h1>
        
      <label>कार्ड संख्या/ग्राम: </label>
      <input type="text" onChange={this.onValueChange} placeholder="Type"  name="cardNo"  
      style={{
        height:'30px',
        width:'50%'}}/>
        <button onClick={this.handleClick} 
        style={{ height: '35px',
        marginLeft:'5px',
        width:'15%',
        backgroundColor: '#04AA6D'
        }}>Check</button>
      {this.state.wheel ? <div className="loader"></div>:null}
      
      <div id="customers">

        <table style={{ width: 390 }}>
          <thead>
            <tr>
              <th>नाम</th>
              <th>ग्राम</th>
              <th>कार्ड संख्या</th>
              
            </tr>
          </thead>
          <tbody >
            {this.state.data.map((res, index) => (<tr key={res.__EMPTY}>
                <td key={res.__EMPTY_1}>{res.__EMPTY_1}</td>
                <td key={res.__EMPTY_6}>{res.__EMPTY_6}</td>
                <td key={res.__EMPTY_2}>{res.__EMPTY_2}</td>

      </tr>))}
          </tbody>
        </table>
      
        </div>

      </div>
    );
  }
}



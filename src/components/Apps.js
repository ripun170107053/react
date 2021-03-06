import { lineBreak } from 'acorn';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Apps extends Component {
  // initially data is empty in state
  state = { data: [] };

  componentDidMount() {
    // when component mounted, start a GET request
    // to specified URL
    const myInit1  = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Vary': 'Origin' ,
    'mode':'no-cors'},

}
    fetch('https://glacial-brook-60163.herokuapp.com/companies/',
    myInit1).then(response => response.json())
      // and update the state data to said json
      .then(data => this.setState({ data }));
  }


  render() 
  {
    var cn=[];
    let xx=new Map();
    
    this.state.data.map(function(company)
          {
            xx.set(company.companyName,":");
            //cn.push(company.companyName);
          })
      this.state.data.map(function(company)
          {
            xx.set(company.companyName,xx.get(company.companyName)+" "+company.stockExchange);
            //cn.push(company.companyName);
          })
        
        for(let [key,value] of xx)
        {
          cn.push(key+value);

        }
        
    console.log(cn);
    return (
        <div align="center">
        
          {/* {
            cn.map(x=>(<p>{x}</p>))
          } */}
          <div class="center">
                    <h3>Companies</h3>
                    <table class="table" >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Stock Exchanges</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        {cn.map(item => {
                            return <tr>{item}</tr>;
                        })}
                        
                      
                      </tbody>
                    </table>
                    
            </div>
        
        
        
        </div>
    );
  }
}

export default Apps;
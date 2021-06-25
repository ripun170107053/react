import React, { Component } from 'react';
import Select from 'react-select';
import exportFromJSON from 'export-from-json';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
 class createCompany extends Component
 {
    constructor(props) {
      super(props);
  
      this.state = { Company: [], companyName: "", turnover: "", ceo: "" ,stockExchange:"",boardDirector:"",sector:"",writeup:"",companyCode:""};
      this.submit = this.submit.bind(this);
      this.changehandler1 = this.changehandler1.bind(this);
      this.fetchhttp = this.fetchhttp.bind(this);
      this.posthttpjson = this.posthttpjson.bind(this);
      //this.popSE=this.popSE.bind(this);
      //this.posthttp =this.posthttp.bind(this);
      //this.changehandler2 = this.changehandler2.bind(this);
    }
   
    submit(e) {
      e.preventDefault();
      var usr = this.state.Company;
      usr.push({
        companyName: this.state.companyName,
        turnover: this.state.turnover,
        ceo: this.state.ceo,
        stockExchange: this.state.stockExchange,
        boardDirector: this.state.boardDirector,
        sector:this.state.sector,
        writeup:this.state.writeup,
        companyCode:this.state.companyCode,
        
        
      });
      this.setState({ Company: usr });
      console.log(JSON.stringify(this.state.Company)+"TEST");
       // this.fetchhttp(e);
       // this.posthttp(e);
       this.posthttpjson(e);
    }
  
    changehandler1(e) {
      if (e.target.name === "companyName"){
              this.setState({ companyName: e.target.value });
          } 
  
      else if(e.target.name === "ceo"){
          this.setState({ ceo: e.target.value });
      }
      else if  (e.target.name === "turnover"){
          
          this.setState({ turnover: e.target.value });
  }     
  else if  (e.target.name === "stockExchange"){
    
    this.setState({ stockExchange: e.target.value });
      
    }
    else if  (e.target.name === "boardDirector"){
    
      this.setState({ boardDirector: e.target.value });
        
      }
      else if  (e.target.name === "sector"){
    
        this.setState({ sector: e.target.value });
          
        }
        else if  (e.target.name === "writeup"){
    
            this.setState({ writeup: e.target.value });
              
            }
            else if  (e.target.name === "companyCode"){
    
                this.setState({ companyCode: e.target.value });
                  
                }
      }

      posthttpjson(e) {
      
  
        console.log("posthttpjson");
    
        const myInit1  = 
        {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin' : '*',
          'Vary': 'Origin'.replace,
          'Accept': 'application/json',
          },
          //mode:'no-cors',
          body: JSON.stringify({
        "companyName" :this.state.companyName,
        "ceo" :this.state.ceo,
        "turnover": this.state.turnover,
         "stockExchange":this.state.stockExchange,
         "boardDirector":this.state.boardDirector,
         "sector": this.state.sector,
         "writeup": this.state.sector,
         "companyCode": this.state.sector   
          }),
        };
        console.log(myInit1+"body")
        alert("Company created successfully");
        let finalurl = 'https://glacial-brook-60163.herokuapp.com/companies/add';
        fetch(finalurl, myInit1)
          .then((response) => 
          {
            this.setState({ companyName: '' });
            this.setState({ turnover: '' });
            this.setState({ ceo: '' });
            this.setState({ boardDirector: '' });
            this.setState({ stockExchange:''});
            this.setState({ sector: '' });
            this.setState({ writeup: '' });
            this.setState({ companyCode: '' });
            
            return response.json();
            
          })
          .then(function (myJson) {
            console.log(myJson);
          })
          .catch((error) => console.error(error));
       
      }
  
  
  
    fetchhttp(e) {
    
      console.log("fetchhttp");
  
      const myInit1 = { method: "GET"  };
           
      let finalurl = "https://glacial-brook-60163.herokuapp.com/stockExchange/";
      
      fetch(finalurl, myInit1)
        .then((response) => {
            
           return response.json();
        })
        .then(function (myJson) 
        {
            
          
        })
        .catch((error) => console.error(error));
    } ;
   
    render() 
    {
        
      //this.fetchhttp();
      return (
        // 
        
        <div>
            <div>
                
                <div className = "card-body">
                    <form>
                        <div className = "form-group">
                            <label> Company Code: </label>
                            <input placeholder="Company Code" name="companyCode" className="form-control" 
                                value={this.state.companyCode} onChange={this.changehandler1}/>
                        </div>
                        <div className = "form-group">
                            <label> Company Name: </label>
                            <input placeholder="Company Name" name="companyName" className="form-control" 
                                value={this.state.companyName} onChange={this.changehandler1}/>
                        </div>
                        <div className = "form-group">
                            <label> CEO Name: </label>
                            <input placeholder="CEO Name" name="ceo" className="form-control" 
                                value={this.state.ceo} onChange={this.changehandler1}/>
                        </div>
                        <div className = "form-group">
                            <label> Turnover: </label>
                            <input placeholder="Turnover" name="turnover" className="form-control" 
                                value={this.state.turnover} onChange={this.changehandler1}/>
                        </div>
                        <div className = "form-group">
                            <label> Board Of Directors: </label>
                            <input placeholder="Board Of Directors" name="boardDirector" className="form-control" 
                                value={this.state.boardDirector} onChange={this.changehandler1}/>
                        </div>
                        <div className = "form-group">
                            <label> Brief: </label>
                            <input placeholder="Writeup" name="writeup" className="form-control" 
                                value={this.state.writeup} onChange={this.changehandler1}/>
                        </div>
                        <div className = "form-group">
                            <label> Sector: </label>
                            <input placeholder="Sector" name="sector" className="form-control" 
                                value={this.state.sector} onChange={this.changehandler1}/>
                        </div>
                        <div className = "form-group">
                            <label> Stock Exchange: </label>
                            <input placeholder="Stock Exchange" name="stockExchange" className="form-control" 
                                value={this.state.stockExchange} onChange={this.changehandler1}/>
                        </div>

                        <button className="btn btn-success" onClick={this.submit}>Save</button>
                        {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                    </form>
                </div>
            </div>
        </div>



        
      );
    }
  }


export default createCompany;
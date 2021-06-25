import React, { Component } from 'react'
import companyService from '../services/companyService';

// import * as UserService from  '../../services/user.service';

class UpdateCompanyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            companyCode: '',
            companyName: '',
            ceo: '',
            turnover: '',
            boardDirector: '',
            writeup:'',
            sector: '',
            stockExchange:'',
        }
        this.changehandler1 = this.changehandler1.bind(this);
    }

    componentDidMount(){
        companyService.getCompanyById(this.state.id).then( (res) =>{
            let company = res.data;
            this.setState({companyCode: company.companyCode,
                companyName: company.companyName,
                ceo: company.ceo,
                turnover: company.turnover,
                boardDirector: company.boardDirector,
                writeup: company.writeup,
                sector:company.sector,
                stockExchange:company.stockExchange,
            });
        });

        // if(localStorage.getItem('username')){
        //     UserService.getUserDetails().then( res => {
        //         this.setState({currentUser: res.data});
        //     })
        // }
    }

    updateCompany = (e) => {
        e.preventDefault();
        let company = {companyCode: this.state.companyCode,
            name: this.state.name,
            ceo: this.state.ceo,
            turnover: this.state.turnover,
            boardDirectors: this.state.boardDirectors,
            writeup: this.state.writeup,
            sector: this.state.sector
        };
        companyService.updateCompany(company, this.state.id).then( res => {
            this.props.history.push('/companies/');
        });
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
  
   

    cancel(){
        this.props.history.push('/companies/');
    }

    render() {
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
    

                                        <button className="btn btn-success" onClick={this.updateCompany}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   
            
            
        
            
        )
    }
}

export default UpdateCompanyComponent

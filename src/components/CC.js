// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import axios from 'axios';
// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
//https://glacial-brook-60163.herokuapp.com/excel/uploadExcel2/
// Preparing the chart data
var chartData=[];
var maxlenz=0;
fetch("https://glacial-brook-60163.herokuapp.com/excel/uploadExcel2/", {
      method: 'get',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(response => 
      {

     //chartConfigs.data=response;
     //var r1=response;
     var res=JSON.stringify(response);
     //var res=JSON.stringify({"Apple":[356.23,361.31,358.12,357.09,353.62],"Amazon":[349.56,351.43,350.12,348.91]});
    
    const obj= JSON.parse(res);
    var ix=0;
    //chartData=[];
      for(var k in obj)
      {
        //console.log(k);
        // if(k=='Amazon')
        // {
        //   //console.log('1st method');
        //   for(var zz=0;zz<obj[k].length;zz++)
        //   {
        //     chartData.push({
        //       label:zz.toString(),
        //       value:obj[k][zz].toString()

        //   });
        //   }
          
        // }
        chartData.push({
          seriesname: k.toString(),
          data:[],
        })
        
      }
      
      //console.log(chartData);
      for(var k in obj)
      {
        
          //console.log(k);
          //console.log(obj[k]);
          for(var zz=0;zz<obj[k].length;zz++)
          {
            
              
              for(var mm=0;mm<chartData.length;mm++)
              {
                if(k==chartData[mm]['seriesname'])
                {
                  //console.log(obj[k][zz] + "->" + chartData[mm]['seriesname']);
                  chartData[mm]['data'].push({"value":obj[k][zz].toString()});
                  maxlenz=Math.max(maxlenz,chartData[mm]['data'].length);

                }
              }

        
           }
           
    }
  });
  

    


console.log(chartData);
var cats=[]
for(let lol=0;lol<5;lol++)
{
  cats.push({"label":lol.toString()});
}
console.log(cats);
const chartConfigs=
{
  type: 'msline',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "theme": "fusion",
        "caption": "Stock Market Prices (from supplied Excel Sheet)",
        
        "xAxisName": "Time"
      },
      "categories": 
      [{
        "category": cats
        // [{
        //     "label": "Mon"
        //   },
        //   {
        //     "label": "Tue"
        //   },
          
       // ]
      }],
      "dataset": chartData,
    }
      
    
  
}

class CC extends React.Component 
{
  constructor()
  {
    super();
    this.state=
    {
      companies:[],
      showChart:false,
    }
  }
  componentDidMount()
    {
        this.state.companies = [];
    }
    addCompanyToCompare = (e,v) => 
    {
      let companiesToDisplay = this.state.companies;
      companiesToDisplay.push(v);
       this.setState({
           //count: ++this.state.count,
           companiesToDisplay:companiesToDisplay
       });
      // console.log(companiesToDisplay);
       this.showChart=true;
    }
  
  
  render() 
  {
    //console.log("xyz");
    
  return (
    <div>
    <ReactFC {...chartConfigs} />
    
    
    {/* <ReactFC {...chartConfigs2} /> */}
    </div>
  
  );
 }
}
export default CC;
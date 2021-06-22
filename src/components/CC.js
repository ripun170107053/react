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
// Preparing the chart data
var chartData
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
     rez= JSON.stringify(response);
    console.log(rez)
    //chartData = response;

  });

// var chartData = [
//   {
//     label: "Venezuela",
//     value: "290"
//   },
//   {
//     label: "Saudi",
//     value: "260"
//   },
//   {
//     label: "Canada",
//     value: "180"
//   },
//   {
//     label: "Iran",
//     value: "140"
//   },
//   {
//     label: "Russia",
//     value: "115"
//   },
//   {
//     label: "UAE",
//     value: "100"
//   },
//   {
//     label: "US",
//     value: "30"
//   },
//   {
//     label: "China",
//     value: "30"
//   }
// ];
// Create a JSON object to store the chart configurations
var chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Stock Prices Data",    //Set the chart caption
      subCaption: "",             //Set the chart subcaption
      xAxisName: "Time",           //Set the x-axis name
      yAxisName: "USD",  //Set the y-axis name
      numberSuffix: "K",
      theme: "fusion"                 //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: chartData
  }
};
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
    
  return (<ReactFC {...chartConfigs} />);
 }
}
export default CC;
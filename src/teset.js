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
     var r1=response;
     var res=JSON.stringify(response);
     let m=new Map();
     console.log(typeof r1);
     console.log(typeof res);
     console.log(res);
    //  for(var x in res)
    //  {
    //    m.set(x,res[x])
      
    //  }
    //  console.log(m);
    // return "";

  });
import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Pie3D = ({repos}) => {
  let newData = Object.entries(repos.reduce(function(obj, b) {
    obj[b.language] = ++obj[b.language] || 1;
    return (obj);
  }, {}));
  let dataWithoutNull = newData.filter(el => el[0] !== 'null')
  let finalData = dataWithoutNull.map(el => {
      console.log(el[0]);
      return {label: el[0], value: el[1]}
    
  })


  const chartConfigs = {
    type: "pie2d", // The chart type
    width: "463", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Languages",    //Set the chart caption
        decimals: 0,
        enableSmartLabels: "0",           //Set the x-axis name
        startingAngle: "0",  //Set the y-axis name
        showPercentInToolTip: false,
        showPercentValues: "1",
        pieRadius: '35%',
        theme: "fusion"                 //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: finalData
    }
  };
    console.log(repos);
  return (
    <ReactFC {...chartConfigs}/>
    );
};

export default Pie3D;

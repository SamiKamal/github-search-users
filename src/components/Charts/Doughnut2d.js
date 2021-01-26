import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Doughnut2d = ({repos}) => {
  let initialData = Object.entries(repos.reduce((acc, curr)=> {
    if (curr.language in acc) {
      acc[curr.language] += curr.stargazers_count
    } else {
      acc[curr.language] = curr.stargazers_count
    }
    return acc
  }, {}))
  
  let dataFiltered = initialData.filter(el => el[0] !== 'null')
  let dataFormatted = dataFiltered.map(el => {
    return {label: el[0], value: el[1]}
  })

  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "463", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars Per Language",    //Set the chart caption
        decimals: 0,
        enableSmartLabels: "0",           //Set the x-axis name
        startingAngle: "0",  //Set the y-axis name
        showPercentInToolTip: false,
        showPercentValues: "0",
        doughuntRadius: '45%',
        theme: "fusion"                 //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: dataFormatted
    }
  };

  return (
    <ReactFC {...chartConfigs}/>
  );
};

export default Doughnut2d;

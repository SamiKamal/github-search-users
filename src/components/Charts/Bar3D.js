import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Bar3D = ({repos}) => {
  repos.sort((a,b) => b.forks - a.forks)
  let newData = repos.map(el => {
    return {label: el.name, value: el.forks}
  })
  console.log(newData);
  const chartConfigs = {
    type: "bar2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Forked",    //Set the chart caption
        decimals: 0,
        yAxisName: 'Forks',
        yAxisNmaeFontSize: '16px',
        plotGradientColor: '#48BBD8',
        usePlotGradientColor: true,
        enableSmartLabels: "1",           //Set the x-axis name
        startingAngle: "0",  //Set the y-axis name
        showPercentInToolTip: false,
        showPercentValues: "1",
        pieRadius: '35%',
        theme: "fusion"                 //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: newData.slice(0, 5)
    }
  };

  return (
    <ReactFC {...chartConfigs}/>
  );
};

export default Bar3D;

import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Column3D = ({repos}) => {
  repos.sort((a,b) => b.stargazers_count - a.stargazers_count)
  let newData = repos.map(el => {
    return {label: el.name, value: el.stargazers_count}
  })
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Popular",    //Set the chart caption
        decimals: 0,
        yAxisName: 'Stars',
        xAxisNmae: 'Repos',
        yAxisNmaeFontSize: '16px',
        xAxisNmaeFontSize: '16px',
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

export default Column3D;

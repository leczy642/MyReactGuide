import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart =(props)=>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //we pull all the individual elements of dataPoint.value using the spread operator
    const totalMaximum = Math.max(...dataPointValues);

    return(
        <div className="chart">
            {props.dataPoints.map(dataPoint => 
            <ChartBar value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label}/>)}
        </div>
    );
}

export default Chart;
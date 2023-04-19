import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

function Chart(props) {
  return (
    <div className="chart">
      <Line
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Largest Cities in Massachusetts",
            fontSize: 25,
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
            labels: {
              fontColor: "#000",
            },
          },
        }}
      />
    </div>
  );
}

export default Chart;

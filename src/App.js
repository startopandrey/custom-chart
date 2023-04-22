import logo from "./logo.svg";
import "./App.css";

import { Line } from "react-chartjs-2";
import "chart.js"

import "chartjs-plugin-lineheight-annotation";

function App() {
  const data = (canvas, chartArea) => {
    const ctx = canvas.getContext("2d");
    const ctx1 = canvas.getContext("2d");
    const ctx2 = canvas.getContext("2d");
    const chartWidth = chartArea?.right - chartArea?.left;
    const chartHeight = chartArea?.top;
    console.log(canvas)
    const gradient1 = ctx1.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(1, "rgba(38, 91, 171, 1)");
    gradient1.addColorStop(0.5, "rgba(62, 139, 255, 0.9)");
    // gradient.addColorStop(0.5, '#20f08b');

    const gradient2 = ctx2.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(1, "rgba(198, 42, 176, 0.8)");
    // gradient2.addColorStop(0.6, "rgba(253, 179, 37, 0.7)");
    gradient2.addColorStop(0.5, "rgba(253, 179, 37, 0.9)");
    return {
      labels: [
        "June 19",
        "June 26",
        "July 3",
        "July 10",
        "July 17",
        "July 23",
        "July 30",
      ],
      datasets: [
        {
          label: "Second dataset",
          data: [5, 30, 10, 30, 50, 20, 40],
          fill: true,
          backgroundColor: gradient2,
          borderColor: "#fff",
        },
        {
          label: "First dataset",
          data: [25, 15, 45, 41, 44, 23, 30],
          fill: true,
          backgroundColor: gradient1,
          borderColor: "#fff",
        },
      ],
    };
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <body style={{height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div className="chart" style={{
          height:500,
          width: 900
        }}>
        <Line
          options={{
            animation: false,
            legend: {
              display: false,
              position: "right",
            },

            scales: {
              xAxes: [
                {
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: false,
                    max: 60,
                    min: 0,
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                  },
                },
              ],
            },
            tooltips: {
              displayColors: false,
              displayDate: false,
              backgroundColor: "rgb(81, 90, 108)",
              cornerRadius: 16,
              alignItems:"center",
              yAlign: "bottom",
              xAlign: "center",
              bodyFontColor: '#fff',
              bodyFontStyle: '700',
              bodyFontSize: 14,
              borderRadius: "20px",
              xPadding: 20,
              yPadding: 7,
              callbacks: {
                label: (tooltipItem, data) => {
                  return tooltipItem?.value + " $";
                },
                title: (tooltipItem)=> {
                  return ""
                }
              },
            },
            // see all defaults / options below!
            lineHeightAnnotation: {
              // defaults to have line to the highest data point on every tick
              always: true,
              // optionally, only have line draw to the highest datapoint nearest the user's hover position
              hover: false,
              // colors of the line
              color: "#fff",
              // name of yAxis
              yAxis: "y-axis-0",
              // weight of the line
              lineWeight: 1.5,
              /// sets shadow for ALL lines on the canvas

              // dash defaults at [10, 10]
              noDash: false,
            },
          }}
          data={data}
        /></div>
      </body>
    </div>
  );
}

export default App;

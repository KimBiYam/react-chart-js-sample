import { ChartConfiguration } from "chart.js";
import { useRef } from "react";
import useChartJsEffect from "../hooks/useChartJsEffect";

export type BarChartSampleProps = {};

const BarChartSample = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const config: ChartConfiguration = {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  useChartJsEffect(canvasRef, config);

  return (
    <div style={{ width: "50%" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default BarChartSample;

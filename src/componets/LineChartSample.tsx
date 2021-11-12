import { ChartConfiguration } from "chart.js";
import { useRef } from "react";
import useChartJsEffect from "../hooks/useChartJsEffect";

export type LineChartSampleProps = {};

const LineChartSample = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const config: ChartConfiguration = {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ["rgba(255, 99, 132, 1)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          pointBorderWidth: 12,
        },
      ],
    },
  };

  useChartJsEffect(canvasRef, config);

  return (
    <div style={{ width: "50%" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default LineChartSample;

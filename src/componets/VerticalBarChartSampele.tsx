import { ChartConfiguration } from "chart.js";
import { useRef } from "react";
import useChartJsEffect from "../hooks/useChartJsEffect";

export type VerticalBarChartSampeleProps = {};

const VerticalBarChartSampele = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const months = Array.from({ length: 7 }).map((_, index) => `${index + 1}월`);

  const colors = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(126, 75, 25, 0.2)",
  ];

  const datasets = Array.from({ length: 4 }).map((_, index) => ({
    label: `범례${index + 1}`,
    data: Array.from({ length: 7 }).map((_) => Math.floor(Math.random() * 100)),
    backgroundColor: colors[index],
  }));

  const config: ChartConfiguration = {
    type: "bar",
    data: {
      labels: months,
      datasets,
    },
    options: {
      interaction: {
        intersect: false,
        axis: "x",
      },
      plugins: {
        legend: {
          labels: {
            font: {
              size: 16,
              weight: "700",
            },
          },
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

export default VerticalBarChartSampele;

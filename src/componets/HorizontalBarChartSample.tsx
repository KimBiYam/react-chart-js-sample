import { Chart, registerables } from "chart.js";
import { ChartConfiguration } from "chart.js";
import { useEffect, useRef } from "react";

export type HorizontalBarChartSampleProps = {};

const HorizontalBarChartSample = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (!ctx) {
      return;
    }

    Chart.register(...registerables);

    const months = Array.from({ length: 7 }).map(
      (_, index) => `${index + 1}월`
    );

    const config: ChartConfiguration = {
      type: "bar",
      data: {
        labels: months,
        datasets: [
          {
            label: "test",
            data: [35, 23, 53, 12, 35, 23, 65],
            maxBarThickness: 10,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(126, 75, 25, 0.2)",
            ],
          },
        ],
      },
      options: {
        indexAxis: "y",
      },
    };

    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div style={{ width: "50%" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default HorizontalBarChartSample;

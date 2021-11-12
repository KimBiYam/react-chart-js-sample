import { Chart, registerables } from "chart.js";
import { ChartConfiguration } from "chart.js";
import { RefObject, useEffect } from "react";

const useChartJsEffect = (
  canvasRef: RefObject<HTMLCanvasElement>,
  config: ChartConfiguration
) => {
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (!ctx) {
      return;
    }

    Chart.register(...registerables);
    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    };
  }, []);
};

export default useChartJsEffect;

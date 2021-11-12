import "./App.css";
import BarChartSample from "./componets/BarChartSample";
import HorizontalBarChartSample from "./componets/HorizontalBarChartSample";
import LineChartSample from "./componets/LineChartSample";
import VerticalBarChartSampele from "./componets/VerticalBarChartSampele";

function App() {
  return (
    <div className="App">
      <BarChartSample />
      <VerticalBarChartSampele />
      <HorizontalBarChartSample />
      <LineChartSample />
    </div>
  );
}

export default App;

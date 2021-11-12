import "./App.css";
import BarChartSample from "./componets/BarChartSample";
import HorizontalBarChartSample from "./componets/HorizontalBarChartSample";
import VerticalBarChartSampele from "./componets/VerticalBarChartSampele";

function App() {
  return (
    <div className="App">
      <BarChartSample />
      <VerticalBarChartSampele />
      <HorizontalBarChartSample />
    </div>
  );
}

export default App;

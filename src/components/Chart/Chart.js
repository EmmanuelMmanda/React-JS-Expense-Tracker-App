import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value)
  const TotalMax = Math.max(...dataPointValues);
  
  return (
    <div className="Chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={TotalMax}
        />
      ))}
    </div>
  );
}

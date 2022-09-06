import "./ChartBar.css";

export default function ChartBar(props) {
  let FillHeight = "0%";

  if (props.maxValue > 0) {
        FillHeight = (Math.round((props.value / props.maxValue) * 100)  + '%')
  }

  return (
    <div className="Chart_Bar">
      <div className="ChartBarFill_Constainer">
        <div className="ChartBar_Fill" style={{ height: FillHeight }}>
          <span>&nbsp;</span>
        </div>
      </div>
      <div className="ChartBar_Label">{props.label}</div>
    </div>
  );
}

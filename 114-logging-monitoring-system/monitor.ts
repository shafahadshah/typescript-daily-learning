type Metric = {
  name: string;
  value: number;
};

function monitor(
  metric: Metric
): void {

  console.log(
    `${metric.name}: ${metric.value}`
  );
}

monitor({
  name: "CPU Usage",
  value: 65,
});
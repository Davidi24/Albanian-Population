import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import "./Albaniangraph.css";

const Albaniangraph = () => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
        chartInstanceRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: [
              "100+",
              "",
              "90-94",
              "",
              "80-84",
              "",
              "70-74",
              "",
              "60-64",
              "",
              "50-54",
              "",
              "40-44",
              "",
              "30-34",
              "",
              "20-24",
              "",
              "10-14",
              "",
              "0-4",
            ],
            datasets: [
              {
                label: "Male",
                data: [
                  0.07, 0.29, 0.45, 0.5, 1, 1.1, 1.3, 2, 1.5, 2.6, 2.8, 3.1, 3.6, 4, 4.6, 4.9, 6,
                  5.2, 5.4, 5.6, 5.8, 8,
                ],
                backgroundColor: "rgba(237,125,49,255)",
              
              },
              {
                label: "Female",
                data: [
                  -0.06, -0.49, -0.55, -0.6, -1.2, -1.31, -1.15, -1.3, -1.5, -3.6, -2.8, -3.1, -3.6, -4, -4.6, -3.9, -7.2,
                  -5.2, -5.4, -5.2, -5.6, -8,
                ],
                backgroundColor: "rgba(91,155,213,255)",
              },
            ],
          },
          options: {
            indexAxis: "y",
            scales: {
              x: {
                type: "linear",
                title: {
                  display: true,
                  text: "Percentage of Population",
                  color: "#333",
                  font: {
                    size: 12,
                    weight: "bold",
                  },
                },
                ticks: {
                  stepSize: 1,
                  min: -8,
                  max: 8,
                  callback: function (value) {
                    return Math.abs(value);
                  },
                },
              },
              y: {
                stacked: true,
                title: {
                  display: true,
                  text: "Years",
                  color: "#333",
                  font: {
                    size: 12,
                  },
                },
                ticks: {
                  font: {
                    size: 10,
                    weight: "bold",
                  },
                  stepSize: 1,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || "";
                    if (label) {
                      label += ": ";
                    }
                    label += Math.abs(context.parsed.y);
                    return label;
                  },
                },
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="albaninan-wraper">
      <h3 className="title">Albania (2024)</h3>
      <canvas ref={canvasRef} className="graph" />

    </div>
  );
};

export default Albaniangraph;

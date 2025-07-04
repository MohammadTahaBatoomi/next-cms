"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiDollarSign, FiArrowUpRight } from "react-icons/fi";

// داده‌ها
const data = [
  { name: "Jan", uv: 2000 },
  { name: "Feb", uv: 2500 },
  { name: "Mar", uv: 2200 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
];

// ✅ تعریف type برای props تولتیپ
type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    value: number;
    color: string;
  }>;
  label?: string | number;
};

const CustomLineTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "rgba(30, 30, 30, 0.85)",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "8px",
          fontSize: "13px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          backdropFilter: "blur(4px)",
        }}
      >
        <div style={{ marginBottom: "0px", fontWeight: "bold", fontSize: "14px" }}>
          {label}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: payload[0].color,
            }}
          />
          <span>Revenue:</span>
          <span style={{ fontWeight: "bold", marginLeft: "auto" }}>
            ${payload[0].value}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

// ✅ کامپوننت اصلی
function MonthlyEarnings() {
  return (
    <Card
      className="w-full max-w-3xl h-auto"
      sx={{
        borderRadius: "8px",
        boxShadow: "0 6px 24px rgba(0,0,0,0)",
        border: "1px solid #eceef0",
      }}
    >
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-medium mt-1 text-lg">Monthly Earnings</h1>
          <span className="w-12 h-12 shadow-xl bg-[#41beff] flex justify-center items-center rounded-3xl">
            <FiDollarSign className="text-white" size={20} />
          </span>
        </div>

        <Typography variant="h5" fontWeight="700" className="mr-2 block">
          $6,820
        </Typography>

        <div className="flex items-center my-1">
          <span className="flex items-center text-[#fa896b] text-base bg-[#fdede8] rounded-full p-1 mr-2">
            <FiArrowUpRight size={18} className="rotate-90" />
          </span>
          <span>+9%</span>
          <span className="text-sm text-gray-500 ml-2">last year</span>
        </div>

        <div className="h-15 w-full">
          <ResponsiveContainer width="100%" height={100}>
            <LineChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: -65 }}
            >
              <YAxis hide />
              <Tooltip
                content={<CustomLineTooltip />}
                cursor={{ stroke: "transparent" }}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#38BDF8"
                strokeWidth={2}
                dot={{
                  r: 0,
                  stroke: "#38BDF8",
                  strokeWidth: 2,
                  fill: "#fff",
                }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default MonthlyEarnings;

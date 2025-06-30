import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  Tooltip,
} from "recharts";
import { FiDollarSign, FiArrowUpRight } from "react-icons/fi";

const data = [
  { name: "Jan", uv: 2000 },
  { name: "Feb", uv: 2500 },
  { name: "Mar", uv: 2200 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
];

function MonthlyEarnings() {
  return (
    <Card className="rounded-2xl shadow-md w-full max-w-3xl h-auto">
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
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: -55 }}
            >
              <YAxis hide />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="uv"
                stroke="#38BDF8"
                strokeWidth={2}
                dot={{ r: 0, stroke: "#38BDF8", strokeWidth: 2, fill: "#fff" }}
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

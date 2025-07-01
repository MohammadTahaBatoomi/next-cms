import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { FiArrowUpRight } from "react-icons/fi";

const data = [
  { name: "2024", value: 30 },
  { name: "2025", value: 70 },
];
const COLORS = ["#5B7FFF", "#E0E7FF"];

function YearlyBreakup() {
  return (
    <Card className="rounded-2xl shadow-md mb-4 w-full max-w-3xl h-auto">
      <CardContent>
        <div className="flex items-center justify-between gap-26">
          <div className="flex flex-col justify-center gap-6">
            {/* <Typography variant="p" className="font-bold mb-6">Yearly Breakup</Typography> */}
            <h1 className="font-medium mt-4 text-md">Yearly Breakup</h1>
            <div>
              <Typography variant="h5" fontWeight="700">
                $36,358
              </Typography>
              <div className="flex items-center my-1">
                <span className="flex items-center text-[#47bca2] text-base bg-[#e0fffd] rounded-full p-1 mr-2">
                  <FiArrowUpRight size={18} className=" rotate-280" />
                </span>
                <span>+9%</span>
                <span className="text-sm text-gray-500 ml-2">last year</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#5B7FFF] inline-block"></span>
                <span className="text-sm text-gray-600">2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E0E7FF] inline-block"></span>
                <span className="text-sm text-gray-600">2025</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-24 h-24 ">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={36}
                    outerRadius={48}
                    dataKey="value"
                    startAngle={80}
                    endAngle={-280}
                    stroke="none"
                  >
                    {data.map(
                      (
                        entry: { name: string; value: number },
                        index: number
                      ) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      )
                    )}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default YearlyBreakup;

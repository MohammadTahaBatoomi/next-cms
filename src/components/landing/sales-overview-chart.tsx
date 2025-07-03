import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiMenu } from "react-icons/fi";

const data = [
  { name: "16/08", uv: 340, pv: 270 },
  { name: "17/08", uv: 360, pv: 240 },
  { name: "18/08", uv: 320, pv: 300 },
  { name: "19/08", uv: 370, pv: 210 },
  { name: "20/08", uv: 380, pv: 250 },
  { name: "21/08", uv: 150, pv: 300 },
  { name: "22/08", uv: 370, pv: 280 },
  { name: "23/08", uv: 360, pv: 240 },
];

function SalesOverviewChart() {
  const [month, setMonth] = React.useState("March 2025");
  return (
    <Card className="max-w-3xl mx-auto w-full rounded-lg">
      <CardContent>
        <div className="flex justify-between items-center mb-8">
          <Typography variant="h6" className="font-medium">
            Sales Overview
          </Typography>
          <div className="flex items-center gap-2">
            <Select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              size="small"
              className="bg-white"
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="March 2025">March 2025</MenuItem>
              <MenuItem value="April 2025">April 2025</MenuItem>
            </Select>
            <IconButton>
              <FiMenu size={20} />
            </IconButton>
          </div>
        </div>
        <div className="h-90.5 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap={20}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 12 }} domain={[0, 350]} />
              <Tooltip />
              <Bar
                dataKey="uv"
                fill="#7499ff"
                radius={[8, 8, 0, 0]}
                barSize={10}
              />
              <Bar
                dataKey="pv"
                fill="#66c8ff"
                radius={[8, 8, 0, 0]}
                barSize={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default SalesOverviewChart;

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Select,
  MenuItem,
  IconButton,
  Menu,
  MenuItem as MenuItemMUI,
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

// تایپ ساده‌تر برای props تولتیپ
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    color?: string;
    name?: string;
    value?: number | string;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
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
        <div
          style={{ marginBottom: "6px", fontWeight: "bold", fontSize: "14px" }}
        >
          {label}
        </div>
        {payload.map((entry, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: 4,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: entry.color,
              }}
            />
            <span>
              {entry.name === "uv" ? "Income this month" : "Expense this month"}:
            </span>
            <span style={{ fontWeight: "bold", marginLeft: "auto" }}>
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

function SalesOverviewChart() {
  const [month, setMonth] = useState("March 2025");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = (type: "svg" | "csv" | "png") => {
    const links = {
      svg: "/downloads/chart.svg",
      csv: "/downloads/data.csv",
      png: "/downloads/chart.png",
    };
    const link = document.createElement("a");
    link.href = links[type];
    link.download = `chart.${type}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleMenuClose();
  };

  return (
    <Card
      className="max-w-3xl mx-auto w-full xl:mb-0 mb-6"
      sx={{
        borderRadius: "8px",
        boxShadow: "0 6px 24px rgba(0,0,0,0)",
        border: "1px solid #eceef0",
      }}
    >
      <CardContent>
        <div className="flex justify-between items-center mb-8 px-4">
          <h1 className="font-medium mt-4 text-md">Sales Overview</h1>
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
              <MenuItem value="May 2025">May 2025</MenuItem>
            </Select>

            <IconButton onClick={handleMenuClick}>
              <FiMenu size={20} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  borderRadius: "8px",
                  minWidth: 140,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  paddingY: 0.5,
                },
              }}
            >
              {[
                { label: "Download SVG", type: "svg" },
                { label: "Download CSV", type: "csv" },
                { label: "Download PNG", type: "png" },
              ].map((item) => (
                <MenuItemMUI
                  key={item.type}
                  onClick={() => handleDownload(item.type as "svg" | "csv" | "png")}
                  sx={{
                    fontSize: "14px",
                    paddingY: "6px",
                    paddingX: "16px",
                    minHeight: "32px",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  {item.label}
                </MenuItemMUI>
              ))}
            </Menu>
          </div>
        </div>

        <div className="h-91 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap={20}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 13, fill: "#adb0bb" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[0, 400]}
                tick={{ fontSize: 12, fill: "#adb0bb" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
              <Bar
                dataKey="uv"
                fill="#7499ff"
                radius={[8, 8, 0, 0]}
                barSize={10}
                name="uv"
              />
              <Bar
                dataKey="pv"
                fill="#66c8ff"
                radius={[8, 8, 0, 0]}
                barSize={10}
                name="pv"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default SalesOverviewChart;

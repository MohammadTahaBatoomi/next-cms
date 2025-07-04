import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

const products = [
  {
    id: "1",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary.main",
    budget: "3.9",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "High",
    pbg: "error.main",
    budget: "12.8",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Critical",
    pbg: "success.main",
    budget: "2.4",
  },
];

type AlignType = "inherit" | "left" | "center" | "right" | "justify";

const headers: { label: string; align?: AlignType }[] = [
  { label: "Id" },
  { label: "Assigned" },
  { label: "Name" },
  { label: "Priority" },
  { label: "Budget", align: "right" },
];

const ProductPerformance = () => {
  return (
    <div className="border border-[#eceef0] mx-4.5 xl:mx-0 py-7.5 px-12 rounded-lg">
      <h1 className="mb-4 text-lg font-medium">Product Performance</h1>

      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table sx={{ whiteSpace: "nowrap", mt: 2 }}>
          <TableHead>
            <TableRow>
              {headers.map((head, i) => {
                const align: AlignType = ["inherit", "left", "center", "right", "justify"].includes(head.align || "")
                  ? (head.align as AlignType)
                  : "left";

                return (
                  <TableCell key={i} align={align}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {head.label}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map(({ id, name, post, pname, priority, pbg, budget }) => (
              <TableRow key={id}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {id}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {name}
                  </Typography>
                  <Typography color="text.secondary" fontSize="13px">
                    {post}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography color="text.secondary" variant="subtitle2">
                    {pname}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Chip
                    size="small"
                    label={priority}
                    sx={{
                      px: 1,
                      backgroundColor: pbg,
                      color: "#fbfcfd",
                    }}
                  />
                </TableCell>

                <TableCell align="right">
                  <Typography variant="h6">${budget}k</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};

export default ProductPerformance;

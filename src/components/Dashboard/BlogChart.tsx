/* eslint-disable @typescript-eslint/no-explicit-any */
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const BlogChart = ({ data }: { data: any }) => {
  return (
    <BarChart width={600} height={400} data={data}>
      <XAxis
        dataKey="title"
        interval="preserveStart"
        angle={-45}
        textAnchor="end"
      />
      <YAxis
        label={{
          value: "Number of Blogs",
          angle: -90,
          position: "insideLeft",
        }}
        allowDecimals={false}
      />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="_count.blogs"
        name="Number of Blogs (each category)"
        fill="#22C55E"
      />
    </BarChart>
  );
};

export default BlogChart;

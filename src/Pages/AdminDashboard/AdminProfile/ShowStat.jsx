import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Lottie from "lottie-react";
import tanstackLoading from "../../../assets/tanstack.json";
import { FiUsers } from "react-icons/fi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { Cell, PieChart, Pie, Legend } from "recharts";
import Container from "../../../Shared/Container/Container";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ShowStat = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stat = [], isPending } = useQuery({
    queryKey: ["stat"],
    queryFn: async () => {
      const res = await axiosSecure.get("/forum-stats");
      return res.data;
    },
  });

  const { data: chartData = [], isPending: chartPending } = useQuery({
    queryKey: ["chart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/chart-stats");
      console.log(chartData);
      return res.data;
    },
  });
  if (chartPending) {
    return (
      <Lottie
        className="w-40 flex justify-center items-center mx-auto min-h-screen"
        animationData={tanstackLoading}
      ></Lottie>
    );
  }
  if (isPending) {
    return (
      <Lottie
        className="w-40 flex justify-center items-center mx-auto min-h-screen"
        animationData={tanstackLoading}
      ></Lottie>
    );
  }

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.quantity };
  });

  return (
    <>
      <Container>
        <div className="w-full mx-auto text-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              style={{
                background: "linear-gradient(90deg, #6AAEFF 30%, #B6F7FF 100%)",
              }}
              className="flex items-center text-center gap-5 py-7 px-5  rounded-lg text-white"
            >
              <div>
                <FiUsers className="text-5xl" />
              </div>
              <div>
                <p className="text-3xl text-center">Total Users</p>
                <p className="text-3xl">{stat.userCount}</p>
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(90deg, #FE4880 30%, #B6F7FF 100%)",
              }}
              className="flex items-center text-center gap-5 py-7 px-5  rounded-lg text-white"
            >
              <div>
                <FiUsers className="text-5xl" />
              </div>
              <div>
                <p className="text-3xl">Total post</p>
                <p className="text-3xl">{stat.postCount}</p>
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(90deg, #BB34F5 30%, #B6F7FF 100%)",
              }}
              className="flex items-center text-center gap-5 py-7 px-5  rounded-lg text-white"
            >
              <div>
                <TfiCommentsSmiley className="text-5xl" />
              </div>
              <div>
                <p className="text-3xl">Total Comments</p>
                <p className="text-3xl">{stat.commentCount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[70vh] lg:w-full flex justify-center items-center">
          <div>
            <PieChart width={600} height={300}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShowStat;

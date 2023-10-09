import { ReactElement, ReactNode } from "react";

type IProps = {
  title: string;
  value: number;
  icon: ReactNode | ReactElement;
};

const StatisticsCard = ({ title, value, icon }: IProps) => {
  return (
    <div className="flex items-center justify-around bg-base-300 p-3 rounded-lg hover:scale-105 transition-all cursor-pointer group">
      <div>
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
      </div>
      <div className="stat-figure text-primary group-hover:text-secondary transition-all duration-300">
        {icon}
      </div>
    </div>
  );
};

export default StatisticsCard;

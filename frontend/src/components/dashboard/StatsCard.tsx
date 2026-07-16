type StatsCardProps = {
  title: string;
  value: string;
};

const StatsCard = ({ title, value }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <h1 className="text-4xl font-bold mt-3 text-blue-600">
        {value}
      </h1>

    
    </div>
  );
};


export default StatsCard;




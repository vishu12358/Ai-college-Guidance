type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">

      <div className="text-5xl mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;
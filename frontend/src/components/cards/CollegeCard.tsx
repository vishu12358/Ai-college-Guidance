type CollegeCardProps = {
  image: string;
  name: string;
  location: string;
  nirf: number;
  packageAvg: string;
};

const CollegeCard = ({
  image,
  name,
  location,
  nirf,
  packageAvg,
}: CollegeCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <p className="text-gray-500 mt-2">
          📍 {location}
        </p>

        <div className="flex justify-between mt-6">

          <div>
            <p className="text-sm text-gray-500">
              NIRF Rank
            </p>

            <h4 className="font-bold">
              #{nirf}
            </h4>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Avg Package
            </p>

            <h4 className="font-bold text-green-600">
              {packageAvg}
            </h4>
          </div>

        </div>

        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
          View Details
        </button>

      </div>

    </div>
  );
};

export default CollegeCard;
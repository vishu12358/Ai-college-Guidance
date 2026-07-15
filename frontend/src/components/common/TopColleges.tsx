import CollegeCard from "../cards/CollegeCard";

import iitDelhi from "../../assets/images/iit-delhi.jpg";
import nitTrichy from "../../assets/images/nit-trichy.jpeg";
import bitsPilani from "../../assets/images/bits-pilani.jpg";
import vit from "../../assets/images/vit.jpg";
import iiitHyderabad from "../../assets/images/iiit-hyderabad.png";

const TopColleges = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Top Colleges in India
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-16">
          Explore some of India's top engineering colleges.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          <CollegeCard
            image={iitDelhi}
            name="IIT Delhi"
            location="New Delhi"
            nirf={2}
            packageAvg="₹22 LPA"
          />

          <CollegeCard
            image={nitTrichy}
            name="NIT Trichy"
            location="Tamil Nadu"
            nirf={9}
            packageAvg="₹15 LPA"
          />

          <CollegeCard
            image={bitsPilani}
            name="BITS Pilani"
            location="Rajasthan"
            nirf={20}
            packageAvg="₹18 LPA"
          />

          <CollegeCard
            image={vit}
            name="VIT Vellore"
            location="Tamil Nadu"
            nirf={11}
            packageAvg="₹10 LPA"
          />
          <CollegeCard
           image={iiitHyderabad}
           name="IIIT Hyderabad"
           location="Hyderabad"
           nirf={47}
           packageAvg="₹30 LPA"
/>

        </div>

      </div>
    </section>
  );
};

export default TopColleges;
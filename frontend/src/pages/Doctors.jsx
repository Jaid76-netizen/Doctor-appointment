import DoctorCard from "../components/DoctorCard";
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";
import TopDcotor from "../components/TopDcotor";

const Doctors = () => {
  return (
    <div className="my-12">
      <h1 className="text-center font-semibold text-5xl">Our Doctors</h1>
      <div className="flex justify-between gap-5 my-12">
        <DoctorCard
          name={`Doctor 1`}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum quis accusantium placeat nam cum!`}
          image={doctor1}
        />
        <DoctorCard
          name={`Doctor 2`}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum quis accusantium placeat nam cum!`}
          image={doctor2}
        />
        <DoctorCard
          name={`Doctor 3`}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum quis accusantium placeat nam cum!`}
          image={doctor3}
        />
        <DoctorCard
          name={`Doctor 4`}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum quis accusantium placeat nam cum!`}
          image={doctor1}
        />
      </div>

      <h1 className="text-center font-semibold text-5xl">Top Doctors</h1>
      <TopDcotor/>
    </div>
  );
};

export default Doctors;

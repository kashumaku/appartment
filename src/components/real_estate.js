import h1 from "../img/h1.jpg";
import h2 from "../img/h2.jpg";
import h3 from "../img/h3.jpg";
import h4 from "../img/h4.jpg";
import h5 from "../img/h5.jpg";
import h6 from "../img/h6.jpg";
const RealEstate = () => {
  return (
    <div className="max-w-[80%] m-auto mt-10">
      <div className="font-bold text-5xl">
        <p>Our choice of</p>
        <p>popular real estate</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="mt-10 bg-gray-400  rounded-lg">
          <img
            src={h1}
            width={400}
            height={100}
            alt="house_one"
            className="  rounded-lg"
          />
          <div>
            <p>Villas - Brooklyn</p>
            <p>South Sun House</p>
            <p>
              Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos
              equidem admodum
            </p>
          </div>
        </div>

        <div className="mt-10 bg-gray-400  rounded-lg">
          <img
            src={h2}
            width={400}
            alt="house_one"
            className="h-[200px]  rounded-lg"
          />
        </div>

        <div className="mt-10 bg-gray-600  rounded-lg">
          <img
            src={h3}
            width={200}
            alt="house_one"
            className="  rounded-lg h-full w-full"
          />
        </div>

        <div className="mt-10 bg-gray-400  rounded-lg">
          <img
            src={h4}
            width={400}
            height={100}
            alt="house_one"
            className="  rounded-lg"
          />
        </div>

        <div className="mt-10 bg-gray-400  rounded-lg">
          <img
            src={h5}
            width={400}
            alt="house_one"
            className="h-[200px]  rounded-lg"
          />
        </div>

        <div className="mt-10 bg-gray-600  rounded-lg">
          <img
            src={h6}
            width={200}
            alt="house_one"
            className="  rounded-lg h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RealEstate;

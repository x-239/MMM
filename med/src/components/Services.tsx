import Image from "next/image";
const Services = () => {
  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center gap-4">
      <div className="m-4 p-4">
        <Image
          src="/images/patient.jpg"
          alt="Photo 1"
          width={400}
          height={200}
        />
        <h1 className="font-bold text-2xl p-3">Second Opinion Services</h1>
        <p className="text-lg p-2 font-sans">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          explicabo laudantium esse praesentium blanditiis non quo quaerat
          distinctio nostrum aperiam, consectetur soluta dolorum minima, eaque
          autem pariatur tempora sapiente exercitationem.{" "}
        </p>
      </div>
      <div className="m-4 p-4">
        <Image
          src="/images/patient.jpg"
          alt="Photo 1"
          width={400}
          height={200}
        />
        <h1 className="font-bold text-2xl p-3">Hospital Bed Booking</h1>
        <p className="text-lg p-2 font-sans">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          explicabo laudantium esse praesentium blanditiis non quo quaerat
          distinctio nostrum aperiam, consectetur soluta dolorum minima, eaque
          autem pariatur tempora sapiente exercitationem.{" "}
        </p>
      </div>
      <div className="m-4 p-4">
        <Image
          src="/images/patient.jpg"
          alt="Photo 1"
          width={400}
          height={200}
        />
        <h1 className="font-bold text-2xl p-3">Doctor Appointments</h1>
        <p className="text-lg p-2 font-sans">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          explicabo laudantium esse praesentium blanditiis non quo quaerat
          distinctio nostrum aperiam, consectetur soluta dolorum minima, eaque
          autem pariatur tempora sapiente exercitationem.{" "}
        </p>
      </div>
      <div className="m-4 p-4">
        <Image
          src="/images/patient.jpg"
          alt="Photo 1"
          width={400}
          height={200}
        />
        <h1 className="font-bold text-2xl p-3">Cost Containment</h1>
        <p className="text-lg p-2 font-sans">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          explicabo laudantium esse praesentium blanditiis non quo quaerat
          distinctio nostrum aperiam, consectetur soluta dolorum minima, eaque
          autem pariatur tempora sapiente exercitationem.{" "}
        </p>
      </div>
      <div className="m-4 p-4">
        <Image
          src="/images/patient.jpg"
          alt="Photo 1"
          width={400}
          height={200}
        />
        <h1 className="font-bold text-2xl p-3">Custom Packages</h1>
        <p className="text-lg p-2 font-sans">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          explicabo laudantium esse praesentium blanditiis non quo quaerat
          distinctio nostrum aperiam, consectetur soluta dolorum minima, eaque
          autem pariatur tempora sapiente exercitationem.{" "}
        </p>
      </div>
      <div className="m-4 p-4">
        <Image
          src="/images/patient.jpg"
          alt="Photo 1"
          width={400}
          height={200}
        />
        <h1 className="font-bold text-2xl p-3">Follow Up Care</h1>
        <p className="text-lg p-2 font-sans">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          explicabo laudantium esse praesentium blanditiis non quo quaerat
          distinctio nostrum aperiam, consectetur soluta dolorum minima, eaque
          autem pariatur tempora sapiente exercitationem.{" "}
        </p>
      </div>
    </div>
  );
};

export default Services;

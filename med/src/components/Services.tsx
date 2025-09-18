"use client";

import Image from "next/image";
interface ExpandToggle {
  text: string;
  maxLength: number;
}
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
          allow patients or clients to receive an additional medical evaluation
          from another physician or specialist besides their primary doctor. The
          main purposes are: Confirming the diagnosis: Ensuring the initial
          diagnosis is correct and accurate. Reviewing the treatment plan:
          Verifying if the prescribed treatment is the most suitable or
          suggesting safer and more effective alternatives. Providing
          reassurance: Giving patients peace of mind and more confidence in
          their care plan. Offering new options: Such as alternative
          medications, less invasive procedures, or advanced treatment methods.
          This service is especially valuable for chronic and complex conditions
          such as cancer, heart disease, and specialized surgeries.{" "}
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
          is a service that allows patients, families, or healthcare providers
          to reserve a hospital bed in advance, ensuring availability when
          needed. Key points about this service: Easy Admission: Helps patients
          secure a bed before arriving, avoiding delays during emergencies or
          planned treatments. Better Planning: Supports hospitals in managing
          capacity, especially in critical care units (ICU, surgery, maternity).
          Patient Convenience: Reduces waiting times and stress for patients and
          their families. Transparency: Provides clear information on bed types
          (general ward, private room, ICU) and availability. This service is
          especially important for elective surgeries, maternity admissions, and
          long-term care patients who need guaranteed space in advance.{" "}
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
          allows patients to schedule a consultation with a physician at a
          convenient time. It helps ensure timely medical attention and
          organized patient care. Easy Scheduling: Patients can book
          appointments online, by phone, or through hospital apps. Time
          Management: Reduces waiting times and improves clinic flow. Continuity
          of Care: Ensures follow-up visits and ongoing monitoring for chronic
          conditions. Patient Convenience: Offers flexible options (in-person or
          telemedicine). This service is vital for routine checkups, chronic
          disease follow-ups, and specialist consultations.{" "}
        </p>
      </div>
      <div className="m-4 p-4">
        <Image
          src="/images/patient.jpg"
          alt="Photo 1"
          width={400}
          height={200}
        />
        <h1 className="font-bold text-2xl p-3">
          Between Hospitals or Countries
        </h1>
        <p className="text-lg p-2 font-sans">
          {" "}
          Patient Transfer Coordination is a specialized service that manages
          and organizes the safe transfer of patients from one hospital to
          another, or across countries when advanced care is required. Safe
          Medical Transport: Arranging ambulances, air ambulances, or medical
          escorts as needed. Continuity of Care: Ensuring medical records,
          treatment plans, and patient history are shared with the receiving
          hospital. International Support: Coordinating visas, travel documents,
          and communication with foreign hospitals. Time-Sensitive Response:
          Managing urgent cases such as critical care transfers or organ
          transplant coordination. Family Assistance: Helping families with
          logistics, updates, and emotional support during the process. This
          service is crucial for patients requiring specialized treatments not
          available locally, emergency cases, or second opinions abroad.{" "}
        </p>
      </div>
      <div className="m-4 p-4">
        <Image
          src="/images/custom.png"
          alt="Photo 1"
          width={400}
          height={200}
        />
        <h1 className="font-bold text-2xl p-3">Custom Packages</h1>
        <p className="text-lg p-2 font-sans">
          {" "}
          are personalized healthcare or service bundles designed to meet the
          specific needs of patients, families, or organizations. Instead of a
          “one-size-fits-all” approach, the services are tailored to match
          individual requirements. Personalized Care: Packages may include
          checkups, lab tests, or treatments based on the patient’s health
          profile. Flexibility: Clients can choose services they need (e.g.,
          maternity, chronic disease management, wellness programs).
          Cost-Effective: Bundling services often lowers overall expenses
          compared to paying for each service separately. Convenience: Provides
          an organized, all-in-one solution for patients or companies. This
          service is especially valuable for corporate health plans, family
          health coverage, and patient-specific care needs.{" "}
        </p>
      </div>
      <div className="m-4 p-4">
        <Image
          src="/images/follow.png"
          alt="Photo 1"
          width={400}
          height={200}
        />
        <h1 className="font-bold text-2xl p-3">Follow Up Care</h1>
        <p className="text-lg p-2 font-sans">
          {" "}
          is the medical care provided to patients after an initial treatment,
          surgery, or hospital visit. Its main goal is to monitor recovery,
          prevent complications, and ensure long-term health. Monitoring
          Progress: Checking the patient’s healing, response to medication, or
          lifestyle changes. Early Detection: Identifying possible side effects
          or complications before they get worse. Continuity of Care:
          Maintaining a connection between the patient and healthcare team.
          Patient Education: Guiding patients about medication use, diet,
          exercise, and warning signs. Improved Outcomes: Increases the chances
          of full recovery and reduces hospital readmissions. This service is
          especially important for patients after surgeries, chronic disease
          management, or long-term therapies.{" "}
        </p>
      </div>
      <div className="m-4 p-4">
        <Image
          src="/images/global.png"
          alt="Photo 1"
          width={400}
          height={200}
        />
        <h1 className="font-bold text-2xl p-3">Global Medical Care Booking</h1>
        <p className="text-lg p-2 font-sans">
          {" "}
          is a service that helps patients arrange medical treatment in
          hospitals or clinics abroad. It connects patients with international
          healthcare providers for specialized or advanced care. Access to
          Advanced Care: Patients can book treatment in leading hospitals
          worldwide. Specialized Services: Includes complex surgeries, cancer
          care, fertility treatment, or rare disease management. Travel
          Assistance: Support with visas, flight bookings, and accommodation
          near the hospital. Language & Cultural Support: Interpretation
          services and cultural guidance for a smoother experience. Seamless
          Coordination: Ensures communication between local doctors and
          international specialists for continuity of care. This service is
          valuable for patients seeking high-quality, specialized, or
          cost-effective treatments not available in their home country.{" "}
        </p>
      </div>
    </div>
  );
};

export default Services;

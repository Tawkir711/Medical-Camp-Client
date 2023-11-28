import React from 'react';

const SystemOverview = () => {
  return (
    <div className="bg-base-200 py-10 my-4">
      <h2 className="text-3xl font-bold text-center text-blue-600">
        --- Medical Camp System Overview ---
      </h2>
      <h3 className="text-2xl font-bold text-center p-3">Services Provided</h3>
      <div className='grid md:grid-cols-2 gap-3 text-xl font-semibold text-center pt-2'>
        <div>
          <b>1. Health Screenings:</b> Early detection of illnesses.
          <img
            className="w-[250px] mx-auto mt-4"
            src="https://i.ibb.co/jDG2rZD/screenings.jpg"
            alt=""
          />
        </div>
        <div>
          <b>2. Consultations:</b> Advice from medical professionals.
          <img
            className="w-[250px] mx-auto"
            src="https://i.ibb.co/nfg2xhq/Online-Medical-Consultation.jpg"
            alt=""
          />
        </div>
        <div>
          <b>3. Medication Distribution:</b> Necessary prescriptions.
          <img
            className="w-[250px] mx-auto"
            src="https://i.ibb.co/VYqsh67/Slide13.jpg"
            alt=""
          />
        </div>
        <div>
          <b>4. Health Education: </b>Promoting preventive care.
          <img
            className="w-[300px] mx-auto"
            src="https://i.ibb.co/WFVsS5x/Health-Education.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SystemOverview;
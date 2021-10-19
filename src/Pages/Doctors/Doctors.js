import React from 'react';
import doctor1 from '../../images/team_1.jpg';
import doctor2 from '../../images/team_2.jpg';
import doctor3 from '../../images/team_3.jpg';

const Doctors = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-2">Our Doctors</h1>

            <div className="doctors-container row my-5 gy-4">
            <div className="col-12 text-center">
            <div class="card mb-3 w-75 mx-auto">
            <img src={doctor1} class="card-img-top img-fluid mx-auto p-3" style={{height: '300px', width: '300px'}} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Brig. Gen. Prof. M. H. M. Delwar Hossain</h5>
              <p class="card-text px-3">TMBBS, DA , MCPS, FCPS (Anesthesia)</p>
              <p>Anesthesiologist & Pain Management Specialist</p>
              <h6>(Combined Military Hospital, Dhaka)</h6>
              <div className="btn btn-info fw-bold">Make an Appoinment</div>
            </div>
          </div>
            </div>
            <div className="col-12 text-center">
            <div class="card mb-3 w-75 mx-auto">
            <img src={doctor2} class="card-img-top img-fluid mx-auto p-3" style={{height: '300px', width: '300px'}} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Dr. Hasina Akhter</h5>
              <p class="card-text px-3">MBBS, FCPS (Anesthesia)</p>
              <p>Anesthesiologist</p>
              <h6>Evercare Hospital, Dhaka</h6>
              <div className="btn btn-info fw-bold">Make an Appoinment</div>
            </div>
          </div>
            </div>
            <div className="col-12 text-center">
            <div class="card mb-3 w-75 mx-auto">
            <img src={doctor3} class="card-img-top img-fluid mx-auto p-3" style={{height: '300px', width: '300px'}} alt="..."/>
          <div class="card-body">
              <h5 class="card-title">Dr. Shamim Boksha</h5>
              <p class="card-text px-3">MBBS, FCPS (Medicine), MD (Gastroenterology)</p>
              <p>(Gastroenterology, Medicine & Liver Diseases Specialist)</p>
              <h6>National Hospital, Chittagong</h6>
              <div className="btn btn-info fw-bold">Make an Appoinment</div>
            </div>
          </div>
            </div>
                
            </div>
        </div>
    );
};

export default Doctors;
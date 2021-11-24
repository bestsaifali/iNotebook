import React from "react";
// import web from "../src/images/img2.jpg";
// import {Link} from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section
        id='header'
        className='d-flex align-items-center'
      >
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                  <h1>
                    {props.name}
                    <strong className='brand-name'>
                      iNoteBook
                    </strong>
                  </h1>
                  <h2 className='my-3'>
                    We are the team of best talented
                    Engineers in the whole world.
                  </h2>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img
                    src={props.imgsrc}
                    className='img-fluid animated'
                    alt='Common_img'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;

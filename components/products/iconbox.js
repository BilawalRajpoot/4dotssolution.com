import React from 'react';

function IconBox({ data }) {
  return (
    <section className="services-clas bg-black">
      <div className="container section-padding bord-bottom-grd pt-0">

        <div className="row">
          {
            data?.IconBox.map((v) => {
              return (
                <>
                  <div className="col-lg-3">
                    <div className="item sub-bg md-mb30">
                      <div className="icon-img-60 opacity-5 mb-40">
                        <img src={`${v?.icon}`} alt="" />
                      </div>
                      <h5>{v?.title}</h5>
                      <div className="text mt-40">

                        <p>
                          {

                            v?.description
                          }
                        </p>
                      </div>

                    </div>
                  </div>

                </>
              )
            })
          }




        </div>
      </div>
    </section>
  );
}

export default IconBox;

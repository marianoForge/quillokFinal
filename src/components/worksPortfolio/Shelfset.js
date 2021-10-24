import React from "react";
import * as portStyles from "../../styles/portfolio.module.css";
import moreProjects from "../../images/work_arrow_MoreProjects.svg";
import arrowMenu from "../../images/work_arrow_menu.svg";
import works from "../../images/works_img_1.png";
// import imgArrowUnselect from "../images/work_arrowUnselect.svg";


const Shelfset = () => {
    
    const onOff  = () =>{

        // const cambiaWork = (nuevoWork) => {
        //     setShow(style={{ display: show ? "block" : "none" }};)
        //   }

        let workUno = document.getElementById("workShelfset");
        let workDos = document.getElementById("workFacefwd");
        let workTres = document.getElementById("workRecordify");

        // if ( workUno.display === "block")  {
        //     workUno.display = "none";
        // } else if (workUno.display === "none") {
        //     workTres.display = "block";
        // } else {
        //     alert ('cacotaaa')
        //     workDos.display = "block";
        // }

        workUno.innerHTML = "PUTO";
        workDos.innerHTML = "EL QUE";
        workTres.innerHTML = "LEE";
    }

    return(

        <div className={portStyles.WorksContent}>

              {/* <button onClick={onOff} > CONCHA LORA</button> */}
              
          <div className={portStyles.leftContent}>
            <div className={portStyles.WorksMenu}>

              <div className={portStyles.highlight}>
                <div className={portStyles.btSelect}>
                  <div className={portStyles.menuArrow}>
                    <img src={arrowMenu} width="100%" alt="Arrow Menu" />
                  </div>
                  <div className={portStyles.workSelect}>ShelfSet</div>
                </div>
              </div>

              <div onClick={onOff} className={portStyles.unhighlight}>
                <div className={portStyles.workUnselect}>FaceFwd</div>
              </div>

              <div className={portStyles.unhighlight}>
                <div className={portStyles.workUnselect}>Recordify</div>
              </div>

              <div className={portStyles.btMoreProjects}>
                <div className={portStyles.txtMoreProjects}>
                  SEE MORE PROJECTS
                </div>
                <div className={portStyles.arrowMoreProjects}>
                  <img src={moreProjects} width="100%" alt="More Projects" />
                </div>
              </div>
            </div>
          </div>
          <div className={portStyles.rightContent}>
            <div className={portStyles.frameImageWork}>
              <div className={portStyles.imageWork} >
                <img src={works} width="100%" alt="Works" />
              </div>
            </div>
            <div className={portStyles.workDescription}>
              <div className={portStyles.numberDesc}>01</div>
              <div className={portStyles.textDesc}>
                <strong>ShelfSet</strong> is a complete tool for shelf space
                analysis. Leveraging AI technology, users can obtain critical
                data on how the shelves are laid out, so they can take action on
                how to maximize and optimize their operations.
              </div>
            </div>
          </div>
        </div>


    )

 
};

export default Shelfset
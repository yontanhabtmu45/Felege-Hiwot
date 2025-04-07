import React from "react";
import Layout from "../../../Components/Layout/Layout";
import Services from "../Services";
import "./Prayer.module.css";

function Prayer() {
  return (
    <Layout>
      <Services/>
      <div id="prayer" style={{textAlign: "center", margin: "26px"}}>ጸሎት እና መዝሙር ክፍል</div>
    </Layout>
  );
}

export default Prayer;

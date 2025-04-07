import React from "react";
import Layout from "../../../Components/Layout/Layout";
import Services from "../Services";
import classes from './Soccial.module.css'

function Social() {
  return (
    <Layout>
      <Services />
      <div id="social" style={{textAlign: "center", margin: "26px"}}>ግንኙነት ክፍል</div>
    </Layout>
  );
}

export default Social;

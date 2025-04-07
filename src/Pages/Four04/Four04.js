import React from "react";
import classes from "./Four04.module.css";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import svg from './10001.svg'

function Four04() {
  return (
    <Layout>
      <div className={classes.four04}>
        <h1>Oops! The page you were looking for doesn't exist</h1>
        <p>You may have mistyped the address or the page may have moved.</p>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
        <img src={svg} alt="arrow" />
      </div>
    </Layout>
  );
}

export default Four04;

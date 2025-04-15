import React, { useEffect, useState } from "react";
import classes from "./DailyPosts.module.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import axios from "../../api/axiosConfig";
import Youtube from "../../YouTube/YT";

function DailyPosts() {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // const token = localStorage.getItem("token");
        const response = await axios.get("/posts/get-posts");
        setLatestPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <section className={classes.mission_wrapper}>
        <div className={classes.main_mission}>
          <div>
            <h3>ርእይ</h3>
            <p>
              የኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን እምነት ሥርዓትና ትውፊት ተጠብቆ በሃይማኖትና በሥነ ምግባር የታነፀ
              ትውልድ ማፍራት::
            </p>
          </div>
          <div>
            <h3>ተልዕኮ</h3>
            <p>
              "ሂዱና አሕዛብን ሁሉ በአብ በወልድና በመንፈስ ቅዱስ ስም እያጠመቃችኋቸው ያዘዛኋችሁንም ሁሉ
              እያስተማራችኋቸው ደቀ መዛሙርት አድርጓቸው" ባለው አምላካዊ ቃል መሰረት ወንጌልን አመቺ በሆነ መንገድ
              ሁሉ ለመላው ዓለም መስበክ፡፡
            </p>
          </div>
          <div>
            <h3>ዓላማ</h3>
            <p>
              ያላመኑትን በማስተማር ያመኑትን በሃይማኖትና በምግባር በማጽናት የሰው ልጆች የእግዚአብሔርን መንግስት
              እንዲወርሱ ማብቃት ::
            </p>
          </div>
        </div>
      </section>
      <section className={classes.daily_wrapper}>
        <div className={classes.main_heading}>
          <h1>ወቅታዊ ክንውኖች እና ልዩ ልዩ ይዘቶች</h1>
        </div>
        <div className={classes.desc_highlight}>
          {latestPosts.length > 0 ? (
            latestPosts
              .sort((a, b) => b.id - a.id)
              .map((post) => (
                <div key={post.id} className={classes.post}>
                  <h2>{post.title}</h2>
                  <p className={classes.truncated}>
                    {/* Render the description as HTML */}
                    <div
                      dangerouslySetInnerHTML={{ __html: post.description }}
                      className={classes.post_content}
                    ></div>
                  </p>
                  <Link
                    to={`/posts/read-more/${post.id}`}
                    className={classes.readMoreLink}
                  >
                    Read More <MdOutlineKeyboardArrowRight />
                  </Link>
                </div>
              ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
        <h1 style={{ textAlign: "center", padding: "2rem" }}>Latest Videos:</h1>
        <Youtube />
      </section>
    </>
  );
}

export default DailyPosts;

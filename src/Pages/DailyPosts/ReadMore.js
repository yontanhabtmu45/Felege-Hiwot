import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import axios from "../../api/axiosConfig";
import classes from './ReadMore.module.css'
import { IoIosArrowBack } from "react-icons/io";

function ReadMore() {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`/posts/post/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); 
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error.message);
      }
    }

    fetchPost();
  }, [id]);

  return (
    <Layout>
      <div className={classes.readmore_wrapper}>
        <div className={classes.btn}>
            <Link to='/'>
                <button className={classes.btn_link}>
                    <IoIosArrowBack/>
                    Back to home
                    </button>
            </Link>
        </div>
        {post ? (
          <div>
            <h1>{post.title}</h1>
            {/* Render the description as HTML */}
          <div
            dangerouslySetInnerHTML={{ __html: post.description }}
            className={classes.post_content}
          ></div>
          </div>
        ) : (
          <p>Loading post...</p>
        )}
      </div>
    </Layout>
  );
}

export default ReadMore;

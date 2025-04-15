import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from './Youtube.module.css'

function Youtube() {
  const [latestVideo, setLatestVideo] = useState({});

  useEffect(() => {
    async function videos() {
      await fetch(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCyeBAmvGbI7mBttMHH_7q17rPrnCgLZZ4&channelId=UCB7gPL49jYiMEQQ45t2tskg&part=snippet,id&order=date&maxResults=6"
      )
        .then((response) => response.json())
        .then((data) => {
          const youtubeVid = data.items;
          setLatestVideo(youtubeVid);
          console.log(youtubeVid);
        });
    }
    videos();
  }, []);

  return (
    <section>
      <div className={classes.all_vids_wrapper}>
        {latestVideo.length > 0 ? (
          latestVideo.map((vids) => {
            let vidId = vids.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={vids.id} className={classes.videos_wrapper}>
                <Link to={vidLink} target="_blank">
                  <img
                    src={vids.snippet.thumbnails.medium.url}
                    alt="thumbnails"
                  />
                <h3 className={classes.vid_title}>{vids.snippet.title}</h3>
                </Link>
              </div>
            );
          })
        ) : (
            <Link to='https://www.youtube.com/@Felegehiyiwots.s' target="_blank" className={classes.subscribe}>
              <p>Subscribe our Channel</p>
          </Link>
        )}
      </div>
    </section>
  );
}

export default Youtube;

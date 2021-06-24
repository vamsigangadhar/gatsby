import * as React from "react";
import Layout from "./Layout";
import { StaticImage } from "gatsby-plugin-image";
import { useState, useEffect } from "react";

const IndexPage = () => {
  // const [data, setData] = useState([]);
  // useEffect(async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const result = await response.json();
  //   setData(result);
  // }, []);
  // console.log(data);
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/gatsby.webp"
      />
      {/* <ul>
        {data.map((post, id) => {
          return (
            <ul key={id}>
              <li key={id + post.userId}>{post.userId}</li>
              <li key={id + post.id}>{id + post.id}</li>
              <li key={id + post.title}>{post.title}</li>
              <li key={id + post.body}>{post.body}</li>
            </ul>
          );
        })}
      </ul> */}
    </Layout>
  );
};
// Step 3: Export your component
export default IndexPage;

import React from "react";
import "./style.css";
import Card from "../UI/Card";

const BlogPost = () => {
    return(
        <>
        <div className="BlogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">beautiful is always beautiful</h1>
                    <span className="postedBy">posted on August 4th,2020 by babita's blog tips</span>
                </div>
                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/3.jpg')} alt="Post Image" />
                </div>
            </Card>
        </div>
        </>
    )
}
export default BlogPost;
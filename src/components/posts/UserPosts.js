import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { getPostByLoggedInUser, getPostByUser } from "../../managers/PostManger";
import { Post } from "./Post";

export const UserPosts = ({ token }) => {
    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    useEffect(
        () => {
            getPostByLoggedInUser().then(setPosts)
        }, [])

        return (
            <article className="post-list-container">
            <div style={{ margin: "0rem 3rem" }}>
            <section>
                {
                    posts.map(post => {
                        return <Post post={post} key={`post--${post.id}`} />
                    })
                }
            </section>
            </div>
            </article>  
        );
}
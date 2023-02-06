import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getSinglePost } from "../../managers/PostManger";
import { HumanDate } from "../utils/HumanDate";
import { EditPost } from "../components/posts/EditPost"


export const PostDetails = ({ token}) => {
  const [post, setPost] = useState({})
  const [user, setUser] = useState({})
    const { userId } = useParams()

  const navigate = useNavigate()
  const { postId } = useParams()

  useEffect(() => {
    getSinglePost(postId).then((data) => setPost(data[0]));
  }, [postId])

  return (
    <section className="post">
    <h3 className="post__title">Title: {post?.title}</h3>
    <div className="post__authors_name">Author: {post?.user?.first_name} {post?.user?.last_name}</div>
    <div className="post__username">Username: <Link className="post__username-link" to={`/users/${user.id}`}> {post?.user?.username}</Link> </div> 
    <div className="post__publication_date">Date published: {post?.publication_date}</div>
    <div className="post__content">Post: {post?.content}</div>
    <button onClick={() => {
        navigate(`edit/post/${postId}`)
      }}>Edit</button>
    </section>
)
}

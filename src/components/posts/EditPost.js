import { useState, useEffect } from "react"
import { useNavigate ,useParams } from "react-router-dom"

export const EditPost = ({token}) => {



    const [post, setPost] = useState({
        title: "",
        image_url : "",
        content: ""
    })
    const navigate = useNavigate()
    const { postId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postId}`)
                .then(response => response.json())
                .then((data) => {
                    setPost(data[0])
                })

        },
        [] 
    )

    const handleInputChange = (event) => {
        const copyOfPost = { ...post };
        copyOfPost[event.target.id] = event.target.value;
        setPost(copyOfPost);
    };

    

    const handleSubmit = (event) => {
        console.log(post)

        event.preventDefault();


        fetch(`http://localhost:8088/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
            })
            .then((res) => {
                res.json()
            })
            .then(() => {
                navigate(`/posts/${postId}`)
            });
    }


    return (
        <section>
            <form className="postForm">
            <h2>Edit your existing Post</h2>
            <fieldset>
                <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" required autoFocus className="form-control"
                    
                    defaultValue={post.title}
                    onChange={handleInputChange}
                />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="content">Post Content: </label>
                <textarea type="textbox" id="content" rows="5" cols="30" name="content" required autoFocus className="form-control"
                defaultValue={post.content}
                onChange={handleInputChange} 
                />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="image_url">Add an Image:</label>
                    <input
                    required
                    id="image_url"
                    type="text"
                    className="form-control"
                    defaultValue={post.image_url}
                    onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={handleSubmit}
                className="btn btn-primary">
            Submit Edit
            </button>
            </form>
        </section>
    )
}
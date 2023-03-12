import React, {useState, useEffect} from 'react';

function PostCatalog() {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const request = await fetch('https://jsonplaceholder.typicode.com/posts');
                const response = await request.json();
                setPosts(response);
            } catch (err) {
                throw new Error(err);
            }
        }

        getData();
    }, []);

    return (
        <div className="posts">
            <ul className="posts__list">
                {posts === null
                    ? 'Content is loading...'
                    : posts.map((el, index) => {
                        return (
                            <li className="posts_single-post" data-post-id={el.id} key={index}>
                                <h3 className="posts__post-title" style={{color: "purple"}}>{el.title}</h3>
                                <p className="posts__post-description">{el.body}</p>
                                <hr/>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

export default PostCatalog;
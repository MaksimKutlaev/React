import React,{useState} from 'react'

function CommentList() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const handleChange = (event) => {
        setNewComment(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (newComment === '') return;
        setComments([...comments, newComment]);
        setNewComment('');
    }
    const handleDelete = (index) => {
        const newComments = [...comments];
        newComments.splice(index, 1);
        setComments(newComments);
        setNewComment('');
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input className="comments-input" type="text" value={newComment} onChange={handleChange} />
                <button type="submit">Add</button>
                <button onClick={() => handleDelete(comments.length - 1)}>Delete</button>
                <button onClick={() => setComments([])}>Clear</button>
                <ul className="comments-list">
                    {comments.map((comment, index) => {
                        return <li key={index}>{comment}</li>
                    })}
                </ul>
            </form>
        </div>
    );
}

export default CommentList;











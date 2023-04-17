import { useDispatch } from 'react-redux';
import { delPost,fetchPosts } from './redux/actionCreators';
import { useNavigate } from 'react-router-dom';
const PostViewDetails = ({ id, title, description, body }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(delPost(id));
        dispatch(fetchPosts(id));
        navigate('/')
    };

    return (
        <div className='Post'>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{body}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default PostViewDetails;

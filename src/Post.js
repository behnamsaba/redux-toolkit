import { Link } from 'react-router-dom';

const Post = ({ id, title, description }) => {
    return (
        <div className='Post'>
            <Link to={`/${id}`}>{title}</Link>
            <p>{description}</p>
        </div>
    );
};

export default Post;

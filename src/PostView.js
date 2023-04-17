import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import PostViewDetails from './PostViewDetails';


const PostView = () => {
    const { postid } = useParams();
    const { postList } = useSelector((data) => data.blog);
    return (
        <div className='PostView'>
          {postList ? <PostViewDetails  {...postList.find((post) => post.id === parseInt(postid))} /> : null}
        </div>
    );
};

export default PostView;

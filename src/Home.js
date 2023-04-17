import { useSelector } from 'react-redux';
import Post from './Post';
const Home = () => {
    const posts = useSelector((data) => data.blog.postList);
    return (
        <div className='Home'>
            <p>
                welcome to Microblog, our inovative site for sharing information
            </p>
            {posts && posts.map((post) => <Post {...post} key={post.id} />)}
        </div>
    );
};

export default Home;

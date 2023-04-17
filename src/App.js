import Microblog from './Microblog';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './redux/actionCreators';
import { useEffect } from 'react';
import LoadingSpinner from './Loading';

function App() {
    const dispatch = useDispatch();
    const data = useSelector((data) => data.blog);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (!data || data.status === 'loading') {
        return <LoadingSpinner />;
    }

    return (
        <div className='App'>
            <Microblog />
        </div>
    );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Heading from './Heading';
import NewPost from './NewPost';
import Home from './Home';
import NotFound from './NotFound';
import PostView from './PostView';
const Microblog = () => {
    return (
        <div className='Microblog'>
            <BrowserRouter>
                <Heading />
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/new'
                        element={<NewPost />}
                    />
                    <Route
                        path='/:postid'
                        element={<PostView />}
                    />
                    <Route
                        path='*'
                        element={<NotFound />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Microblog;

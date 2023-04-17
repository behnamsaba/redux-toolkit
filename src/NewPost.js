import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './NewPost.css';
import { useDispatch } from 'react-redux';
import { addPost } from './redux/actionCreators';

const NewPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            body: '',
        },
        onSubmit: (values) => {
            dispatch(addPost(values));
            navigate('/');
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(1, 'Title must not be empty')
                .required('Title is required'),
            description: Yup.string()
                .max(10, 'must be 15 char or less')
                .required('required'),
            body: Yup.string().required(),
        }),
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='title'>title</label>
            <input
                id='title'
                type='text'
                {...formik.getFieldProps('title')}
            />
            {formik.touched.title && formik.errors.title ? (
                <p>{formik.errors.title}</p>
            ) : null}

            <label htmlFor='description'>description</label>
            <input
                id='description'
                type='text'
                {...formik.getFieldProps('description')}
            />
            {formik.touched.description && formik.errors.description ? (
                <p>{formik.errors.description}</p>
            ) : null}

            <label htmlFor='body'>Enter your comment:</label>
            <input
                id='body'
                type='text'
                {...formik.getFieldProps('body')}
            />
            {formik.touched.body && formik.errors.body ? (
                <p>{formik.errors.body}</p>
            ) : null}

            <button type='submit'>Enter!</button>
            <Link to='/'>Cancel</Link>
        </form>
    );
};

export default NewPost;

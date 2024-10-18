import axios from 'axios';

export const getPosts = async () => { 
    try {
        // console.log(import.meta.env);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
        // const response = await axios.get(import.meta.env.VITE_POST_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts: ',error);
        throw error;
    }
};

// export const addPost = async (user: string, content: string) => {

// }
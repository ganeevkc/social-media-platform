import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
    id: string;
    content: string;
    user: string;
}

interface PostState {
    posts: Post[];
}

const initialState: PostState = {
    posts: [],
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<Post[]>) { // <type of the payload>
            state.posts = action.payload;
        },
        addPost(state, action: PayloadAction<Post>) {
            state.posts.push(action.payload);
        },
    }
});

export const {setPosts, addPost} = postSlice.actions;
export default postSlice.reducer;
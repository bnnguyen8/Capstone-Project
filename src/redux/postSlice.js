import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        updatePost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post.id === action.payload.id) {
                    post.description = action.payload.description;
                }
                return post;
            })
            state.posts = updatedPosts;
        },
        changeStatus: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post.id === action.payload.id) {
                    post.published = action.payload.published;
                }
                return post;
            })
            state.posts = updatedPosts;
        },
        deletePost: (state, action) => {
            const id = action.payload;
            const filteredPosts = state.posts.filter(
                (post) => post.id !== id
            );
            state.posts = filteredPosts;
        }
    },
});

export const { setPosts, addPost, updatePost, changeStatus, deletePost } = postSlice.actions;
export default postSlice.reducer;
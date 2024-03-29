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
                    post.category = action.payload.category;
                }
                return post;
            })
            state.posts = updatedPosts;
        },
        changeColor: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post.id === action.payload.id) {
                    post.color = action.payload.color;
                }
                return post;
            })
            state.posts = updatedPosts;
        },
        changeCompleted: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post.id === action.payload.id) {
                    post.completed = action.payload.completed;
                }
                return post;
            })
            state.posts = updatedPosts;
        },
        changeFavorite: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post.id === action.payload.id) {
                    post.favorite = action.payload.favorite;
                }
                return post;
            })
            state.posts = updatedPosts;
        },
        changeImportant: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post.id === action.payload.id) {
                    post.important = action.payload.important;
                }
                return post;
            })
            state.posts = updatedPosts;
        },
        searchPost: (state, action) => {
            state.posts = action.payload.posts;
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
            const postId = action.payload;
            state.posts = state.posts.filter(post => post.id !== postId);
        }
    },
});

export const { setPosts, addPost, updatePost, changeStatus, changeColor, changeCompleted, changeImportant, changeFavorite, searchPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
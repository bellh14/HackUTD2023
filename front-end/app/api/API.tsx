import { PostFormData } from "../types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "https://desktop-n8l5vco.tail1d1d2.ts.net";

export async function fetchPosts() {
    return fetch(`${API_URL}/process_data/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {};
        });
}

export async function createPost(formData: PostFormData) {
    const post = formData;

    return fetch(`${API_URL}/process_data/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.log("Error: ", error);
            return {};
        });
}

export const fetchPostsAsync = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const response = await fetchPosts();
        return response;
    }
);

export const createPostAsync = createAsyncThunk(
    "",
    async (formData: PostFormData) => {
        const response = await createPost(formData);
        return response;
    }
);

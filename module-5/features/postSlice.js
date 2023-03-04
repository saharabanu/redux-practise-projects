const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const fetch = require("node-fetch");



const fetchPosts = createAsyncThunk("post/fetchPosts", async(id) => {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // console.log(response)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const posts = await response.json();

    return posts;

})
const postSlice = createSlice({
    name: "post",
    initialState: {
        loading: false,
        post: [],
        error: ""
    },
    // reducers: {
    //     loadPost: (state, action) => {
    //         state.post = action.payload;
    //     }
    // },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
            state.error = ""
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload;
            state.error = "";

        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.post = [];
            state.error = action.error.message;

        });

    },
});

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts;

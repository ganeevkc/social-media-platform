import { Box, Typography } from "@mui/material";
import React from "react";

interface Post {
    id: string;
    content: string;
    user: string;
}

interface PostFeedProps {
    posts: Post[];
}

const PostFeed: React.FC<PostFeedProps> = ({posts}) => {
    if (posts.length==0) {
        return <Typography>No posts available.</Typography>;
    }

    return (
        <Box sx={{
            width: 100,
            height: 300,
            border: '2px thin grey'
        }}>
            HEHEHHEHEHHE
        </Box>
    )
}
export default PostFeed;
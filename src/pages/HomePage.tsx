import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../state/store";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
    const dispatch: AppDispatch = useDispatch(); //to dispatch actions (react directly cannot talk to redux so we need to use react redux hooks to connect a react component and redux store )
    const posts = useSelector((state: RootState) => state.posts);
    
    // useEffect(() => {
    //     const fetchPosts =  async () => {
    //         try{
    //             // const fetchedePosts = await getPosts
    //         }
    //     }
    // })
    return (
        <Box sx={{padding: '2rem'}}>
            <Typography variant="h2" gutterBottom>
                HOME
            </Typography>
            
        </Box>
    )
    
    
    
};

export default HomePage;
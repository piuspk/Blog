import { useState } from "react";
import { styled, Box, Typography, CircularProgress } from '@mui/material';

const Container = styled(Box)`
    position: relative;
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;

const Loader = styled(CircularProgress)`
    position: absolute;
    top: 25%;
    left: 46%;
    transform: translate(-50%, -50%);
    color: #ACADA8; /* Change color */
    width: 25px; /* Decrease size */
    height: 25px; /* Decrease size */
`;


const Post = ({ post }) => {
    const [imageLoading, setImageLoading] = useState(true);
    

    const url = post.picture ? post.picture : 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    return (
        <Container>
            {imageLoading && <Loader />}
            <Image src={url} alt="post" onLoad={handleImageLoad} />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    );
};

export default Post;

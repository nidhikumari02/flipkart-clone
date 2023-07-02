
import {Box,Button,styled} from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';






const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}));

const Image=styled('img')({
    width:'95%',
 
    padding: '15px'
   

}

);
const StyledButton = styled(Button)`
    width: 44%;
    border-radius: 2px;
    height: 50px;
    
`;
const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    
 

  

    

    const addToCart = () => {
        

        navigate('/cart');
    }


    return (
        <LeftContainer>
            <Box style={{padding:'15px  20px', border:'1px solid #f0f0f0',   width:'95%',}}>
            <Image src={product.url} alt="product"/>
            </Box>
            <StyledButton  variant="contained" onClick={() => addToCart()} style={{marginRight:10, background:'#ff9f00'}}><Cart />Add to cart</StyledButton>
            <StyledButton  variant="contained" style={{background:'#fb541b'}}><Flash />Buy Now</StyledButton>
        </LeftContainer>

    )
}
export default ActionItem;
import * as React  from 'react';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux'
import {addQuantity} from '../../store/cartSlice'
import {makeStyles} from '@mui/styles'
import { removeFromCart } from '../../store/cartSlice';
const usestyles = makeStyles({
  root:{
    width:"70px",
    height:"27px",
    // "margin-right":"70px"
    // "margin-top":"1rem"
  }
})
export default function ControlledOpenSelect({id}) {
  const [quantity, setquantity] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const classes = usestyles(); 
  useEffect(() => {
     if(quantity === 0){
      dispatch(removeFromCart(id))
     }
    else{
        dispatch(addQuantity({id:id,quantity:quantity}))
    }
  },[quantity]);
      // useEffect(() => {
      //     return (() => {
      //       setquantity(1);
      //         console.log('component un mounted');
      //     })
      // },[]);
  
  const handleChange = async(event) => {
      console.log(event.target.value,'inside the quentity component')
      console.log(quantity,'quantity')
    await setquantity(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
    return (
    <div className='w-5 '>
     
      <FormControl  >
        <InputLabel id="demo-controlled-open-select-label">Quantity</InputLabel>
        <Select className={classes.root}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={quantity?quantity:1}
          onChange={(e)=>{handleChange(e)}}
        >
          <MenuItem value={0}>
            0(Delete)
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>


        </Select>
      </FormControl>
    </div>
  );
}
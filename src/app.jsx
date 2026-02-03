import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToProduct } from './redux/action';
// import { addToProduct } from './reducer/productReducer';

const app = () => {
  const state = useSelector(state=>state.products);
  console.log(state)
  const dispatch = useDispatch();

  const handelAddToProduct = ()=>{
    dispatch(addToProduct({
      firstName:'Lal chand',
      lastName:'meghwal',
      mother:'Gita Devi',
      age:20,
    }));
  }

  return (
    <div className='text-center'>
      <h1 className='text-center text-7xl text-red-200'>Lal Chand </h1>
      {/* <h1 className='text-center text-7xl text-red-500'>{state}</h1> */}

      {/* <button onClick={()=>dispatch(addToProduct('Lal Chand meghwal'))} className='bg-green-500 mt-10 p-2 text-2xl rounded-md cursor-pointer'>On Click</button> */}
      <button onClick={handelAddToProduct} className='bg-green-500 mt-10 p-2 text-2xl rounded-md cursor-pointer'>On Click</button>
    </div>
  )
}

export default app

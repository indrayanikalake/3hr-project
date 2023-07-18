
import { Button, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core'
import React, {useContext } from 'react'
import { Context } from '../Context/Context';

const Cart = () => {
    const { cart } = useContext(Context);
    console.log(cart);
  return (
     <div>
        <Grid container spacing={4}>
            {cart.map((cartItem) =>(
                <Card>
                    <Grid key={cartItem.id} xs={12} sm={12}>
                        <CardHeader>{cartItem.title}</CardHeader>
                        <CardContent>
                            <Typography variant='h6' dangerouslySetInnerHTML={{__html:cartItem.description}} />
                            <Typography>`${cartItem.price}`</Typography>
                            <Button variant='outlined'>{cartItem.quantity}</Button>
                        </CardContent>
                    </Grid>
                </Card>
            ))}
        </Grid>
    </div>
  )
}

export default Cart

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import silver from '../../assets/silverbar.jpg'
import './SilverCard.scss';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },

});

const styles = {
    iconSize: {
        width: 20,
        height: 20,
    }
}

export default function SilverCard({ userId, onclick, id, quantity, rate, type, totalAmount }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={silver}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {userId}
                    </Typography>
                    <div className="col">
                        <div className="row">
                            <label>UserId :</label>
                            <span >{userId}</span>
                        </div>
                        <div className="row">
                            <label>Quantity :</label>
                            <span >{quantity}</span>
                        </div>
                        <div className="row">
                            <label>Rate Per Kg :</label>
                            <span >{rate}</span>
                        </div>
                        <div className="row">
                            <label>Type :</label>
                            <span>{type}</span>
                        </div>
                        <div className="row">
                            <label>Total Price :</label>
                            <span>{'$' + totalAmount}</span>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton size="small" color="primary" onClick={() => onclick(id)}>
                    <DeleteIcon />
                    Remove
                </IconButton>
            </CardActions>
        </Card>
    );
}
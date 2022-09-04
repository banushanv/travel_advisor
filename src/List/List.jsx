import React from 'react';
import useStyles from './styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


const RecipeReviewCard=()=> {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Food & Dining around you"
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"  
        >
          <MenuItem value={10}>Restaurants</MenuItem>
          <MenuItem value={20}>Hotels</MenuItem>
          <MenuItem value={30}>Example</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Rating</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
        >
           <MenuItem value={21}>3.0</MenuItem>
           <MenuItem value={22}>Above 4.0</MenuItem>
           <MenuItem value={23}>5.0</MenuItem>
  
        </Select>
      </FormControl>
      <CardMedia
        className={classes.media}
        image="https://media-cdn.tripadvisor.com/media/photo-s/19/e8/4d/08/raclette-fried-chicken.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography  >
          375 Chicken 'n Fries
        </Typography>
        <Box component="fieldset" mb={3} borderColor="transparent" className={classes.rating}>
        <Rating
          name="simple-controlled"
          value={2}
        />
      </Box>
      <Typography paragraph>
           Price:
          </Typography>
          <Typography paragraph>
           Rating:
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          More Details...
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeReviewCard;
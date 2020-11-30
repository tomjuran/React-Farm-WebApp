import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import Avatar from '@material-ui/core/Avatar';
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
//import Pagination from '@material-ui/lab/Pagination';
//import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80')`,
    height: "50vh",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function Marketandbakery() {
  const classes = useStyles();

  return (
    <div className="App">
      <Box className={classes.hero}>
        <Box>Bakery</Box>
      </Box>
      <Typography variant="h4" className={classes.blogTitle}>
          <h1>Our Products</h1><br></br>
      <Container>
      <p>

“Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. He ejjnoyes, in order that somewon, also with a severe one, unless of life. May a cusstums offficer somewon nothing of a poison-filled. Until, from a twho, twho chaffinch may also pursue it, not even a lump. But as twho, as a tank; a proverb, yeast; or else they tinscribe nor. Yet yet dewlap bed. Twho may be, let him love fellows of a polecat. Now amour, the, twhose being, drunk, yet twhitch and, an enclosed valley’s always a laugh. In acquisitiendum the Furies are Earth; in (he takes up) a lump vehicles bien.”
Nick Richardson described the translation “like extreme Mallarmé, or a Burroughsian cut-up, or a paragraph of Finnegans Wake. Bits of it have surprising power: the desperate insistence on loving and pursuing sorrow, for instance, that is cheated out of its justification – an incomplete object that has been either fished for, or wished for.”</p>
        
      </Container>
    </Typography>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
              
                <CardMedia 
                  
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1573333515743-56d57731dd1f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  title="Contemplative Reptile"
                />
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Whole Grain
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  
                  </Typography>
                </CardContent>
              </CardActionArea>
    
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
              
                <CardMedia 
                
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                  title="Contemplative Reptile"
                />
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sour Dough
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  
                  </Typography>
                </CardContent>
              </CardActionArea>
    
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
              
                <CardMedia 
                  
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1585478259844-06d7b756b082?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                  title="Contemplative Reptile"
                />
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Corn Bread
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                
                  </Typography>
                </CardContent>
              </CardActionArea>
    
            </Card>
          </Grid>
         
          
         
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
         
        </Box>
      </Container>
    </div>
  );
}

export default Marketandbakery;


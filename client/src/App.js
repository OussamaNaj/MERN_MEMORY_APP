import React,{useEffect,useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import memories from "./images/memories.jpg"
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles';
import {getPosts} from './actions/posts'

const App = ()=>{

    const [currentId,setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    
    useEffect(()=>{
        dispatch(getPosts());
        console.log('fine here')
    },[currentId,dispatch]);
    
    return (
        <Container maxidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" alt="memories" align="center" height="60"> Memories<Typography/>
                <img className={classes.image} src={memories} alt="memories" height="100" />
                </Typography>
            </AppBar>
            <Grow in> 
                <Grid container justify="space between" alignItems="stretch" spacing={3}> 
                    <Grid item xs={17} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={17} sm={4}>
                        <Form  currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    )
}

export default App;

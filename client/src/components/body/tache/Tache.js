
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import {  fetchAllTaches,dispatchGetAllTaches,deleteTache } from '../../../redux/actions/tacheAction';

import axios from 'axios';
const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

function Tache() {
    const classes = useStyles();
    
    const taches = useSelector((state) => state.taches);
    console.log(taches);
  const dispatch = useDispatch();

  useEffect(() => {

    
    fetchAllTaches().then(res =>{
        dispatch(dispatchGetAllTaches(res))
    })
   
  }, [ dispatch]);
 
  const deleteTacheData = async (id) => {
    await axios.delete(`/tache/delete/${id}`);
    fetchAllTaches().then(res =>{
        dispatch(dispatchGetAllTaches(res))
    })
    
}
    return (
        <div className="home_page">
            <h2>Hello tache!</h2>
        <Link to='/addTache'>ajouter tache</Link>  
         <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    
                    <TableCell>Description</TableCell>
                    <TableCell>Deadline</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {taches.map((tache) => (
                    <TableRow className={classes.row} >
                        
                        <TableCell>{tache.description}</TableCell>
                        <TableCell>{tache.deadline}</TableCell>
                        
                        <TableCell>
                            
                            <Button color="secondary" variant="contained" onClick={() => deleteTacheData(tache._id)}>Delete</Button> 
                        </TableCell>
                    </TableRow>
                    ))}
                
            </TableBody>
        </Table>

           
        </div>
    )
}

export default Tache

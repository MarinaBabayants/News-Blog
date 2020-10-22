import React, {useEffect} from "react";
import classes from "./newsItem.module.css"
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useDispatch, useSelector} from "react-redux";
import {fetchNewsInfo} from "../../../actions/actionCreators";
import {useParams} from "react-router";

export const NewsItem = () => {
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchNewsInfo(id))
    }, [dispatch, id])

    const newsInfo = useSelector(state => state.news.newsInfo);

    const {name, description, date} = newsInfo

    return (
        <div className={classes.container}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" color="primary">
                        <strong>{name}</strong>
                    </ListSubheader>
                }
            >
                <ListItem>
                    <ListItemText secondary={description}/>
                </ListItem>
            </List>
            <hr/>
            <ListItem>
                <ListItemText primary={date}/>
            </ListItem>
        </div>
    )
}

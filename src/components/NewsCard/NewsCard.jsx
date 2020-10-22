import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import styles from './NewsCard.module.css'
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: '10px auto',
    }
});

export const NewsCard = ({name, shortDescription, date, id}) => {

    const classes = useStyles();

    return (
        <div className={styles.cardWrapper}>
            <Link
                to={{
                pathname: `/newsPage/newsItem/${id}`,
                search: `?id=${id}`
            }}
                style={{ textDecoration: 'none' }}
            >
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" color="primary">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {shortDescription}
                            </Typography>
                            {date}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    )
}
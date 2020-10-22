import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../../actions/actionCreators";
import {NewsCard} from "../../components/NewsCard/NewsCard";

const NewsPage = () => {
    const dispatch = useDispatch();

    const newsList = useSelector(state => state.news.newsList);

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    return (
        <div>
            {newsList.map(news => {
                return <NewsCard
                    id={news.id}
                    key={news.id}
                    name={news.name}
                    shortDescription={news.shortDescription}
                    date={news.date}
                />
            })}
        </div>
    )
}

export default NewsPage



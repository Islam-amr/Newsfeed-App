import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import axios from 'axios'

// components import
import NewsItem from '../../components/NewsItem'

// styles import
import styles from './styles'

// apis list import
import apis from '../../utils/apis'

const renderNewsItem = ({ item }) => <NewsItem item={item} /> // to avoid anonymous function and re-render on renderItem

const NewsScreen = () => {
    const [newsData, setNewsData] = useState(null) // to store news data 

    // to handle news api call
    const fetchNews = async () => {
        try {
            const response = await axios.get(apis.FETCH_NEWS)
            setNewsData(response.data.articles) // to update the news data
        } catch (e) {
        }
    }

    // to call fetchNews function when News Screen get mounted
    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <View style={styles.screenContainer}>
            <FlatList
                data={newsData}
                showsVerticalScrollIndicator={false}
                style={styles.newslistContainer}
                keyExtractor={(_, i) => i.toString()}
                renderItem={renderNewsItem}
            />
        </View>
    )
}

export default NewsScreen

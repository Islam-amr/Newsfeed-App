import React, { useEffect, useState } from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import axios from 'axios'

// components import
import NewsItem from '../../components/NewsItem'

// styles import
import styles from './styles'

// apis list import
import apis from '../../utils/apis'

const { height } = Dimensions.get('window')
const skeltonItemsEstimation: number = Math.round(height * 0.9 / 160) - 1 // to estimate how much skeleton item could fit the phone screen
const skeltonList: number[] = Array(skeltonItemsEstimation).fill(null).map((_, i) => i); // initialize sequenced array of the estimated length


const renderNewsItem = ({ item }) => <NewsItem item={item} /> // to avoid anonymous function and re-render on renderItem

const NewsScreen = () => {
    const [newsData, setNewsData] = useState(null) // to store news data 
    const [loading, setLoading] = useState(false) // to handle waiting while api respond

    // to handle news api call
    const fetchNews = async () => {
        setLoading(true)
        try {
            const response = await axios.get(apis.FETCH_NEWS)
            setNewsData(response.data.articles) // to update the news data
            setLoading(false)
        } catch (e) {
            setLoading(false)
        }
    }

    // to call fetchNews function when News Screen get mounted
    useEffect(() => {
        fetchNews()
    }, [])

    if (loading) {
        return (
            <View style={styles.screenContainer}>
                <View style={styles.marginContainer}>
                    <SkeletonPlaceholder>
                        {skeltonList.map((item: number) => {
                            return (
                                <SkeletonPlaceholder.Item key={item} alignItems="center" justifyContent='space-between' marginBottom={18} >
                                    <View style={styles.skeletonCard} />
                                </SkeletonPlaceholder.Item>
                            )
                        })}
                    </SkeletonPlaceholder>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.screenContainer}>
            <FlatList
                data={newsData}
                showsVerticalScrollIndicator={false}
                style={styles.marginContainer}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderNewsItem}
            />
        </View>
    )
}

export default NewsScreen

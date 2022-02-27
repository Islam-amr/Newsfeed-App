import React, { useEffect, useState } from 'react'
import { View, FlatList, Dimensions, Text, Image } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import FastImage from 'react-native-fast-image';
import axios from 'axios'

// components import
import NewsItem from '../../components/NewsItem'

// styles import
import styles from './styles'

// apis list import
import apis from '../../utils/apis'

// images import
import images from '../../utils/images';

// colors import
import colors from '../../utils/colors';

// components import
import Button from '../../components/Button';

const { height } = Dimensions.get('window') // to detect the whole mobile height
const skeltonItemsEstimation: number = Math.round(height * 0.9 / 160) - 1 // to estimate how much skeleton item could fit the phone screen
const skeltonList: number[] = Array(skeltonItemsEstimation).fill(null).map((_, i) => i); // initialize sequenced array of the estimated length


const renderNewsItem = ({ item }) => <NewsItem item={item} /> // to avoid anonymous function and re-render on renderItem

const NewsScreen = () => {
    const [newsData, setNewsData] = useState(null) // to store news data 
    const [loading, setLoading] = useState(false) // to handle waiting while api respond
    const [error, setError] = useState(null) // to handle bad request

    // to handle news api call
    const fetchNews = async () => {
        setError(null)
        setLoading(true)
        try {
            const response = await axios.get(apis.FETCH_NEWS)
            setNewsData(response.data.articles) // to update the news data
            setLoading(false)
        } catch (e) {
            setLoading(false)
            setError(e.message)
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

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <View style={styles.marginContainer}>
                    <FastImage source={images.ERROR} style={styles.errorImage} resizeMode={'contain'} tintColor={colors.WHITE} />
                    <Text style={styles.error}>{error}</Text>
                    <Button title={'Retry'} buttonStyle={styles.buttonStyle} onPress={fetchNews} />
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

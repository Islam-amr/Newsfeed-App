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
import SearchInput from '../../components/SearchInput';
import KeyboardDismisser from '../../components/KeyboardDismisser';

const SEARCH_DEBOUNCE_DURATION = 400 //ms
const { height } = Dimensions.get('window') // to detect the whole mobile height
const skeltonItemsEstimation: number = Math.round(height * 0.9 / 160) - 1 // to estimate how much skeleton item could fit the phone screen
const skeltonList: number[] = Array(skeltonItemsEstimation).fill(null).map((_, i) => i); // initialize sequenced array of the estimated length


const renderNewsItem = ({ item }) => <NewsItem item={item} /> // to avoid anonymous function and re-render on renderItem

const NewsScreen = () => {
    const [searchKeyword, setSearchKeyword] = useState('') // to store search keyword
    const [newsData, setNewsData] = useState([]) // to store news data 
    const [loading, setLoading] = useState(false) // to handle waiting while api respond
    const [error, setError] = useState(null) // to handle bad request

    // to handle news api call
    const fetchNews = async (searchKeyword?: string) => {
        setError(null)
        setLoading(true)
        try {
            const response = await axios.get(apis.FETCH_NEWS, {
                params: {
                    q: searchKeyword
                }
            })
            setNewsData(response.data.articles) // to update the news data
            setLoading(false)
        } catch (e) {
            setLoading(false)
            setError(e.message)
        }
    }

    // to call fetchNews function when News Screen get mounted and handle debounce search
    useEffect(() => {
        if (searchKeyword) {
            const searchDebounce = setTimeout(() => {
                fetchNews(searchKeyword)
            }, SEARCH_DEBOUNCE_DURATION)

            return () => clearTimeout(searchDebounce)
        } else {
            fetchNews()
        }
    }, [searchKeyword])

    if (loading) {
        return (
            <KeyboardDismisser>
                <View style={styles.screenContainer}>
                    <SearchInput
                        value={searchKeyword}
                        onChangeText={(text: string) => setSearchKeyword(text)}
                    />
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
            </KeyboardDismisser>
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
        <KeyboardDismisser>
            <View style={styles.screenContainer}>
                <SearchInput
                    value={searchKeyword}
                    onChangeText={(text: string) => setSearchKeyword(text)}
                />
                {newsData.length == 0 ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <FastImage source={images.NO_RESULT} style={{ width: 120, aspectRatio: 1.5 }} tintColor={'white'} resizeMode={'contain'} />
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginTop: 18 }}>No Result Found</Text>
                    </View> :
                    <FlatList
                        data={newsData}
                        showsVerticalScrollIndicator={false}
                        style={styles.marginContainer}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={renderNewsItem}
                    />}
            </View>
        </KeyboardDismisser>
    )
}

export default NewsScreen

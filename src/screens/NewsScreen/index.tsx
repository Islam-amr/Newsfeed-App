import React, { useEffect, useState } from 'react'
import { View, FlatList, Dimensions, Text, RefreshControl } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import FastImage from 'react-native-fast-image';
import axios from 'axios'

// strings import
import STRINGS from '../../utils/strings';

// styles import
import styles from './styles'

// apis list import
import apis from '../../utils/apis'

// images import
import images from '../../utils/images';

// dtos import
import { Article } from '../../utils/dto';

// components import
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';
import KeyboardDismisser from '../../components/KeyboardDismisser';
import NewsItem from '../../components/NewsItem'
import { useTheme } from '@react-navigation/native';

const SEARCH_DEBOUNCE_DURATION: number = 400 //ms
const { height } = Dimensions.get('window') // to detect the whole mobile height
const skeltonItemsEstimation: number = Math.round(height * 0.8 / 160) - 1 // to estimate how much skeleton item could fit the phone screen
const skeltonList: number[] = Array(skeltonItemsEstimation).fill(null).map((_, i) => i); // initialize sequenced array of the estimated length


const renderNewsItem = ({ item }: { item: Article }) => <NewsItem item={item} /> // to avoid anonymous function and re-render on renderItem

const NewsScreen = () => {
    const { colors } = useTheme()
    const [searchKeyword, setSearchKeyword] = useState<string>('') // to store search keyword
    const [newsData, setNewsData] = useState<Article[]>([]) // to store news data 
    const [loading, setLoading] = useState<boolean>(false) // to handle waiting while api respond
    const [refresh, setRefresh] = useState<boolean>(false) // to handle pull to refresh
    const [error, setError] = useState<string | null>(null) // to handle bad request

    // to handle news api call
    const fetchNews = async (searchKeyword?: string, isRefreshing?: boolean) => {
        setError(null)
        isRefreshing ? setRefresh(true) : setLoading(true)
        try {
            const response = await axios.get(apis.FETCH_NEWS, {
                params: {
                    q: searchKeyword
                }
            })
            setNewsData(response.data.articles) // to update the news data
            isRefreshing ? setRefresh(false) : setLoading(false)
        } catch (e) {
            isRefreshing ? setRefresh(false) : setLoading(false)
            setError('Network error')
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
                <View style={[styles.screenContainer, { backgroundColor: colors.primary }]}>
                    <SearchInput
                        value={searchKeyword}
                        onChangeText={(text: string) => setSearchKeyword(text)}
                    />
                    <View style={styles.marginContainer}>
                        <SkeletonPlaceholder speed={1000} highlightColor={colors.text} backgroundColor={colors.border}>
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
            <View style={[styles.errorContainer, { backgroundColor: colors.primary }]}>
                <View style={styles.marginContainer}>
                    <FastImage source={images.ERROR} style={{ width: 120, aspectRatio: 1.5 }} tintColor={colors.background} resizeMode={'contain'} />
                    <Text style={[styles.error, { color: colors.text }]}>{error}</Text>
                    <Button title={STRINGS.t('retry')} buttonStyle={styles.buttonStyle} onPress={fetchNews} />
                </View>
            </View>
        )
    }

    return (
        <KeyboardDismisser>
            <View style={[styles.screenContainer, { backgroundColor: colors.primary }]}>
                <SearchInput
                    value={searchKeyword}
                    onChangeText={(text: string) => setSearchKeyword(text)}
                />
                {newsData.length == 0 ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <FastImage source={images.NO_RESULT} style={{ width: 120, aspectRatio: 1.5 }} tintColor={colors.background} resizeMode={'contain'} />
                        <Text style={{ color: colors.text, fontSize: 18, fontWeight: '700', marginTop: 18 }}>{STRINGS.t('noResult')}</Text>
                    </View> :
                    <FlatList<Article>
                        data={newsData}
                        showsVerticalScrollIndicator={false}
                        style={styles.marginContainer}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={renderNewsItem}
                        refreshControl={
                            <RefreshControl
                                refreshing={refresh}
                                onRefresh={() => fetchNews(searchKeyword, true)}
                                tintColor={colors.background}
                            />
                        }
                    />}
            </View>
        </KeyboardDismisser>
    )
}

export default NewsScreen

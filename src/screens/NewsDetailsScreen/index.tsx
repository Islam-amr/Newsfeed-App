import React from 'react'
import { useTheme } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'

// dtos import
import { Article } from '../../utils/dto'

// styles import
import styles from './styles'

// helpers import
import { linkHandler } from '../../utils/helpers'

// dummy data import
import dummyData from '../../utils/dummyData'

interface HeadAndBodyProps {
    title: string,
    body: string | Date | null,
    isUrl?: boolean
}
const HeadAndBody = (props: HeadAndBodyProps) => {
    const { title, body, isUrl } = props
    const { colors } = useTheme()

    if (!body) {
        return null
    }

    return (
        <View >
            <Text style={[styles.desc, { color: colors.text }]}>{title}</Text>
            <Text onPress={isUrl ? linkHandler.bind(this, body as string) : null} style={[styles.descBody, { color: isUrl ? '#3366BB' : colors.text }]}>{body}</Text>
        </View>
    )
}

const NewsDetailsScreen = (props) => {
    const { colors } = useTheme()
    const newsItem: Article = props.route.params?.item || dummyData

    return (
        <ScrollView style={[styles.screenContainer, { backgroundColor: colors.primary }]}>
            <FastImage source={{ uri: newsItem.urlToImage }} style={styles.articleImage} resizeMode={'contain'} />
            <Text style={[styles.title, { color: colors.text }]}>{newsItem.title}</Text>
            <View style={styles.detailsCon}>
                <HeadAndBody title={'Description'} body={newsItem.description} />
                <HeadAndBody title={'Content'} body={newsItem.content} />
                <HeadAndBody title={'Authored by'} body={newsItem.author} />
                <HeadAndBody title={'Source'} body={newsItem.url} isUrl={true} />
                <HeadAndBody title={'Published at'} body={newsItem.publishedAt} />
            </View>
        </ScrollView>
    )
}

export default NewsDetailsScreen


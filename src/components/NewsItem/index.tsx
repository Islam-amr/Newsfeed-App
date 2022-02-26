import React, { memo } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

// colors import
import colors from '../../utils/colors'

// styles import 
import styles from './styles'

// to handle linear effectiveness  
const LINEAR_START = { x: 0, y: 0.5 }
const LINEAR_END = { x: 0, y: 0.75 }

const NewsItem = ({ item }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
            <Image source={{ uri: item.urlToImage }} style={[{ width: item.urlToImage ? '100%' : '60%' }, styles.newsImage]} />
            <View style={styles.shadedLayerContainer}>
                <LinearGradient start={LINEAR_START} end={LINEAR_END} colors={[colors.TRANSPARENT, colors.DARK_GREY]} style={styles.linearContainer}>
                    <View style={styles.titleContainer}>
                        {item.author && <Text style={styles.author} numberOfLines={1}>Authored by {item.author}</Text>}
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                    </View>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}


// to skip rendering the component if the prev props are simillar to the new props
// reason to use memo here that if the user pulled to refresh and the api responed the same old data,the component won't re-render
export default memo(NewsItem)

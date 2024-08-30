import React, { useRef, useState } from 'react';
import { FlatList, View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
    { id: '1', image: 'image_url_1', title: 'Title 1', subtitle: 'Subtitle 1' },
    { id: '2', image: 'image_url_2', title: 'Title 2', subtitle: 'Subtitle 2' },
    // Add more items
];

const Slide = ({ item }) => (
    <View style={styles.slide}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
);

const Carousel1 = () => {
    const [index, setIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleScroll = (event) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setIndex(slideIndex);
    };

    return (
        <FlatList
            ref={flatListRef}
            data={data}
            renderItem={Slide}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
        />
    );
};

const styles = StyleSheet.create({
    slide: {
        width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: 'gray',
    },
});

export default Carousel1;

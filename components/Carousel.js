import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
    const images=[
        'https://img.freepik.com/premium-vector/laundry-service-room-vector-illustration-washing-drying-machines-with-cleansers-shelf-iron-ironing-board-clean-clothes_313242-429.jpg?w=2000',
        'https://media.istockphoto.com/id/838028306/vector/maid-loading-laundry-washing-machine-with-cloth.jpg?s=612x612&w=0&k=20&c=5JQlTmn0m8xbqMqMh-c8Ro2glVWZKC_tQ3qVfD4PeVc='
    ]
    return (
        <View>
            <SliderBox
                images={images}
                autoplay
                ciecleLoop
                dotColor={'#13274f'}
                inactiveDotColor='#90a4ae' 
                imageComponentStyle={{
                    borderRadius:20,
                    width:'94%'
                }}
            />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({})
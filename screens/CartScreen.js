import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from 'react-native-vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { decrementQuantity, incrementQuantity } from '../CartReducer';
import { decrementQty, increamentQty } from '../ProductReducer';

const CartScreen = () => {
    const cart = useSelector((state) => (state.cart.cart))
    const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();
    return (
        <>
        <ScrollView style={{}}>
            {total === 0 ? (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginTop: 40 }}> Your Cart ids enmpty</Text>
                </View>
            ) : (
                <>
                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons onPress={() => navigation.goBack()} name='arrow-back' size={24} color='black' />
                        <Text>Your Bucket</Text>
                    </View>

                    <Pressable style={{ backgroundColor: 'white', borderRadius: 12, marginLeft: 10, marginRight: 10, padding: 14 }}>
                        {cart.map((item, index) => (
                            <View 
                            style={{ 
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                justifyContent: 'space-between',
                                marginVertical:12
                             }}
                                key={index}>
                                <Text style={{ width: 100, fontSize: 16, fontWeight: '500' }}>{item.name}</Text>

                                {/* - + button */}
                                <Pressable
                                    style={{
                                        flexDirection: 'row',
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        alignItems: 'center',
                                        borderColor: '#BEBEBE',
                                        borderWidth: 0.5,
                                        borderRadiud: 10
                                    }}>
                                    {/* Negative - */}
                                    <Pressable
                                        onPress={() => {
                                            dispatch(decrementQuantity(item)); // cart
                                            dispatch(decrementQty(item)) //product
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                color: '#088f8f',
                                                paddingHorizontal: 6,
                                                fontWeight: '600',
                                            }}>
                                            -
                                        </Text>
                                    </Pressable>

                                    {/* Quantity */}
                                    <Pressable>
                                        <Text
                                            style={{
                                                fontSize: 19,
                                                color: '#088f8f',
                                                paddingHorizontal: 8,
                                                fontWeight: '600'
                                            }}>
                                            {item.quantity}
                                        </Text>
                                    </Pressable>

                                    {/* Positive + */}
                                    <Pressable
                                        onPress={() => {
                                            dispatch(incrementQuantity(item));
                                            dispatch(increamentQty(item));
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                color: '#088f8f',
                                                paddingHorizontal: 6,
                                                fontWeight: '600',
                                            }}>
                                            +
                                        </Text>
                                    </Pressable>

                                </Pressable>

                                <Text style={{ fontSize: 16, fontWeight: '500' }}>
                                    ${item.price * item.quantity}
                                </Text>
                            </View>
                        ))}
                    </Pressable>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginTop:30}}>
                            Billing details
                        </Text>
                        
                        <View
                        style = {{
                            backgroundColor:'white',
                            borderRadius:7,
                            padding:10,
                            marginTop:15,
                        }}
                        >
                            <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between',
                            }}
                            >
                                <Text 
                                style={{
                                    fontSize:18,
                                    fontWeight:'400',
                                    color:'gray'
                                }}
                                >
                                    Item Total
                                </Text>
                                <Text
                                style = {{
                                    fontSize:18,
                                    fontWeight:'400'
                                }}
                                >
                                    ${total}
                                </Text>
                            </View>

                            <View 
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between',
                                marginVertical:8
                            }}
                            >
                                <Text
                                style={{
                                    fontSize:18,
                                    fontWeight:'400',
                                    color:'gray'
                                }}
                                >
                                    Delivery Fee | 1.2KM
                                </Text>

                                <Text 
                                style={{
                                    fontSize:18,
                                    fontWeight:'400',
                                    color:'#088f8f'
                                }}
                                >
                                    FREE
                                </Text>
                            </View>

                            <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                            }}
                            >
                                <Text
                                style={{
                                    fontSize:18,
                                    fontWeight:'500',
                                    color:'gray'
                                }}
                                >
                                    Free Delivery on your order
                                </Text>
                            </View>
                            
                            <View
                            style = {{
                                borderColor:'gray',
                                height:1,
                                borderWidth: 0.5,
                                marginTop: 10
                            }}
                            />

                            <View
                            style = {{
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between',
                                marginVertical: 10,
                            }}
                            >
                                <Text 
                                style={{
                                    fontSize:18,
                                    fontWeight:'500',
                                    color:'gray'
                                }}
                                >
                                    selected Date
                                </Text>
                                <Text 
                                style={{
                                    fontSize:18,
                                    fontWeight:'400',
                                    color:'#088f8f'
                                }}
                                >
                                    {/* {route.params.pickUpDate} */}
                                </Text>
                            </View>

                            <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between'
                            }}
                            >
                                <Text
                                style = {{
                                    fontSize:18,
                                    fontWeight:'500',
                                    color:'gray'
                                }}
                                >
                                    No of Days
                                </Text>

                                <Text
                                style={{
                                    fontSize:18,
                                    fontWeight:'400',
                                    color:'#088f8f'
                                }}
                                >
                                    {route.params.no_Of_days}
                                </Text>

                            </View>
                            
                            <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between',
                                marginVertical:10,
                            }}
                            >
                                <Text
                                style={{
                                    fontSize:18,
                                    fontWeight:'500',
                                    color:'gray'
                                }}
                                >
                                    selected Pick Up Time
                                </Text>

                                <Text
                                style = {{
                                    fontSize:18,
                                    fontWeight:'400',
                                    color:'#088f8f'
                                }}
                                >
                                    {route.params.selectedTime}
                                </Text>

                            </View>

                            <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between',
                                marginVertical:8,
                            }}
                            >
                                <Text
                                style = {{
                                    fontSize:18,
                                    fontWeight:'bold',
                                }}
                                >
                                    To Pay
                                </Text>
                                <Text
                                style = {{
                                    fontSize:18,
                                    fontWeight:'bold',
                                }}
                                >
                                    {total + 95}
                                </Text>

                            </View>

                        </View>

                    </View>
                </>
            )}
        </ScrollView>

        {total === 0 ? null : (
                <Pressable
                    style={{
                        backgroundColor: '#088f8f',
                        padding: 10,
                        marginTop: 'auto',
                        marginBottom: 30,
                        margin: 15,
                        borderRadius: 7,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>{cart.length} items |  $ {total} </Text>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'white', marginVertical: 6 }}>extra charges might apply</Text>
                    </View>

                    <Pressable 
                    // onPress={proceedToCart}
                    >
                        <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>Place Order</Text>
                    </Pressable>
                </Pressable>
            )}
        </>
    )
}

export default CartScreen

const styles = StyleSheet.create({})
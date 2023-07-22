import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigation = useNavigation();
    return (
        <SafeAreaView 
        style={{ 
            flex: 1, 
            backgroundColor: 'white', 
            alignItems: 'center', 
            padding: 10 
            }}
        >
            <KeyboardAvoidingView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                    <Text style={{ fontSize: 20, color: '#662d91', fontWeight: 'bold' }}>Sign In</Text>

                    <Text style={{ fontSize: 18, marginTop: 8, fontWeight: '600' }}>Sign In to your account</Text>
                </View>
                <View style={{ marginTop: 50 }}>
                    {/* Email */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name='email-outline' size={24} color='black' />
                        <TextInput
                            placeholder='Email'
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholderTextColor='black'
                            style={{
                                fontSize: email ? 18 : 18,
                                borderBottomWidth: 1,
                                borderBottomColor: 'gray',
                                width: 300,
                                marginLeft: 10,
                                marginVertical: 10
                            }}
                        />
                    </View>
                    {/* Password */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='key-outline' size={24} color='black' />
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            placeholder='Password'
                            placeholderTextColor='black'
                            style={{
                                fontSize: password ? 18 : 18,
                                borderBottomWidth: 1,
                                borderBottomColor: 'gray',
                                width: 300,
                                marginLeft: 10,
                                marginVertical: 10
                            }}
                        />
                    </View>

                    <Pressable
                        style={{
                            width: 200,
                            backgroundColor: '#318ce7',
                            padding: 15, borderRadius: 7,
                            marginTop: 50,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    >
                        <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Login</Text>
                    </Pressable>

                    <Pressable onPress={()=>navigation.navigate('Register')} 
                    style={{
                         marginTop: 20
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 17, color: 'gray',
                                fontWeight: '500'
                            }}
                        > Dont have accoungt? sign up
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
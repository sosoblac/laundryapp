import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput,Pressable, Alert } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Ionicons } from 'react-native-vector-icons';
import { Feather } from 'react-native-vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
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

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <Text style={{ fontSize: 20, color: '#662d91', fontWeight: 'bold' }}>
                        Register
                    </Text>

                    <Text style={{ fontSize: 18, marginTop: 8, fontWeight: '600' }}>
                        Create a new account
                    </Text>
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
                    {/* Phone number */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name='phone' size={24} color='black' />
                        <TextInput
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                            placeholder='Phone No'
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

                    {/* Register Button */}

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
                        <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Register</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Login')}
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
                        > Already have an account? Sign in
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})
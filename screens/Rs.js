import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput,Pressable, Alert, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Ionicons } from 'react-native-vector-icons';
import { Feather } from 'react-native-vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
      const authenticate = async ()=>{
        axios.post()
      }
      authenticate()
    }, [third])
    

    return (
        <SafeAreaView
            style={styles.container}
        >
            <TextInput
            style={styles.input}
            placeholder='Username'
            autoCapitalize='none'
            onChangeText={(text)=>setUsername(text)}
            />
            <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize='none'
            onChangeText={(text)=>setEmail(text)}
            />
            <TextInput
            style={styles.input}
            placeholder='Password'
            autoCapitalize='none'
            secureTextEntry={true}
            onChangeText={(text)=>setPassword(text)}
            />
            <View style={styles.button}>
            <Button title='REGISTER' onPress={()=>setIsSubmit(true)}/>
            </View>
            {/* <Text>RS SCREEN</Text> */}
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    input:{
        width:'55%',
        borderBottomWidth:1,
    },
    button:{
        marginTop:20
    }
})
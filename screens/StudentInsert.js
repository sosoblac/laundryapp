import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput,Pressable, Alert, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Ionicons } from 'react-native-vector-icons';
import { Feather } from 'react-native-vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const StudentInsertScreen = () => {
    const [RollNo, setRollNo] = useState('');
    const [StudentName, setStudentName] = useState('')
    const [Course, setCourse] = useState('')

    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
      const authenticate = async ()=>{
        axios.post()
      }
      authenticate()
    }, [])
    

    return (
        <SafeAreaView
            style={styles.container}
        >
            <TextInput
            style={styles.input}
            placeholder='Row Number'
            autoCapitalize='none'
            onChangeText={(text)=>setRollNo(text)}
            />
            <TextInput
            style={styles.input}
            placeholder='StudentName'
            autoCapitalize='none'
            onChangeText={(text)=>setEmail(text)}
            />
            <TextInput
            style={styles.input}
            placeholder='Course'
            autoCapitalize='none'
            onChangeText={(text)=>setCourse(text)}
            />
            <View style={styles.button}>
            <Button title='REGISTER' onPress={()=>setIsSubmit(true)}/>
            </View>
            {/* <Text>RS SCREEN</Text> */}
        </SafeAreaView>
    )
}

export default StudentInsertScreen;

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
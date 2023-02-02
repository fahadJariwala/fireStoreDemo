import React from 'react'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native';
import styles from './styles/FirstScreenStyle';
import { useEffect, useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
export default function FirstScreen({ route }) {
    console.log(route.params.data);
    let data = route.params.data
    useEffect(() => {

    }, []);

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const navigation = useNavigation();
    const update = (id) => {
        firestore()
            .collection('User')
            .doc(id)
            .update({
                fname: fname,
                lname: lname
            })
            .then(() => {
                console.log('User updated!');
            });

        navigation.navigate('Dashboard')
    }
    return (
        <View style={styles.container}>
            <Text>Update  Screen</Text>
            <View >
                <TextInput style={styles.input} defaultValue={data.data.fname}
                    onChangeText={(val) => setFname(val)} />
                <TextInput style={styles.input} defaultValue={data.data.lname}
                    onChangeText={(val) => setLname(val)}
                />
                <Button title="Submit " onPress={() => update(data.id)} />
            </View>
            {/* <Button
                title="Go to Dashboard"
                onPress={() => navigation.navigate('Dashboard')}
            /> */}
        </View>
    );
}



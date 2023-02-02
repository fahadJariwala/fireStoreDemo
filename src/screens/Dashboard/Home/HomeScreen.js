import * as React from 'react';
import {View, Text, FlatList, Image, Button} from 'react-native';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styles from './Styles/HomeStyle';
import firestore from '@react-native-firebase/firestore';
import {getPixelSizeForLayoutSize} from 'react-native/Libraries/Utilities/PixelRatio';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen({route}) {
  const navigation = useNavigation();
  const [list, setList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    firestore()
      .collection('User')
      .onSnapshot(querySnapshot => {
        const array = [];
        querySnapshot.forEach(users => {
          array.push({data: users.data(), id: users.id});
        });
        setList([...list, ...array]);
      });
  };

  // const removeItem = (Id) => {

  // }
  console.log('array ', list);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.userList}
        data={list}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.userDetailRow,
              index + 1 === list.length && styles.lastRow,
            ]}>
            <View style={styles.userDetail}>
              <Text style={styles.userName}>{item.data.fname}</Text>
              <Text style={styles.userAge}>{item.data.lname}</Text>
            </View>
            <View>
              <Button
                title="Update"
                onPress={() => {
                  navigation.navigate('update', {data: item});
                }}
              />
              <Button
                title="Delete"
                onPress={() => {
                  firestore()
                    .collection('User')
                    .doc(item.id)
                    .delete()
                    .then(() => {
                      console.log('User deleted!');
                    });
                }}
              />
            </View>
          </View>
        )}
        keyExtractor={index => index.toString()}
      />
    </View>
  );
}

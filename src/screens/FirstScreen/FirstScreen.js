import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import firestore, {firebase} from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useDispatch} from 'react-redux';
import {initApp} from '../../redux/actions';
import * as ImagePicker from 'react-native-image-picker';
import styles from './Styles/FirstScreenStyle';
import {set} from 'react-native-reanimated';
import * as Progress from 'react-native-progress';
export default function FirstScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState('');
  const [transferred, setTransferred] = useState(0);
  const navigation = useNavigation();
  const add = () => {
    firestore().collection('User').add({
      fname: fname,
      lname: lname,
    });
    setFname('');
    setLname('');
    navigation.navigate('Dashboard');
  };
  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        console.log('source= ', source);
        setImage(source);
      }
    });
  };
  const downloadImage = () => {};

  const uploadImage = async () => {
    const {uri} = image;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    setUploading(true);
    setTransferred(0);
    setUrl('Getting Download Link...');
    const task = storage().ref(filename).putFile(uploadUri);
    // set progress state
    task.on('state_changed', snapshot => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
      );
    });
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!',
    );
    setImage(null);
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View>
        <TextInput
          placeholder="Enter First Name"
          style={styles.input}
          onChangeText={val => setFname(val)}
        />
        <TextInput
          placeholder="Enter Last Name"
          style={styles.input}
          onChangeText={val => setLname(val)}
        />
        <TouchableOpacity onPress={selectImage} style={styles.selectImage}>
          <Text>Select Image</Text>
        </TouchableOpacity>
        {image !== null ? (
          <Image
            source={{uri: image.uri}}
            style={{height: 100, width: 160, margin: 10}}
          />
        ) : null}

        {uploading ? (
          <View>
            <Progress.Bar progress={transferred} width={300} />
            <TouchableOpacity>
              <Text>{url}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={uploadImage} style={styles.uploadImage}>
            <Text>Upload image</Text>
          </TouchableOpacity>
        )}

        <Button title="Submit " onPress={() => add()} />
      </View>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}

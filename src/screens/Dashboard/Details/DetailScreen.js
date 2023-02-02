import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button, View } from 'react-native';
import styles from './Styles/DetailsStyle';

export default function DetailScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.navigate('firstScreen')}
      />
    </View>
  );
}

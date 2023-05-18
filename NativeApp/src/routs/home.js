import { StyleSheet, View, Button } from 'react-native';
import Header from '../components/header';
import List from '../components/list';

export default function HomeScrean( {navigation}) {
    return (
      <View style={styles.container}>
        <Header/>
        <Button 
            title="Go to add" 
            onPress={() =>
                navigation.navigate('AddScrean')
        }/>
        <List/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
    },
  });
import React, {useState} from "react";
import { StyleSheet, View, TextInput, Button  } from "react-native";

export default function AddScrean(prop) {
    const [word, setWord] = useState('');
    const [description,setDescription] = useState('');

    return(
        <View style={styles.container}>
            <TextInput
                placeholder="New word"
                onChangeText={newText => setWord(newText)}
                defaultValue={text}
            />
            <TextInput
                placeholder="Description"
                onChangeText={newText => setDescription(newText)}
                defaultValue={text}
            />
            <Button
                title="Create"
                
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'linear-gradient(180deg, rgba(61, 71, 215, 0.8) 2%, #9245EC 100%)',
        color: '#FFF',
        width: '100%',
        height: '40%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
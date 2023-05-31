import React, {useState} from "react";
import { StyleSheet, View, TextInput, Button  } from "react-native";
import { wordsData } from "../components/info.js";

export default function AddScrean(prop) {
    const [word, setWord] = useState('');
    const [description, setDescription] = useState('');

    const newWord = {
        word: word,
        description: description
    };

    const handleAddWord = () => {
        console.log(wordsData)
        console.log(newWord)
        console.log('до добавления')
        wordsData.push(newWord)
        console.log(wordsData)
        console.log('После')
    }

    return(
        <View style={styles.container}>
            <TextInput
                placeholder="New word"
                value={word}
                onChangeText={text => setWord(text)}
            />
            <TextInput
                placeholder="Description"
                value={description}
                onChangeText={text => setDescription(text)}
            />
            <Button
                title="Create"
                onPress={() => handleAddWord()}
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
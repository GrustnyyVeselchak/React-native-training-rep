import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ExampleComponent from "../../logic";


export default function Header(prop) {
    return(
        <View style={styles.container}>
            <Text>
                Learning language app
            </Text>
            <ExampleComponent/>
        </View>
    )
}

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
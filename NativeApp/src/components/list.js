import React from "react";
import { Text, ScrollView, View, Button, } from "react-native";

import { wordsData } from "./info";

export default function List(prop){
    return (
        <View>
            <ScrollView>
                {wordsData.map((row) => (
                    <View key={row}>
                        <Text>
                            {row.text}
                        </Text>
                        <Text>
                            {row.description}
                        </Text>
                        <Button title="chagne"/>
                        <Button title="delete"/>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}


import React from "react";
import { View, Text, Button,  } from "react-native";

export default function Header(prop) {
    return(
        <View>
            <Text>
                Learning language app
            </Text>
            <Button  title="+"/>
        </View>
    )
}
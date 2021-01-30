import React from "react";
import { View } from "react-native";
import Button from "../components/Button";
import { auth } from "firebase";

export default () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Button
                text="Log out"
                onPress={() => {
                    auth().signOut();
                }}
            />
        </View>
    );
};

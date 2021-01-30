import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Colors from "../constants/Colors";

export default ({
    labelStyle,
    label,
    errorMessage,
    inputStyle,
    text,
    onChangeText,
    ...inputProps
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={labelStyle}>{label}</Text>
                <Text style={styles.error}>
                    {errorMessage && `*${errorMessage}`}
                </Text>
            </View>
            <TextInput
                underlineColorAndroid="transparent"
                selectionColor="transparent"
                style={[styles.input, { outline: "none" }, inputStyle]}
                value={text}
                onChangeText={onChangeText}
                {...inputProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        margin: 4,
    },
    labelContainer: { flexDirection: "row", marginBottom: 4 },
    error: {
        color: Colors.red,
        fontSize: 12,
        marginLeft: 4,
    },
    input: {
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 1,
        paddingLeft: 4,
        height: 32,
        fontSize: 24,
        color: Colors.black,
    },
});

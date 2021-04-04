import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {THEME} from "../../../constants/theme";


export const Navbar = ({title}) => {
    return <View style={styles.navbar}>
        <Text style={styles.text}>{title}</Text>
    </View>
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        backgroundColor: THEME.MAIN_COLOR,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom:20
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});

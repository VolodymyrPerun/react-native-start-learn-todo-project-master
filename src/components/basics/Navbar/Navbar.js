import React from 'react';
import {StyleSheet, View} from "react-native";
import {THEME} from "../../../constants/theme";
import {AppText} from "../../ui/AppText";


export const Navbar = ({title}) => {
    return <View style={styles.navbar}>
        <AppText style={styles.text}>{title}</AppText>
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

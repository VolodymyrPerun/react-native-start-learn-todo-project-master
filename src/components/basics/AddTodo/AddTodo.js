import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View, Keyboard} from "react-native";
import {AntDesign} from '@expo/vector-icons';


export const AddTodo = ({onSubmit}) => {

    let [value, setValue] = useState('');

    return <View style={styles.container}>
        <TextInput style={styles.input}
                   value={value}
                   placeholder={'Введіть завдання...'}
                   onChangeText={setValue}
                   autoCorrect={false}
                   autoCapitalize={'none'}
                   keyboardType={"twitter"}
        />
        <AntDesign.Button name={"pluscircleo"}
                            backgroundColor={"#3b5998"}
                            onPress={() => {
                                if (value.trim()) {
                                    onSubmit(value);
                                    setValue('');
                                    Keyboard.dismiss();
                                } else {
                                    Alert.alert('Поле не може бути порожнім')
                                }
                            }}
        > Добавити </AntDesign.Button>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '70%',
        fontSize: 20,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        padding: 10
    }
});

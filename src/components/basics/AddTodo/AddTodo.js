import React, {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from "react-native";


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
        <Button title={'Добавити'}
                onPress={() => {
                    if (value.trim()) {
                        onSubmit(value);
                        setValue('');
                    } else {
                        Alert.alert('Поле не може бути порожнім')
                    }
                }}/>
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

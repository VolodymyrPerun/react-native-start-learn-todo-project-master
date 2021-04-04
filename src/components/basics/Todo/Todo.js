import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppTextBold} from "../../ui/AppTextBold";


export const Todo = ({todo, removeTodo, onOpen}) => {
    return (
        <TouchableOpacity activeOpacity={0.5}
                          onPress={() => onOpen(todo.id)}
                          onLongPress={() => removeTodo(todo.id)}
        >
            <View style={styles.todo}>
                <AppTextBold>{todo.title}</AppTextBold>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
});

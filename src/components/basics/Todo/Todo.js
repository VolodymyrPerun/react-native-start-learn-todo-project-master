import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export const Todo = ({todo, removeTodo, onOpen}) => {
    return (
        <TouchableOpacity activeOpacity={0.5}
                          onPress={() => onOpen(todo.id)}
                          onLongPress={() => removeTodo(todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
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

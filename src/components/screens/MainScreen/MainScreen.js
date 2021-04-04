import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {AddTodo} from "../../basics/AddTodo/AddTodo";
import {Todo} from "../../basics/Todo/Todo";


export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    let content = (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) => (
                <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>
            )}
        />
    );

    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image
                    style={styles.image}
                    source={require('../../../../assets/no-items.png')}
                />
                {/* <Image
          style={styles.image}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
          }}
        /> */}
            </View>
        );
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo}/>

            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});

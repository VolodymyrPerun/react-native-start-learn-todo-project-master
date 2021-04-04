import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Navbar} from "./src/components/basics/Navbar/Navbar";
import {MainScreen} from "./src/components/screens/MainScreen/MainScreen";
import {TodoScreen} from "./src/components/screens/TodoScreen/TodoScreen";


export default function App() {

    const [todos, setTodos] = useState([]);
    const [todoId, setTodoId] = useState(null);

    const addTodo = title => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            }
        ]);
    };

    const removeTodo = id => {
        const todo = todos.find(t => t.id === id);
        Alert.alert(
            'Видалення элементу',
            `Ви впевнені, що бажаєте видалити "${todo.title}"?`,
            [
                {
                    text: 'Відмінити',
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: () => {
                        setTodoId(null);
                        setTodos(prev => prev.filter(todo => todo.id !== id));
                    }
                }
            ],
            { cancelable: false }
        )
    };

    const updateTodo = (id, title) => {
        setTodos(old =>
            old.map(todo => {
                if (todo.id === id) {
                    todo.title = title;
                }
                return todo;
            })
        );
    };

    let content = <MainScreen
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        openTodo={setTodoId}/>;

    if (todoId) {
        content = <TodoScreen
            goBack={() => setTodoId(null)}
            onRemove={removeTodo}
            todo={todos.find(todo => todo.id === todoId)}
            onSave={updateTodo}
        />;
    }


    return (
        <View>
            <Navbar title={"Home"}/>
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    }
});


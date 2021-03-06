import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {THEME} from '../../../constants/theme';
import {AppCard} from "../../ui/AppCard";
import {EditModal} from "../../basics/EditModal/EditModal";
import {AppTextBold} from "../../ui/AppTextBold";
import {FontAwesome} from '@expo/vector-icons';
import {AppButton} from "../../ui/AppButton";


export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        onSave(todo.id, title);
        setModal(false);
    };

    return (
        <View style={styles.container}>
            <EditModal visible={modal}
                       value={todo.title}
                       onCancel={() => setModal(false)}
                       onSave={saveHandler}
            />

            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <AppButton
                    onPress={() => onRemove(todo.id)}
                    color={THEME.DANGER_COLOR}
                >
                    <FontAwesome name={'remove'} size={20} color={'#fff'}/>
                </AppButton>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button color={THEME.GREY_COLOR} title={'Назад'} onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button color={THEME.DANGER_COLOR}
                            title={'Удалить'}
                            onPress={() => onRemove(todo.id)}
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        //alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }
});

import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';
import { THEME } from '../../constants/theme';


export const EditModal = ({ visible, onCancel, value,  onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {

    if (title.trim().length < 3) {
      Alert.alert(
          'Помилка!',
          `Мінімальна довжина назви 3 символи. Зараз ${
              title.trim().length
          } символів.`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={visible} animationType={'slide'} transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder={'Введіть назву'}
          autoCapitalize={'none'}
          autoCorrect={false}
          maxLength={64}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <Button
            title={'Відмінити'}
            onPress={onCancel}
            color={THEME.DANGER_COLOR}
          />
          <Button title={'Зберегти'}  onPress={saveHandler}/>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%'
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

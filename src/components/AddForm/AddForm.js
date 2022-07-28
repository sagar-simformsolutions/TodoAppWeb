import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Platform,
  Image,
  Text,
} from 'react-native';
import {styles} from './AddFormStyles';
import plusImage from '../../assets/plus.png';

const AddForm = props => {
  const [currentValue, setCurrentValue] = useState('');

  const submitForm = () => {
    if (currentValue !== '') {
      props.addTodo(currentValue);
      setCurrentValue('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.addFormContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TextInput
        style={styles.inputField}
        value={currentValue}
        onChangeText={setCurrentValue}
        placeholder="I want to..."
        onSubmitEditing={submitForm}
      />
      <Pressable style={styles.addButton} onPress={submitForm}>
        <Image
          source={require('../../assets/plus.png')}
          style={styles.iconStyles}
        />
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default AddForm;

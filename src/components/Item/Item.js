import {View, Text, Pressable, Image} from 'react-native';
import {styles} from './ItemStyles';
import React from 'react';

const Item = props => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.itemCheckbox}
        onPress={() => props.changeTodoState(props.id)}
        hitSlop={10}>
        {props.state === 'todo' ? (
          <Image
            source={require('../../assets/unchecked.png')}
            style={styles.iconStyles}
          />
        ) : (
          <Image
            source={require('../../../src/assets/checked.png')}
            style={styles.iconStyles}
          />
        )}
      </Pressable>
      <Text
        style={[
          styles.itemText,
          props.state === 'done' && styles.itemTextChecked,
        ]}>
        {props.text}
      </Text>
      <Pressable
        style={[
          styles.trashButton,
          props.state === 'done' && styles.trashButtonDone,
        ]}
        onPress={() => props.trashTodo(props.id)}
        hitSlop={10}>
        <Image
          source={require('../../../src/assets/trash.png')}
          style={styles.iconStyles}
        />
      </Pressable>
    </View>
  );
};

export default Item;

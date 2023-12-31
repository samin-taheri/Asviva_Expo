import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { primaryColor } from '../global';

interface TextInputComponentProps {
  isVisible: boolean;
  onToggle: () => void;
  onSelectNickname: (selectedNickname: string) => void;
}

const NumberSelectorComponentAndroid: React.FC<TextInputComponentProps> = ({
  isVisible,
  onToggle,
  onSelectNickname,
}) => {
    const [inputText, setInputText] = useState<string>('');
    const [selectedNickname, setsSlectedNickname] = useState<string>('');

  const handleTextInputChange = (text: string) => {
    setInputText(text);
    setsSlectedNickname(selectedNickname);
  }

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onToggle}
      backdropOpacity={0.5}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Select a Number:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleTextInputChange}
          value={inputText}
          placeholder="Select a Number"
          keyboardType='numeric'
        />
          <TouchableOpacity style={styles.loginButton} onPress={() => onSelectNickname(inputText)}>
          <Text style={styles.buttonText}>Select</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25
  },
  textInput: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 12
  },
  loginButton: {
    width: '100%',
    height: 45,
    backgroundColor: primaryColor,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NumberSelectorComponentAndroid;

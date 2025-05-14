import styles from "../styles";
import contactService from "../services/contact";

import { Button, Input } from "react-native-elements";
import { View, SafeAreaView, Alert } from 'react-native';
import { useState } from "react";

function ContactRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSave = async () => {
    try {
      const newContact = { name, email, number };
      await contactService.createContact(newContact);
      Alert.alert("Sucesso", "Contato salvo com sucesso.");
      setName('');
      setEmail('');
      setNumber('');
    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar contato.");
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ gap: 12 }}>
        <Input
          label='Nome'
          value={name}
          onChangeText={setName}
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}
        />
        <Input
          label='E-mail'
          value={email}
          onChangeText={setEmail}
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}
        />
        <Input
          label='Telefone'
          value={number}
          onChangeText={setNumber}
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}
        />
        <Button
          title='Salvar'
          onPress={handleSave}
        />
      </View>
    </SafeAreaView>
  );
}

export default ContactRegister;

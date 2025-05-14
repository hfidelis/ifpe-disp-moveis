import styles from "../styles";

import { useRoute } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import { View, SafeAreaView, Alert } from 'react-native';
import { useState } from "react";

import contactService from "../services/contact";

function ContactEdit({ navigation }) {
  const route = useRoute();
  const { user } = route.params;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [number, setNumber] = useState(user.number);

  const handleUpdate = async () => {
    try {
      await contactService.updateContact({
        id: user.id,
        name,
        email,
        number
      });
      Alert.alert("Sucesso", "Contato atualizado com sucesso.");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha ao atualizar contato.");
    }
  };

  const handleDelete = async () => {
    try {
      await contactService.deleteContact(user.id);
      Alert.alert("Contato removido", "O contato foi excluído com sucesso.");
      navigation.navigate("contacts");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha ao excluir contato.");
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
          title='Alterar'
          onPress={handleUpdate}
        />
        <Button
          title='Excluir'
          buttonStyle={{ backgroundColor: 'red' }}
          onPress={handleDelete}
        />
      </View>
    </SafeAreaView>
  );
}

export default ContactEdit;

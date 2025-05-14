import styles from '../styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

import { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';

import contactService from '../services/contact';

function Contacts({ navigation }) {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await contactService.getContacts();
      setContacts(response);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao carregar contatos.');
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchContacts);
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: '#327da8',
          width: '100%',
          height: 100,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}
      >
        <AntDesign
          name="arrowleft"
          size={32}
          color="white"
          style={{ marginLeft: 20 }}
          onPress={() => navigation.navigate('login')}
        />
        <Text
          style={{ color: 'white', fontWeight: '600' }}
        >
          Lista de Contatos
        </Text>
        <AntDesign
          name="plus"
          size={32}
          color="white"
          style={{ marginRight: 20 }}
          onPress={() => navigation.navigate('contact-register')}
        />
      </View>

      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: contacts.length === 0 ? 'center' : 'flex-start',
          paddingVertical: 20
        }}
      >
        {contacts.length === 0 ? (
          <Text style={{ fontSize: 16, color: '#666' }}>Sem contatos adicionados</Text>
        ) : (
          contacts.map((user, index) => (
            <TouchableOpacity
              key={`${user.name}${index}`}
              style={{ padding: 12, gap: 14, flexDirection: 'row', alignItems: 'center' }}
              onPress={() => navigation.navigate('contact-edit', { user })}
            >
              <FontAwesome
                name="user-circle-o"
                size={62}
                color="black"
              />
              <View style={{ flexDirection: 'column' }}>
                <Text>{user.name}</Text>
                <Text>{user.number}</Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contacts;

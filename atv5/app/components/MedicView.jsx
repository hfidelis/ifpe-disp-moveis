import { useEffect, useState } from 'react';
import { View, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { Avatar, Icon, ListItem, Text } from '@rneui/themed';
import { primary, white } from '../styles/colors';
import doctorService from '../services/doctor';

export default function HomeScreen() {
  const categories = [
    { name: 'Consultation', icon: 'people-outline' },
    { name: 'Dentist', icon: 'medkit-outline' },
    { name: 'Cardiologist', icon: 'heart-half-outline' },
    { name: 'Hospital', icon: 'business-outline' },
    { name: 'Emergency', icon: 'bandage-outline' },
    { name: 'Laboratory', icon: 'flask-outline' },
  ];

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    doctorService.getTopDoctors()
      .then((data) => setDoctors(data))
      .catch(() => setError("Unable to load top doctors. Please try again later."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: white }}>
      <View
        style={{
          padding: 24,
          backgroundColor: primary,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 16
        }}>
          <Avatar
            rounded
            size={60}
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          />
          <View>
            <Text style={{ color: white, fontSize: 16 }}>Welcome</Text>
            <Text h4 h4Style={{ color: white, fontWeight: 'bold' }}>Dani Martinez</Text>
          </View>
        </View>

        <View style={{ marginTop: 24 }}>
          <TextInput
            placeholder="Search doctor"
            style={{
              backgroundColor: white,
              borderRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 10,
              fontSize: 16
            }}
          />
          <Icon
            name="search"
            type="feather"
            size={20}
            color="#888"
            containerStyle={{
              position: 'absolute',
              right: 30,
              top: 12
            }}
          />
        </View>
      </View>

      <View style={{ padding: 24 }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 15
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Categories</Text>
          <Text style={{ color: primary }}>Show All</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}>
          {categories.map(cat => (
            <View
              key={cat.name}
              style={{
                width: '30%',
                padding: 10,
                marginBottom: 20,
                alignItems: 'center',
                backgroundColor: '#f3f4f6',
                borderRadius: 10
              }}
            >
              <Icon name={cat.icon} type="ionicon" size={30} color={primary} />
              <Text style={{ marginTop: 8, textAlign: 'center' }}>{cat.name}</Text>
            </View>
          ))}
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Top doctors</Text>

        {loading && <ActivityIndicator size="small" color={primary} />}
        {error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}

        {!loading && !error && (
          <ScrollView style={{ maxHeight: 300 }}>
            {doctors.map((doc) => (
              <ListItem
                key={doc.name}
                bottomDivider
                containerStyle={{
                  borderRadius: 10,
                  marginBottom: 10,
                  backgroundColor: '#f9fafb'
                }}
              >
                <Avatar rounded source={{ uri: doc.uri }} />
                <ListItem.Content>
                  <ListItem.Title style={{ fontWeight: 'bold' }}>{doc.name}</ListItem.Title>
                  <ListItem.Subtitle>{doc.specialty}</ListItem.Subtitle>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <Icon name="star" type="ionicon" size={16} color="#facc15" />
                    <Text style={{ marginLeft: 5, color: '#0b0b0b50' }}>
                      {doc.rating} ({doc.reviews} Reviews)
                    </Text>
                  </View>
                </ListItem.Content>
              </ListItem>
            ))}
          </ScrollView>
        )}
      </View>
    </ScrollView>
  );
}

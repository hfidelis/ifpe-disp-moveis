import { View, TextInput, ScrollView } from 'react-native';
import { Avatar, Icon, ListItem, Text } from '@rneui/themed';
import { primary, white } from '../styles/colors';

export default () => {
  const categories = [
    { name: 'Consultation', icon: 'people-outline' },
    { name: 'Dentist', icon: 'medkit-outline' },
    { name: 'Cardiologist', icon: 'heart-half-outline' },
    { name: 'Hospital', icon: 'business-outline' },
    { name: 'Emergency', icon: 'bandage-outline' },
    { name: 'Laboratory', icon: 'flask-outline' },
  ];

  const doctors = [
    {
      name: 'dr. Olivia Wilson',
      specialty: 'Consultant – Physiotherapy',
      rating: 4.9,
      reviews: 37,
      uri: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'dr. Jonathan Patterson',
      specialty: 'Consultant – Internal Medicine',
      rating: 4.9,
      reviews: 37,
      uri: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: white }}>
      <View
        style={{
          padding: '1.5rem',
          backgroundColor: primary,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
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

        <View style={{ marginTop: '1.5rem' }}>
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
              right: 20,
              top: 12
            }}
          />
        </View>
      </View>

      <View style={{ padding: '1.5rem' }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 15
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Categories</Text>
          <Text style={{ color: primary }}>Show All</Text>
        </View>

        <View style={{
          display: 'flex',
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
        {doctors.map(doc => (
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
                <Text style={{ marginLeft: 5, color: '#0b0b0b50' }}>{doc.rating} ({doc.reviews} Reviews)</Text>
              </View>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

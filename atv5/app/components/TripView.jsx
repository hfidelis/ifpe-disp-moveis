import { useEffect, useState } from 'react';
import { View, TextInput, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Avatar, Icon, Text } from '@rneui/themed';
import { primary, white } from '../styles/colors';
import tripService from '../services/trip';

export default () => {
  const categories = [
    { name: 'Resort', icon: 'bonfire-outline' },
    { name: 'Homestay', icon: 'home-outline' },
    { name: 'Hotel', icon: 'business-outline' },
    { name: 'Lodge', icon: 'bed-outline' },
    { name: 'Villa', icon: 'storefront-outline' },
    { name: 'Apartment', icon: 'cube-outline' },
    { name: 'Hostel', icon: 'school-outline' },
    { name: 'See all', icon: 'apps-outline' },
  ];

  const [popular, setPopular] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErrorMsg('');
      try {
        const [popularData, recommendedData] = await Promise.all([
          tripService.getPopularDestinations(),
          tripService.getRecommendedDestinations()
        ]);
        setPopular(popularData);
        setRecommended(recommendedData);
      } catch (err) {
        console.error(err);
        setErrorMsg('Unable to load destinations. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
        <TextInput
          placeholder="Search here ..."
          style={{
            backgroundColor: white,
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 10,
            fontSize: 16,
            marginBottom: 20
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
            top: 30
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Avatar
              rounded
              size={60}
              source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg' }}
            />
            <View>
              <Text style={{ color: white }}>Welcome!</Text>
              <Text h4 h4Style={{ color: white, fontWeight: 'bold' }}>Donna Stroupe</Text>
            </View>
          </View>
          <Icon name="notifications-outline" type="ionicon" size={26} color={white} />
        </View>
      </View>

      <View style={{ padding: '1.5rem' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Category</Text>
          <Icon name="menu" type="ionicon" size={24} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          {categories.map(cat => (
            <View
              key={cat.name}
              style={{
                width: '22%',
                aspectRatio: 1,
                backgroundColor: primary,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20
              }}
            >
              <Icon name={cat.icon} type="ionicon" color={white} size={24} />
              <Text style={{ color: white, fontSize: 12, marginTop: 6 }}>{cat.name}</Text>
            </View>
          ))}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Popular Destination</Text>
          <Icon name="menu" type="ionicon" size={24} />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color={primary} style={{ marginVertical: 20 }} />
        ) : errorMsg ? (
          <Text style={{ color: 'red', marginVertical: 10 }}>{errorMsg}</Text>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popular.map(dest => (
              <Image
                key={dest.id}
                source={{ uri: dest.uri }}
                style={{
                  width: 120,
                  height: 100,
                  borderRadius: 10,
                  marginRight: 15
                }}
              />
            ))}
          </ScrollView>
        )}

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            marginVertical: 15
          }}
        >
          Recommended
        </Text>

        {loading ? (
          <ActivityIndicator size="small" color={primary} />
        ) : errorMsg ? (
          <Text style={{ color: 'red', marginVertical: 10 }}>{errorMsg}</Text>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommended.map(dest => (
              <Image
                key={dest.id}
                source={{ uri: dest.uri }}
                style={{
                  width: 180,
                  height: 100,
                  borderRadius: 10,
                  marginRight: 15
                }}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </ScrollView>
  );
};

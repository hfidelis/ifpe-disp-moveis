import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
  BACKEND_URL,
} from '@env';

const FILE_TAG = 'aula7ifpe';

export default function App() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loadingImages, setLoadingImages] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Precisamos da sua permissão para acessar a galeria.');
      } else {
        loadImages();
      }
    })();
  }, []);

  const loadImages = async () => {
    setLoadingImages(true);
    try {
      const res = await fetch(`${BACKEND_URL}/images?tag=${FILE_TAG}`);
      const data = await res.json();
      setImages(data);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao carregar imagens');
    } finally {
      setLoadingImages(false);
    }
  };

  const uploadToCloudinary = async (photo) => {
    setUploading(true);

    const formData = new FormData();
    formData.append('file', {
      uri: photo.uri,
      type: photo.mimeType || 'image/jpeg',
      name: photo.fileName || 'photo.jpg',
    });
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('tags', FILE_TAG);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const result = await res.json();

      if (result.secure_url) {
        setImages((prev) => [result, ...prev]);
      } else {
        Alert.alert('Erro no upload', JSON.stringify(result.error?.message || 'Falha ao enviar imagem'));
      }
    } catch (error) {
      Alert.alert('Erro no upload', error.message);
    } finally {
      setUploading(false);
    }
  };



  const deleteImage = (public_id) => {
    Alert.alert('Deletar imagem', 'Deseja realmente remover esta imagem?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: async () => {
          try {
            const res = await fetch(`${BACKEND_URL}/delete-image`, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ public_id }),
            });
            const json = await res.json();
            if (json.result === 'ok') {
              setImages((prev) => prev.filter((img) => img.public_id !== public_id));
              Alert.alert('Sucesso', 'Imagem deletada');
            } else {
              Alert.alert('Erro', 'Falha ao deletar imagem');
            }
          } catch (error) {
            Alert.alert('Erro', error.message);
          }
        },
      },
    ]);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets?.length > 0) {
      const asset = result.assets[0];
      await uploadToCloudinary(asset);
    }
  };


  return (
    <View style={styles.container}>
    <Text style={styles.title}>Galeria</Text>

    <Button
      title="Selecionar Imagem"
      onPress={pickImage}
      disabled={uploading}
      color="#4CAF50"
    />

    {uploading && <ActivityIndicator size="large" style={styles.loading} color="#4CAF50" />}
    {loadingImages && <Text style={styles.statusText}>Carregando imagens...</Text>}

    <FlatList
      data={images}
      keyExtractor={(item) => item.public_id}
      numColumns={2}
      contentContainerStyle={styles.imageGrid}
      renderItem={({ item }) => (
        <View style={styles.imageWrapper}>
          <Image source={{ uri: item.secure_url }} style={styles.image} />
          <TouchableOpacity
            style={styles.deleteButton}
            disabled={uploading}
            onPress={() => deleteImage(item.public_id)}
          >
            <Text style={styles.deleteText}>✕</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  loading: {
    marginVertical: 15,
  },
  statusText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#555',
    fontStyle: 'italic',
  },
  imageGrid: {
    paddingVertical: 10,
  },
  imageWrapper: {
    flex: 1,
    margin: 6,
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    borderRadius: 20,
    padding: 6,
    zIndex: 1,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

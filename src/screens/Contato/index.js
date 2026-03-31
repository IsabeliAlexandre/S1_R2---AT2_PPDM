import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Contato() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.card}>
        <FontAwesome name="whatsapp" size={24} color="#25D366" />
        <Text style={styles.titulo}>WhatsApp</Text>
        <Text style={styles.info}>(19) 99279-0254</Text>
      </View>

      <View style={styles.card}>
        <FontAwesome name="instagram" size={24} color="#E1306C" />
        <Text style={styles.titulo}>Instagram</Text>
        <Text style={styles.info}>@docessonhosbakery</Text>
      </View>

      <View style={styles.card}>
        <FontAwesome name="location-arrow" size={24} color="#b87e00" />
        <Text style={styles.titulo}>Endereço</Text>
        <Text style={styles.info}>Rua dos Doces, 233 - Sumaré</Text>
      </View>

      <View style={styles.card}>
        <FontAwesome name="clock-o" size={24} color="#b87e00" />
        <Text style={styles.titulo}>Horário de funcionamento</Text>
        <Text style={styles.info}>Seg a Sáb - 10h às 18h</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff4e5'
  },

  card: {
    borderWidth: 2,
    margin: 10,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#4e391d'
  },

  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4e391d',
    marginTop: 5
  },

  info: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center'
  }
});

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert
} from 'react-native';

export default function Produtos() {

  return (
    <ScrollView style={styles.container}>

      <View style={styles.card}>
        <Image source={{ uri: 'https://i.pinimg.com/1200x/50/ba/f9/50baf90fc99e679f0a97ea326f8c9e8b.jpg' }} style={styles.img} />
        <Text>Bolo de chocolate caseiro</Text>
        <Text>R$ 50,00</Text>
        <Text>PIX: R$ 45,00</Text>

        <View style={styles.linha}>
          <Pressable>
            <Text style={styles.btn}>-</Text>
          </Pressable>

          <Text>1</Text>

          <Pressable>
            <Text style={styles.btn}>+</Text>
          </Pressable>
        </View>

        <Pressable style={styles.botao} onPress={() => Alert.alert('Produto adicionado ao carrinho')}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: 'https://i.pinimg.com/1200x/72/54/f8/7254f897523545557f1b78c643b12cfe.jpg' }} style={styles.img} />
        <Text>Bolo de cenoura com cobertura de chocolate</Text>
        <Text>R$ 50,00</Text>
        <Text>PIX: R$ 45,00</Text>

        <View style={styles.linha}>
          <Pressable>
            <Text style={styles.btn}>-</Text>
          </Pressable>

          <Text>1</Text>

          <Pressable>
            <Text style={styles.btn}>+</Text>
          </Pressable>
        </View>

        <Pressable style={styles.botao} onPress={() => Alert.alert('Produto adicionado ao carrinho')}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: 'https://i.pinimg.com/736x/2d/2f/e8/2d2fe86aebe5860dea72f622eb27ba2d.jpg' }} style={styles.img} />
        <Text>Bolo Rad Velvet - Com recheio </Text>
        <Text>R$ 60, 00</Text>
        <Text>PIX: R$ 55,00</Text>

        <View style={styles.linha}>
          <Pressable>
            <Text style={styles.btn}>-</Text>
          </Pressable>

          <Text>1</Text>

          <Pressable>
            <Text style={styles.btn}>+</Text>
          </Pressable>
        </View>

        <Pressable style={styles.botao} onPress={() => Alert.alert('Produto adicionado ao carrinho')}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: 'https://i.pinimg.com/736x/0a/12/65/0a12650295ed62fcecb1a1b1f9dbc541.jpg' }} style={styles.img} />
        <Text>Bolo Decorado 1kg - recheio a combinar</Text>
        <Text>R$ 100,00</Text>
        <Text>PIX: R$ 90,00</Text>

        <View style={styles.linha}>
          <Pressable>
            <Text style={styles.btn}>-</Text>
          </Pressable>
          <Text>1</Text>
          <Pressable>
            <Text style={styles.btn}>+</Text>
          </Pressable>
        </View>

        <Pressable style={styles.botao} onPress={() => Alert.alert('Produto adicionado ao carrinho')}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: 'https://i.pinimg.com/736x/6c/1b/2b/6c1b2b16fa89a98ff48a0e5f16ec44b0.jpg' }} style={styles.img} />
        <Text>Bolo de fubá</Text>
        <Text>R$ 25,00</Text>
        <Text>PIX: R$ 20,00</Text>

        <View style={styles.linha}>
          <Pressable>
            <Text style={styles.btn}>-</Text>
          </Pressable>
          <Text>1</Text>
          <Pressable>
            <Text style={styles.btn}>+</Text>
          </Pressable>
        </View>

        <Pressable style={styles.botao} onPress={() => Alert.alert('Produto adicionado ao carrinho')}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff4e5'
  },

  card: {
    borderWidth:2,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#4e391d'
  },

  img: {
    width: 100,
    height: 100,
    marginBottom: 5,
    borderRadius: 10
  },

  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10
  },

  btn: {
    fontSize: 20,
    backgroundColor: '#b87e00',
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10

  },

  botao: {
    backgroundColor: '#b87e00',
    padding: 10,
    marginTop: 10,
    borderRadius: 10

  },

  textoBotao: {
    color: '#fff'
  }
});
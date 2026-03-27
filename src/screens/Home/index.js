import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Platform, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.logoContainer}>
            <Image
              source={{ uri: 'https://img.freepik.com/vetores-gratis/modelo-de-emblema-de-logotipo-de-loja-de-padaria_17005-1482.jpg?semt=ais_hybrid&w=740&q=80' }}
              style={styles.logoContainer}
            />
          </View>

          <Text style={styles.descricao}>
            Somos a melhor bolaria da região, conheça nosso cardápio e se desejar, entre em contato!
          </Text>

          <Pressable
            style={styles.botaoProdutos}
            onPress={() => navigation.navigate('Produto')}>
            <Text style={styles.botaoTexto}>Ver Produtos</Text>
          </Pressable>

          <Pressable
            style={styles.botaoContato}
            onPress={() => navigation.navigate('Contato')}>
            <Text style={styles.botaoTexto}>Contato</Text>
          </Pressable>

          <StatusBar style="auto" />

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },

  descricao: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    fontSize: 16,
  },

  botaoProdutos: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddb75f',
    borderRadius: 10,
    height: 50,
    width: '100%',
    marginBottom: 15,
  },

  botaoContato: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b87e00',
    borderRadius: 10,
    height: 50,
    width: '100%',
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  logoContainer:{
    width: 200,
  height: 200,
  marginBottom: 10,
   borderRadius: 60
  }
});
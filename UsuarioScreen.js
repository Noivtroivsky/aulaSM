import React, { useState } from 'react'; 
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Appbar } from 'react-native-paper';

export default function UsuarioScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (nome && senha) {
      navigation.navigate('Cliente');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Login de Usuário" />
      </Appbar.Header>
      <View style={styles.innerContainer}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>

        <TextInput
          label="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Senha"
          value={senha}
          onChangeText={text => setSenha(text)}
          secureTextEntry
          style={styles.input}
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3c1e0', // Light blue pastel color
  },
  innerContainer: {
    flex: 1,
    alignItems: 'right',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '30%', // Reduced to 30%
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    width: '30%', // Aligned to the same width as the text fields
  },
});

import { StyleSheet, Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Detalhes() {
  const Rota = useRoute();
  const pelucia = Rota.params.pelucia; // Recebe o objeto pelucia

  return (
    <View style={styles.container}>
      <Image source={{ uri: pelucia.imagem }} style={{ width: 250, height: 400 }} />
      <Text style={styles.titulo}>{pelucia.nome}</Text>
      <Text style={styles.descricao}>{pelucia.descricao}</Text>
      <Text style={styles.info}>Categoria: {pelucia.categoria}</Text>
      <Text style={styles.info}>Preço: {pelucia.preco}</Text>
      <Text style={styles.info}>Estoque: {pelucia.estoque}</Text>
      <Text style={styles.info}>Tamanho: {pelucia.tamanho}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    color: 'white',
    marginTop: 16,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 18,
    color: 'white',
    marginVertical: 8,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 2,
  },
});

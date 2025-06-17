import { Image, Text, View } from 'react-native';
import styles from './stylecard.js';  

export default function Card({ nome, imagem, descricao, categoria, preco, estoque, tamanho }) {
  return (
    <View >
      <Image style={styles.imagecard} source={{ uri: (imagem) }} />
      <Text style={styles.textcard}>{nome}</Text>
      <Text style={styles.textcard} >{descricao}</Text>
      <Text style={styles.textcard}>{categoria}</Text>
      <Text style={styles.textcard}>{preco}</Text>
      <Text style={styles.textcard}>{estoque}</Text>
      <Text style={styles.textcard} > {tamanho}</Text>

    </View>
  );
}

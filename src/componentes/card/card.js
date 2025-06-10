import { Image, Text, View } from 'react-native';
import styles from './stylecard.js';

export default function Card({nome,imagem, descricao,}) {
  return (
    <View >
      <Image style={styles.imagecard} source={{ uri:(imagem) }} />
      <Text   style= {styles.textcard}>{nome}</Text>
      <Text style={styles.textcard} >{descricao}</Text>
    </View>
  );
}

import { StyleSheet, Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Detalhes() {
  const Rota = useRoute();
  return (
    <View style={styles.container}>
      <Image source={{ uri: Rota.params.imagem }} style={{ width: 250, height: 400 }} />
      <Text  styles={styles.titulo} >{Rota.params.titulo}</Text>
      <Text style = {styles.nota} > Nota: {Rota.params.nota}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  
  },


  titulo: {
    fontSize: 40,
   color: 'white',
   
   
  },
  nota: {
    fontSize: 16,
    color: 'gray',
  },
});

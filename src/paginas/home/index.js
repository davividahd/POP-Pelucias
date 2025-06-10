import { StyleSheet, Text, View, TextInput, Image, FlatList, ScrollView } from 'react-native';
import Cabecalho from '../../componentes/cabeçalho/index.js';
import Pesquisa from '../../componentes/pesquisa/pesquisa.js';
import Banner from '../../componentes/banner/banner.js';
import Card from '../../componentes/card/card.js';
import DATA from '../../../DATA/Pelucias.js';
import Rotas from '../rotas/index.js';
const imagem = Math.floor(Math.random() * 4 + 1);

export default function HOME() {
  return (
    <View style={styles.container}>
     {/* <Rotas/>   */}
      <Cabecalho />

      
      
          <Pesquisa />
          <Banner />

          <View style={{ width: '90%' }}>
            <FlatList
              data={DATA}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Card
                   nome={item.nome}
                   descricao={item.descricao}
                   imagem={item.imagem}
                />
              )}
            />
          </View>
        
    
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
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },


});

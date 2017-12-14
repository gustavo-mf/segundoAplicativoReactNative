import React from 'react';
import {AppRegistry, View, Text, Button, Image, TouchableOpacity, Alert } from 'react-native';
//import ReactNative from 'react-native';

//formatações
const Estilos = {
	principal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	botao: {
		backgroundColor: '#538530',
		paddingVertical: 10,
		paddingHorizontal: 40,
		marginTop: 20
	},
	textoBotao: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold'
	}
};

var frases = [
	'"Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos" – James Cameron, cineasta',
	'"O sucesso normalmente vem para quem está ocupado demais para procurar por ele" – Henry David Thoreau, filósofo',
	'"A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden, jogador e treinador de basquete',
	'"Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência" – Lisa M. Amos, executiva',
	'"Se você não está disposto a arriscar, esteja disposto a uma vida comum" – Jim Rohn, empreendedor'
];

const gerarNovaFrase = () => {
	var numero = Math.floor(Math.random() * 5);
	Alert.alert(null,frases[numero]);
}

const App = () => {
	const  { principal, botao, textoBotao } = Estilos;

	return (
		<View style={principal}>
			<Image source={ require('./imgs/logo.png') } />
			<TouchableOpacity onPress={gerarNovaFrase} style={botao}>
				<Text style={textoBotao}>Nova frase</Text>
			</TouchableOpacity>
		</View>
	);
};

AppRegistry.registerComponent('app2', () => App);

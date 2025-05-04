import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Button, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styleCalculo from '../styles/styleCalculo';
import { useRouter } from 'expo-router';

export default function Circulo() {
  const router = useRouter();
  const [raio, setRaio] = useState('');
  const [resultado, setResultado] = useState({A: null, P: null});

  const Calcular = () => {
    const r = parseFloat(raio);

    if (!isNaN(r)) {
      const A = Math.PI * r * r;
      const P = 2 * Math.PI * r;

      setResultado ({
        A: A.toFixed(2),
        P: P.toFixed(2),
      })
    }
  }

  return (
    <ScrollView style={styleCalculo.background}>
        <View style={styleCalculo.header}>
            <TouchableOpacity style={{position: 'absolute'}} onPress={() => router.back()}>
              <Image source={require('../assets/iconBack.png')}/>
            </TouchableOpacity>
            <Text style={styleCalculo.headerText}>Circulo</Text>
        </View>
        <View style={styleCalculo.contentContainer}>
          <Image style={styleCalculo.img} source={require("../assets/formulaCirculo.jpg")}/>
          <TextInput style={styleCalculo.styleInput} placeholder='Raio (R)' keyboardType='numeric' value={raio} onChangeText={setRaio}/>
          <TouchableOpacity style={styleCalculo.styleButton} title="Calcular" onPress={Calcular} >
            <Text style={styleCalculo.styleButtonText}>Calcular</Text>
          </TouchableOpacity>
          {resultado.A && (
            <View style={styleCalculo.result}>
              <Text style={styleCalculo.resultText}>Área: <Text style={styleCalculo.resultNumber}>{resultado.A}</Text></Text>
              <Text style={styleCalculo.resultText}>Perímetro: <Text style={styleCalculo.resultNumber}>{resultado.P}</Text></Text>
            </View>
          )}
        </View>
    </ScrollView>
  );
}
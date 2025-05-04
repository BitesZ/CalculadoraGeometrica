import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import styleCalculo from '../styles/styleCalculo';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styleCalculo.background}>
        <View style={styleCalculo.header}>
          <Text style={styleCalculo.headerText}>Calculadora Geométrica</Text>
        </View>
        <View style={styleCalculo.contentContainer}>
          <Link href="/formas">
            <TouchableOpacity onPress={() => router.push('/formas')} style={styleCalculo.styleButton}>
              <Text style={styleCalculo.styleButtonText}>Iniciar</Text>
            </TouchableOpacity>
          </Link>
        </View>
    </View>
  );
}
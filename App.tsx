import React from 'react'
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelModel';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import FlexDirectionBasics from './src/screens/FlexDirectionScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => (
  //<HolaMundoScreen />
  //<ContadorScreen />
  //<BoxObjectModelScreen />
  //<DimensionesScreen />
  //<PositionScreen />
  //<FlexScreen />
  <SafeAreaView style={{ flex: 1 }}>
    <TareaScreen />
  </SafeAreaView>

)

export default App;
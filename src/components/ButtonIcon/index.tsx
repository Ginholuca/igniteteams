import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Container } from './styles'

export function ButtonIcon({}: Props) {
  return (
    <Container>
      <MaterialIcons name="home" color="#FFF" size={32} />
    </Container>
  )
}

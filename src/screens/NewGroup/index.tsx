import React, { useState } from 'react'

import { Container, Content, Icon } from './styles'

import { useNavigation } from '@react-navigation/native'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/HighLight'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  function handleNew() {
    navigation.navigate('players', { group })
  }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="crie a turma para adicionar pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button onPress={handleNew} title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}

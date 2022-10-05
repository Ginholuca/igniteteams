import React, { useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@components/Header'
import { Highlight } from '@components/HighLight'
import { GroupCard } from '@components/GroupCard'

import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera do Bob'])

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard key={item} title={item} />}
      />

      <GroupCard title="Galera do Ignite" />
    </Container>
  )
}

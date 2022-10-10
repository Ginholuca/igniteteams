import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'

import { Header } from '@components/Header'
import { Filter } from '@components/Filter'
import { Input } from '@components/Input'
import { Highlight } from '@components/HighLight'
import { ListEmpty } from '@components/ListEmpty'
import { ButtonIcon } from '@components/ButtonIcon'
import { PlayerCard } from '@components/PlayerCard'
import { Button } from '@components/Button'

type RouteParams = {
  group: string
}

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Bob', '1Bob', '2Bob'])

  const route = useRoute()
  const { group } = route.params as RouteParams

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 120 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  )
}

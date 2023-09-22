import { ListItem, ScrollView } from '@my/ui'
import { Stack } from 'expo-router'
import { useRouter } from 'solito/router'

export default function Screen() {
  const { push } = useRouter()

  const routes = [
    {
      path: '/basic/stacks',
      title: 'Stacks',
    },
    {
      path: '/basic/headings',
      title: 'Headings',
    },
    {
      path: '/basic/text',
      title: 'Text',
    },
  ]

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Basic',
        }}
      />

      <ScrollView>
        {routes.map(({ path, title }) => (
          <ListItem key={path} hoverTheme pressTheme onPress={() => push(path)}>
            {title}
          </ListItem>
        ))}
      </ScrollView>
    </>
  )
}

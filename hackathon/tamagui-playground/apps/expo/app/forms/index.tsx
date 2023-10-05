import { ListItem, ScrollView } from '@my/ui'
import { Stack } from 'expo-router'
import { useRouter } from 'solito/router'

export default function Screen() {
  const { push } = useRouter()

  const routes = [
    { path: '/forms/button', title: 'Button' },
    { path: '/forms/checkbox', title: 'Checkbox' },
    { path: '/forms/form', title: 'Form' },
    { path: '/forms/input', title: 'Input & TextArea' },
    { path: '/forms/label', title: 'Label' },
    { path: '/forms/progress', title: 'Progress' },
    { path: '/forms/radio-group', title: 'RadioGroup' },
    { path: '/forms/select', title: 'Select' },
    { path: '/forms/slider', title: 'Slider' },
    { path: '/forms/switch', title: 'Switch' },
    { path: '/forms/toggle-group', title: 'ToggleGroup' },
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

import { Story, Meta } from '@storybook/react/types-6-0'
import WeatherMain from '.'

export default {
  title: 'WeatherMain',
  component: WeatherMain
} as Meta

export const Default: Story = () => <WeatherMain />

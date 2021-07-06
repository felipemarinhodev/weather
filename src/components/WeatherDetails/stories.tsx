import { Story, Meta } from '@storybook/react/types-6-0'
import WeatherDetails from '.'

export default {
  title: 'WeatherDetails',
  component: WeatherDetails
} as Meta

export const Default: Story = () => <WeatherDetails />

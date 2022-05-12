import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from './button'

export default {
  component: Button,
  title: 'Button',
} as Meta

const Template: Story<ButtonProps> = args => (
  <Button {...args}>Button Text</Button>
)

export const Primary = Template.bind({})
Primary.args = {}

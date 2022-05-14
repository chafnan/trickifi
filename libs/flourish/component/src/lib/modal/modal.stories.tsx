import { CoreIcon } from '@flourish/icon'
import { Story, Meta } from '@storybook/react'
import { Modal, ModalProps } from './modal'

export default {
  component: Modal,
  title: 'Modal',
} as Meta

const Template: Story<ModalProps> = args => <Modal {...args} />

export const NoIcon = Template.bind({})
NoIcon.args = {
  title: 'title',
  subtitle: 'subtitle',
  actionText: 'Action',
  cancelText: 'Nevermind',
}

export const Icon = Template.bind({})
Icon.args = {
  icon: <CoreIcon.Video className='w-32' />,
  title: 'title',
  subtitle: 'subtitle',
  actionText: 'Action',
  cancelText: 'Nevermind',
}

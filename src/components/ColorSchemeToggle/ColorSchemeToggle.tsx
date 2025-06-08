import { ActionIcon ,Menu,useMantineColorScheme } from '@mantine/core';
import { IconBrightnessDownFilled, IconBrightnessUpFilled, IconDeviceDesktop } from '@tabler/icons-react';
export function ColorSchemeToggle() {
  const { colorScheme,setColorScheme } = useMantineColorScheme();

  return (
    <Menu>
      <Menu.Target>
        <ActionIcon variant='subtle' color='#969696'>
          {colorScheme == 'light' ? <IconBrightnessUpFilled size={16}/> : <IconBrightnessDownFilled size={100}/>}
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Select theme</Menu.Label>
        <Menu.Item leftSection={<IconBrightnessUpFilled size={16} />} onClick={() => setColorScheme('light')}>
          Light
        </Menu.Item>
        <Menu.Item leftSection={<IconBrightnessDownFilled size={16}/>} onClick={() => setColorScheme('dark')}>
          Dark
        </Menu.Item>
        <Menu.Item leftSection={<IconDeviceDesktop size={16}/>} onClick={() => setColorScheme('auto')}>
          System
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
    
  );
}

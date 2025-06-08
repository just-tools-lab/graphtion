import { Center, SegmentedControl } from '@mantine/core';
import { IconChartCovariate, IconMathMaxMin, IconPercentage100 } from '@tabler/icons-react';
import classes from './Toolbar.module.css';
import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';

function Toolbar() {
  return (
    <SegmentedControl className={classes.root}
      data={[
        {
          value: 'autodiff4phy',
          label: (
            <Center style={{ gap: 10 }}>
              <IconMathMaxMin size={20} />
              <span className={classes.innerLabel}>AutoDiff4Phy</span>
            </Center>
          ),
        },
        {
          value: 'particalysis',
          label: (
            <Center style={{ gap: 10 }}>
              <IconChartCovariate size={20} />
              <span className={classes.innerLabel}>Particalysis</span>
            </Center>
          )
        },
        {
          value: 'about',
          label: (
            <Center style={{gap : 10}}>
              <IconPercentage100 size={20} />
              <span className={classes.innerLabel}>About</span>
            </Center>
          )
        },
        {
          value: 'themetoggle',
          label:(
            <ColorSchemeToggle />
          )
        }
      ]}
    />
  );
};

export default Toolbar;
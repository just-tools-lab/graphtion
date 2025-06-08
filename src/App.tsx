import '@mantine/core/styles.css';
import { ReactFlowProvider } from '@xyflow/react';
import { MantineProvider } from '@mantine/core';
// import { Router } from './Router';
import { theme } from './theme';
import Canvas from './pages/canvas/Canvas';
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ReactFlowProvider>
        <Canvas />
      </ReactFlowProvider>
    </MantineProvider>
  );
}

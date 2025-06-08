import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import Toolbar from "@/components/features/toolbar/Toolbar";
import { ReactFlow,Controls,Background, BackgroundVariant } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
export const Canvas = () => {
    return(
        <div style={{width: "100vw", height: "100vh"}}>
            <Toolbar />
            <ReactFlow colorMode="light">
                <Controls />
                <Background variant={BackgroundVariant.Dots} gap={30} size={1} />
            </ReactFlow>
        </div>
    )
};

export default Canvas;
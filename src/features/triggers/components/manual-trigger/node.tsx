import { NodeProps } from "@xyflow/react";
import { memo, useState } from "react";
import { BaseTriggerNode } from "../base-trigger-node";
import { MousePointerIcon } from "lucide-react";
import { ManualTriggerDialog } from "./dailog";

export const ManualTriggerNode = memo((props: NodeProps) => {
  const [dailogOpen, setDailogOpen] = useState(false);

  const nodeStatus = "initial";

  const handleOpenSettings = () => setDailogOpen(true);

  return (
    <>
      <ManualTriggerDialog open={dailogOpen} onOpenChange={setDailogOpen} />
      <BaseTriggerNode
        {...props}
        icon={MousePointerIcon}
        name="When clicking 'Execute workflow'"
        status={nodeStatus}
        onSettings={handleOpenSettings}
        onDoubleClick={handleOpenSettings}
      />
    </>
  );
});

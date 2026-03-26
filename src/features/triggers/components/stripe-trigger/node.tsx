import { NodeProps } from "@xyflow/react";
import { memo, useState } from "react";
import { BaseTriggerNode } from "../base-trigger-node";
import { StripeTriggerDialog } from "./dailog";
import { fetchStripeTriggerRealtimeToken } from "./actions";
import { useNodeStatus } from "@/features/executions/hooks/use-node-status";
import { STRIPE_TRIGGER_CHANNEL_NAME } from "@/inngest/channels/stripe-trigger";

export const StripeTriggerNode = memo((props: NodeProps) => {
  const [dailogOpen, setDailogOpen] = useState(false);

  const nodeStatus = useNodeStatus({
    nodeId: props.id,
    channel: STRIPE_TRIGGER_CHANNEL_NAME,
    topic: "status",
    refreshToken: fetchStripeTriggerRealtimeToken,
  });

  const handleOpenSettings = () => setDailogOpen(true);

  return (
    <>
      <StripeTriggerDialog open={dailogOpen} onOpenChange={setDailogOpen} />
      <BaseTriggerNode
        {...props}
        icon="/logos/stripe.svg"
        name="Stripe"
        description="When Strpe event is captured"
        status={nodeStatus}
        onSettings={handleOpenSettings}
        onDoubleClick={handleOpenSettings}
      />
    </>
  );
});

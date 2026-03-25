import type { NodeExecutor } from "@/features/executions/types";
import { googleFormTriggerChannel } from "@/inngest/channels/google-form-trigger";

type GoogleFormData = Record<string, unknown>;

export const GoogleFormTriggerExecutor: NodeExecutor<GoogleFormData> = async ({
  nodeId,
  context,
  step,
  publish,
}) => {
  await publish(
    googleFormTriggerChannel().status({
      nodeId,
      status: "loading",
    }),
  );

  const result = await step.run("magoogle-form -trigger", async () => context);

  await publish(
    googleFormTriggerChannel().status({
      nodeId,
      status: "success",
    }),
  );

  return result;
};

import { inngest } from "@/inngest/client";
import prisma from "@/lib/db";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("fetching-video", "5s");
    await step.sleep("transcribing-video", "5s");
    await step.sleep("sending-to-AI", "5s");
    await step.run("sending to discord", () => {
      return prisma.workflow.create({
        data: {
          name: "workflow-from-inngest",
        },
      });
    });
  },
);

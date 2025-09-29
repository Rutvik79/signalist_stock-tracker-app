import { inngest } from "@/lib/inngest/client";
import { sendSignUpEmail } from "@/lib/inngest/fucntions";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sendSignUpEmail],
});

import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client"; 

export const {GET, PUSH, PUT} = serve({
  client: inngest,
  functions: [
    // your functions 
  ], 
});
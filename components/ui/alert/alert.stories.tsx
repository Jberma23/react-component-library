import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Terminal } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "shadcn-ui/Alert",
  component: Alert,
  args: {},
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (arg) => (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

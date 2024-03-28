"use client";
import { Flex, Switch } from "@radix-ui/themes";

const RadioGroup = () => {
  return (
    <Flex gap="2" direction="column">
      <Switch color="indigo" size="3" defaultChecked />
      <Switch color="cyan" size="3" defaultChecked />
      <Switch color="orange" size="3" defaultChecked />
      <Switch color="crimson" size="3" defaultChecked />
    </Flex>
  );
};

export default RadioGroup;

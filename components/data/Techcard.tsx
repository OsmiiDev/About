import { Card, Container, Divider, Group, Text } from "@mantine/core";

type TechcardProps = {
    title: string;
    description: string;
    iconNode: React.ReactNode;
};

export const Techcard: React.FC<TechcardProps> = ({ title, description, iconNode }) => {
  return (
    <Card className="flex" radius={4}>
      <Group spacing={"sm"} className="flex">
        {iconNode}
        <Divider orientation="vertical" />
        <Container m={0} p={0} className="flex">
          <Text className="font-sans text-white m-0 break-words" size={"xl"}> {title} </Text>
          <Text className="font-sans text-white m-0 font-light break-words" size={"sm"}> {description} </Text>
        </Container>
      </Group>
    </Card>
  );
};


import { Badge, Card, Text } from "@radix-ui/themes";
import Link from "next/link";

type Props = {
  name: string;
  description: string;
  language: string;
  html_url: string;
};

const RepositoryCard = ({ name, description, language, html_url }: Props) => {
  return (
    <Card size="1" className="mb-2">
      <Link href={html_url} target="_blank">
        <Text as="div" size="2" weight="bold">
          {name}
        </Text>
        <Text as="div" color="gray" size="2">
          {description}
        </Text>
        <Badge color="indigo">{language}</Badge>
      </Link>
    </Card>
  );
};

export default RepositoryCard;

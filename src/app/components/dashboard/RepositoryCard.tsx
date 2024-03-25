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
    <Card size="1" className="mb-[1.5vh]">
      <Link href={html_url} target="_blank">
        <div className="text-[1.02vw] font-semibold mb-1">{name}</div>
        <div className="text-[0.8vw] text-gray-600 mb-1">{description}</div>
        <div className="text-[0.8vw]">
          {language && <Badge color="indigo">{language}</Badge>}
        </div>
      </Link>
    </Card>
  );
};

export default RepositoryCard;

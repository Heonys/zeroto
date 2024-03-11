import { RepositoryIcon } from "@/app/icon";
import { GithubRepositorys } from "@/types/user";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";

type Props = {
  RepositoryData: GithubRepositorys[];
};

const RepositoryGrid = ({ RepositoryData }: Props) => {
  return (
    <Card>
      <Heading size="4" mb="5" className="flex items-center gap-2">
        <RepositoryIcon size={20} />
        Repository
        <span>{`(${RepositoryData.length})`}</span>
      </Heading>
      <div>저장소 보여주기 아니면 이벤트 </div>
    </Card>
  );
};

export default RepositoryGrid;

import { NumberIcon1, NumberIcon2, NumberIcon3, NumberIcon4 } from "@/app/icon";
import Steper from "./_components/Steper";
import { docsImage1, docsImage2, docsImage3, docsImage5 } from "@/asset/image";
import { Blockquote, Flex } from "@radix-ui/themes";
import Badge from "./_components/Badge";

const DocumentPage = () => {
  return (
    <div className="overflow-y-scroll h-full flex flex-col gap-1">
      <Steper
        stepIcon={<NumberIcon1 size={"2.5vw"} />}
        image={docsImage1}
        title="Getting started"
        header="깃허브 계정으로 시작 해보세요."
        description={
          <Flex direction="column" gap="3">
            <div>
              로그인 하지 않고도 사용자 검색이 가능하지만 로그인시 좌측에 사용자
              대시보드 및 사용자 북마크탭이 활성화 됩니다.
            </div>
            <Blockquote>
              <div>
                <span>해당 어플리케이션은</span>
                <Badge text="1536 x 864" color="orange" />
                <span>{`해상도에서 개발되었으며,`}</span>
                <Badge text="1536 x 864" color="orange" />
                <span>부터</span>
                <Badge text="1920 x 1080" color="blue" />
                <span>해상도에 최적화 되어있습니다</span>
              </div>
            </Blockquote>
          </Flex>
        }
      />

      <Steper
        stepIcon={<NumberIcon2 size={"2.5vw"} />}
        image={docsImage2}
        title="Search for GitHub Users"
        header="깃허브 아이디로 검색해보세요."
        description={
          <Flex direction="column" gap="3">
            <div>
              사용자 검색 페이지 또는 화면 상단에서 빠른 검색이 가능하며, 최근
              검색한 5명의 프로필로 빠른 이동이 가능합니다
            </div>
            <Blockquote>
              <div>
                단, 사용자 검색시 고유한 식별자인 깃허브 아이디로 검색해야합니다
              </div>
            </Blockquote>
          </Flex>
        }
      />
      <Steper
        stepIcon={<NumberIcon3 size={"2.5vw"} />}
        image={docsImage5}
        title="Visualize your GitHub"
        header="자신 또는 친구의 프로필을 확인해보세요."
        description={
          <Flex direction="column" gap="3">
            <span>
              <span>
                깃허브 프로필을 시각화 하고 간단한 분석 및 차트를 한눈에
                보여줍니다.
              </span>
              <Badge text="Commit" color="red" />
              <Badge text="Issue" color="red" />
              <Badge text="Star" color="red" />
              <Badge text="PR" color="red" />
              <span>
                의 최근 1년간의 데이터와 더불어 전체 기여 수와 현재 연속 커밋
                수를 확인할 수 있습니다.
              </span>
            </span>
            <Blockquote>
              <span>보여지는 모든 저장소는</span>
              <Badge text="Public" color="orange" />
              <span>
                저장소 기준 이며, 업데이트된 날짜순으로 최대 100개의 저장소까지
                보여집니다
              </span>
            </Blockquote>
          </Flex>
        }
      />
      <Steper
        stepIcon={<NumberIcon4 size={"2.5vw"} />}
        image={docsImage3}
        title="Click the like button"
        header="로그인 이후에 좋아요 버튼을 눌러보세요"
        description={
          <Flex direction="column" gap="3">
            <div>
              북마크 탭에서 좋아요를 누른 유저와 함께 깃허브 팔로잉, 깃허브
              팔로워 유저 리스트를 보여줍니다
            </div>
            <Blockquote>
              <div>
                좋아요는 깃허브에서 공유되는 것이 아닌 로그인시 독립적으로
                관리하는 항목 입니다
              </div>
            </Blockquote>
          </Flex>
        }
      />
    </div>
  );
};

export default DocumentPage;

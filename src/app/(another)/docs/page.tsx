import { NumberIcon1, NumberIcon2, NumberIcon3, NumberIcon4 } from "@/app/icon";
import Steper from "./_components/Steper";
import { docsImage1, docsImage2, docsImage3, docsImage4 } from "@/asset/image";

const DocumentPage = () => {
  return (
    <div className="overflow-y-scroll h-full flex flex-col gap-1">
      <Steper
        stepIcon={<NumberIcon1 size={40} />}
        image={docsImage1}
        title="SignIn with GitHub account"
        header="깃허브 계정으로 로그인 해보세요."
        description="로그인 하지 않고도 사용자 검색이 가능하지만 로그인시 사용자 대시보드 및 사용자 북마크탭이 활성화 됩니다."
      />
      <Steper
        stepIcon={<NumberIcon2 size={40} />}
        image={docsImage2}
        title="Search for GitHub Users"
        header="깃허브 아이디로 검색해보세요."
        description="검색 페이지 또는 화면 상단에서 빠른 검색이 가능하며, 최근 검색된 5명의 유저를 보여줍니다"
      />
      <Steper
        stepIcon={<NumberIcon3 size={40} />}
        image={docsImage3}
        title="Click the like button"
        header="로그인 이후에 좋아요 버튼을 눌러보세요"
        description="북마크 탭에서 좋아요를 누른 유저와 함께 깃허브 팔로잉, 팔로워 유저 리스트를 보여줍니다"
      />
      <Steper
        stepIcon={<NumberIcon4 size={40} />}
        image={docsImage4}
        title="Visualize your GitHub"
        header="자신의 깃허브 프로필을을 확인해보세요."
        description="깃허브 프로필을 시각화 하여 간단한 분석 및 차트를 한눈에 보여줍니다"
      />
    </div>
  );
};

export default DocumentPage;

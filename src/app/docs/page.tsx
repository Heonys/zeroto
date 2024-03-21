import { NumberIcon1, NumberIcon2, NumberIcon3 } from "@/app/icon";
import Steper from "./_components/Steper";
import SearchImage from "@/../public/search.webp";
import DashboardImage from "@/../public/dashboard.webp";
import BookmarkImage from "@/../public/bookmark.webp";

const DocumentPage = () => {
  return (
    <div className="">
      <Steper
        stepIcon={<NumberIcon1 size={40} />}
        image={BookmarkImage}
        title="SignIn with GitHub account"
        description="깃허브 계정으로 로그인 해보세요. 로그인 하지 않고도 사용자 검색이 가능하지만 로그인시 사용자 대시보드 및 사용자 북마크탭이 활성화 됩니다."
      />
      <Steper
        stepIcon={<NumberIcon2 size={40} />}
        image={SearchImage}
        title="Search for GitHub Users"
        description="깃허브 아이디로 검색해보세요. 검색 페이지 또는 화면 상단에서 빠른 검색이 가능하며, 최근 검색된 5명의 유저를 보여줍니다"
      />
      <Steper
        stepIcon={<NumberIcon3 size={40} />}
        image={DashboardImage}
        title="Visualize your GitHub"
        description="자신의 깃허브 프로필을을 확인해보세요. 깃허브 프로필을 시각화 하여 간단한 분석 및 차트를 한눈에 보여줍니다"
      />
    </div>
  );
};

export default DocumentPage;

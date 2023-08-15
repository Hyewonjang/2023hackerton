import { Link, useNavigate } from "react-router-dom";
import '../../assets/css/Home.css';

function Home() {

    const navigate = useNavigate();

    const goToMyPage = () => {
        navigate("/mypage");
    }

  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Home Logo
        </p>
      </header>
      <div className="Home-line">
        <hr/>
      </div>
      <div className="Home-menu">
        <div className="Home-menu1" onClick={goToMyPage}>
          마이페이지
        </div>
        <Link to="/selllist" className="Home-menu2">
          <div>
            구매하기
          </div>
        </Link>
        <Link to="/info" className="Home-menu3">
          <div >
            유의사항
          </div>
        </Link>
      </div>
      <div className="Home-bottom"/>
      <div className="Home-blogo">
        작은 로고<br/>
        서비스명
      </div>
    </div>
  );
}

export default Home;

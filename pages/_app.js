import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/components/Footer";
import Top from "../src/components/Top";

function MyApp({ Component, pageProps }) {
  // pageProps는 getStaticProps, getServerSideProps, getInitialProps를 통해 가져온 초기 속성값을 뜻하며 값이 없다면 빈 객체를 반환
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

// _app.js에서
// 페이지 전환시 레이아웃을 유지할 수 있다.
// 페이지 전환시 상태값을 유지할 수 있다.
// componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
// 추가적으로 데이터를 페이지로 주입시켜주는게 가능하다.
// 글로벌 CSS를 이곳에 선언한다.

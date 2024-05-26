import "./Product.css";

export const Product = ({ className, ...props }) => {
  return (
    <div className={"product " + className}>
      <div className="i-phone-x-or-newer">
        <img className="battery" src="battery0.svg" />
        <img className="wifi" src="wifi0.svg" />
        <img className="mobile-signal" src="mobile-signal0.svg" />
        <img className="left-side" src="left-side0.svg" />
      </div>
      <div className="home-indicator">
        <div className="home-indicator2"></div>
      </div>
      <div className="button">
        <div className="div">홈으로 돌아가기 </div>
      </div>
      <div className="header">
        <img className="icon-chevron-left" src="icon-chevron-left0.svg" />
        <div className="title">Title </div>
      </div>
      <div className="i-phone-x-or-newer">
        <img className="battery2" src="battery1.svg" />
        <img className="wifi2" src="wifi1.svg" />
        <img className="mobile-signal2" src="mobile-signal1.svg" />
        <img className="left-side2" src="left-side1.svg" />
      </div>
      <div className="header2">
        <img className="icon-chevron-left2" src="icon-chevron-left1.svg" />
      </div>
      <img className="pasted-graphic-1-1" src="pasted-graphic-1-10.png" />
      <div className="links">Links </div>
      <div className="ur-ls">
        <div className="website-net">website.net </div>
        <div className="mylink-net">mylink.net </div>
        <div className="yourlink-net">yourlink.net </div>
        <div className="add-links">
          <img className="icon-add" src="icon-add0.svg" />
          <div className="add-link">Add link </div>
        </div>
      </div>
      <div className="div2">정류장 위치 </div>
      <div className="div3">종류 </div>
      <div className="div4">보유금액 </div>
      <div className="div5">날짜 </div>
      <div className="div6">적립금액 </div>
      <div className="div7">남은 횟수 </div>
      <div className="_2">
        경기대수원캠퍼스 입구
        <br />제 2 쓰레기통{" "}
      </div>
      <div className="div8">플라스틱 (소형) </div>
      <div className="_10-871">10,871 원 </div>
      <div className="_2024-6-4-09-41">2024.6.4 (화) 09:41 </div>
      <div className="_48">48 원 </div>
      <div className="_7-10">7 / 10 (회) </div>
      <div className="_10">* 일일 최대 한도는 10회입니다. </div>
      <div className="card">
        <div className="ellipse-14"></div>
        <img className="check" src="check0.svg" />
        <div className="div9">적립이 완료되었습니다! </div>
        <img className="public" src="public0.svg" />
      </div>
      <img className="line-9" src="line-90.svg" />
      <img className="line-12" src="line-120.svg" />
      <img className="line-10" src="line-100.svg" />
      <img className="line-11" src="line-110.svg" />
      <img className="line-7" src="line-70.svg" />
      <img className="line-8" src="line-80.svg" />
      <div className="div10">무게 </div>
      <div className="_387-g">387 g </div>
    </div>
  );
};

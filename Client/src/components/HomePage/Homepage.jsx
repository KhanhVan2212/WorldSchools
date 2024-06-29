import React from "react";
import ProductList from "../ProductList/ProductList";
import Colright from "../Col-right/Col-right";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="m-auto">
      <Navbar />
      <section className="section top-header top-header-folder">
        <div className="container w-[68%]" data-campaign="Header">
          <nav className="width_common flexbox nav-folder">
            <div className="title-folder">
              <h1>
                <a
                  title="Giáo dục"
                  data-medium="Menu-GiaoDuc"
                  href
                  data-itm-source="#vn_source=Folder-GiaoDuc&vn_campaign=Header&vn_medium=Menu-GiaoDuc&vn_term=Desktop"
                  data-itm-added={1}
                >
                  Giáo dục
                </a>
              </h1>
            </div>
            <ul
              className="ul-nav-folder"
              style={{
                maxHeight: "51px !important",
                overflow: "hidden !important",
              }}
            >
              <li>
                <a
                  title="Tin tức"
                  data-medium="Menu-TinTuc"
                  href
                  data-itm-source="#vn_source=Folder-GiaoDuc&vn_campaign=Header&vn_medium=Menu-TinTuc&vn_term=Desktop"
                  data-itm-added={1}
                >
                  Tin tức
                </a>
              </li>
              <li>
                <a
                  title="Tuyển sinh"
                  data-medium="Menu-TuyenSinh"
                  href
                  data-itm-source="#vn_source=Folder-GiaoDuc&vn_campaign=Header&vn_medium=Menu-TuyenSinh&vn_term=Desktop"
                  data-itm-added={1}
                >
                  Tuyển sinh
                </a>
              </li>
              <li>
                <a
                  title="Chân dung"
                  data-medium="Menu-ChanDung"
                  href
                  data-itm-source="#vn_source=Folder-GiaoDuc&vn_campaign=Header&vn_medium=Menu-ChanDung&vn_term=Desktop"
                  data-itm-added={1}
                >
                  Chân dung
                </a>
              </li>
              <li>
                <a
                  title="Du học"
                  data-medium="Menu-DuHoc"
                  href
                  data-itm-source="#vn_source=Folder-GiaoDuc&vn_campaign=Header&vn_medium=Menu-DuHoc&vn_term=Desktop"
                  data-itm-added={1}
                >
                  Du học
                </a>
              </li>
              <li>
                <a
                  title="Thảo luận"
                  data-medium="Menu-ThaoLuan"
                  href
                  data-itm-source="#vn_source=Folder-GiaoDuc&vn_campaign=Header&vn_medium=Menu-ThaoLuan&vn_term=Desktop"
                  data-itm-added={1}
                >
                  Thảo luận
                </a>
              </li>
              <li>
                <a
                  title="Học tiếng Anh"
                  data-medium="Menu-HocTiengAnh"
                  href
                  data-itm-source="#vn_source=Folder-GiaoDuc&vn_campaign=Header&vn_medium=Menu-HocTiengAnh&vn_term=Desktop"
                  data-itm-added={1}
                >
                  Học tiếng Anh
                </a>
              </li>
              <li>
                <a
                  title="Giáo dục 4.0"
                  data-medium="Menu-GiaoDuc40"
                  href
                  data-itm-source="#vn_source=Folder-GiaoDuc&vn_campaign=Header&vn_medium=Menu-GiaoDuc40&vn_term=Desktop"
                  data-itm-added={1}
                >
                  Giáo dục 4.0
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section
        className="section section_container mt15"
        data-campaign="Stream"
      >
        <div className="container flexbox w-[68%] m-auto">
          <div
            className="col-left col-left-new col-left-subfolder"
            id="automation_TV0"
          >
            <div className="wrapper-topstory-folder wrapper-topstory-subfolder flexbox width_common wrapper-topstory-folder-v2">
              <Link to={`/detail/668061cf041ad176873a6b69`}>
                <article className="item-news grid grid-cols-1 p-4 rounded full-thumb article-topstory">
                  <div>
                    <img src="https://i1-vnexpress.vnecdn.net/2024/06/28/thu-truong-1719576436-7063-1719576762.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=M5DGj4UzHIJuv3mCQIEY-w"  width={1000} height={1000}/>
                  </div>
                  <h2 className="title-news">
                    <a
                      data-medium="Item-1"
                      data-thumb={1}
                      title="Cả lớp trúng tuyển sớm Đại học Ngoại thương, Kinh tế TP HCM"
                      data-itm-source="#vn_source=Folder-GiaoDuc_TinTuc&vn_campaign=Stream&vn_medium=Item-1&vn_term=Desktop&vn_thumb=1"
                      data-itm-added={1}
                    >
                      Bộ Giáo dục: Sẽ hạn chế đoán đề, học tủ môn Văn
                    </a>
                  </h2>
                  <p className="description">
                    <a
                      data-medium="Item-1"
                      data-thumb={1}
                      title="Cả lớp trúng tuyển sớm Đại học Ngoại thương, Kinh tế TP HCM"
                      data-itm-source="#vn_source=Folder-GiaoDuc_TinTuc&vn_campaign=Stream&vn_medium=Item-1&vn_term=Desktop&vn_thumb=1"
                      data-itm-added={1}
                    >
                      Đề Ngữ văn thi tốt nghiệp THPT từ 2025 sẽ lấy ngữ liệu từ
                      nhiều sách giáo khoa và cả bên ngoài, hạn chế chuyện đoán
                      đề như năm nay.
                    </a>
                    <span className="meta-news">
                      <a
                        className="count_cmt"
                        href="../ca-lop-trung-tuyen-som-dai-hoc-ngoai-thuong-kinh-te-tp-hcm-4761128.html#box_comment_vne"
                        style={{ whiteSpace: "nowrap", display: "none" }}
                      >
                        <svg className="ic ic-comment">
                          <use xlinkHref="#Comment-Reg" />
                        </svg>
                        <span className="font_icon widget-comment-4761128-1" />
                      </a>
                    </span>
                  </p>
                </article>
              </Link>
            </div>
            <div className="width_common list-news-subfolder has-border-right">
              <ProductList />
            </div>
            <div className="width_common pagination flexbox">
              <div id="pagination" className="paging flexbox">
                <div className="button-page flexbox">
                  <a href="javascript:;" className="btn-page active">
                    1
                  </a>
                  <a href="tin-tuc-p2.html" className="btn-page">
                    2
                  </a>
                  <a href="tin-tuc-p3.html" className="btn-page">
                    3
                  </a>
                  <a href="tin-tuc-p4.html" className="btn-page">
                    4
                  </a>
                  <a href="tin-tuc-p2.html" className="btn-page next-page">
                    <svg className="ic ic-arrow-right">
                      <use xlinkHref="#Arrow-Right-1" />
                    </svg>
                    &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Colright />
        </div>
      </section>
      <section className="section section_container">
        <div className=" container wrap-box-business">
          <div className="width_common inner-box-business">
            <div className="box-category box-shop-sell box-sponsor-noslide close_not_qc bottom_sponsor">
              <ins
                className="adsbyeclick"
                data-zone={6277}
                data-ad-width={1}
                data-ad-height={1}
                data-pos="Bottom_sponsor"
                data-lazy="done"
                data-adsbyeclick="done"
                style={{ display: "none" }}
              >
                <ins
                  id="eclick_ads_frame5_ins"
                  style={{
                    display: "block",
                    border: "none",
                    height: "auto",
                    margin: "0 auto",
                    padding: 0,
                    position: "relative",
                    visibility: "visible",
                    width: "100%",
                    backgroundColor: "transparent",
                  }}
                >
                  <div id="eclick_ads_frame5_div">
                    <div
                      id="eclick_ads_frame5_wrap"
                      className="ad_wrapper_protection"
                    >
                      <iframe
                        width={1}
                        height={1}
                        frameBorder={0}
                        marginWidth={0}
                        marginHeight={0}
                        vspace={0}
                        hspace={0}
                        allowTransparency="true"
                        scrolling="no"
                        allowFullScreen="true"
                        id="eclick_ads_frame5"
                        className="ad_frame_protection"
                        ad_oninit
                        ad_slider
                        style={{ position: "absolute", left: 0, top: 0 }}
                      />
                    </div>
                  </div>
                </ins>
              </ins>
              <div
                className="eclick_ad_holder ad_frame_protection"
                style={{
                  border: "0pt none",
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
                id="zone_ad_eclick_6277"
              >
                <div className>
                  <hgroup className="width_common title-box-category title-box-small">
                    <h4 className="parent-cate">
                      <span className="inner-title">Tin tài trợ</span>
                    </h4>
                  </hgroup>
                  <div className="width_common">
                    <div className="inner-box-sponsor" data-zone-id={6277}>
                      <article className="item-news">
                        <div className="thumb-art">
                          <a
                            href="http://c.eclick.vn/r?beacon=zizkzizqzjznzizgzrzkzozlzhzkzkzozlzlzkzkzozizizqznzi2pzhzjzjzjzjzgzrzgzmzk2pzhzjzjzjzgzjzkzrzgzrzfzizizqznzi2pzhzjzjzjzjzgzqzizizk2pzhzjzjzjzgzjzqzmzizmzfzizrzlzkzk2pzhzjzjzjzjzgzqzgzjzn2pzhzjzjzjzgzjzqzqzlzkzfzizizqznzi2pzhzjzjzjzjzgzrzmzjzk2pzhzjzjzjzgzjzrzizlzkzozizizlzdzqzlzdznznzdzizqzqzo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a&link=http%3A%2F%2Fc.eclick.vn%2Fr%2F2000307838%2F6277%2Fzizkzizqzjznzizgzrzkzozlzhzkzkzozhzjzjzjzgzjzkzrzgzrzozo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a%2Fhttps%3A%2F%2Fyhoc.co%2Fkinh-hoang-10-nam-bi-gut-va-giai-phap-cua-nguoi-dan-ong-70-tuoi%3Futm_source%3DNative5135%26utm_medium%3Dkinh-hoang-10-nam-bi-gut-va-giai-phap-cua-nguoi-dan-ong-70-tuoi%26utm_campaign%3Dkinh-hoang-10-nam-bi-gut-va-giai-phap-cua-nguoi-dan-ong-70-tuoi&algo=0&cid=2000038357&cat=&bid=2000307838&gid=53&ts=1719041387&url=http%3A%2F%2F127.0.0.1%3A5500%2Fvnexpress.net%2Fgiao-duc%2Ftin-tuc.html&urlref=http://127.0.0.1:5500/vnexpress.net/giao-duc/tin-tuc.html&hostname=127.0.0.1&tsv=1719041387&res=1920x1080&zone_format=502&loc=24-2-vn&lp=24&lz=2&lc=vn&fosp_aid=seaed7d1asgeilva.1690914340.des&fosp_uid=seaed7d1asgeilva.1690914340.des&orig_aid=seaed7d1asgeilva.1690914340.des&gender=&rand=10544686&method=1&egg_c=&egg_b=&egg_i=&egg_t=&device=1&os=&v=4&sign=7JIJMQYUn6%2BqN1kmaaKtIPp%2BFmsep4B2QtLygfe84N24A6%2FkAFS0aOdyJUUXj7z1%2Bbvz4jZJ4Cnh%2B3RNUUXtXX0RbQY8lTUgq9Pur5YPcU%2FpmYiaXoTwqgs9ekxeEkpsfwc6g%2Fs9GL1%2BHwR96GqI4A8RS1d3t7jv6E3PF9KafFeNJrbP%2Fn3u7EV518QR1DDxV%2B7qJnokTNiBbSQZDijbgBddSKv298C%2FWugsBnCMeaQt%2Bp8z65dQi8aLjiqwgtfvKVTb1tDWGnXfDvPtgngxT22u8T1N10C2Y%2BYn6jLY6zCnLfl1MwPLcpiMRKokSLXe9xYVNjo5UEonVzReNB8C%2BAPWqdwSzd7TMf5QMmdZRqXpHm1hS1TO%2BYF49n9tiAQ%2F68FnGwZVSJ5kQDi1zcv8kZ6C7CUaNb9smnKmwphtV2z%2F2J%2FgXPaDfBRZ6tcCTb2vokahwdinK%2BtNqRFwWs7Yx%2BChShYb7NsH7fUThSVMboTHJHfAVG0Q5oAs5iLpu6zQbN6Z5Dc6RNuCoTinKzT6vrbj8Sg5HU5IP2a8QyR5lKi4elGf90aBTOEae5CX6PgvQauSYeUAK0BXh0LOY9i8N5pbVsSnFJP7TPsv7auNSMQNfx5eLl3jdGB2G1KTw7LweJAKSsiyWSjsCMDnamN%2Fkjjd3bo3gIG8xOQhVUFby3u9PObm3Z9PzZcwOE%2BdsfilmZJyL3sV"
                            target="_blank"
                            data-banner-id={2000307838}
                            className="thumb thumb-5x3"
                          >
                            <img
                              src="//static.eclick.vn/uploads/5x3/2023/11/16/t3367128945459642uxr1335.jpeg"
                              alt
                            />
                          </a>
                        </div>
                        <h4 className="title-news">
                          <a
                            href="http://c.eclick.vn/r?beacon=zizkzizqzjznzizgzrzkzozlzhzkzkzozlzlzkzkzozizizqznzi2pzhzjzjzjzjzgzrzgzmzk2pzhzjzjzjzgzjzkzrzgzrzfzizizqznzi2pzhzjzjzjzjzgzqzizizk2pzhzjzjzjzgzjzqzmzizmzfzizrzlzkzk2pzhzjzjzjzjzgzqzgzjzn2pzhzjzjzjzgzjzqzqzlzkzfzizizqznzi2pzhzjzjzjzjzgzrzmzjzk2pzhzjzjzjzgzjzrzizlzkzozizizlzdzqzlzdznznzdzizqzqzo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a&link=http%3A%2F%2Fc.eclick.vn%2Fr%2F2000307838%2F6277%2Fzizkzizqzjznzizgzrzkzozlzhzkzkzozhzjzjzjzgzjzkzrzgzrzozo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a%2Fhttps%3A%2F%2Fyhoc.co%2Fkinh-hoang-10-nam-bi-gut-va-giai-phap-cua-nguoi-dan-ong-70-tuoi%3Futm_source%3DNative5135%26utm_medium%3Dkinh-hoang-10-nam-bi-gut-va-giai-phap-cua-nguoi-dan-ong-70-tuoi%26utm_campaign%3Dkinh-hoang-10-nam-bi-gut-va-giai-phap-cua-nguoi-dan-ong-70-tuoi&algo=0&cid=2000038357&cat=&bid=2000307838&gid=53&ts=1719041387&url=http%3A%2F%2F127.0.0.1%3A5500%2Fvnexpress.net%2Fgiao-duc%2Ftin-tuc.html&urlref=http://127.0.0.1:5500/vnexpress.net/giao-duc/tin-tuc.html&hostname=127.0.0.1&tsv=1719041387&res=1920x1080&zone_format=502&loc=24-2-vn&lp=24&lz=2&lc=vn&fosp_aid=seaed7d1asgeilva.1690914340.des&fosp_uid=seaed7d1asgeilva.1690914340.des&orig_aid=seaed7d1asgeilva.1690914340.des&gender=&rand=10544686&method=1&egg_c=&egg_b=&egg_i=&egg_t=&device=1&os=&v=4&sign=7JIJMQYUn6%2BqN1kmaaKtIPp%2BFmsep4B2QtLygfe84N24A6%2FkAFS0aOdyJUUXj7z1%2Bbvz4jZJ4Cnh%2B3RNUUXtXX0RbQY8lTUgq9Pur5YPcU%2FpmYiaXoTwqgs9ekxeEkpsfwc6g%2Fs9GL1%2BHwR96GqI4A8RS1d3t7jv6E3PF9KafFeNJrbP%2Fn3u7EV518QR1DDxV%2B7qJnokTNiBbSQZDijbgBddSKv298C%2FWugsBnCMeaQt%2Bp8z65dQi8aLjiqwgtfvKVTb1tDWGnXfDvPtgngxT22u8T1N10C2Y%2BYn6jLY6zCnLfl1MwPLcpiMRKokSLXe9xYVNjo5UEonVzReNB8C%2BAPWqdwSzd7TMf5QMmdZRqXpHm1hS1TO%2BYF49n9tiAQ%2F68FnGwZVSJ5kQDi1zcv8kZ6C7CUaNb9smnKmwphtV2z%2F2J%2FgXPaDfBRZ6tcCTb2vokahwdinK%2BtNqRFwWs7Yx%2BChShYb7NsH7fUThSVMboTHJHfAVG0Q5oAs5iLpu6zQbN6Z5Dc6RNuCoTinKzT6vrbj8Sg5HU5IP2a8QyR5lKi4elGf90aBTOEae5CX6PgvQauSYeUAK0BXh0LOY9i8N5pbVsSnFJP7TPsv7auNSMQNfx5eLl3jdGB2G1KTw7LweJAKSsiyWSjsCMDnamN%2Fkjjd3bo3gIG8xOQhVUFby3u9PObm3Z9PzZcwOE%2BdsfilmZJyL3sV"
                            target="_blank"
                            data-banner-id={2000307838}
                          >
                            Giải pháp giúp giảm cơn đau gout cấp
                          </a>
                        </h4>
                        <p className="name_sponsor"> BoniGut</p>
                      </article>
                      <article className="item-news">
                        <div className="thumb-art">
                          <a
                            href="http://c.eclick.vn/r?beacon=zizkzizqzjznzizgzrzkzozlzhzkzkzozlzlzkzkzozizizqznzi2pzhzjzjzjzjzgzrzgzmzk2pzhzjzjzjzgzjzkzrzgzrzfzizizqznzi2pzhzjzjzjzjzgzqzizizk2pzhzjzjzjzgzjzqzmzizmzfzizrzlzkzk2pzhzjzjzjzjzgzqzgzjzn2pzhzjzjzjzgzjzqzqzlzkzfzizizqznzi2pzhzjzjzjzjzgzrzmzjzk2pzhzjzjzjzgzjzrzizlzkzozizizlzdzqzlzdznznzdzizqzqzo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a&link=http%3A%2F%2Fc.eclick.vn%2Fr%2F2000309515%2F6277%2Fzizkzizqzjznzizgzrzkzozlzhzkzkzozhzjzjzjzgzjzqzmzizmzozo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a%2Fhttps%3A%2F%2Fyhoc.co%2Fbi-quyet-de-co-mai-toc-khong-bac-khong-rung-cua-nguoi-phu-nu-u60%3Futm_source%3DNative1521%26utm_medium%3Dbi-quyet-de-co-mai-toc-khong-bac-khong-rung-cua-nguoi-phu-nu-u60%26utm_campaign%3Dbi-quyet-de-co-mai-toc-khong-bac-khong-rung-cua-nguoi-phu-nu-u60&algo=0&cid=2000039117&cat=&bid=2000309515&gid=1034&ts=1719041387&url=http%3A%2F%2F127.0.0.1%3A5500%2Fvnexpress.net%2Fgiao-duc%2Ftin-tuc.html&urlref=http://127.0.0.1:5500/vnexpress.net/giao-duc/tin-tuc.html&hostname=127.0.0.1&tsv=1719041387&res=1920x1080&zone_format=502&loc=24-2-vn&lp=24&lz=2&lc=vn&fosp_aid=seaed7d1asgeilva.1690914340.des&fosp_uid=seaed7d1asgeilva.1690914340.des&orig_aid=seaed7d1asgeilva.1690914340.des&gender=&rand=10544686&method=1&egg_c=&egg_b=&egg_i=&egg_t=&device=1&os=&v=4&sign=7JIJMQYUn6%2BqN1kmaaKtIPp%2BFmsep4B2QtLygfe84N24A6%2FkAFS0aOdyJUUXj7z1%2Bbvz4jZJ4Cnh%2B3RNUUXtXX0RbQY8lTUgq9Pur5YPcU%2FpmYiaXoTwqgs9ekxeEkpsfwc6g%2Fs9GL1%2BHwR96GqI4A8RS1d3t7jv6E3PF9KafFeNJrbP%2Fn3u7EV518QR1DDxV%2B7qJnokTNiBbSQZDijbgBddSKv298C%2FWugsBnCMeaQt%2Bp8z65dQi8aLjiqwgtfvKVTb1tDWGnXfDvPtgngxT2ys9T1N10C2Y%2BYn7jHH%2FX4DDDFjupy6fjoq%2BCSYLWvYu7fmR5EIKq4T%2BMe2XvrLdoa7koS0E4i%2BuOYdjIIDTA2%2B6XPfsvH5N9YP12k32S7Zl4DI5ScBonk7JihCWskiwAKjmDi0Nh%2FtqnZ7u8t4d%2F55ESPiI0FeCPBFfaVze5E4t1kDwH%2BfZB9gTC1V36noLLzyGlgdu6nG28wFmX4bSKeT421B85l2SIXy9zQMI1mzNkUGb%2FJtkbNeCp0dLNBjAwYKIfnFPO9rqRwAiPK4LbAfC%2BLPVjlKbB%2BM%2BPEnft5%2BhtzKAzTm7vXr6XmMkneYR9l52RTCSsJoGxm80TAdUs1NMaUjq5kiBqSpt5luAIP%2FfUv1aGdxk3ElOdCWWTOPWHJprfI7XLFAsrN3kyY2LZW1szO2ubzMAZ7GeFSyeiQovNp%2FqezvQ7%2F9cA%3D%3D"
                            target="_blank"
                            data-banner-id={2000309515}
                            className="thumb thumb-5x3"
                          >
                            <img
                              src="//static.eclick.vn/uploads/5x3/2023/11/14/36498164g25k14381054s856.jpeg"
                              alt
                            />
                          </a>
                        </div>
                        <h4 className="title-news">
                          <a
                            href="http://c.eclick.vn/r?beacon=zizkzizqzjznzizgzrzkzozlzhzkzkzozlzlzkzkzozizizqznzi2pzhzjzjzjzjzgzrzgzmzk2pzhzjzjzjzgzjzkzrzgzrzfzizizqznzi2pzhzjzjzjzjzgzqzizizk2pzhzjzjzjzgzjzqzmzizmzfzizrzlzkzk2pzhzjzjzjzjzgzqzgzjzn2pzhzjzjzjzgzjzqzqzlzkzfzizizqznzi2pzhzjzjzjzjzgzrzmzjzk2pzhzjzjzjzgzjzrzizlzkzozizizlzdzqzlzdznznzdzizqzqzo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a&link=http%3A%2F%2Fc.eclick.vn%2Fr%2F2000309515%2F6277%2Fzizkzizqzjznzizgzrzkzozlzhzkzkzozhzjzjzjzgzjzqzmzizmzozo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a%2Fhttps%3A%2F%2Fyhoc.co%2Fbi-quyet-de-co-mai-toc-khong-bac-khong-rung-cua-nguoi-phu-nu-u60%3Futm_source%3DNative1521%26utm_medium%3Dbi-quyet-de-co-mai-toc-khong-bac-khong-rung-cua-nguoi-phu-nu-u60%26utm_campaign%3Dbi-quyet-de-co-mai-toc-khong-bac-khong-rung-cua-nguoi-phu-nu-u60&algo=0&cid=2000039117&cat=&bid=2000309515&gid=1034&ts=1719041387&url=http%3A%2F%2F127.0.0.1%3A5500%2Fvnexpress.net%2Fgiao-duc%2Ftin-tuc.html&urlref=http://127.0.0.1:5500/vnexpress.net/giao-duc/tin-tuc.html&hostname=127.0.0.1&tsv=1719041387&res=1920x1080&zone_format=502&loc=24-2-vn&lp=24&lz=2&lc=vn&fosp_aid=seaed7d1asgeilva.1690914340.des&fosp_uid=seaed7d1asgeilva.1690914340.des&orig_aid=seaed7d1asgeilva.1690914340.des&gender=&rand=10544686&method=1&egg_c=&egg_b=&egg_i=&egg_t=&device=1&os=&v=4&sign=7JIJMQYUn6%2BqN1kmaaKtIPp%2BFmsep4B2QtLygfe84N24A6%2FkAFS0aOdyJUUXj7z1%2Bbvz4jZJ4Cnh%2B3RNUUXtXX0RbQY8lTUgq9Pur5YPcU%2FpmYiaXoTwqgs9ekxeEkpsfwc6g%2Fs9GL1%2BHwR96GqI4A8RS1d3t7jv6E3PF9KafFeNJrbP%2Fn3u7EV518QR1DDxV%2B7qJnokTNiBbSQZDijbgBddSKv298C%2FWugsBnCMeaQt%2Bp8z65dQi8aLjiqwgtfvKVTb1tDWGnXfDvPtgngxT2ys9T1N10C2Y%2BYn7jHH%2FX4DDDFjupy6fjoq%2BCSYLWvYu7fmR5EIKq4T%2BMe2XvrLdoa7koS0E4i%2BuOYdjIIDTA2%2B6XPfsvH5N9YP12k32S7Zl4DI5ScBonk7JihCWskiwAKjmDi0Nh%2FtqnZ7u8t4d%2F55ESPiI0FeCPBFfaVze5E4t1kDwH%2BfZB9gTC1V36noLLzyGlgdu6nG28wFmX4bSKeT421B85l2SIXy9zQMI1mzNkUGb%2FJtkbNeCp0dLNBjAwYKIfnFPO9rqRwAiPK4LbAfC%2BLPVjlKbB%2BM%2BPEnft5%2BhtzKAzTm7vXr6XmMkneYR9l52RTCSsJoGxm80TAdUs1NMaUjq5kiBqSpt5luAIP%2FfUv1aGdxk3ElOdCWWTOPWHJprfI7XLFAsrN3kyY2LZW1szO2ubzMAZ7GeFSyeiQovNp%2FqezvQ7%2F9cA%3D%3D"
                            target="_blank"
                            data-banner-id={2000309515}
                          >
                            Giảm tóc bạc, rụng nhờ cách sau
                          </a>
                        </h4>
                        <p className="name_sponsor"> BoniHair</p>
                      </article>
                      <article className="item-news">
                        <div className="thumb-art">
                          <a
                            href="http://c.eclick.vn/r?beacon=zizkzizqzjznzizgzrzkzozlzhzkzkzozlzlzkzkzozizizqznzi2pzhzjzjzjzjzgzrzgzmzk2pzhzjzjzjzgzjzkzrzgzrzfzizizqznzi2pzhzjzjzjzjzgzqzizizk2pzhzjzjzjzgzjzqzmzizmzfzizrzlzkzk2pzhzjzjzjzjzgzqzgzjzn2pzhzjzjzjzgzjzqzqzlzkzfzizizqznzi2pzhzjzjzjzjzgzrzmzjzk2pzhzjzjzjzgzjzrzizlzkzozizizlzdzqzlzdznznzdzizqzqzo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a&link=http%3A%2F%2Fc.eclick.vn%2Fr%2F2000309967%2F6277%2Fzizkzizqzjznzizgzrzkzozlzhzkzkzozhzjzjzjzgzjzqzqzlzkzozo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a%2Fhttps%3A%2F%2Fthemeadowbinhchanh.com%2Fdang-ky-nhan-bang-gia-the-meadow-binh-chanh%2F%3Futm_source%3DHN%26utm_medium%3DVNE%26utm_id%3D0606&algo=0&cid=2000039304&cat=&bid=2000309967&gid=2000039304&ts=1719041387&url=http%3A%2F%2F127.0.0.1%3A5500%2Fvnexpress.net%2Fgiao-duc%2Ftin-tuc.html&urlref=http://127.0.0.1:5500/vnexpress.net/giao-duc/tin-tuc.html&hostname=127.0.0.1&tsv=1719041387&res=1920x1080&zone_format=502&loc=24-2-vn&lp=24&lz=2&lc=vn&fosp_aid=seaed7d1asgeilva.1690914340.des&fosp_uid=seaed7d1asgeilva.1690914340.des&orig_aid=seaed7d1asgeilva.1690914340.des&gender=&rand=10544686&method=1&egg_c=&egg_b=&egg_i=&egg_t=&device=1&os=&v=4&sign=7JIJMQYUn6%2BqN1kmaaKtIPp%2BFmsep4B2QtLygfe84N24A6%2FkAFS0aOdyJUUXj7z1%2Bbvz4jZJ4Cnh%2B3RNUUXtXX0RbQY8lTUgq9Pur5YPcU%2FpmYiaXoTwqgs9ekxeEkpsfwc6g%2Fs9GL1%2BHwR96GqI4A8RS1d3t7jv6E3PF9KafFeNJrbP%2Fn3u7EV518QR1DDxV%2B7qJnokTNiBbSQZDijbgBddSKv298C%2FWugsBnCMeaQt%2Bp8z65dQi8aLjiqwgtfmgSteFup5HzbrtEUFD%2FXyaMItSO9RE11dJ7c%2BK6eMnw7L9ESL587PylY8lR742d7eQXRt8vavnlf7hsPRGftUAXnuYq1JX0heVDVwNlMtVIUdWjHVhDMHyH%2F3RV2dKOYXx8n9jF3ftTO5MwXW5s%2Fn0bYswqdfXtMv1hWxDIjwtlD8MvucGPywLio2cGDiqvkLydnUlEr8Db5L8Daexogew3Htj1ywyumBSuX2zRGMjAf4j2C4tGi0Aug5BRm5YpGkGfjiu7ecsnbhHE3mE5%2BW5YGNIHKOZHp3jsd9ZWVPZYqQoza8vzCrw2jZMZQM2gkMP6ut%2BxoOSI51A5ecV9jnqvYS5pSm7y955QkYRlmDcLnqZGfwYRr9hYUexHrQloGccKSxjkQnmznSYGk7kL%2F5tmNSjQEQSU4F1hrmW1%2FO7857fl7tSq6XPxUYsxm9WOpXrh%2F5zDwA4Ya2E5tM3mBHRNkhiSCU"
                            target="_blank"
                            data-banner-id={2000309967}
                            className="thumb thumb-5x3"
                          >
                            <img
                              src="//static.eclick.vn/uploads/5x3/2024/06/06/337717373892135386x48j27c.png"
                              alt
                            />
                          </a>
                        </div>
                        <h4 className="title-news">
                          <a
                            href="http://c.eclick.vn/r?beacon=zizkzizqzjznzizgzrzkzozlzhzkzkzozlzlzkzkzozizizqznzi2pzhzjzjzjzjzgzrzgzmzk2pzhzjzjzjzgzjzkzrzgzrzfzizizqznzi2pzhzjzjzjzjzgzqzizizk2pzhzjzjzjzgzjzqzmzizmzfzizrzlzkzk2pzhzjzjzjzjzgzqzgzjzn2pzhzjzjzjzgzjzqzqzlzkzfzizizqznzi2pzhzjzjzjzjzgzrzmzjzk2pzhzjzjzjzgzjzrzizlzkzozizizlzdzqzlzdznznzdzizqzqzo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a&link=http%3A%2F%2Fc.eclick.vn%2Fr%2F2000309967%2F6277%2Fzizkzizqzjznzizgzrzkzozlzhzkzkzozhzjzjzjzgzjzqzqzlzkzozo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a%2Fhttps%3A%2F%2Fthemeadowbinhchanh.com%2Fdang-ky-nhan-bang-gia-the-meadow-binh-chanh%2F%3Futm_source%3DHN%26utm_medium%3DVNE%26utm_id%3D0606&algo=0&cid=2000039304&cat=&bid=2000309967&gid=2000039304&ts=1719041387&url=http%3A%2F%2F127.0.0.1%3A5500%2Fvnexpress.net%2Fgiao-duc%2Ftin-tuc.html&urlref=http://127.0.0.1:5500/vnexpress.net/giao-duc/tin-tuc.html&hostname=127.0.0.1&tsv=1719041387&res=1920x1080&zone_format=502&loc=24-2-vn&lp=24&lz=2&lc=vn&fosp_aid=seaed7d1asgeilva.1690914340.des&fosp_uid=seaed7d1asgeilva.1690914340.des&orig_aid=seaed7d1asgeilva.1690914340.des&gender=&rand=10544686&method=1&egg_c=&egg_b=&egg_i=&egg_t=&device=1&os=&v=4&sign=7JIJMQYUn6%2BqN1kmaaKtIPp%2BFmsep4B2QtLygfe84N24A6%2FkAFS0aOdyJUUXj7z1%2Bbvz4jZJ4Cnh%2B3RNUUXtXX0RbQY8lTUgq9Pur5YPcU%2FpmYiaXoTwqgs9ekxeEkpsfwc6g%2Fs9GL1%2BHwR96GqI4A8RS1d3t7jv6E3PF9KafFeNJrbP%2Fn3u7EV518QR1DDxV%2B7qJnokTNiBbSQZDijbgBddSKv298C%2FWugsBnCMeaQt%2Bp8z65dQi8aLjiqwgtfmgSteFup5HzbrtEUFD%2FXyaMItSO9RE11dJ7c%2BK6eMnw7L9ESL587PylY8lR742d7eQXRt8vavnlf7hsPRGftUAXnuYq1JX0heVDVwNlMtVIUdWjHVhDMHyH%2F3RV2dKOYXx8n9jF3ftTO5MwXW5s%2Fn0bYswqdfXtMv1hWxDIjwtlD8MvucGPywLio2cGDiqvkLydnUlEr8Db5L8Daexogew3Htj1ywyumBSuX2zRGMjAf4j2C4tGi0Aug5BRm5YpGkGfjiu7ecsnbhHE3mE5%2BW5YGNIHKOZHp3jsd9ZWVPZYqQoza8vzCrw2jZMZQM2gkMP6ut%2BxoOSI51A5ecV9jnqvYS5pSm7y955QkYRlmDcLnqZGfwYRr9hYUexHrQloGccKSxjkQnmznSYGk7kL%2F5tmNSjQEQSU4F1hrmW1%2FO7857fl7tSq6XPxUYsxm9WOpXrh%2F5zDwA4Ya2E5tM3mBHRNkhiSCU"
                            target="_blank"
                            data-banner-id={2000309967}
                          >
                            Mở bán giai đoạn 1 nhà phố Gamuda Land tại khu vực
                            Bình Chánh
                          </a>
                        </h4>
                        <p className="name_sponsor"> Gamuda Land</p>
                      </article>
                      <article className="item-news">
                        <div className="thumb-art">
                          <a
                            href="http://c.eclick.vn/r?beacon=zizkzizqzjznzizgzrzkzozlzhzkzkzozlzlzkzkzozizizqznzi2pzhzjzjzjzjzgzrzgzmzk2pzhzjzjzjzgzjzkzrzgzrzfzizizqznzi2pzhzjzjzjzjzgzqzizizk2pzhzjzjzjzgzjzqzmzizmzfzizrzlzkzk2pzhzjzjzjzjzgzqzgzjzn2pzhzjzjzjzgzjzqzqzlzkzfzizizqznzi2pzhzjzjzjzjzgzrzmzjzk2pzhzjzjzjzgzjzrzizlzkzozizizlzdzqzlzdznznzdzizqzqzo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a&link=http%3A%2F%2Fc.eclick.vn%2Fr%2F2000308167%2F6277%2Fzizkzizqzjznzizgzrzkzozlzhzkzkzozhzjzjzjzgzjzrzizlzkzozo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a%2Fhttps%3A%2F%2Fyhoc.co%2Fcham-dut-chuoi-ngay-dung-thuoc-giam-dau-lien-tuc-vi-benh-gut%3Futm_source%3DNative6149%26utm_medium%3Dcham-dut-chuoi-ngay-dung-thuoc-giam-dau-lien-tuc-vi-benh-gut%26utm_campaign%3Dcham-dut-chuoi-ngay-dung-thuoc-giam-dau-lien-tuc-vi-benh-gut&algo=0&cid=2000038507&cat=&bid=2000308167&gid=53&ts=1719041387&url=http%3A%2F%2F127.0.0.1%3A5500%2Fvnexpress.net%2Fgiao-duc%2Ftin-tuc.html&urlref=http://127.0.0.1:5500/vnexpress.net/giao-duc/tin-tuc.html&hostname=127.0.0.1&tsv=1719041387&res=1920x1080&zone_format=502&loc=24-2-vn&lp=24&lz=2&lc=vn&fosp_aid=seaed7d1asgeilva.1690914340.des&fosp_uid=seaed7d1asgeilva.1690914340.des&orig_aid=seaed7d1asgeilva.1690914340.des&gender=&rand=10544686&method=1&egg_c=&egg_b=&egg_i=&egg_t=&device=1&os=&v=4&sign=7JIJMQYUn6%2BqN1kmaaKtIPp%2BFmsep4B2QtLygfe84N24A6%2FkAFS0aOdyJUUXj7z1%2Bbvz4jZJ4Cnh%2B3RNUUXtXX0RbQY8lTUgq9Pur5YPcU%2FpmYiaXoTwqgs9ekxeEkpsfwc6g%2Fs9GL1%2BHwR96GqI4A8RS1d3t7jv6E3PF9KafFeNJrbP%2Fn3u7EV518QR1DDxV%2B7qJnokTNiBbSQZDijbgBddSKv298C%2FWugsBnCMeaQt%2Bp8z65dQi8aLjiqwgtfvKVTb1tDWGnXfDvPtgngxT22o9D1N10C2Y%2BYn6jLY6zBfdGkK4ecVQCunnjypgbA40H3fcyk7HT7do%2BxfgdfSjurYZJA7WlC7Rmqei6Kbnrig19%2F2Ev0Qfb7lN%2BIEuKytSTTUr0WnEawChDjQoFPNQmjm0HLXqspDu96EpDRptUja9RVdLqVUtlnXLPyRjtFEvrWyRtqaf4y4xe4NZzogyzk%2B73XAXMEHZLjhczfLPksEyIoDDySeOrEmwuc%2BTTM7qBGssqLPlT7p3QphdT4JrYFbJ9N6lGuqfIuWx%2FgKGQBgRTW7W9vgsc%2FbSH6f5HoKUusnmO84uHlM04yhkAoMlxV8IVFQdwYnecU9r1fuWGsY7yRbE6mtIagWSGFRY7yLhZ5m70UIYXct%2Fkw5%2BWDuT%2BC82Utgva38rWDA3S%2FG35STr3Lmzb8YHaVh9LNNT3ITj53U9aQF"
                            target="_blank"
                            data-banner-id={2000308167}
                            className="thumb thumb-5x3"
                          >
                            <img
                              src="//static.eclick.vn/uploads/5x3/2023/12/14/90993760y7317833022g4795b61.jpeg"
                              alt
                            />
                          </a>
                        </div>
                        <h4 className="title-news">
                          <a
                            href="http://c.eclick.vn/r?beacon=zizkzizqzjznzizgzrzkzozlzhzkzkzozlzlzkzkzozizizqznzi2pzhzjzjzjzjzgzrzgzmzk2pzhzjzjzjzgzjzkzrzgzrzfzizizqznzi2pzhzjzjzjzjzgzqzizizk2pzhzjzjzjzgzjzqzmzizmzfzizrzlzkzk2pzhzjzjzjzjzgzqzgzjzn2pzhzjzjzjzgzjzqzqzlzkzfzizizqznzi2pzhzjzjzjzjzgzrzmzjzk2pzhzjzjzjzgzjzrzizlzkzozizizlzdzqzlzdznznzdzizqzqzo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a&link=http%3A%2F%2Fc.eclick.vn%2Fr%2F2000308167%2F6277%2Fzizkzizqzjznzizgzrzkzozlzhzkzkzozhzjzjzjzgzjzrzizlzkzozo2a201v2021zk21zi1v2a1x2024292f1vzdzizlzqzjzqziznzgznzjzd21202a%2Fhttps%3A%2F%2Fyhoc.co%2Fcham-dut-chuoi-ngay-dung-thuoc-giam-dau-lien-tuc-vi-benh-gut%3Futm_source%3DNative6149%26utm_medium%3Dcham-dut-chuoi-ngay-dung-thuoc-giam-dau-lien-tuc-vi-benh-gut%26utm_campaign%3Dcham-dut-chuoi-ngay-dung-thuoc-giam-dau-lien-tuc-vi-benh-gut&algo=0&cid=2000038507&cat=&bid=2000308167&gid=53&ts=1719041387&url=http%3A%2F%2F127.0.0.1%3A5500%2Fvnexpress.net%2Fgiao-duc%2Ftin-tuc.html&urlref=http://127.0.0.1:5500/vnexpress.net/giao-duc/tin-tuc.html&hostname=127.0.0.1&tsv=1719041387&res=1920x1080&zone_format=502&loc=24-2-vn&lp=24&lz=2&lc=vn&fosp_aid=seaed7d1asgeilva.1690914340.des&fosp_uid=seaed7d1asgeilva.1690914340.des&orig_aid=seaed7d1asgeilva.1690914340.des&gender=&rand=10544686&method=1&egg_c=&egg_b=&egg_i=&egg_t=&device=1&os=&v=4&sign=7JIJMQYUn6%2BqN1kmaaKtIPp%2BFmsep4B2QtLygfe84N24A6%2FkAFS0aOdyJUUXj7z1%2Bbvz4jZJ4Cnh%2B3RNUUXtXX0RbQY8lTUgq9Pur5YPcU%2FpmYiaXoTwqgs9ekxeEkpsfwc6g%2Fs9GL1%2BHwR96GqI4A8RS1d3t7jv6E3PF9KafFeNJrbP%2Fn3u7EV518QR1DDxV%2B7qJnokTNiBbSQZDijbgBddSKv298C%2FWugsBnCMeaQt%2Bp8z65dQi8aLjiqwgtfvKVTb1tDWGnXfDvPtgngxT22o9D1N10C2Y%2BYn6jLY6zBfdGkK4ecVQCunnjypgbA40H3fcyk7HT7do%2BxfgdfSjurYZJA7WlC7Rmqei6Kbnrig19%2F2Ev0Qfb7lN%2BIEuKytSTTUr0WnEawChDjQoFPNQmjm0HLXqspDu96EpDRptUja9RVdLqVUtlnXLPyRjtFEvrWyRtqaf4y4xe4NZzogyzk%2B73XAXMEHZLjhczfLPksEyIoDDySeOrEmwuc%2BTTM7qBGssqLPlT7p3QphdT4JrYFbJ9N6lGuqfIuWx%2FgKGQBgRTW7W9vgsc%2FbSH6f5HoKUusnmO84uHlM04yhkAoMlxV8IVFQdwYnecU9r1fuWGsY7yRbE6mtIagWSGFRY7yLhZ5m70UIYXct%2Fkw5%2BWDuT%2BC82Utgva38rWDA3S%2FG35STr3Lmzb8YHaVh9LNNT3ITj53U9aQF"
                            target="_blank"
                            data-banner-id={2000308167}
                          >
                            Giải pháp đơn giản giúp người mắc gút lâu năm giảm
                            các cơn đau
                          </a>
                        </h4>
                        <p className="name_sponsor"> BoniGut</p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="rich-media-banner-ads">
              <div id="sis_richmedia"></div>
            </div>
            <div
              id="OverLapHiden"
              style={{
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                position: "fixed",
                display: "none",
                backgroundColor: "rgb(0, 0, 0)",
                opacity: "0.6",
                zIndex: 5000001,
              }}
            />
            {/* Fshop*/}
            <div className="container fs_box" style={{ clear: "both" }}>
              <div>
                <div className="box-category">
                  <div id="sis_footershop" />
                </div>
                <div
                  id="_footer_ads"
                  className="lazier hidden"
                  data-loaded={1}
                />
              </div>
            </div>
            <div id="_box_business" className="lazier hidden" />
          </div>
          <div id="_ads_box_business" className="lazier" />
        </div>
        <div className="container">
          <div className="banner-ads">
            <div className="box-category">
              <div id="sis_bottombanner" />
            </div>
            <div
              id="_footer_ads_bb"
              className="lazier hidden"
              data-loaded={1}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;

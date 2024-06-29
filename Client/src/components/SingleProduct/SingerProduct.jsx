import React from "react";
import "./SingerProduct.css";
import Colright from "../Col-right/Col-right";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import useProductQuery from "../../hooks/useProduct/useProductQuery";
const SingerProduct = () => {
  const {id} = useParams();
  const {data , isLoading , isError} = useProductQuery(id);
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Lỗi rồi</div>;
  return (
    <div>
      <Navbar />
      <div className=" w-[66%] m-auto">
      <div id="_ads_bg_top" className="lazier" />
      <section className="section" />
      <section
        className="section center"
        id="sync_bgu_and_masthead"
        style={{ display: "none" }}
      >
        <div id="sis_bgu"></div>
      </section>
      <section
        className="section page-detail top-detail"
        data-component-config='{"type":"text","article_id":4760030}'
      >
        <div className="container">
          <div className="social_pin"></div>
          <div className="sidebar-1">
            <div className="header-content width_common">
              <ul className="breadcrumb" data-campaign="Header">
                <li>
                  <a
                    data-medium="Menu-GiaoDuc"
                    href="giao-duc.html"
                    title="Giáo dục"
                  >
                    Giáo dục
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-TuyenSinh"
                    href="giao-duc/tuyen-sinh.html"
                    title="Tuyển sinh"
                  >
                    Tuyển sinh
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-Lop10"
                    href="giao-duc/tuyen-sinh/lop-10.html"
                    title="Lớp 10"
                  >
                    Lớp 10
                  </a>
                </li>
                <span id="parentCateDetail" data-cate={1005955} />
                <span id="site-sub-id" data-cate={1005955} />
              </ul>
              <span className="date">Thứ năm, 20/6/2024, 05:33 (GMT+7)</span>
            </div>
            <h1 className="title-detail">
             {data.title}
            </h1>
            {/* show vote button*/}
            {/* end show vote button*/}
            <p className="description">
              {data.poster}
            </p>
            <article className="fck_detail">
            <p className="Normal">
               <img src={data.image} width={1000} alt="" />
              </p>
              <p className="Normal">
               {data.description}
              </p>
              
              <p className="Normal" style={{ textAlign: "right" }}>
                <strong>Lệ Nguyễn - Doãn Hùng</strong>
              </p>
            </article>
            <div id="tt_end_page" style={{ display: "none" }} />
          </div>
          <div className="sidebar-2">
            <Colright />
          </div>
        </div>
      </section>
      <div
        className="box_comment_vne width_common animated animatedFadeInUp fadeInUp gaElementVisibility"
        data-event-category="Article Link Display"
        data-event-action="View Comment"
        data-event-label="GiaoThong"
        style={{}}
        data-gtm-vis-first-on-screen2359946_974={1263}
        data-gtm-vis-total-visible-time2359946_974={3000}
        data-gtm-vis-has-fired2359946_974={1}
      >
        <div className="container">
          <div className="ykien_vne width_common">
            <div className="left">
              <h3
                style={{ display: "inline-block", fontWeight: "bold" }}
                rel="time"
              >
                Ý kiến
              </h3>{" "}
              (<label id="total_comment">42</label>)
            </div>
          </div>
          <div className="input_comment width_common">
            <form id="comment_post_form">
              <div className="box-area-input width_common">
                <textarea
                  id="txtComment"
                  className="txt_comment block_input"
                  placeholder="Chia sẻ ý kiến của bạn"
                  style={{ overflowY: "hidden" }}
                  defaultValue={" "}
                />
                <button style={{ paddingLeft: 10 }}>Gửi</button>
              </div>
            </form>
          </div>
          <div className="filter_coment width_common mt20">
            <a href="javascript:;" className="active" rel="like">
              Quan tâm nhất
            </a>
            <a href="javascript:;" className rel="time">
              Mới nhất
            </a>
          </div>
          <div
            className="loading"
            style={{
              textAlign: "center",
              paddingTop: 15,
              display: "none",
              width: "100%",
              float: "left",
            }}
          >
            <img
              className="img_comment_loading"
              src="https://s1.vnecdn.net/vnexpress/restruct/c/v2759/images/graphics/loading1.gif"
              style={{ width: 25 }}
              title="Đang tải dữ liệu"
              alt="Đang tải dữ liệu"
            />
          </div>
          <div className="view_all_reply_loading" />
          <div className="width_common" id="box_comment">
            <div
              className="main_show_comment width_common mb10"
              id="list_comment"
            >
              <div className="comment_item width_common">
                <div className="user_status" data-user-type={8}>
                  <a
                    className="avata_coment"
                    href="https://my.vnexpress.net/users/feed/1002965970"
                    title="Xem trang ý kiến của Phạm Quân"
                  >
                    <img
                      className="img_avatar"
                      src="https://a1.vnecdn.net/s2_3a_c_81546366800793912162.jpg?w=60&h=60&s=FcATwAl_ebOP8ZyJeYhEDQ"
                    />
                  </a>
                </div>
                <div className="content-comment">
                  <p className="full_content">
                    <span className="txt-name">
                      <a
                        className="nickname"
                        href="https://my.vnexpress.net/users/feed/1002965970"
                      >
                        Phạm Quân
                      </a>
                    </span>
                    300 tỷ để xây dựng trạm dừng nghỉ! Có lớn quá không????
                  </p>
                  <div className="block_like_web width_common">
                    <div className="reactions-wrap">
                      <a
                        id={55916086}
                        className="link_thich control-action"
                        data-name
                        href="javascript:;"
                        rel={55916086}
                      >
                        <i className="ic ic-like" />
                        <span className="total_like">Thích</span>
                      </a>
                      <div className="reactions-total" rel={55916086}>
                        <span className="item like">
                          <img src="https://s1.vnecdn.net/vnexpress/restruct/c/v2759/v2/wcomment/pc/vne/images/graphics/like.svg" />
                        </span>
                        <div
                          className="reactions-detail"
                          style={{ display: "none" }}
                        ></div>
                      </div>
                    </div>
                    <a
                      id={55916086}
                      className="link_reply"
                      href="javascript:;"
                      rel={55916086}
                      parent={55916086}
                    >
                      Trả lời
                    </a>
                    <a
                      className="report-comment"
                      rel={55916086}
                      uid-comment={1002965970}
                      href="javascript:;"
                      title="Báo vi phạm"
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 9V3H12.0284L10.0931 5.70938C9.96896 5.88323 9.96896 6.11677 10.0931 6.29062L12.0284 9H4ZM4 10H13C13.4067 10 13.6432 9.54032 13.4069 9.20938L11.1145 6L13.4069 2.79062C13.6432 2.45968 13.4067 2 13 2H3.5C3.22386 2 3 2.22386 3 2.5V13.5C3 13.7761 3.22386 14 3.5 14C3.77614 14 4 13.7761 4 13.5V10Z"
                          fill="#9F9F9F"
                        />
                      </svg>
                      <span className="txt-vp">Báo vi phạm</span>
                    </a>
                    <span className="time-com">7h trước</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="cmt-paginator"
            className="width_common mt20"
            style={{ display: "none" }}
          ></div>
          <p id="pagination" className="pagination mb10" />
          <div className="view_more_coment width_common mb10">
            <a
              id="show_more_coment"
              href="javascript:;"
              data-event-action="View Comment"
              data-event-category="Article Link Click"
              data-event-label="GiaoThong"
              className="txt_666"
              title="Đăng nhập để xem thêm ý kiến"
            >
              Đăng nhập để xem thêm ý kiến
            </a>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingerProduct;

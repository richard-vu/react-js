import React, { Component } from "react";
import CardFunctionComponent from "./card-function-component/CardFunctionComponent";
import CardClassComponent from "./card-class-component/CardClassComponent";
import "./Card.css";
import img_demo from "./assets/img_snowtops.jpg"

export default class Card extends Component {
  render() {
    return (
      <div className="container-fuild card-top">
        <div className="row">
          <CardFunctionComponent
            image={img_demo}
            link="https://kenh14.vn/hot-girl-bap-can-bo-thanh-tam-khoc-rong-khi-xem-reaction-cua-hoi-hater-tiet-lo-nhung-dieu-gay-ton-thuong-tam-ly-nang-ne-20200418115537136.chn"
            title='Girl "Đảm Đang" 1'
          />
          <CardClassComponent
            image={img_demo}
            link="https://kenh14.vn/gai-xinh-bap-can-bo-thanh-tam-lai-dinh-lien-hoan-phot-lam-tuesday-va-an-choi-tha-cua-o-bar-nguoi-trong-cuoc-noi-gi-20200412151113705.chn"
            title='Girl "Đảm Đang" 2'
          />
          <CardClassComponent
            image={img_demo}
            link="https://kenh14.vn/gai-xinh-bap-can-bo-lo-anh-voi-nhan-sac-khac-la-dan-mang-doan-chac-la-do-thieu-app-chinh-anh-day-ma-20200326072042455.chn"
            title='Girl "Đảm Đang" 3'
          />
        </div>
        <div className="row card-top">
          <CardFunctionComponent
            image={img_demo}
            link="https://kenh14.vn/hot-girl-bap-can-bo-thanh-tam-khoc-rong-khi-xem-reaction-cua-hoi-hater-tiet-lo-nhung-dieu-gay-ton-thuong-tam-ly-nang-ne-20200418115537136.chn"
            title='Girl "Đảm Đang" 4'
          />
          <CardClassComponent
            image={img_demo}
            link="https://kenh14.vn/gai-xinh-bap-can-bo-thanh-tam-lai-dinh-lien-hoan-phot-lam-tuesday-va-an-choi-tha-cua-o-bar-nguoi-trong-cuoc-noi-gi-20200412151113705.chn"
            title='Girl "Đảm Đang" 5'
          />
          <CardClassComponent
            image={img_demo}
            link="https://kenh14.vn/gai-xinh-bap-can-bo-lo-anh-voi-nhan-sac-khac-la-dan-mang-doan-chac-la-do-thieu-app-chinh-anh-day-ma-20200326072042455.chn"
            title='Girl "Đảm Đang" 6'
          />
        </div>
      </div>
    );
  }
}

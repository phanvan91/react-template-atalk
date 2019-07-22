import React from 'react';
import { Collapse } from 'reactstrap';
import { Transition } from 'react-transition-group';
class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = { collapse: false };
        this.toggle = this.toggle.bind(this);
    }


    toggle () {
        this.setState(state => ({ collapse: !state.collapse }));
    }


    render(){
        return (
            <div>
                <div>
                    <div className="page-title">
                        <div className="title_left">
                            <h3>조직도</h3>
                        </div>
                        <div>
                            <div className="col-md-12 col-sm-12 col-xs-12 form-group top_search">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="이름, 전화번호 검색"/>
                                    <span className="input-group-btn">
                                        <a href="조직도_검색결과.html">
                                          <button className="btn btn-default" type="button" style={{borderRadius: '0 0.375em 0.375em 0', margin: 0, borderLeft: 0}}>
                                            <i className="fa fa-search"/>
                                          </button>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"/>

                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="x_panel" style={{height: this.state.collapse ? 'auto' : ''}}>
                                <a className="collapse-link" onClick={this.toggle}>
                                    <div className="x_title">
                                        <h2><i className="fa fa-users" /> 관리부<small /></h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li><i className="fa fa-chevron-down" />
                                            </li>
                                        </ul>
                                        <div className="clearfix" />
                                    </div>
                                </a>
                                <Collapse isOpen={this.state.collapse}>
                                    <div className="x_content">
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <ul className="list-unstyled msg_list">
                                                <li>
                                                    <a href="#">
                                                    <span className="image">
                                                        <img src="http://atalk.co.kr/atalk/demo/CRM/images/img.jpg" alt="img" />
                                                    </span>
                                                        <span>
                                                        <span className="name"><b>홍길동 대표</b>(01012345678)</span>
                                                        <span className="time">
                                                            <button type="button" className="btn btn-success">
                                                                <i className="fa fa-phone" />
                                                            </button>
                                                            <button type="button" className="btn btn-success">
                                                                <i className="fa fa-comment" />
                                                            </button>
                                                        </span>
                                                    </span>
                                                        <span className="message">
                                                        <i className="fa fa-mobile green" />
                                                        모바일 접속
                                                    </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </Collapse>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home
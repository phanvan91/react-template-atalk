import React, {Fragment } from 'react';
import WindowWidth from './WindowHeightWidth'
// import $ from "jquery";
import { NavLink, Link, Route } from "react-router-dom";
// import Home from './components/Home'
// import Test from './components/users/Test'
const addBodyClass = className => document.body.classList.add(className);


const removeBodyClass = className => document.body.classList.remove(className);




class Template extends React.Component {


    constructor (props){
        super(props)
        this.state = {
            // height: window.innerHeight,
            toggle : true,// desktop,
            currentPage : false,
            childMenu : {
                crm :false,
                user : false,
                sms : false,
                setting : false
            }
        };
    }

    componentDidMount(){
        addBodyClass('nav-md')
        // let body = document.body.classList.value
        // let bodyHeight = $('body').outerHeight();
        // console.log(bodyHeight)
        // console.log(body.search('3123'))
    }

    height = (height) => {
       this.setState({
           height
       });
    }

    onClickToggle = () => {
        this.setState({
            toggle : !this.state.toggle // mobile
        },()=>{
            if(this.state.toggle){
                removeBodyClass('nav-sm');
                addBodyClass('nav-md');
                return true
            }
            removeBodyClass('nav-md')
            addBodyClass('nav-sm')
        })
    }


    multiMenu = (value) => {
        // e.stopPropagation();
        if(value == 'crm'){
            this.setState({
                childMenu : {
                    crm : !this.state.childMenu.crm,
                }
            })
        }else if(value == 'user'){
            this.setState({
                childMenu : {
                    user : !this.state.childMenu.user,
                }
            })
        }else if(value == 'sms'){
            this.setState({
                childMenu : {
                    sms : !this.state.childMenu.sms,
                }
            })
        }else if(value == 'setting'){
            this.setState({
                childMenu : {
                    setting : !this.state.childMenu.setting,
                }
            })
        }
    }

    currentPage = (match,value) => {
        return match.pathname == value ? 'current-page' : '';
    }

    stopProps = (e,single) => {
        e.stopPropagation();
        if(single == 'single'){
            this.setState({
                childMenu : {
                    crm :false,
                    user : false,
                    sms : false,
                    setting : false
                }
            })
        }
    }

    render(){
        let { crm,user,sms,setting } = this.state.childMenu
        let {children} = this.props
        let match = children[0].props.location
        return (
           <Fragment>
               <WindowWidth height={this.height}/>
               <div className="container body">
                   <div className="main_container">
                       <div className="col-md-3 left_col">
                           <div className="left_col scroll-view">
                               <div className="navbar nav_title" style={{border: 0}}>
                                   <a href="index.html" className="site_title">
                                       <img src="images/logo.png" />
                                       <span> AtalkBiz</span></a>
                               </div>
                               <div className="clearfix" />
                               {/* menu profile quick info */}
                               <div className="profile clearfix">
                                   <div className="profile_pic">
                                       <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
                                   </div>
                                   <div className="profile_info">
                                       <h2>홍길동</h2>
                                       <span>(07012345678)</span>
                                       <span style={{color: '#fff', marginLeft: '-5px'}}>
                                           <i className="fa fa-check-circle" style={{color: '#35d406'}} />온라인</span>
                                   </div>
                               </div>
                               {/* /menu profile quick info */}
                               <br />
                               {/* sidebar menu */}
                               <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                                   <div className="menu_section">
                                       <h3>MENU</h3>
                                       <ul className="nav side-menu">
                                           <li
                                               onClick={(e)=>this.stopProps(e,'single')}
                                               className={this.currentPage(match,"/")}>
                                               <Link
                                                   to="/"
                                               >
                                                   <i className="fa fa-users" /> 조직도
                                               </Link>
                                           </li>
                                           <li className={crm ? 'active' : ''} onClick={()=>this.multiMenu('crm')}>
                                               <a >
                                                   <i className="fa fa-headphones" />
                                                   CRM
                                                   <span className="fa fa-chevron-down" />
                                               </a>
                                               <ul className="nav child_menu" style={{ display : crm ? 'block' : 'none' }}>
                                                   <li
                                                       onClick={(e)=>this.stopProps(e)}
                                                       className={this.currentPage(match,"/about")}
                                                   >
                                                       <Link  to="/about"><
                                                           i className="fa fa-edit" />고객 및 상담 관리
                                                       </Link>
                                                   </li>
                                                   <li
                                                       onClick={(e)=>this.stopProps(e)}
                                                       className={this.currentPage(match,"/meomeo")}
                                                   >
                                                       <Link  to="/meomeo">
                                                           <i className="fa fa-book" />상담이력
                                                       </Link>
                                                   </li>
                                                   <li><Link  to="/vkl"><i className="fa fa-calendar" />회신예약</Link></li>
                                                   <li><Link  to="#"><i className="fa fa-list-ol" />설문조사</Link></li>
                                                   <li><Link  to="#"><i className="fa fa-bar-chart" />통계</Link></li>
                                               </ul>
                                           </li>
                                           <li className={user ? 'active' : ''} onClick={()=>this.multiMenu('user')}>
                                               <a>
                                                   <i className="fa fa-user" />
                                                   연락처
                                                   <span className="fa fa-chevron-down" />
                                               </a>
                                               <ul className="nav child_menu" style={{ display : user ? 'block' : 'none' }}>
                                                   <li><a href="주소록.html"><i className="fa fa-book" />주소록</a></li>
                                                   <li><a href="수신거부.html"><i className="fa fa-ban" />수신거부</a></li>
                                               </ul>
                                           </li>
                                           <li>
                                               <NavLink  to="/meomeo"><i className="fa fa-phone-square" /> 통화목록 </NavLink>
                                           </li>
                                           <li><a href="callback.html"><i className="fa fa-mail-reply-all" /> CallBack </a>
                                           </li>
                                           <li><a href="채팅_목록.html"><i className="fa fa-comments" /> 채팅 </a>
                                           </li>
                                           <li className={sms ? 'active' : ''} onClick={(e)=>this.multiMenu(e,'sms')}>
                                               <a>
                                                   <i className="fa fa-envelope" />
                                                   SMS
                                                   <span className="fa fa-chevron-down" />
                                               </a>
                                               <ul className="nav child_menu" style={{ display : sms ? 'block' : 'none' }}>
                                                   <li><a href="SMS.html"><i className="fa fa-envelope" />SMS 발송</a></li>
                                                   <li><a href="SMS대량.html"><i className="fa fa-paper-plane-o" />SMS 대량 발송</a></li>
                                                   <li><a href="MO.html"><i className="fa fa-envelope-o" />MO 서비스</a></li>
                                               </ul>
                                           </li>
                                           <li><a href="컨퍼런스.html"><i className="fa fa-video-camera" /> 컨퍼런스 </a>
                                           </li>
                                           <li><a href="https://mgt.goodfone.co.kr:9702/main/main.do" target="_blank"><i className="fa fa-list-alt" /> 게시판 </a>
                                           </li>
                                           <li><a href="공지사항.html"><i className="fa fa-bullhorn" /> 공지사항 </a>
                                           </li>
                                           <li className={setting ? 'active' : ''} onClick={()=>this.multiMenu('setting')}>
                                               <a>
                                                   <i className="fa fa-cog" />
                                                   설정
                                                   <span className="fa fa-chevron-down" />
                                               </a>
                                               <ul className="nav child_menu"  style={{ display : setting ? 'block' : 'none' }}>
                                                   <li><a href="계정.html"><i className="fa fa-user" />계정</a></li>
                                                   <li><a href="전화설정.html"><i className="fa fa-phone" />전화설정</a></li>
                                                   <li><a href="결제.html"><i className="fa fa-credit-card" />결제</a></li>
                                                   <li><a href="bizm.html"><i className="fa fa-send" />Biz 메시징</a></li>
                                               </ul>
                                           </li>
                                           <li><a><i className="fa fa-info-circle" /> v2.0.1 </a></li>
                                       </ul>
                                   </div>
                               </div>
                               {/* /sidebar menu */}
                               {/* /menu footer buttons */}
                               <div className="sidebar-footer hidden-small">
                                   <a href="http://colorlib.com" target="_blank" style={{width: '75%'}}>
                                       <span><h6 style={{display: 'inline'}}>Gentelella. Colorib</h6></span>
                                   </a>
                                   <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                                       <span className="glyphicon glyphicon-off" aria-hidden="true" />
                                   </a>
                               </div>
                               {/* /menu footer buttons */}
                           </div>
                       </div>
                       {/* top navigation */}
                       <div className="top_nav">
                           <div className="nav_menu">
                               <nav>
                                   <div className="nav toggle" onClick={this.onClickToggle}>
                                       <a id="menu_toggle"><i className="fa fa-bars" /></a>
                                   </div>
                                   <div className="form-group">
                                       <ul className="nav navbar-nav navbar-left big">
                                           {/*icon*/}
                                           <li role="presentation" className="dropdown">
                                               <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="true" title="대기중">
                                                   <i className="fa fa-phone-square" />
                                                   <p className="inv">대기중</p>
                                               </a>
                                           </li>
                                           {/*icon end*/}
                                           {/*icon*/}
                                           <li role="presentation" className="dropdown">
                                               <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false" title="식사">
                                                   <i className="fa fa-cutlery" />
                                                   <p className="inv">식사</p>
                                               </a>
                                           </li>
                                           {/*icon end*/}
                                           {/*icon*/}
                                           <li role="presentation" className="dropdown">
                                               <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false" title="회의">
                                                   <i className="fa fa-users" />
                                                   <p className="inv">회의</p>
                                               </a>
                                           </li>
                                           {/*icon end*/}
                                           {/*icon*/}
                                           <li role="presentation" className="dropdown">
                                               <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false" title="휴식">
                                                   <i className="fa fa-coffee" />
                                                   <p className="inv">휴식</p>
                                               </a>
                                           </li>
                                           {/*icon end*/}
                                           {/*icon*/}
                                           <li role="presentation" className="dropdown">
                                               <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false" title="타업무">
                                                   <i className="fa fa-cog" />
                                                   <p className="inv">타업무</p>
                                               </a>
                                           </li>
                                           {/*icon end*/}
                                           {/*icon*/}
                                           <li role="presentation" className="dropdown add">
                                               <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false" title="DTMF">
                                                   <div id="compose"  htmlFor="modal"><i className="fa fa-volume-down" /></div>
                                                   <p className="inv">DTMF</p>
                                               </a>
                                           </li>
                                           {/*icon end*/}
                                       </ul>
                                   </div>
                                   <ul className="nav navbar-nav navbar-right big">
                                       {/*icon*/}
                                       <li role="presentation" className="dropdown">
                                           <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false" title="당겨받기">
                                               <i className="fa fa-sign-out" />
                                           </a>
                                       </li>
                                       {/*icon end*/}
                                       {/*icon*/}
                                       <li role="presentation" className="dropdown">
                                           <a href="#layer1" className="dropdown-toggle info-number btn-example btn-layerClose" data-toggle="dropdown" aria-expanded="false" title="그룹모니터링">
                                               <i className="fa fa-tty" />
                                           </a>
                                       </li>
                                       {/*icon end*/}
                                       {/*icon*/}
                                       <li role="presentation" className="dropdown">
                                           <a href="즐겨찾기.html" className="dropdown-toggle info-number" daria-expanded="false" title="즐겨찾기">
                                               <i className="fa fa-star" />
                                           </a>
                                       </li>
                                       {/*icon end*/}
                                       {/*icon*/}
                                       <li role="presentation" className="dropdown">
                                           <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false" title="키패드">
                                               <i className="fa fa-th" />
                                           </a>
                                       </li>
                                       {/*icon end*/}
                                       {/*icon*/}
                                       <li role="presentation" className="dropdown" style={{marginLeft: '15px'}}>
                                           <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false" title="통화">
                                               <i className="fa fa-phone" />
                                           </a>
                                       </li>
                                       {/*icon end*/}
                                       {/*icon*/}
                                       <div className="form-group top_search">
                                           <div className="input-group">
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button"><i className="fa fa-edit" /></button>
                </span>
                                               <input type="text" className="form-control" placeholder="전화번호 검색" />
                                           </div>
                                       </div>
                                       {/*icon end*/}
                                   </ul>
                               </nav>
                           </div>
                       </div>
                       {/* /top navigation */}
                       {/* compose */}
                       <div className="compose col-md-6 col-sm-6 col-xs-12">
                           <div className="x_panel">
                               <div className="x_title" id="compose"  htmlFor="modal">
                                   <h2><i className="fa fa-volume-down" /> DTMF</h2>
                                   <ul className="nav navbar-right panel_toolbox">
                                       <li><i className="fa fa-close" /></li>
                                   </ul>
                                   <div className="clearfix" />
                               </div>
                               <div className="x_content" style={{paddingBottom: '50px'}}>
                                   <div className="compose_bottom">
                                       <div className="box chat2">
                                           {/* section */}
                                           <div className="form-group" style={{visibility: 'hidden', height: '0px'}}>
                                               <div className="input-group" style={{}}>
                                                   <input type="text" className="form-control" placeholder="첨부된 파일 없음" />
                                                   <span className="input-group-btn">
                    <button className="btn btn-default" type="button"><i className="fa fa-paperclip" /></button>
                  </span>
                                               </div>
                                           </div>
                                           <div className="col-md-12 col-sm-12 col-xs-12">
                                               <div className="col-md-12 col-sm-12 col-xs-12 form-group" align="right">
                                                   <button type="button" className="btn btn-danger" id="compose"  htmlFor="modal" style={{margin: 0}}>닫기</button>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <br />
                                   {/*sec*/}
                                   <div id="dtmf" className="col-md-12 col-sm-12 col-xs-12">
                                       <div className="col-md-4 col-sm-6 col-xs-6">
                                           <button className="col-md-12 col-sm-12 col-xs-12 btn btn-success">
                                               <i className="fa fa-play-circle" /><br />사업자번호
                                           </button>
                                       </div>
                                       <div className="col-md-4 col-sm-6 col-xs-6">
                                           <button className="col-md-12 col-sm-12 col-xs-12 btn btn-success">
                                               <i className="fa fa-play-circle" /><br />주민등록번호
                                           </button>
                                       </div>
                                       <div className="col-md-4 col-sm-6 col-xs-6">
                                           <button className="col-md-12 col-sm-12 col-xs-12 btn btn-success">
                                               <i className="fa fa-play-circle" /><br />회원번호
                                           </button>
                                       </div>
                                       <div className="col-md-4 col-sm-6 col-xs-6">
                                           <button className="col-md-12 col-sm-12 col-xs-12 btn btn-success">
                                               <i className="fa fa-play-circle" /><br />휴대폰번호
                                           </button>
                                       </div>
                                       <div className="col-md-4 col-sm-6 col-xs-6">
                                           <button className="col-md-12 col-sm-12 col-xs-12 btn btn-success">
                                               <i className="fa fa-play-circle" /><br />민증발행일자
                                           </button>
                                       </div>
                                       <div className="col-md-4 col-sm-6 col-xs-6">
                                           <button className="col-md-12 col-sm-12 col-xs-12 btn btn-success">
                                               <i className="fa fa-play-circle" /><br />카드번호
                                           </button>
                                       </div>
                                       <div className="col-md-4 col-sm-6 col-xs-6">
                                           <button className="col-md-12 col-sm-12 col-xs-12 btn btn-success">
                                               <i className="fa fa-play-circle" /><br />카드비밀번호
                                           </button>
                                       </div>
                                       <div className="col-md-4 col-sm-6 col-xs-6">
                                           <button className="col-md-12 col-sm-12 col-xs-12 btn btn-success">
                                               <i className="fa fa-play-circle" /><br />카드비밀번호변경
                                           </button>
                                       </div>
                                       <div className="col-md-4 col-sm-6 col-xs-6">
                                           <button className="col-md-12 col-sm-12 col-xs-12 btn btn-success">
                                               <i className="fa fa-play-circle" /><br />카드유효기간
                                           </button>
                                       </div>
                                       <div className="col-md-4 col-sm-6 col-xs-6">
                                           <button className="col-md-12 col-sm-12 col-xs-12 btn btn-success">
                                               <i className="fa fa-play-circle" /><br />계좌번호
                                           </button>
                                       </div>
                                       <div className="col-md-4 col-sm-6 col-xs-6">
                                           <button className="col-md-12 col-sm-12 col-xs-12 btn btn-primary">
                                               <i className="fa fa-play-circle" /><br />합산멘트
                                           </button>
                                       </div>
                                       <div className="col-md-12 col-sm-12 col-xs-12">
                                           <p />
                                       </div>
                                   </div>
                                   {/*sec end*/}
                               </div>
                           </div>
                       </div>
                       <div className="right_col"
                            role="main"
                            // style={{ minHeight : this.state.height }}
                       >
                           {this.props.children}
                       </div>

                   </div>
               </div>
           </Fragment>
        )
    }
}


export default Template
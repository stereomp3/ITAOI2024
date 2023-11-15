var R = {}

R.main_layout = function (title, content) {
    document.getElementById('ITAOI_Title').innerHTML = title
    document.getElementById('ITAOI_Content').innerHTML = content
}
R.layout = function (title, content) {  // tmp
    // document.querySelector('main').innerHTML = ``
    document.getElementById('ITAOI_Title').innerHTML = title
    document.getElementById('ITAOI_Content').innerHTML = content
}  

R.index = function () {
    R.layout("", "")
    return R.main_layout(`<h4>ITAOI <br />2024</h4><p>離島資訊技術與應用研討會</p><a href="#" class="btn white_btn button_hover">報名系統</a>`, index_content)
}
R.Date = function () {
    R.layout("", "")
    return R.main_layout("<h4>重要日期</h4>", Date_content)
}
R.introduction = function () {
    R.layout("", "")
    return R.main_layout("<h4>大會簡介</h4>", introduction_content)
}
R.Commit_Member = function () {
    R.layout("", "")
    return R.main_layout("<h4>大會組織</h4>", Commit_Member_content)
}
R.Program = function () {
    R.layout("", "")
    return R.main_layout("<h4>大會議程</h4>", `4`)
}
R.Special_section = function () {
    R.layout("", "")
    return R.main_layout("<h4>特別議程</h4>", `5`)
}
R.Under_Construction = function () {
    R.layout("", "")
    return R.main_layout("<h4>Under Construction</h4>", `6`)
}
R.nstc = function () {
    R.layout("", "")
    return R.main_layout("<h4>國科會成果發表與交流會議程</h4>", `7`)
}
R.submit_info = function () {
    R.layout("", "")
    return R.main_layout("<h4>投稿方式</h4>", `8`)
}
R.signup = function () {
    R.layout("", "")
    return R.main_layout("<h4>報名系統</h4>", `9`)
}
R.traffic_stay = function () {
    R.layout("", "")
    return R.main_layout("<h4>交通、住宿資訊</h4>", `10`)
}
R.Sponsor = function () {
    R.layout("", "")
    return R.main_layout("<h4>贊助單位</h4>", `11`)
}
R.contact = function () {
    R.layout("", "")
    return R.main_layout("<h4>聯絡我們</h4>", `12`)
}


const index_content = `<div class="container">
<div class="row gx-4 gx-lg-5 justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-7">
        <!-- Post preview-->
        </br></br></br></br>
        <div class="post-preview animated-wrapper">
            <h1 class="post-title animated-item" style="color: #f78550;">最新消息</h1>
            <a>
                <i class="fa fa-check-circle-o" aria-hidden="true"> </i>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a class="post-meta animated-item" href="#">Under Construction</a>
            </a>
            <p class="post-subtitle">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOV 15, 2023
            </p>
        </div>
        <div class="post-preview">
            <a>
                <i class="fa fa-check-circle-o" aria-hidden="true"> </i>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a class="post-meta" href="#">Under Construction</a>
            </a>
            <p class="post-subtitle">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOV 14, 2023
            </p>
        </div>
        <div class="post-preview">
            <a>
                <i class="fa fa-check-circle-o" aria-hidden="true"> </i>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a class="post-meta" href="#">Under Construction</a>
            </a>
            <p class="post-subtitle">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOV 13, 2023
            </p>
        </div>
        <div class="post-preview">
            <a>
                <i class="fa fa-check-circle-o" aria-hidden="true"> </i>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a class="post-meta" href="#">Under Construction</a>
            </a>
            <p class="post-subtitle">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOV 12, 2023
            </p>
        </div>
        <div class="post-preview">
            <a>
                <i class="fa fa-check-circle-o" aria-hidden="true"> </i>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a class="post-meta" href="#">Under Construction</a>
            </a>
            <p class="post-subtitle">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOV 11, 2023
            </p>
        </div>
        <!-- Divider-->
        <hr class="my-4" />
        <!-- Pager-->
        <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase"
                href="#!">More News →</a></div>
    </div>
</div>
</div>`

const Date_content = `<div class="container">
<div class="row gx-4 gx-lg-5 justify-content-center animated-wrapper">
    <div class="col-md-10 col-lg-8 col-xl-7 contextP animated-item" >
    </br></br></br>
        <h2 class="title title_color">重要日期</h2>
    </br></br>
        <p>舉辦日期：</p>
    </br>
        <p>論文接受通知：</p>
    </br>
        <p>論文定稿截止：</p>
    </br>
        <p>註冊(報名)截止：</p>
    </br></br>
    </div>
</div>
</div>`

const introduction_content = `<div class="container">
<div class="row gx-4 gx-lg-5 justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-7 contextP">
        </br></br></br>
        <div class="animated-wrapper">
            <div class="animated-item">
                <h2 class="title title_color" style="color: #f78550;">大會簡介</h2>
                </br></br>
                <p align="left" style="text-align: justify; word-break: keep-all;">
                    離島地區由於先天限制條件下，造成競爭力落後於臺灣本島，且人口外流情形嚴重，未來的發展有賴於積極運用資訊技術以平衡區域發展。離島資訊技術與應用研討會，每年定期舉行一次，迄今已舉辦了21屆，今年為第22屆會議，並移至國立金門大學舉辦。基於研討會發起宗旨，本會議提供與會者發表最新有關網路技術、數位內容、視覺監控、綠能科技、雲端技術…等資訊技術，以期將最新的資訊技術導入離島地區相關產業，並進而提升競爭力、開拓市場。
                </p>
                <p align="left" style="text-align: justify; word-break: keep-all;">
                    本會議採公開徵求論文方式邀請全國資訊相關領域學者、離島地區業者、政府主管機關代表、各級學校資訊教師、關心離島資訊發展民眾等，就離島地區資訊技術與應用相關主題進行研討。</p>
            </div>
        </div>
        </br></br></br>

        <h2 class="title title_color" style="color: #f78550;">研討會主題包括：（但不限於以下主題）</h2>
        </br></br>
        <div class="animated-wrapper">
            <div class="w3-container animated-item">
                <table width="700" border="1" cellspacing="0" cellpadding="0" class="w3-table-all w3-large">
                    <tbody>
                        <tr>
                            <td>人工智慧</td>
                            <td>資料探勘數位多媒體</td>
                            <td>雲端運算</td>
                            <td>數位多媒體</td>
                        </tr>
                        <tr>
                            <td>數位內容</td>
                            <td>資訊安全</td>
                            <td>深度學習</td>
                            <td>嵌入式系統</td>
                        </tr>
                        <tr>
                            <td>綠能運算</td>
                            <td>生物資訊</td>
                            <td>電子商務</td>
                            <td>交通大數據</td>
                        </tr>
                        <tr>
                            <td>遠距醫療</td>
                            <td>行動運算</td>
                            <td>網際網路</td>
                            <td>電子化政府</td>
                        </tr>
                        <tr>
                            <td>智慧農業</td>
                            <td>離島發展</td>
                            <td>區塊鏈</td>
                            <td>物聯網</td>
                        </tr>
                        <tr>
                            <td>智慧型機器人</td>
                            <td>醫療資訊管理</td>
                            <td>無線感測網路</td>
                            <td>智慧養殖</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </br></br></br>
        <h2 class="title title_color" style="color: #f78550;">離島資訊技術與應用研討會史錄</h2>
        </br></br>
        <div class="animated-wrapper">
            <div class="w3-container animated-item">
                <table width="757" border="1" cellspacing="0" cellpadding="0" class="w3-table-all w3-large">
                    <tbody>
                        <tr>
                            <th width="299" bgcolor="#fff"><strong>研討會屆次</strong></th>
                            <th width="170" bgcolor="#fff"><strong>主辦單位</strong></th>
                            <th width="154" bgcolor="#fff"><strong>地點</strong></th>
                            <th width="124" bgcolor="#fff"><strong>舉辦日期</strong></th>
                        </tr>
                        <tr>
                            <td>第一屆離島資訊技術與應用研討會</td>
                            <td>澎湖技術學院資工科</td>
                            <td>澎湖技術學院</td>
                            <td>2001.6.8</td>
                        </tr>
                        <tr>
                            <td>第二屆離島資訊技術與應用研討會</td>
                            <td>澎湖技術學院資工科</td>
                            <td>澎湖技術學院</td>
                            <td>2002.6.7~8</td>
                        </tr>
                        <tr>
                            <td>第三屆離島資訊技術與應用研討會</td>
                            <td>澎湖技術學院資工科</td>
                            <td>澎湖技術學院</td>
                            <td>2003.6.27</td>
                        </tr>
                        <tr>
                            <td>第四屆離島資訊技術與應用研討會</td>
                            <td>澎湖技術學院資工科</td>
                            <td>澎湖技術學院</td>
                            <td>2005.5.20</td>
                        </tr>
                        <tr>
                            <td>第五屆離島資訊技術與應用研討會</td>
                            <td>金門技術學院電子系</td>
                            <td>金門技術學院</td>
                            <td>2006.6.2~3</td>
                        </tr>
                        <tr>
                            <td>第六屆離島資訊技術與應用研討會</td>
                            <td>虎尾科技大學資工系</td>
                            <td>虎尾科技大學</td>
                            <td>2007.6.1</td>
                        </tr>
                        <tr>
                            <td>第七屆離島資訊技術與應用研討會</td>
                            <td>澎湖技術學院資工科</td>
                            <td>澎湖科技大學、澎湖吉貝</td>
                            <td>2008.5.30~31</td>
                        </tr>
                        <tr>
                            <td>第八屆離島資訊技術與應用研討會</td>
                            <td>金門技術學院資工系、電子系</td>
                            <td>金門技術學院、廈門大學</td>
                            <td>2009.5.22~2</td>
                        </tr>
                        <tr>
                            <td>第九屆離島資訊技術與應用研討會</td>
                            <td>樹德科大資工系</td>
                            <td>樹德科大、小琉球</td>
                            <td>2010.5.28~29</td>
                        </tr>
                        <tr>
                            <td>第十屆離島資訊技術與應用研討會</td>
                            <td>台東大學資管系</td>
                            <td>台東大學、綠島</td>
                            <td>2011.5.13~14</td>
                        </tr>
                        <tr>
                            <td>第十一屆離島資訊技術與應用研討會</td>
                            <td>澎湖科技大學資工系、資管系</td>
                            <td>澎湖科技大學</td>
                            <td>2012.5.25~26</td>
                        </tr>
                        <tr>
                            <td>第十二屆離島資訊技術與應用研討會</td>
                            <td>金門大學電子系</td>
                            <td>金門大學、泉州華僑大學</td>
                            <td>2013.5.24~26</td>
                        </tr>
                        <tr>
                            <td>第十三屆離島資訊技術與應用研討會</td>
                            <td>屏東商業技術學院電通系、資工系、資管系</td>
                            <td>屏東商業技術學院、墾丁夏都</td>
                            <td>2014.5.23~24</td>
                        </tr>
                        <tr>
                            <td>第十四屆離島資訊技術與應用研討會</td>
                            <td>澎湖科技大學資工系</td>
                            <td>澎湖科技大學、澎湖吉貝</td>
                            <td>2015.5.22~23</td>
                        </tr>
                        <tr>
                            <td>第十五屆離島資訊技術與應用研討會</td>
                            <td>樹德科大資工系</td>
                            <td>樹德科大、小琉球</td>
                            <td>2016.5.20~22</td>
                        </tr>
                        <tr>
                            <td>第十六屆離島資訊技術與應用研討會</td>
                            <td>金門大學資工系</td>
                            <td>金門大學</td>
                            <td>2017.5.19~21</td>
                        </tr>
                        <tr>
                            <td>第十七屆離島資訊技術與應用研討會</td>
                            <td>澎湖科技大學資工系</td>
                            <td>澎湖科技大學/七美</td>
                            <td>2018.5.25~27</td>
                        </tr>
                        <tr>
                            <td>第十八屆離島資訊技術與應用研討會</td>
                            <td>中興大學</td>
                            <td>中興大學/惠蓀林場</td>
                            <td>2019.5.24~26</td>
                        </tr>
                        <tr>
                            <td>第十九屆離島資訊技術與應用研討會</td>
                            <td>金門大學電子系</td>
                            <td>金門大學</td>
                            <td>2021.5.28~29</td>
                        </tr>
                        <tr>
                            <td>第二十屆離島資訊技術與應用研討會</td>
                            <td>澎湖科技大學資工系</td>
                            <td>澎湖科技大學</td>
                            <td>2022.5.27~29</td>
                        </tr>
                        <tr>
                            <td>第二十一屆離島資訊技術與應用研討會</td>
                            <td>宜蘭大學資工系</td>
                            <td>宜蘭大學</td>
                            <td>2023.5.25~28</td>
                        </tr>
                        <tr>
                            <td>第二十二屆離島資訊技術與應用研討會</td>
                            <td>金門大學資工系</td>
                            <td>金門大學</td>
                            <td>2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </br></br></br>
    </div>
</div>
</div>`
const Commit_Member_content = `<div class="container">
<div class="row gx-4 gx-lg-5 justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-7 contextP">
        </br></br></br>
        <div class="animated-wrapper">
            <div class="animated-item">
                <h2 class="title title_color" style="color: #f78550;">大會組織</h2>
            </div>
        </div>
        </br></br>
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="blog_left_sidebar">
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="image/tmp.png" alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>XXX 教授</h2>
                                    </a>
                                    <a>
                                        <h2>大會統籌主席</h2>
                                    </a>
                                    <p>金門大學資訊工程學系系主任</p>
                                    <a href="#" class="view_btn button_hover">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="image/tmp.png" alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>XXX 教授</h2>
                                    </a>
                                    <a>
                                        <h2>大會統籌主席</h2>
                                    </a>
                                    <p>金門大學資訊工程學系系主任</p>
                                    <a href="#" class="view_btn button_hover">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        </br></br></br>
        </br></br></br>
        <div class="animated-wrapper">
            <div class="animated-item">
                <h2 class="title title_color" style="color: #f78550;">議程委員</h2>
            </div>
        </div>
        </br></br>
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="blog_left_sidebar">
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="image/tmp.png" alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>XXX 教授</h2>
                                    </a>
                                    <a>
                                        <h2>大會統籌主席</h2>
                                    </a>
                                    <p>金門大學資訊工程學系系主任</p>
                                    <a href="#" class="view_btn button_hover">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="image/tmp.png" alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>XXX 教授</h2>
                                    </a>
                                    <a>
                                        <h2>大會統籌主席</h2>
                                    </a>
                                    <p>金門大學資訊工程學系系主任</p>
                                    <a href="#" class="view_btn button_hover">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        </br></br></br>
    </div>
</div>

</div>`
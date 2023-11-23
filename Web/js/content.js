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
    return R.main_layout('<h1 style="font-weight:bold;">第二十二屆<br /></h1><h4>離島資訊技術與應用研討會</h4><p>The 22th Conference on Information Technology and Application in Outlying Islands</p><a href="#" class="btn white_btn button_hover">報名系統</a>', index_content)
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
            <ul>
            <li style="font-size: 28px;">
            <a class="post-meta animated-item" href="#Date"> 重要日期已更新</a>
        </li>
        <p class="post-subtitle">NOV 23, 2023</p>
            </ul>
        </div>
        <div class="post-preview">
            <ul>
                <li style="font-size: 28px;">
                    <a class="post-meta animated-item" href="#"> Under Construction</a>
                </li>
                <p class="post-subtitle">NOV 15, 2023</p>
            </ul>
        </div>
        <div class="post-preview">
            <ul>
                <li style="font-size: 28px;">
                    <a class="post-meta animated-item" href="#"> Under Construction</a>
                </li>
                <p class="post-subtitle">NOV 15, 2023</p>
            </ul>
        </div>
        <div class="post-preview">
            <ul>
                <li style="font-size: 28px;">
                    <a class="post-meta animated-item" href="#"> Under Construction</a>
                </li>
                <p class="post-subtitle">NOV 15, 2023</p>
            </ul>
        </div>
        <div class="post-preview">
            <ul>
                <li style="font-size: 28px;">
                    <a class="post-meta animated-item" href="#"> Under Construction</a>
                </li>
                <p class="post-subtitle">NOV 15, 2023</p>
            </ul>
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
    <p>舉辦日期：2024年05月24~26日(五、六、日)</p>
    </br>
        <p>論文接受通知：2024年4月12日</p>
    </br>
        <p>論文投稿截稿：2024年4月5日</p>
    </br>
        <p>論文定稿截止：2024年4月19日</p>
    </br>
        <p>註冊(報名)截止：2024年4月24日</p>
        
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
                            <td>2024.5.24~26</td>
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
                                <img src="https://president.nqu.edu.tw/var/file/11/1011/img/LINE_ALBUM_2023_3_14_230314.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>陳建民 校長</h2>
                                    </a>
                                    <a>
                                        <h2>大會榮譽主席</h2>
                                    </a>
                                    <p>金門大學校長</p>
                                    <a href="https://president.nqu.edu.tw/p/412-1011-254.php?Lang=zh-tw"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <hr>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://csie.npu.edu.tw/df_ufiles/027/s_Web%20photo.jpg" alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>胡武誌 教授</h2>
                                    </a>
                                    <a>
                                        <h2>大會統籌主席</h2>
                                    </a>
                                    <p>國立澎湖科技大學資訊工程學系教授</p>
                                    <a href="https://csie.npu.edu.tw/department/Details?Parser=41,4,27,,,,3"
                                        class="view_btn button_hover" target="_blank">View More</a>
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
                                <img src="https://csie.nptu.edu.tw/var/file/110/1110/img/58/ljwang.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>王隆仁 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立屏東大學資訊工程學系特聘教授</p>
                                    <a href="https://csie.nptu.edu.tw/p/406-1110-10690,r202.php?Lang=zh-tw"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://csie.nfu.edu.tw/upload/member/20221117105745EqGk.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>江季翰 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>虎尾科大資訊工程學系系主任</p>
                                    <a href="https://csie.nfu.edu.tw/team/cID/2/ID/9"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="http://bigdata.nchu.edu.tw/upload/teacher/2102090108170000001.png"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>吳俊霖 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立中興大學資訊工程學系教授</p>
                                    <a href="https://innovative.nchu.edu.tw/member_detail.php?Key=27"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://csie.npu.edu.tw/df_ufiles/027/s_%E6%9E%97%E6%98%B1%E9%81%94.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>林昱達 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立澎湖科技大學資訊工程學系助理教授</p>
                                    <a href="https://csie.npu.edu.tw/department/Details?Parser=41,4,27,,,,5"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://www.csie.nuk.edu.tw/files/teacherProfile/tphong2019.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>洪宗貝 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立高雄大學資訊工程學系講座教授</p>
                                    <a href="https://math.nuk.edu.tw/p/405-1018-4826,c95.php?Lang=zh-tw"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://vp-horng.nqu.edu.tw/var/file/14/1014/img/971178563.crdownload"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>洪集輝 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立金門大學電機工程學系特聘教授兼學術副校長</p>
                                    <a href="https://ee.nqu.edu.tw/p/404-1036-1010.php?Lang=zh-tw"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://pairlabs.ai/wp-content/uploads/2020/06/photo-15.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>范國清 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立中央大學資訊工程學系教授</p>
                                    <a href="https://pairlabs.ai/portfolio-item/professor-kuo-chin-fan-pi/"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://mipl.yuntech.edu.tw/wp-content/uploads/2021/12/%E5%BC%B5%E5%82%B3%E8%82%B2.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>張傳育 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立雲林科技大學資訊工程學系特聘教授</p>
                                    <a href="https://mipl.yuntech.edu.tw/professor"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://csie.npu.edu.tw/df_ufiles/027/s_%E9%99%B3%E8%89%AF%E5%BC%BC.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>陳良弼 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立澎湖科技大學資訊工程學系助理教授</p>
                                    <a href="https://csie.npu.edu.tw/department/Details?Parser=41,4,27,,,,4"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://www.csrsr.ncu.edu.tw/about/img/professor/yingnong.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>陳映濃 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立中央大學資訊工程學系助理教授</p>
                                    <p>國立中央大學太空及遙測研究中心專案助理教授</p>
                                    <a href="https://www.csrsr.ncu.edu.tw/about/professor_info.php?id=23"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="http://www.ec.nkust.edu.tw/wp-content/uploads/2013/09/%E9%99%B3%E6%98%AD%E5%92%8C.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>陳昭和 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立高雄科技大學資訊工程學系特聘教授兼系主任</p>
                                    <p>國立高雄應用科技大學-計算機與網路中心主任</p>
                                    <a href="http://www.ec.nkust.edu.tw/staff/%E9%99%B3%E6%98%AD%E5%92%8C/"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="http://ai.robo.ntu.edu.tw/images/member/c5caf5fe164688df22b145ada7b11933.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>傅楸善 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立台灣大學資訊工程學系教授</p>
                                    <a href="https://www.csie.ntu.edu.tw/~fuh/"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://csie.nqu.edu.tw/var/file/38/1038/pictures/685/m/mczh-tw120x150_small2354_115218249374.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>馮玄明 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立金門大學資訊工程學系教授</p>
                                    <p>國立金門大學理工學院院長</p>
                                    <a href="https://csie.nqu.edu.tw/p/405-1038-2354,c469.php?Lang=zh-tw"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://csie.nptu.edu.tw/var/file/110/1110/img/291/part_11173_7833130_06949.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>黃鎮淇 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立屏東大學資訊工程學系副教授</p>
                                    <a href="https://csie.nptu.edu.tw/p/406-1110-87523,r202.php?Lang=zh-tw"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://president.tut.edu.tw/var/file/5/1005/img/233776064.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>楊正宏 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立台南應用科技大學校長</p>
                                    <a href="https://president.tut.edu.tw/p/16-1005-6235.php?Lang=zh-tw"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://cse.nsysu.edu.tw/var/file/205/1205/img/14.jpg" alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>楊昌彪 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立中山大學資訊工程學系特聘教授</p>
                                    <a href="https://par.cse.nsysu.edu.tw/~cbyang/person/person_index.htm"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://csie.npu.edu.tw/df_ufiles/027/s_%E6%A5%8A%E6%98%8C%E7%9B%8A.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>楊昌益 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立澎湖科技大學資訊工程學系教授</p>
                                    <a href="https://csie.npu.edu.tw/department/Details?Parser=41,4,27,,,,2"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://scholar.lib.ntnu.edu.tw/files-asset/49958126/chiahungyeh.jpg?w=160&f=webp"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>葉家宏 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立臺灣師範大學電機工程學系特聘教授</p>
                                    <a href="https://scholar.lib.ntnu.edu.tw/zh/persons/chia-hung-yeh"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://sys.ndhu.edu.tw/RD/TeacherTreasury/GetTcherPic.ashx?tcher=10037&token=638359065831499245"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>趙涵捷 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立東華大學校長</p>
                                    <a href="https://sys.ndhu.edu.tw/RD/TeacherTreasury/tlist.aspx?tcher=10037"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://csie.npu.edu.tw/df_ufiles/027/s_%E5%9C%8B%E7%8E%8B%E6%B9%96.jpg"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>蘇怡仁 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立澎湖科技大學資訊工程學系教授</p>
                                    <a href="https://csie.npu.edu.tw/department/Details?Parser=41,4,27,,,,7"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://scholar.nycu.edu.tw/files-asset/40929627/Jun_Wei_Hsieh_270x270_c.jpg?w=160&f=webp"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>謝君偉 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立陽明交通大學智慧計算與科技研究所教授</p>
                                    <a href="https://scholar.nycu.edu.tw/zh/persons/jun-wei-hsieh"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="row blog_item">
                        <div class="col-md-9 animated-wrapper">
                            <div class="blog_post animated-item">
                                <img src="https://lh6.googleusercontent.com/CZL7mikZ9UvElIq1MW5LpfJNgDRwZRkAlSJocDqqltOfz8Tmja0Bi-3csUuPbGUJyPmqjSlzl6KKJC0Zvcc6lMspPKnU8RlMihj7ec3wLVQ8dwGW=w1280"
                                    alt="">
                                <div class="blog_details">
                                    <a>
                                        <h2>鄭志宏 教授</h2>
                                    </a>
                                    <a>
                                        <h2>議程委員</h2>
                                    </a>
                                    <p>國立義守大學資訊工程學系教授</p>
                                    <a href="https://sites.google.com/view/isuie01/%E5%B0%88%E4%BB%BB%E5%B8%AB%E8%B3%87-full-time-professors/%E9%84%AD%E5%BF%97%E5%AE%8F-%E6%95%99%E6%8E%88"
                                        class="view_btn button_hover" target="_blank">View More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</div>

</br></br></br>
</div>`
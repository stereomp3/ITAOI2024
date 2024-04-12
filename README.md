# ITAOI2024

https://stereomp3.github.io/ITAOI2024/

目前網頁已經完成，剩下細微內容須調整

首頁

重要日期與大會簡介

* 重要日期 Date.html  
* 大會簡介 introduction.html
* 大會組織 Commit_Member.html

議程

* 大會議程 Program.html
* 特別議程 Special_section.html
* 專題演講 keynote_speaker.html
* 國科會成果發表與交流會議程 nstc.html

投稿系統與報名

* 投稿方式 submit_info.html
* 投稿、審稿系統 openconf.php
* 報名系統 signup.html

交通與住宿

* 交通、住宿資訊  traffic_stay.html
* 大會地點 -- venue.html
* 參訪行程 -- itinerary.html
* 接駁車服務 -- shuttle_bus.html

贊助單位 Sponsor.html

離島盃資安競賽 information_security.html

徵求論文 CFP CFP.html

聯絡我們 contact.html



20231204

-> 將 hash router js 填入內容的方式，改為 page html 的方式



openConf: https://www.openconf.com/download/

github上沒有



openConf 需要放在有 server 的網站上，官網有說明如何使用 https://www.openconf.com/documentation/install.php，看起來像是要使用 Linux 系統

1. download php in windows: [教學](https://learn.microsoft.com/zh-tw/iis/application-frameworks/install-and-configure-php-on-iis/install-and-configure-php)、[下載](https://windows.php.net/downloads/releases/php-8.3.1-nts-Win32-vs16-x64.zip)
   * 要去控制台開啟 CGI windows 功能
   
     下面是 php.ini 的內容
   
   * php.ini 如果沒有要自己創
   
   * **open_basedir** 需要指定資料夾
   
   * 需要指定 upload_tmp_dir，才能上傳檔案，我是設定在 openconf 裡面的 tmp (自己創建的資料夾)
   
   * `extension=php_mysqli.dll` ，extension 很多要開，詳情看[官網](https://www.openconf.com/documentation/requirements.php)
   
2. install mysql : [教學](https://chwang12341.medium.com/mysql-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-%E4%BA%8C-%E4%B8%80%E5%88%86%E9%90%98%E8%BC%95%E9%AC%86%E7%9E%AD%E8%A7%A3%E5%A6%82%E4%BD%95%E5%9C%A8windows%E4%B8%8A%E5%AE%89%E8%A3%9Dmysql-63cce07c6a6c)、[下載](https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-community-8.0.35.0.msi)

sql root passwd: E307 passwd

openconf

* (1)user: root
* (1)Database Hostname: localhost
* (2)username: chair
* (2)passwd: E307 pw + openconf



translator: https://www.openconf.com/translate/、https://poedit.net/

語言設定要開啟 php 的 gettext 功能，並在 lib/locale 裡面 建立 extras.inc，把 *** 改成想要的語言

IIS_IUSRS



openconf修改功能

* 按下首頁跳回真首頁 (chair、openconf；include.php)
* 修改些許翻譯、和轉中文 (extras-template.inc、OpenConf7.41.mo)
* 上傳文件功能 (add new tmp file、author/upload.php、author/paper.php、chair/list_papers.php ...)



install PHPMailer

install windows telnet (在控制台/變更 windows 功能那邊)



電腦備份在 mysql_backup，和 google drive

設定禮拜 5 早上 4 點重新啟動


    function showPage(pageName) {
      var pages = document.querySelectorAll('.page-container');
      
      // 隐藏所有页面
      for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('page-active');
      }

      // 显示目标页面
      var targetPage = document.querySelector('.' + pageName);
      targetPage.classList.add('page-active');
      document.getElementById("gxx").innerHTML = " ";
    }
  function showPa() {
      document.getElementById("gxx").innerHTML = xx;
      document.getElementById("p2").innerHTML = " ";
      
      
  }

var p2 = `
   <div style="width:100%;height:0.6px;background-color:#eee;"><div>
   <br>
  <div class="container">
   <div class="tx">
   </div>
   <p style="transform:translate(13px,0px);font-size:13px;font-weight: bold;color:#333;">托更永远至上 </p>
   <p style="transform:translate(15px,0px);font-size:13px;font-weight: ;color:#666;"> @GJ-C · 下载</p>
   </div>
   <div class="nr">
   已为您整理出鸡岩版和Java版的下载链接</p>
   <a href="https://xz.klpbbs.net/" style="font-weight: bold;color:#1e9fff">苦力怕鸡岩全版本下载</a></p>
   <a href="https://ci.huangyuhui.net/job/HMCL/" style="font-weight: bold;color:#1e9fff">HMCL启动器下载</a></p>
   <a href="https://ltcat.lanzoum.com/ia4ff0rbi28h/" style="font-weight: bold;color:#1e9fff">PCL启动器下载</a></p>
   </div>
   <div style="width:100%;height:0.6px;background-color:#eee;"><div>

   <div style="width:100%;height:0.6px;background-color:#eee;"><div>
   <br>
  <div class="container">
   <div class="tx">
   </div>
   <p style="transform:translate(13px,0px);font-size:13px;font-weight: bold;color:#333;">托更永远至上 </p>
   <p style="transform:translate(15px,0px);font-size:13px;font-weight: ;color:#666;"> @GJ-C · 下载</p>
   </div>
   <div class="nr">
   <a href="https://nsmclt.github.io/official.html?" style="font-weight: bold;color:#1e9fff">作者软件，感兴趣的可以下载一下~</a>
   </div>
   
   <div style="width:100%;height:0.6px;background-color:#eee;"><div>
   <br>
  <div class="container">
   <div class="tx">
   </div>
   <p style="transform:translate(13px,0px);font-size:13px;font-weight: bold;color:#333;">托更永远至上 </p>
   <p style="transform:translate(15px,0px);font-size:13px;font-weight: ;color:#666;"> @GJ-C · 娱乐</p>
   </div>
   <div class="nr">
   <a href="yx.php" style="font-weight: bold;color:#1e9fff">小姐姐全在这条链接内哦~</a>
   </div>
   
   <div style="width:100%;height:0.6px;background-color:#eee;"><div>
`;
 var xx = `
 
   <div style="width:100%;height:0.6px;background-color:#eee;"><div>
   <br>
  <div class="container">
   <div class="tx">
   </div>
   <p style="transform:translate(13px,0px);font-size:13px;font-weight: bold;color:#333;">托更永远至上 </p>
   <p style="transform:translate(15px,0px);font-size:13px;font-weight: ;color:#666;"> @GJ-C · 2023年5月13日</p>
   </div>
   <div class="nr">
   第一条帖子
   </div>
   
   <div style="width:100%;height:0.5px;background-color:#eee;"><div>
`;

document.getElementById("gxx").innerHTML = xx;
document.getElementById("p2").innerHTML = p2;


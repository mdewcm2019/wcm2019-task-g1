var tipuesearch = {"pages": [{'title': 'G1期中影片', 'text': '40723101沈易萱 \n \n 40723102林昱秀 \n \n 40723103林晏瑩 \n \n 40723104陳咨妤 \n \n 40723127許嘉紘 \n \n 40723128郭哲明 \n \n', 'tags': '', 'url': 'G1期中影片.html'}, {'title': '導入ungit', 'text': 'nodejs裡面有ungit->程式為nodejs所寫，nodejs位置在 appdata->roming->npm->ungi \xa0。 程式碼在appdata->roming->npm->node-modules->ungit->CHANGELOG.md。 start.bat跟start.cadlab.bat差別 \n 因Home位置不同，適用範圍有所不同!! start.bat=>學校外適用。 start.cadlab.bat=>學校內適用，不能使用在學校外的地方。 STAPE1 \n 1.設定路徑=> \xa0 \xa0 set path8=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm;放置到start.cadlab的sciTE裡\xa0 \xa0 \xa0 的path7後。 \n 2.將 path8 納入 path 設定=> \xa0 \xa0 %path8%；->讓nodejs.ungit直行即可使用。 \n \xa0 \xa0 在同上步驟中的sciTE中有path程式碼將%path8%；直接放在最後方。 \n \xa0 \n 3.分別start.bat跟start.cadlab.bat都如上兩步驟操作並儲存。 \n \xa0 \n 4.按start.cadlab.bat打入ungit可作執行，之後出現頁面表示設定成功，按允許儲存，再將跳出\xa0 \xa0 \xa0 \xa0 的網頁關掉。 \n \xa0 \n 5.針對nodejs設定路徑=> \n \xa0 \xa0 [set. USERPROFILE=%Disk%:\\home]start.cadlab.bat中需加入以上程式碼\xa0\xa0\xa0\xa0\xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0在\xa0set.HOME=%Disk%:\\home-cadlab之下方增加。 \n \xa0 *將以上程式關掉(剛才使用的程式碼還不用關。若關掉，kmol-2019->data->scite->bin->按\xa0 \xa0 \xa0 \xa0 \xa0 scite黑色圓點。 \n 以便能作動，因nodejs系統user的路徑找git的設定檔，但找不到，又因為需變為可攜程式，必須透過上述方式來作動!! \n 6.start.bat也是上述步驟重複一遍。完成初步動作。。。。。 \n STAPE2 \n 可在mde.tw中2019 spring...裡，實習任務之任務2有明確步驟可找到下面的程式。 \n ungit --launchBrowser=0 --launchCommand "C:\\PROGRA~2\\Google\\Chrome\\Application\\chrome.exe\xa0 %U" \n 需使用簡寫，不然無法啟動。並新建批次檔。', 'tags': '', 'url': '導入ungit.html'}, {'title': 'Virtualbox操作', 'text': '\n \n 第一屆段完成後打https://192.168.56.2可出現以下網頁 \n \n \n 打https://192.168.56.2:5443可開啟網頁 \n \n \n', 'tags': '', 'url': 'Virtualbox操作.html'}, {'title': '頁面編輯', 'text': 'CMSimfly 動態系統的網際編輯器採用  TinyMCE4 , 可以放入一般超文件,\xa0 納入圖檔, 嵌入影片連結, 並且加入帶有行數的原始碼. \n 透過 File Upload 功能, 可以一次上傳多個檔案,\xa0 存入 downloads 目錄中儲存, 之後各頁面可以引入對應連結. \n 而圖檔的上傳與引用與一般檔案類似, 但上傳後存入 images 目錄中. \n', 'tags': '', 'url': '頁面編輯.html'}, {'title': '插入程式碼', 'text': 'CMSimfly 目前使用 Syntaxhighlighter 3.0.83: \n \xa0 http://alexgorbatchev.com/SyntaxHighlighter/ \xa0 \n 進行頁面中的程式碼高亮顯示.', 'tags': '', 'url': '插入程式碼.html'}, {'title': 'Java 程式碼', 'text': 'import java.util.Scanner;\n\npublic class Life {\n    public static void show(boolean[][] grid){\n        String s = "";\n        for(boolean[] row : grid){\n            for(boolean val : row)\n                if(val)\n                    s += "*";\n                else\n                    s += ".";\n            s += "\\n";\n        }\n        System.out.println(s);\n    }\n    \n    public static boolean[][] gen(){\n        boolean[][] grid = new boolean[10][10];\n        for(int r = 0; r < 10; r++)\n            for(int c = 0; c < 10; c++)\n                if( Math.random() > 0.7 )\n                    grid[r][c] = true;\n        return grid;\n    }\n    \n    public static void main(String[] args){\n        boolean[][] world = gen();\n        show(world);\n        System.out.println();\n        world = nextGen(world);\n        show(world);\n        Scanner s = new Scanner(System.in);\n        while(s.nextLine().length() == 0){\n            System.out.println();\n            world = nextGen(world);\n            show(world);\n            \n        }\n    }\n    \n    public static boolean[][] nextGen(boolean[][] world){\n        boolean[][] newWorld \n            = new boolean[world.length][world[0].length];\n        int num;\n        for(int r = 0; r < world.length; r++){\n            for(int c = 0; c < world[0].length; c++){\n                num = numNeighbors(world, r, c);\n                if( occupiedNext(num, world[r][c]) )\n                    newWorld[r][c] = true;\n            }\n        }\n        return newWorld;\n    }\n    \n    public static boolean occupiedNext(int numNeighbors, boolean occupied){\n        if( occupied && (numNeighbors == 2 || numNeighbors == 3))\n            return true;\n        else if (!occupied && numNeighbors == 3)\n            return true;\n        else\n            return false;\n    }\n\n    private static int numNeighbors(boolean[][] world, int row, int col) {\n        int num = world[row][col] ? -1 : 0;\n        for(int r = row - 1; r <= row + 1; r++)\n            for(int c = col - 1; c <= col + 1; c++)\n                if( inbounds(world, r, c) && world[r][c] )\n                    num++;\n\n        return num;\n    }\n\n    private static boolean inbounds(boolean[][] world, int r, int c) {\n        return r >= 0 && r < world.length && c >= 0 &&\n        c < world[0].length;\n    }\n\n} \n', 'tags': '', 'url': 'Java 程式碼.html'}, {'title': 'Python 程式碼', 'text': 'def parse_content():\n    """use bs4 and re module functions to parse content.htm"""\n    #from pybean import Store, SQLiteWriter\n    # if no content.db, create database file with cms table\n    \'\'\'\n    if not os.path.isfile(config_dir+"content.db"):\n        library = Store(SQLiteWriter(config_dir+"content.db", frozen=False))\n        cms = library.new("cms")\n        cms.follow = 0\n        cms.title = "head 1"\n        cms.content = "content 1"\n        cms.memo = "first memo"\n        library.save(cms)\n        library.commit()\n    \'\'\'\n    # if no content.htm, generate a head 1 and content 1 file\n    if not os.path.isfile(config_dir+"content.htm"):\n        # create content.htm if there is no content.htm\n        File = open(config_dir + "content.htm", "w", encoding="utf-8")\n        File.write("<h1>head 1</h1>content 1")\n        File.close()\n    subject = file_get_contents(config_dir+"content.htm")\n    # deal with content without content\n    if subject == "":\n        # create content.htm if there is no content.htm\n        File = open(config_dir + "content.htm", "w", encoding="utf-8")\n        File.write("<h1>head 1</h1>content 1")\n        File.close()\n        subject = "<h1>head 1</h1>content 1"\n    # initialize the return lists\n    head_list = []\n    level_list = []\n    page_list = []\n    # make the soup out of the html content\n    soup = bs4.BeautifulSoup(subject, \'html.parser\')\n    # 嘗試解讀各種情況下的標題\n    soup = _remove_h123_attrs(soup)\n    # 改寫 content.htm 後重新取 subject\n    with open(config_dir + "content.htm", "wb") as f:\n        f.write(soup.encode("utf-8"))\n    subject = file_get_contents(config_dir+"content.htm")\n    # get all h1, h2, h3 tags into list\n    htag= soup.find_all([\'h1\', \'h2\', \'h3\'])\n    n = len(htag)\n    # get the page content to split subject using each h tag\n    temp_data = subject.split(str(htag[0]))\n    if len(temp_data) > 2:\n        subject = str(htag[0]).join(temp_data[1:])\n    else:\n        subject = temp_data[1]\n    if n >1:\n            # i from 1 to i-1\n            for i in range(1, len(htag)):\n                head_list.append(htag[i-1].text.strip())\n                # use name attribute of h* tag to get h1, h2 or h3\n                # the number of h1, h2 or h3 is the level of page menu\n                level_list.append(htag[i-1].name[1])\n                temp_data = subject.split(str(htag[i]))\n                if len(temp_data) > 2:\n                    subject = str(htag[i]).join(temp_data[1:])\n                else:\n                    subject = temp_data[1]\n                # cut the other page content out of htag from 1 to i-1\n                cut = temp_data[0]\n                # add the page content\n                page_list.append(cut)\n    # last i\n    # add the last page title\n    head_list.append(htag[n-1].text.strip())\n    # add the last level\n    level_list.append(htag[n-1].name[1])\n    temp_data = subject.split(str(htag[n-1]))\n    # the last subject\n    subject = temp_data[0]\n    # cut the last page content out\n    cut = temp_data[0]\n    # the last page content\n    page_list.append(cut)\n    return head_list, level_list, page_list\n\n \n', 'tags': '', 'url': 'Python 程式碼.html'}, {'title': 'C或C++程式碼', 'text': '請注意, 目前 CMSimfly 標題內文無法解讀 "/" 符號, 因此若本頁面的標題為\xa0 "C/C++程式碼", 則無法進行分頁. \n /* Runge Kutta for a set of first order differential equations */\n \n#include <stdio.h>\n#include <math.h>\n \n#define N 2 /* number of first order equations */\n#define dist 0.1 /* stepsize in t*/\n#define MAX 30.0 /* max for t */\n \nFILE *output; /* internal filename */\nFILE *output1; /* internal filename */\n// 利用 pipe 呼叫 gnuplot 繪圖\nFILE *pipe;\n \nvoid runge4(double x, double y[], double step); /* Runge-Kutta function */\ndouble f(double x, double y[], int i); /* function for derivatives */\n \nvoid main(){\n \n  double t, y[N];\n  int j;\n \n  output=fopen("osc.dat", "w"); /* external filename */\n  output1=fopen("osc1.dat", "w"); /* external filename */\n \n  y[0]=1.0; /* initial position */\n  y[1]=0.0; /* initial velocity */\n \n  //fprintf(output, "0\\t%f\\n", y[0]);\n \n  for (j=1; j*dist<=MAX ;j++) /* time loop */{\n \n    t=j*dist;\n    runge4(t, y, dist);\n    fprintf(output, "%f\\t%f\\n", t, y[0]);\n    fprintf(output1, "%f\\t%f\\n", t, y[1]);\n  }\n \n  fclose(output);\n  fclose(output1);\n \n  pipe = popen("gnuplot -persist","w");\n  //fprintf(pipe,"set term png enhanced font \\"v:/fireflysung.ttf\\" 18 \\n");\n  fprintf(pipe,"set term png enhanced font \\"y:/wqy-microhei.ttc\\" 18 \\n");\n  //fprintf(pipe,"set yrange [68:70]\\n");\n  fprintf(pipe,"set output \\"test.png\\"\\n");\n  fprintf(pipe, "plot \\"osc.dat\\" title \\"位移\\" with lines, \\"osc1.dat\\" title \\"速度\\" with lines\\n");\n  fprintf(pipe,"quit\\n");\n\n  fprintf(pipe,"quit\\n");\n  pclose(pipe);\n}\n \nvoid runge4(double x, double y[], double step){\n \n  double h=step/2.0, /* the midpoint */\n  t1[N], t2[N], t3[N], /* temporary storage arrays */\n  k1[N], k2[N], k3[N],k4[N]; /* for Runge-Kutta */\n  int i;\n \n  for (i=0;i<N;i++){\n \n    t1[i]=y[i]+0.5*(k1[i]=step*f(x,y,i));\n  }\n \n  for (i=0;i<N;i++){\n \n    t2[i]=y[i]+0.5*(k2[i]=step*f(x+h, t1, i));\n  }\n \n  for (i=0;i<N;i++){\n \n    t3[i]=y[i]+ (k3[i]=step*f(x+h, t2, i));\n  }\n \n  for (i=0;i<N;i++){\n \n    k4[i]= step*f(x+step, t3, i);\n  }\n \n  for (i=0;i<N;i++){\n \n    y[i]+=(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6.0;\n  }\n}\n \ndouble f(double x, double y[], int i){\n \n  if (i==0)\n    x=y[1]; /* derivative of first equation */\n  if (i==1)\n    x=-y[0]-0.5*y[1];\n  return x;\n} \n', 'tags': '', 'url': 'C或C++程式碼.html'}, {'title': 'Lua 程式碼', 'text': '-- 導入 js 模組\njs = require("js")\n-- 取得 window\nwindow = js.global\n-- 猜小於或等於 n 的整數\nbig = 100\n-- 計算猜測次數, 配合 while 至少會猜一次\nnum = 1\n-- 利用 window:prompt 方法回應取得使用者所猜的整數\nguess = window:prompt("請猜一個介於 1 到 "..big.." 的整數")\n-- 利用數學模組的 random 函數以亂數產生答案\nanswer = math.random(big)\noutput = ""\n-- 若沒猜對, 一直猜到對為止\nwhile answer ~= tonumber(guess) do\n    if answer > tonumber(guess) then\n        output = "猜第 "..num.." 次, guess="..guess..", answer="..answer.." - too small"\n        print(output)\n    else\n        output = "猜第 "..num.." 次, guess="..guess..", answer="..answer.." - too big"\n        print(output)\n    end \n    guess = window:prompt(output..", 請猜一個介於 1 到 "..big.." 的整數")\n    num = num + 1\nend\nprint("總共猜了 "..num.." 次, answer=guess="..answer.." - correct")\n     \n', 'tags': '', 'url': 'Lua 程式碼.html'}, {'title': 'Javascript 程式碼', 'text': 'STLViewer = function(stlpath, plotarea) {\n\n\tvar mycanvas = document.getElementById(plotarea);\n\tvar viewer = new JSC3D.Viewer(mycanvas)\n\tvar theScene = new JSC3D.Scene;\n\t////Initialize with a default file:\n\t//var stlpath = "../../../assets/2013-10-23/stl/box.STL"\n\t//var stlpath = "../../../assets/2013-10-23/stl/taj.stl"\n\tviewer.setParameter(\'SceneUrl\', stlpath);\n    viewer.setParameter(\'InitRotationX\', 20);\n\tviewer.setParameter(\'InitRotationY\', 20);\n\tviewer.setParameter(\'InitRotationZ\', 0);\n\tviewer.setParameter(\'ModelColor\', \'#CAA618\');\n\tviewer.setParameter(\'BackgroundColor1\', \'#FFFFFF\');\n\tviewer.setParameter(\'BackgroundColor2\', \'#383840\');\n\tviewer.init();\n\tviewer.update();\n\t////init done\n\tvar canvas_drop = document.getElementById(\'canvas-drop\')\n\t/*var dropzone = document.getElementById(\'dropzone\')\n\tdropzone.addEventListener(\'dragover\', handleDragOver, false);\n\tdropzone.addEventListener(\'drop\', handleFileSelect, false); */\n\tcanvas_drop.addEventListener(\'dragover\', handleDragOver, false);\n\tcanvas_drop.addEventListener(\'drop\', handleFileSelect, false);\n\n////Drag and drop logic:\n\tfunction handleFileSelect(evt) {\n\t    evt.stopPropagation();\n\t    evt.preventDefault();\n\t    var files = evt.dataTransfer.files;\n\t    console.log(evt)\n\t    console.log(files)\n\t    preview_stl(files[0])\n\t  }\n\n\t  function handleDragOver(evt) {\n\t    evt.stopPropagation();\n\t    evt.preventDefault();\n\t    evt.dataTransfer.dropEffect = \'copy\';\n\t  }\n\n////jsc3d logic\n\tvar handle_file_select = function(e) {\n\t\te.stopPropagation()\n\t\te.preventDefault()\n\t\tvar f = e.target.files[0]\n\t\tpreview_stl(f)\n\t}\n\n\tfunction preview_stl(f) {\n\t\tvar reader = new FileReader()\n\t\tvar ext = f.name.split(".")[1]\n\n\t\tfunction setup_viewer() {\n\t\t\tviewer.setParameter(\'InitRotationX\', 20);\n\t\t\tviewer.setParameter(\'InitRotationY\', 20);\n\t\t\tviewer.setParameter(\'InitRotationZ\', 0);\n\t\t\tviewer.setParameter(\'ModelColor\', \'#CAA618\');\n\t\t\tviewer.setParameter(\'BackgroundColor1\', \'#FFFFFF\');\n\t\t\tviewer.setParameter(\'BackgroundColor2\', \'#383840\');\n\t\t\tviewer.setParameter(\'RenderMode\', "flat");\n\t\t}\n\t\tsetup_viewer()\n\n\t\treader.onload = (function(file) {\n\t\t\treturn function(e) {\n\t\t\t\ttheScene = new JSC3D.Scene\n\t\t    \tstl_loader = new JSC3D.StlLoader()\n\t\t    \tstl_loader.parseStl(theScene, e.target.result)\n\t\t      \t//viewer.init()\n\t\t      \tviewer.replaceScene(theScene)\n\t\t      \tviewer.update()\n\t\t      \tconsole.log("file reader onload")\n\t\t\t}\n\t\t})(f)\n\n\t\tif (ext.toLowerCase() != "stl") {\n\t\t\talert("That doesn\'t appear to be an STL file.");\n\t\t} else {\n\t\t\treader.readAsBinaryString(f)\n\t\t}\n\t}\n}\n \n', 'tags': '', 'url': 'Javascript 程式碼.html'}, {'title': 'Html 原始碼', 'text': '<html>\n   <head>\n      <meta http-equiv="content-type" content="text/html;charset=utf-8">\n      <title>CMSimfly</title>\n      <link rel="stylesheet" type="text/css" href="/static/cmsimply.css">\n   </head>\n   <body>\n      <div class=\'container\'>\n      <nav>\n         <ul id=\'css3menu1\' class=\'topmenu\'>\n            <li><a href=\'/get_page/簡介\'>簡介</a>\n            <li><a href=\'/get_page/目錄結構\'>目錄結構</a>\n            <li>\n               <a href=\'/get_page/頁面編輯\'>頁面編輯</a>\n               <ul>\n                  <li>\n                     <a href=\'/get_page/插入程式碼\'>插入程式碼</a>\n                     <ul>\n                        <li><a href=\'/get_page/Java 程式碼\'>Java 程式碼</a>\n                        <li><a href=\'/get_page/Python 程式碼\'>Python 程式碼</a>\n                        <li><a href=\'/get_page/C或C++程式碼\'>C或C++程式碼</a>\n                        <li><a href=\'/get_page/Lua 程式碼\'>Lua 程式碼</a>\n                        <li><a href=\'/get_page/Javascript 程式碼\'>Javascript 程式碼</a>\n                        <li><a href=\'/get_page/Html 原始碼\'>Html 原始碼</a></li>\n                        </li>\n                     </ul>\n               </ul>\n            <li><a href=\'/get_page/網際簡報\'>網際簡報</a>\n            <li><a href=\'/get_page/網誌編輯\'>網誌編輯</a>\n            <li><a href=\'/get_page/已知錯誤\'>已知錯誤</a></li>\n         </ul>\n      </nav>\n      <section>\n         <form method=\'post\' action=\'/ssavePage\'>\n         <textarea class=\'simply-editor\' name=\'page_content\' cols=\'50\' rows=\'15\'><h3>Html 原始碼</h3></textarea>\n         <input type=\'hidden\' name=\'page_order\' value=\'9\'>\n         <input type=\'submit\' value=\'save\'>\n         <input type=button onClick="location.href=\'/get_page/Html 原始碼\'" value=\'viewpage\'>\n         </form>\n      </section>\n   </body>\n</html>\nCOPY TO CLIPBOARD\t \n', 'tags': '', 'url': 'Html 原始碼.html'}, {'title': '批次檔案', 'text': 'Q如何建立批次檔? Step1；去SciTe新建檔案>將程式複製貼上 >Save as 在隨身碟Y槽 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0[為了與ungit作區別，因此將其名稱為kungit.bat]>從可攜home找出對應的git \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 設定 Step2:去隨身碟Y槽>home>查看有無git設定>沒有的話測試程式碼能否運作>git clone測試網頁 打開ungit在CMS下面的各時間提交之內容>[進入測試網頁>打kungit指令] \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0條件:\xa0 1.必須在某個git倉儲下指令(cd....)>目的為由Chrom開啟 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2.必須啟動ungit對應的的\\批次檔。 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0為了確保關閉nodejs不干擾運作，下載process explorer ，取64....的Z複製下來，貼在y槽以便隨時關閉程式。 找到在最下面的綠色node按右鍵kill process>把nodejs上次對應的8443的批次檔關閉，指令便可正常運作。(即可不會抱怨。) 刪除nodejs之8443的批號後，重新打入kungit指令即可看到ungit網頁跳出。 \n', 'tags': '', 'url': '批次檔案.html'}, {'title': '資料上傳不上去導至網頁錯誤的原因', 'text': 'reaon \n Y:\\>cd project Y:\\project>dir Y:\\project>cd cmstest>更換目錄到contest Y:\\project\\cmstest>python wsgi.py 進入address可改版，一˙但改版可進行版次推送 Login完week2打入根據[...網址...]完成ungit的配置，按github page，回到ungit網頁，push上去。 假如網頁出現錯誤: 由於沒有在Home底下有對應的git config Home(外部)\xa0 \xa0 Home_cadlab(內部) 先檢查有無gitconfig!', 'tags': '', 'url': '資料上傳不上去導至網頁錯誤的原因.html'}, {'title': '網誌編輯', 'text': 'CMSimfly 彩用  Pelican blog  系統, 編輯檔案位於 config/pelican.leo, 對應的 \n \xa0Markdown 原始檔案位於 markdown 目錄中, 而經 Pelican 轉換出的網誌超文件檔案則位於 blog 目錄中. \n 其餘在網誌文章中所需要的 Javascript 或 Brython 程式檔案, 則與 CMSimfly 及 Reveal.js 共用, 位於 static 目錄下. \n 上傳檔案與圖檔的引用則與 CMSimfly 架構相同. \n', 'tags': '', 'url': '網誌編輯.html'}, {'title': '已知錯誤', 'text': '全部頁面會因無法正確解讀而誤刪 \n 在特定情況下, 系統會誤刪 config/content.htm 檔案, 目前在單頁或全部頁面編輯存檔之前, 或將上一版本的 content.htm 存入 content_back.htm, 若 content.htm 內容被程式誤刪, 可以利用備份檔案複製回原始內容後, 再進行後續處理. \n 頁面標題不支援特殊符號 \n 各頁面標題目前不支援特殊符號, 例如: "/", "?" 等, 若已經發生程式無法解讀頁面的情況, 只能從編輯 config/content.htm 下手, 若系統位於遠端, 則後續必須要再設法提供一個額外的編輯 config/content.htm 檔案的網際連結功能. \n Video 引用不支援內部引用 \n tinymce 中插入 video 的小視窗, 要移除引用的圖像與連結, 因為一般建議不要在內容中存入 .mp4 的影片資料, 而只接受引入影片 URL 連結.', 'tags': '', 'url': '已知錯誤.html'}]};
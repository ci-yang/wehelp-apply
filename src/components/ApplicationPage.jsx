import { User, BookOpen, Clock, Globe, Heart, Code, Star, Terminal, ExternalLink, Newspaper, Github } from 'lucide-react';

const ApplicationPage = () => {
  const skills = [
    { name: "Frontend", category: "front" },
    { name: "Vue.js", category: "front" },
    { name: "React", category: "front" },
    { name: "Backend", category: "back" },
    { name: "Python", category: "back" },
    { name: "PostgreSQL", category: "back" },
    { name: "AWS", category: "cloud" },
    { name: "DevOps", category: "ops" }
  ];

  const questions = [
    {
      id: 1,
      icon: <BookOpen className="w-6 h-6" />,
      question: "個人簡介和申請動機",
      answer: "身為一位全端工程師，我對深度學習和人工智慧領域有濃厚興趣。在優派國際和若水國際的工作經驗讓我接觸到許多 AI 相關應用，這激發了我想要深入學習的動機。我期待能透過這個課程，建立紮實的理論基礎，特別是在線性代數和神經網路方面的知識，以便未來能開發更有深度的 AI 應用。"
    },
    {
      id: 2,
      icon: <Terminal className="w-6 h-6" />,
      question: "曾經做過哪些軟體工程技術相關的學習？若有作品請分享給我們。",
      answer: "由於我是本科系畢業，從大學時期選修課開始就不間斷學習新技術，從 IOS App，Android App，前後端網站開發，OpenGL，虛擬技術，研究所在圖學實驗室因應大數據的潮流進行視覺化的研究，使用了 react class component 以及 D3 JS 以及 Django 實作大型論壇 KOL 視覺化系統，同時也進行另一項與 AI 相關的研究，使用 YOLO 進行車流辨識，研究所期間也帶領學弟妹進行多項產學計畫累積經驗，開始工作後也開始學習沒學習過的 Vue，同時也學習後端微服務並且學習 Terraform 部署雲端，目前也因為專案撰寫 Electron 視窗程式並把經驗寫成鐵人賽文章，接下來持續觀諸Prompt Engineering，一路走來都是持續不斷學習新技術"
    },
    {
      id: 3,
      icon: <Clock className="w-6 h-6" />,
      question: "如果參與這個訓練，會怎麼安排學習時間？",
      answer: "平日的晚上可以投入三小時時間，假日可以投入十二小時，總計可以提供三十小時左右的時間，目前有跟夥伴進行讀書會複習線性代數，往後也會依照學習地圖進行學習"
    },
    {
      id: 4,
      icon: <Code className="w-6 h-6" />,
      question: "軟體技術日新月異，如何確定選擇投入的領域是正確有回報的？",
      answer: "由於網頁開發的變化相對於其他軟體領域變化的十分快速，隨時關注目前趨勢是十分重要的，因此我會定期參加各大研討會以及活動，並持續關注各大技術社群以及開源專案來了解目前趨勢，並讓自己保持競爭力，另一個角度是我認為學習基礎是一定會有回報的，以報名此課程為例，學習 AI 基礎可以確保在 AI 領域一定會有回報"
    },
    {
      id: 5,
      icon: <Heart className="w-6 h-6" />,
      question: "請描述一件產生明顯負面情緒的經歷，如何處理該情緒？",
      answer: "在工作上我時常會將情緒與事實分開，專注於事實以及把事情完成往往可以降低情緒的影響，但難免還是會遇到不可抗力的情境，曾經有遇過在有時程壓力下臨近結案的一個月前突然被調整 scope，由於我是我是專案負責人，當時在會議上因為焦急而產生的負面情緒也跟著事實一同在會議上發酵，後來理解當時的作法並不是較好的處理方式，因此現在都會先理解狀況後接受並吸收當下的情緒才做之後的行動"
    },
    {
      id: 6,
      icon: <Star className="w-6 h-6" />,
      question: "關於這份申請網頁，分享一個開發時的技術心得",
      answer: "這份申請網頁我是使用 Prompt Engineering 進行開發，搭配已有的前端知識提升開發效率，在開發的時候使用正確的 Prompt 可以增加開發的正確率以及效率"
    },
    {
      id: 7,
      icon: <Globe className="w-6 h-6" />,
      question: "如何看待自身工作和整個社會群體的連結關係？",
      answer: "我覺得軟體工程師不只是撰寫程式碼，而是可以透過軟體技術創造許多價值的一門藝術，目前興起的 AI 技術也逐漸地改變大家的生活，使生活變得更加便利，我目前工作所開發的教育軟體也導入了 AI 技術並透過軟體讓老師在教學方面提高效率，幫助學生提高學習效率，我希望未來能利用自己的技能，為社會創造更多積極的影響"
    },
    {
      id: 8,
      icon: <User className="w-6 h-6" />,
      question: "其他想要對我們說的事情？",
      answer: "由於工作上認識了 Pink 以及 Claire 兩位優秀的 wehelp 校友，前後端的知識學習的十分扎實，因此讓我對 wehelp 產生濃厚的興趣，也希望能夠透過此次課程幫助我在 AI 領域能夠有所突破，並且參與到這個大家庭出一份力"
    }
  ];

  const timeline = [
    {
      period: "2023-Present",
      role: "資深全端工程師",
      company: "優派國際 (ViewSonic)",
      description: "帶領團隊從零到一打造教育軟體前後端產品"
    },
    {
      period: "2019-2022",
      role: "全端工程師",
      company: "若水國際",
      description: "負責 AI 數據標註系統開發、專案數據流程微服務建置"
    },
    {
      period: "2017",
      role: "前端工程師實習生",
      company: "女人迷",
      description: "開發編輯器元件、視覺分析系統"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 頂部個人資訊區 */}
      <header className="bg-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-8 flex items-center gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
         <img 
              src="https://res.cloudinary.com/cakeresume/image/upload/s--P32wZ-XI--/c_fill,fl_png8,g_face,h_300,w_300/v1552974289/oyqzwklmjco5cxvgttln.png" 
              alt="個人照片" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">楊騏 (Jason)</h1>
                <p className="text-lg text-gray-600 mt-2">全端工程師</p>
              </div>
              <a 
                href="https://github.com/ci-yang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill.name} 
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                      ${skill.category === 'front' ? 'bg-blue-100 text-blue-800' : 
                        skill.category === 'back' ? 'bg-green-100 text-green-800' :
                        skill.category === 'cloud' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'}`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 主要內容區 */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* 個人簡介 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">個人簡介</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            我是一位喜愛學習新技術的全端工程師，擁有豐富的前後端開發經驗。在前端領域，專長使用 Vue.js 和 React 開發應用程式；在後端方面，熟悉使用 Python/Django 開發 Web 服務。同時具備 AWS 雲端服務的實戰經驗，能夠獨立完成從開發到部署的完整流程。在工作中，我重視程式碼品質，習慣透過重構和測試來確保系統的可維護性。
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.cake.me/s--xrCTgviO3ZXeGBLwng8Ocg--/ci-yang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              完整履歷
            </a>
          </div>
        </section>

        {/* 技術文章 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">技術文章</h2>
          <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
            <a 
              href="https://ithelp.ithome.com.tw/users/20149301/ironman/8048"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <Newspaper className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2 hover:text-blue-600">iThome 鐵人賽系列文章</h3>
                <p className="text-gray-600">
                  分享技術學習心得和經驗，記錄解決問題的過程，希望能幫助到其他開發者。
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
            </a>
          </div>
        </section>

        {/* 工作經驗時間軸 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">工作經歷</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-32 flex-shrink-0 text-sm text-gray-500">
                  {item.period}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  <div className="text-gray-600">{item.company}</div>
                  <p className="text-gray-500 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 問答區域 */}
        <section className="grid grid-cols-1 gap-6">
          {questions.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="font-semibold text-lg text-gray-800">{item.question}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </section>
      </main>

      {/* 頁腳 */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Ci Yang. Built with React</p>
        </div>
      </footer>
    </div>
  );
};

export default ApplicationPage;
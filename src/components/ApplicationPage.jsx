import { Clock, Heart, Code, Star, Terminal, ExternalLink, Newspaper, Github } from 'lucide-react';

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
      icon: <Terminal className="w-6 h-6" />,
      question: "曾經做過哪些軟體工程技術相關的學習？",
      answer: ""
    },
    {
      id: 2,
      icon: <Clock className="w-6 h-6" />,
      question: "如果參與這個訓練，會怎麼安排學習時間？",
      answer: ""
    },
    {
      id: 3,
      icon: <Code className="w-6 h-6" />,
      question: "軟體技術日新月異，如何確定選擇投入的領域是正確有回報的？",
      answer: ""
    },
    {
      id: 4,
      icon: <Heart className="w-6 h-6" />,
      question: "如何看待自身工作和整個社會群體的連結關係？",
      answer: ""
    },
    {
      id: 5,
      icon: <Star className="w-6 h-6" />,
      question: "關於這份申請網頁，分享一個開發時的技術心得",
      answer: ""
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
                <h3 className="font-semibold text-lg text-gray-800 mb-2 hover:text-blue-600">iThome 鐵人賽系列文章 - 從 0 到 1：30 篇文章帶你玩轉 Electron 與 React</h3>
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
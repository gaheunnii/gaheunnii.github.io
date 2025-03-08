import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css'; // Your CSS file

const projects = [
  {
    id: 1,
    title: "基于主题建模的韩中关系问题分析",
    description: "分析2019-2023年网络新闻评论，揭示韩中关系发展趋势。",
    link: "/project1",
    category: "Data Science",
  },
  {
    id: 2,
    title: "使用协同过滤和 PageRank 的啤酒推荐系统",
    description: "基于用户评分数据，提升个性化推荐效果。",
    link: "/project2",
    category: "Data Science",
  },
  {
    id: 3,
    title: "成均馆大学学生社交网络平台",
    description: "增强学生互动，基于 React + Firebase 进行开发。",
    link: "/project3",
    category: "Product & UI/UX",
  },
  {
    id: 4,
    title: "购物平台设计",
    description: "打造直观的电商界面，优化用户购物体验。",
    link: "/project4",
    category: "Product & UI/UX",
  },
  {
    id: 5,
    title: "data science分析",
    description: "基于xxx",
    link: "/project5",
    category: "Data Science",
  },
];

//* Multilingual support
const translations = {
  zh: {
    title: "Gaheun Lee 的个人主页",
    about: "关于我",
    projects: "项目",
  },
  en: {
    title: "Gaheun Lee's Homepage",
    about: "About Me",
    projects: "Projects",
  },
  ko: {
    title: "이가흔의 홈페이지",
    about: "소개",
    projects: "프로젝트",
  }
};

function Home() {
  const [language, setLanguage] = useState("en");

  // Language switch function
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  
  return (
    <div className="home-container">
    <div className="container">
      {/* Header */}
      <header className="header">
          <h1 className="site-title">{translations[language].title}</h1>
        </header>

      {/* Language switcher */}
      <div className="language-switcher">
        <button onClick={() => changeLanguage('zh')}>中文</button> /
        <button onClick={() => changeLanguage('en')}>English</button> /
        <button onClick={() => changeLanguage('ko')}>한국어</button>
      </div>

      <hr className="divider" /> {/* Divider */}

      <div className="content">
        {/* Sidebar with personal info */}
        <aside className="sidebar">
          <img src="/profile.JPG" alt="Gaheun Lee" className="profile-img" />        
          <h1 className="name">Gaheun Lee</h1>
          <p className="university"> 李佳鑫（Jiaxin Li）</p>
          <p className="school">Data Science</p>
          <p className="university">Sungkyunkwan Univ.</p>
          <a href="mailto:i.gaheun46@gmail.com" className="email">i.gaheun46@gmail.com</a>
        </aside>

        {/* Main content */}
        <main className="main-content">
          <section>
          <h2 className="projects-title">About Me</h2>
            <p>
            <p>您好，欢迎来到我的个人主页！我是 Gaheun Lee，一名数据科学领域的探索者，对数据分析、机器学习和用户体验设计充满热情。</p>
              <p>我于2025年2月毕业于<a href="https://www.skku.edu/eng/index.do" target="_blank" rel="noopener noreferrer">韩国成均馆大学
                </a>，主修<strong>数据科学专业</strong>。在本科学习生涯中，我系统学习了<strong>数据结构与算法、机器学习、数据挖掘、数据库、计算机网络</strong>等核心课程，并熟练掌握<strong>Python、SQL、C语言</strong>，同时具备 MySQL、AWS、Excel等工具的实战经验。</p>
              <p>我的兴趣横跨<strong>数据科学与产品设计</strong>，我相信数据驱动决策和良好的用户体验能够创造更具影响力的产品。因此，我不仅参与了多个数据科学相关项目，还深入研究产品设计与交互体验。</p>
               <p>📄 这是我的 <a href="/简历.pdf" download>简历(CV)</a>，欢迎查看！
               </p>
            </p>
          </section>

          <section>
          <section>
          <h2 className="projects-title">Projects</h2>
          </section>
          {/* Data Science section */}
          <div className="project-section">
            <div className="project-category">
              <h3>Data Science</h3>
            </div>
            <div className="projects-grid">
              {projects
                .filter((p) => p.category === "Data Science")
                .map((project) => (
                  <div key={project.id} className="project-card">
                    <Link to={project.link} className="project-title">
                      <h3>{project.title}</h3>
                    </Link>
                    <p>{project.description}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Product & UI/UX section */}
          <div className="project-section">
            <div className="project-category">
              <h3>Product & UI/UX</h3>
            </div>
            <div className="projects-grid">
              {projects
                .filter((p) => p.category === "Product & UI/UX")
                .map((project) => (
                  <div key={project.id} className="project-card">
                    <Link to={project.link} className="project-title">
                      <h3>{project.title}</h3>
                    </Link>
                    <p>{project.description}</p>
                  </div>
                ))}
            </div>
          </div>

          </section>

          {/* Interests section */}
          <section>
          <div>
          <h2 className="projects-title">Interests</h2>
          <ul className="interests-list">
            <li>📊 数据分析与可视化</li>
            <li>🗣️ 自然语言处理（NLP）</li>
            <li>🌐 社交网络分析（SNA）</li>
            <li>🔍 推荐系统</li>
            <li>🎨 UI/UX 设计与用户体验优化</li>
          </ul>
          </div>

          </section>
          
        </main>
        </div> 
      </div>  {/* Close container div */}
    </div>
  );
}

function ProjectDetails({ title, content }) {
  return (
    <div className="project-details"> {/* This stays as it is */}
      <h2>{title}</h2>
      <p>{content}</p>
      <Link to="/" className="btn">返回主页</Link>
    </div>
  );
}

function KoreaChinaRelations() {
  return (
    <div className="project-details">
      {/* 标题 */}

      <h2>Topic Modeling-Based Analysis of Korea-China Relations Issues (2019-2023)</h2>
    <div id="abstract">

      {/* Report & Code 按钮 */}
      <div className="buttons">
        <a href="你的Report链接" className="btn">Report</a>
        <a href="你的Code链接" className="btn">Code</a>
      </div>

      {/* Abstract 部分 */}
      <div id="abstract-container">
        <h2>Abstract</h2>
        <p>
          This study examines Korea-China relations through the lens of online news comments from 2019 to 2023. 
          Using Latent Dirichlet Allocation (LDA), the study identifies key topics that elicit strong reactions from the public. 
          The analysis aims to uncover recurring themes, sentiment trends, and controversial topics in the discourse. 
          The findings provide insights into the major issues shaping public perception and suggest ways to improve 
          bilateral relations through mutual understanding and policy direction.
        </p>
      </div>

      {/* Data Overview */}
      <h2 className="detail-section-title">Data Overview</h2>
      <p>The dataset consists of user comments collected from <strong>Naver News (Korea)</strong> and <strong>Weibo (China)</strong> between <strong>2019 and 2023</strong>. The collection process involved web scraping techniques and was structured to ensure balanced data representation across different timeframes.</p>
      
      {/* 插入图片 */}
      <img src="data_overview.png" alt="Overview of the data" className="data-overview-image" />
      <img src="data_overview_pie.png" alt="Pie chart of the data overview" className="data-overview-pie-image" />

      {/* Data Preprocessing */}
      <h2 className="detail-section-title2">Data Preprocessing</h2>
      <p>
        <strong>Korean Data</strong>: Removed duplicate comments, standardized formatting, and filtered irrelevant entries.<br />
        <strong>Chinese Data</strong>: Utilized Jieba tokenizer and HIT stopwords dictionary to refine text.</p>

      {/* Data Sample */}
      <h2 className="detail-section-title2">Data Sample</h2>
      <p>Here are examples of key terms extracted from the comment data: </p>

      {/* 插入图片 */}
      <img src="data_sample.png" alt="Sample of the data" className="data-sample-image" />

      {/* Methodology */}
      <h2 className="detail-section-title">Methodology</h2>
      <p>To analyze the dataset, we employ <strong>two main techniques</strong>:</p>
      <ul style={{ marginBottom: '20px' }}>
        <li><strong>Latent Dirichlet Allocation (LDA)</strong>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Used to identify recurring discussion topics from online comments.</li>
            <li>Extracts <strong>topic distributions</strong> from text data by learning hidden patterns.</li>
          </ul>
        </li>
        <li><strong>Sentiment Analysis</strong>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Classified comments as <strong>positive, neutral, or negative</strong>.</li>
            <li>Applied <strong>lexicon-based</strong> and <strong>machine-learning-based</strong> sentiment classification.</li>
          </ul>
        </li>
      </ul>
      <p>Additionally, <strong>data preprocessing techniques</strong> such as tokenization, stopword removal, and text normalization were applied to ensure high-quality analysis.</p>
      
      {/* Summary */}
      <div>
        <h2 className="detail-section-title2">Summary</h2>
        <ul>
          <li>Data Collection: Scrapped 28,995 comments from Naver News and Sina Weibo.</li>
          <li>Topic Modeling: Used LDA to identify themes like political tensions and economic concerns.</li>
          <li>Sentiment Analysis: Applied sentiment dictionaries to classify emotional tones.</li>
        </ul>
      </div>

      {/* 插入图片 */}
      <img src="process_summary.png" alt="summary" className="data-overview-image" />

      {/* Experimental Analysis */}
      <h2 className="detail-section-title">Experimental Analysis</h2>
      <p>
        The study applied <strong>topic modeling (LDA)</strong> to categorize recurring themes.
      </p>
      <p>Key findings include:</p>
      <ol>
        <li>
          <strong>Key Trends Identified with LDA:</strong>
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              <strong>The top 5 discussion topics</strong> identified through LDA for both platforms are visualized below:
            </li>
          </ul>
        </li>
      </ol>

      <img src="key_trends_lda.png" alt="key_trends" className="data-overview-pie-image" />
      
      {/* Experimental Analysis结论2 */}
      <ol start={2}>
        <li>
          <strong>Diverging Perceptions:</strong>
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              Korean comments exhibited high negativity regarding China's  <strong>political policies and economic influence</strong>. (e.g."corona-19", "partisan").
            </li>
            <li>
              Chinese comments displayed frustration with <strong>Korea’s alignment with the U.S.</strong> and cultural disputes (e.g."entertainment". "")
            </li>
          </ul>
        </li>
      </ol>

      <div className="ea-image-container">
        <img 
          src="Perceptions1.png" 
          alt="Perceptions1" 
          className="data-overview-ea-image" 
        />
        <img 
          src="Perceptions2.png" 
          alt="Perceptions2" 
          className="data-overview-ea-image" 
        />
      </div>
      
      <h2 className="detail-section-title">Key Takeaways</h2>
      <ul className="key-takeaways">
        <li>✅ <strong>Understanding online discourse</strong> is crucial for diplomatic strategies.</li>
        <li>✅ <strong>Hate speech</strong> plays a significant role in shaping public sentiment.</li>
        <li>✅ <strong>LDA-based topic modeling</strong> is effective for detecting underlying tensions in bilateral relations.</li>
      </ul>

      <h2 className="detail-section-title">Future Directions</h2>
      <p>
        Future research should focus on <strong>enhancing content moderation</strong> to reduce misinformation and hate speech, 
        leveraging <strong>deep learning models</strong> like BERT for more accurate sentiment analysis, and expanding 
        <strong> cross-platform comparisons</strong> to gain a broader perspective on Korea-China relations. Additionally, a 
        <strong> longitudinal analysis</strong> of sentiment trends over time could provide valuable insights for predicting 
        shifts in public discourse and informing diplomatic strategies.
      </p>

     
      <Link to="/" className="btn">Back</Link>
    </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<KoreaChinaRelations />} />
        <Route path="/project2" element={<ProjectDetails title="啤酒推荐系统" content="介绍推荐算法、模型优化以及实验结果。" />} />
        <Route path="/project3" element={<ProjectDetails title="学生社交网络平台" content="描述平台的功能、技术栈和用户体验优化。" />} />
        <Route path="/project4" element={<ProjectDetails title="购物平台设计" content="介绍电商界面的优化和交互设计方案。" />} />
        <Route path="/project5" element={<ProjectDetails title="Data Science 分析" content="详细数据分析过程。" />} />
      </Routes>
    </Router>
  );
}


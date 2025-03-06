import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css'; // 添加你的样式文件

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

//* 多语言支持
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

  // 语言切换函数
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  
  return (
    <div className="container">
      {/* 顶部标题 */}
      <header className="header">
        <h1 className="site-title">{translations[language].title}</h1>
      </header>

      {/* 切换语言 */}
      <div className="language-switcher">
        <button onClick={() => changeLanguage('zh')}>中文</button> /
        <button onClick={() => changeLanguage('en')}>English</button> /
        <button onClick={() => changeLanguage('ko')}>한국어</button>
      </div>

      <hr className="divider" /> {/* 添加分割线 */}

      <div className="content">
        {/* 左侧个人信息 */}
        <aside className="sidebar">
          <img src="/profile.JPG" alt="Gaheun Lee" className="profile-img" />        
          <h1 className="name">Gaheun Lee</h1>
          <p className="university"> 李佳鑫（Jiaxin Li）</p>
          <p className="school">Data Science</p>
          <p className="university">Sungkyunkwan Univ.</p>
          <a href="mailto:i.gaheun46@gmail.com" className="email">i.gaheun46@gmail.com</a>
        </aside>

        {/* 右侧内容 */}
        <main className="main-content">
          <section>
          <h2 className="projects-title">About Me</h2>
            <p>
            <p>您好，欢迎来到我的个人主页！我是 Gaheun Lee，一名数据科学领域的探索者，对数据分析、机器学习和用户体验设计充满热情。</p>
              <p>我于2025年2月毕业于<a href="https://www.skku.edu/eng/index.do" target="_blank" rel="noopener noreferrer">韩国成均馆大学
                </a>，主修<strong>数据科学专业</strong>。在本科学习生涯中，我系统学习了<strong>数据结构与算法、机器学习、数据挖掘、数据库、计算机网络</strong>等核心课程，并熟练掌握<strong>Python、SQL、C语言</strong>，同时具备 MySQL、AWS、Excel等工具的实战经验。</p>
              <p>我的兴趣横跨<strong>数据科学与产品设计</strong>，我相信数据驱动决策和良好的用户体验能够创造更具影响力的产品。因此，我不仅参与了多个数据科学相关项目，还深入研究产品设计与交互体验。</p>
               <p>📄 这是我的 <a href="/resume.pdf" download>简历(CV)</a>，欢迎查看！
               </p>
            </p>
          </section>

          <section>
          <section>
          <h2 className="projects-title">Projects</h2>
          </section>
          {/* Data Science 部分 */}
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

          {/* Product & UI/UX 部分 */}
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

          {/* interests 部分 */}
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
      </div> {/* 关闭 content div */}
      
    </div>  /* 关闭 container div */
  );
}

function ProjectDetails({ title, content }) {
  return (
    <div className="project-details">
      <h2>{title}</h2>
      <p>{content}</p>
      <Link to="/" className="btn">返回主页</Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<ProjectDetails title="韩中关系问题分析" content="详细介绍该项目的背景、方法和结论。" />} />
        <Route path="/project2" element={<ProjectDetails title="啤酒推荐系统" content="介绍推荐算法、模型优化以及实验结果。" />} />
        <Route path="/project3" element={<ProjectDetails title="学生社交网络平台" content="描述平台的功能、技术栈和用户体验优化。" />} />
        <Route path="/project4" element={<ProjectDetails title="购物平台设计" content="介绍电商界面的优化和交互设计方案。" />} />
        <Route path="/project5" element={<ProjectDetails title="Data Science 分析" content="详细数据分析过程。" />} />
      </Routes>
    </Router>
  );
}
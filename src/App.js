import React from "react";
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
    category: "Product",
  },
];

function Home() {
  return (
    <div className="container">
      
      {/* 顶部标题 */}
      <header className="header">
        <h1 className="site-title">Gaheun Lee's Homepage</h1>
      </header>

      <hr className="divider" /> {/* 添加分割线 */}

      <div className="content">
        {/* 左侧个人信息 */}
        <aside className="sidebar">
          <img src="/profile.jpg" alt="Gaheun Lee" className="profile-img" />        
          <h1 className="name">Gaheun Lee</h1>
          <p className="school">Data Science</p>
          <p className="university">Sungkyunkwan Univ.</p>
          <a href="mailto:i.gaheun46@gmail.com" className="email">i.gaheun46@gmail.com</a>
        </aside>

        {/* 右侧内容 */}
        <main className="main-content">
          <section>
            <h2>About Me</h2>
            <p>我是一名数据科学专业的本科生，就读于韩国首尔成均馆大学，已于2025年2月毕业。我对数据科学、机器学习和数据挖掘充满热情，喜欢通过数据分析挖掘背后的故事，并运用算法优化决策过程。在学术方面，我掌握了 Python、SQL、C 语言，并熟练使用 MySQL、AWS、Tableau、Excel 等数据分析工具。大学期间，我学习了数据结构与算法、机器学习、数据挖掘、数据库、计算机网络 等核心课程，打下了坚实的技术基础。</p>
          </section>

          <section>
            <h2>Projects</h2>

            {/* Data Science 部分 */}
            <div className="project-category">
              <h3>Data Science</h3>
            </div>
            <div className="projects-grid">
              {projects
                .filter((p) => p.id !== 3) // 过滤掉 Product 项目
                .map((project) => (
                  <div key={project.id} className="project-card">
                    <Link to={project.link} className="project-title">
                      <h3>{project.title}</h3>
                    </Link>
                    <p>{project.description}</p>
                  </div>
                ))}
            </div>

            {/* Product 部分 */}
            <div className="project-category">
              <h3>Product</h3>
            </div>
            <div className="projects-grid">
              {projects
                .filter((p) => p.id === 3) // 只选 Product 项目
                .map((project) => (
                  <div key={project.id} className="project-card">
                    <Link to={project.link} className="project-title">
                      <h3>{project.title}</h3>
                    </Link>
                    <p>{project.description}</p>
                  </div>
                ))}
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
      </Routes>
    </Router>
  );
}
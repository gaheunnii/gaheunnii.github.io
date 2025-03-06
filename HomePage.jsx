import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 flex">
        {/* 左侧个人信息 */}
        <div className="w-1/3 p-4 text-center border-r">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full border"
          />
          <h2 className="text-xl font-bold mt-4">Gaheun Lee</h2>
          <p className="text-gray-600">Data Science<br/>Sungkyunkwan Univ.</p>
          <a href="mailto:i.gaheun46@gmail.com" className="text-blue-500">i.gaheun46@gmail.com</a>
        </div>

        {/* 右侧内容 */}
        <div className="w-2/3 p-4">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p className="text-gray-700 text-sm">
            我是一名数据科学专业的本科生，就读于韩国成均馆大学，已于2025年2月毕业。
            我对数据科学、机器学习和数据挖掘充满热情，喜欢通过数据分析挖掘背后的故事，并运用算法优化决策过程。
          </p>

          <h2 className="text-xl font-bold mt-4">Projects</h2>
          <div className="mt-2">
            <h3 className="font-semibold text-lg">Data Science</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="bg-gray-50 p-4 rounded-lg shadow">
                <h4 className="font-semibold">基于主题建模的韩中关系问题分析</h4>
                <p className="text-sm text-gray-600">分析2019-2023年网络新闻评论，揭示韩中关系发展趋势。</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow">
                <h4 className="font-semibold">使用协同过滤和 PageRank 的啤酒推荐系统</h4>
                <p className="text-sm text-gray-600">基于用户评分数据，提升个性化推荐效果。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
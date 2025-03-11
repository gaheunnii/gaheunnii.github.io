import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css'; // Your CSS file

const projects = [
  {
    id: 1,
    title: "基于主题建模的韩中关系问题分析",
    description: "分析2019-2023年网络新闻评论，揭示韩中关系发展趋势。",
    link: "/KoreaChinaRelations",
    category: "Data Science",
  },
  {
    id: 2,
    title: "使用协同过滤和 PageRank 的啤酒推荐系统",
    description: "基于用户评分数据，提升个性化推荐效果。",
    link: "/BeerRecommendation",
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
    title: "对于Flipkart产品评论的消费者情绪分析",
    description: "分析 Flipkart 评论情绪，揭示评分与情感趋势，助力产品优化和营销。",
    link: "/ConsumerSentimentAnalysis",
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
        <a href="https://github.com/gaheunnii/gaheunnii.github.io/blob/gaheunnii--project1/%E1%84%8F%E1%85%A2%E1%86%B8%E1%84%89%E1%85%B3%E1%84%90%E1%85%A9%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%87%E1%85%A9%E1%84%80%E1%85%A9%E1%84%89%E1%85%A5.pdf" className="btn">Report</a>
        <a href="https://github.com/gaheunnii/gaheunnii.github.io/tree/gaheunnii--project1" className="btn">Code</a>
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
      <h2 className="detail-section-title">📊 Data Overview</h2>
      <p>The dataset consists of user comments collected from <strong>Naver News (Korea)</strong> and <strong>Weibo (China)</strong> between <strong>2019 and 2023</strong>. The collection process involved web scraping techniques and was structured to ensure balanced data representation across different timeframes.</p>
      
      {/* 插入图片 */}
      <img src="data_overview.png" alt="Overview of the data" className="data-overview-image" />
      <img src="data_overview_pie.png" alt="Pie chart of the data overview" className="data-huge-image" />

      {/* Data Preprocessing */}
      <h2 className="detail-section-title2">Data Preprocessing</h2>
      <p>
        <strong>Korean Data</strong>: Removed duplicate comments, standardized formatting, and filtered irrelevant entries.<br />
        <strong>Chinese Data</strong>: Utilized Jieba tokenizer and HIT stopwords dictionary to refine text.</p>

      {/* Data Sample */}
      <h2 className="detail-section-title2">Data Sample</h2>
      <p>Here are examples of key terms extracted from the comment data: </p>

      {/* 插入图片 */}
      <img src="data_sample.png" alt="Sample of the data" className="data-huge-image" />

      {/* Methodology */}
      <h2 className="detail-section-title">🛠️ Methodology</h2>
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
      <h2 className="detail-section-title">🔬 Experimental Analysis</h2>
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

      <img src="key_trends_lda.png" alt="key_trends" className="data-medium-image" />
      
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

function BeerRecommendation() {
  return (
    <div className="project-details">
      <h2>Graph-Based Beer Recommendation System</h2>
      
      <div className="buttons">
        <a href="https://github.com/yourgithub/repo" className="btn">Report</a>
        <a href="https://github.com/yourgithub/code" className="btn">Code</a>
      </div>
      
      <div id="abstract-container">
      <h2>Abstract</h2>
      <p>
        Traditional beer recommendation systems often rely on static user preferences, limiting their adaptability to evolving tastes.
        Our project proposes a <strong>graph-based recommendation system</strong> that leverages <strong>user reviews and ratings</strong> 
        to provide personalized beer recommendations. Utilizing a dataset of <strong>1.5 million reviews</strong> from Beer Advocate, we construct a 
        <strong>bipartite user-beer graph</strong> and employ <strong>collaborative filtering, link prediction, and Personalized PageRank</strong> to enhance recommendation accuracy.
        We evaluate our system using <strong>A/B testing, multiple linear regression, and cross-validation</strong>, demonstrating that our method significantly improves recommendation precision and user satisfaction.
      </p>
      </div>
      
      <h2>📊 Dataset Overview</h2>
      <p>
        <strong>Data Source:</strong>
        <a href="https://www.kaggle.com/datasets/thedevastator/1-5-million-beer-reviews-from-beer-advocate?select=beer_reviews.csv"> Beer Advocate Reviews</a>
      </p>
      <p><strong>Size:</strong> ~1.5 million reviews</p>
      <p><strong>Time Range:</strong> Spanning multiple years of user-generated beer reviews</p>
      
      <h2>Data Fields</h2>
      <ul>
        <li><strong>Review-Based Ratings</strong> (Scale: 1–5)</li>
        <li>review_overall (Overall impression)</li>
        <li>review_taste (Taste)</li>
        <li>review_aroma (Aroma)</li>
        <li>review_appearance (Appearance)</li>
        <li>review_palate (Mouthfeel)</li>
      </ul>
      <ul>
        <li><strong>Beer Attributes</strong></li>
        <li>beer_abv (Alcohol by Volume)</li>
        <li>beer_style (Beer category)</li>
        <li>beer_name (Brand name)</li>
      </ul>
      <ul>
        <li><strong>User Information</strong></li>
        <li>review_profilename (User ID)</li>
      </ul>
      
      <h2>Data Sample</h2>
      <img src="beer_data_overview.png" alt="Beer dataset overview" className="data-overview-image" />
      
      <h2>🛠️ Methodology</h2>
      <ul>
        <li><strong>Collaborative Filtering:</strong> NearestNeighbors algorithm with cosine similarity.</li>
        <li><strong>Link Prediction:</strong> Predicts user preferences based on interactions.</li>
        <li><strong>Personalized PageRank:</strong> Ranks beers based on individual user preferences.</li>
      </ul>
      
      <h2>Experimental Analysis</h2>
      <ul>
        <li><strong>A/B Testing:</strong> Showed a significant improvement with <strong>p-value5</strong>.</li>
        <li><strong>Multiple Linear Regression:</strong> R² = 0.658, explaining 65.8% variance in preferences.</li>
        <li><strong>Cross-Validation:</strong> Ensured model robustness.</li>
      </ul>
      
      <h2>Results & Insights</h2>
      <p>
        - Taste is the strongest predictor of overall beer preference (correlation: 0.78).<br/>
        - Graph-based methods outperform traditional models in accuracy.<br/>
        - Users with similar preferences form distinct communities for better recommendations.
      </p>
      
      <h2>Conclusion & Future Work</h2>
      <p>
        Our <strong>graph-based beer recommendation system</strong> captures user preferences effectively and provides personalized recommendations.
        Future work includes incorporating <strong>text-based reviews</strong>, <strong>social media interactions</strong>, and optimizing models using deep learning techniques.
      </p>
      
      <Link to="/" className="btn">Back</Link>
    </div>
  );
}

function ConsumerSentimentAnalysis() {
  return (
    <div className="project-details">
      <h2>Consumer Sentiment Analysis on Flipkart Product Reviews</h2>
      
      {/* Report & Code 按钮 */}
      <div className="buttons">
        <a href="https://github.com/gaheunnii/gaheunnii.github.io/tree/gaheunnii--project1" className="btn">Code</a>
        <a href="https://github.com/gaheunnii/gaheunnii.github.io/tree/gaheunnii--project1" className="btn">Code</a>
      </div>
      
      <div id="abstract-container">
      <h2>Abstract</h2>
      <p>
        This project analyzes consumer sentiment in Flipkart product reviews using a dataset sourced from <a href="https://www.kaggle.com/datasets/niraliivaghani/flipkart-product-customer-reviews-dataset" target="_blank" rel="noopener noreferrer">Kaggle</a>. 
        The objective is to understand customer opinions on different products through various analytical methods. 
        Key aspects include identifying factors influencing sentiment, evaluating sentiment classification performance, 
        and exploring relationships between sentiment, ratings, and reviews. The insights gained can help businesses 
        enhance product quality, improve customer service, and refine marketing strategies.
      </p>
    </div>
      
      <h2 className="detail-section-title">📊 Data Overview</h2>
      <p>The dataset contains <strong>product reviews</strong> labeled with sentiment categories (<em>positive, neutral, negative</em>).</p>
      <img src="consumer_data_overview.png" alt="consumer_data_overview" className="data-medium-image" />

      {/* Sentiment  & Rating Distributione */}
      <h2 className="detail-section-title2">Sentiment  & Rating Distribution</h2>
      <p>The sentiment distribution reveals that <strong>81.6% of reviews are positive, 4.9% are neutral, and 13.5% are negative</strong>, indicating a strong inclination toward positive feedback.
          Ratings range from <strong>1 to 5</strong>, with the majority of customers giving the highest score (5), reflecting overall satisfaction.</p>
      <img src="rating_senti_distribution.png" alt="rating_senti_distribution" className="data-huge-image" />
      
      {/* Review Lengths V.S. Sentiment and Rating */}
      <h2 className="detail-section-title2">Review Lengths V.S. Sentiment and Rating</h2>
      <img src="ReviewLen_SentiRating.png" alt="ReviedLen_SentiRating" className="data-huge-image" />
      <p>Most reviews are concise, under 100 characters. While no clear pattern emerges between rating and review length, negative reviews tend to be longer, suggesting customers elaborate more when dissatisfied.</p>

      {/* Data Samples */}
      <h2 className="detail-section-title2">Data Samples</h2>
      <img src="consumer_data.png" alt="consumer_data" className="data-huge-image" />
      <p>We provide some examples here to help readers better understand the dataset. Our task is to find relationship among Sentiment, Rate, and Summary.
        The examples suggest a <strong>strong correlation between ratings and sentiment</strong>—higher ratings typically align with positive sentiment.</p>

      {/* Methodology */}
      <h2 className="detail-section-title">🛠️ Methodology</h2>

      <h3>1️⃣ Data Preprocessing</h3>
      <p>
        The raw data was first cleaned to <strong>remove any missing values or inconsistent entries</strong>. 
        Text data in the review and summary columns were pre-processed by:
      </p>
      <ul>
        <li>Converting text to lowercase</li>
        <li>Removing special characters</li>
        <li>Filtering stop-words</li>
      </ul>
      <p>
        Moreover, due to distribution shifts in labels and sentence lengths, we filtered out overly short or excessively long reviews. 
        To address class imbalance, we applied <strong>resampling techniques</strong>. The distributions of post-sampled data can be found in the following figures.
      </p>
      <img src="consumer_data_process.png" alt="consumer_data_process" className="data-overview-image" />

      <h3>2️⃣ Feature Engineering & Model Training</h3>
      <p>
      Assuming 'Summary' is the feature and 'Sentiment' is the target variable. We first convert text data to TF-IDF features, and than we train a RandomForestClassifier to determine feature importance
      </p>
      <ul>
        <li>Used <strong>TF-IDF feature extraction</strong> on review summaries.</li>
        <li>Trained a <strong>RandomForestClassifier</strong> to assess feature importance.</li>
        <img src="consumer_RF.png" alt="consumer_random_forest" className="data-huge-image" />
        <li>Additional analysis: Word cloud, sentiment keyword analysis, sentiment-rating correlation.</li>
      </ul>
      <h3>3️⃣ Other Analysis</h3>
      <p>
      We also perform some other analysis, e.g. wordcloud, sentiment keywords analysis, sentiment vs rating correlation and so on. More results can be found in experimental parts.
      </p>
      <ul>
        <li>Generated word clouds.</li>
        <li>Examined sentiment keywords.</li>
        <li>Explored sentiment-rating correlations.</li>
      </ul>

      {/* Experimental Analysis */}
     <h2 className="detail-section-title">🔬 Experimental Analysis</h2>
     
     {/* Sentiment and Rating Analysis */}
      <h3>1️⃣ Sentiment and Rating Analysis</h3>
      <p>Key findings:</p>
      <ul>
        <li><strong>Sentiment positively correlates with ratings</strong>—higher sentiment scores are associated with higher ratings.</li>
        <li>Consumers tend to give extreme ratings (1 or 5) rather than moderate ones.</li>
      </ul>
      <img src="sentiment_and_rating_analysis.png" alt="Sentiment and Rating Analysis" className="data-huge-image" />

      {/* TF-IDF Analysis */}
      <h3>2️⃣ TF-IDF Analysis</h3>
      <ul>
        <li>Customers express sentiment using <strong>direct and simple words</strong>.</li>
        <li><strong>Negative words are part of common usage</strong>, but positive words drive higher sentiment scores.</li>
        <li><strong>Quality and price</strong> are key concerns for customers.</li>
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <img src="consumer_TF-IDF_analysis.png" alt="consumer_TF-IDF_analysis" className="data-small-image" />
        <img src="consumer_TF-IDF_data.png" alt="consumer_TF-IDF_data" className="data-small-image" />
      </div>
      
      {/* Key Factors Affecting Customer Satisfaction */}
      <h3>3️⃣ Key Factors Affecting Customer Satisfaction</h3>
      <p>Word cloud analysis reinforces TF-IDF insights—customers focus heavily on product quality and pricing.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <img src="consumer_wordcloud_pos.png" alt="consumer_wordcloud_pos" className="data-mini-image" />
        <img src="consumer_wordcloud_neutral.png" alt="consumer_wordcloud_neutral" className="data-mini-image" />
        <img src="consumer_wordcloud_neg.png" alt="consumer_wordcloud_neg" className="data-mini-image" />
      </div>

      {/* Sentiment Analysis Using Machine Learning */}
      <h3>3️⃣ Sentiment Analysis Using Machine Learning</h3>
      <p>
        In this section, we aim to utilize machine learning tools, e.g., random forest, to analyze the relationship between summary (review) and sentiment. 
        From the top 20 most important features in the random forest model, we can achieve similar arguments in TF-IDF Analysis.
        From the confusion matrix, we can see that random forest can classify sentiments correctly in most cases. 
        It achieves <strong>72% accuracy</strong> and an <strong>F1-score of 71%</strong>.  
      </p>
      <ul>
        <li><strong>Random Forest achieved 72% accuracy and an F1-score of 71%.</strong></li>
        <li><strong>Negative and positive sentiments are easier to classify</strong>, while neutral sentiment remains challenging.</li>
        <li><strong>t-SNE visualization</strong> shows distinct clusters for positive and negative sentiments, while neutral reviews are more dispersed.</li>
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <img src="rf_features.png" alt="rf_features" className="data-small-image" />
        <img src="TSNE_visual.png" alt="TSNE_visual" className="data-small-image" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <img src="confusion_matrix.png" alt="confusion_matrix" className="data-small-image" />
        <img src="prediction_prob_distribution.png" alt="prediction_prob_distribution" className="data-small-image" />
      </div>

      <p>
        Obviously, negative and positive are easier to discriminate, while neutral is harder. 
        We also visualize the features via t-SNE, and some consistent phenomena can be observed. 
        Most positive points are located on the right part, and most negative points are on the left part, while neutral points are mixed in the middle.
      </p>


      {/* Key Takeaways */} 
      <h2 className="detail-section-title">📌 Key Takeaways</h2>
      <ul className="key-takeaways">
        <li><strong>Product influence sentiment trends differently.</strong></li>
        <li><strong>Certain keywords (e.g., "quality", "good", “product”) correlate with sentiment polarity.</strong></li>
        <li><strong>Machine learning models can predict review sentiment with high accuracy.</strong></li>
      </ul>

      {/* Future Directions */}
      <h2 className="detail-section-title">🚀 Future Directions</h2>
      <p>
      <li><strong>Aspect-Based Sentiment Analysis:</strong> Extract sentiment towards <em>price, delivery, quality, customer service separately.</em></li>
      <li><strong>Recommendation System Integration: </strong>Use sentiment scores to improve personalized recommendations.</li>
      <li><strong>Fake Review Detection: </strong>Apply <strong>anomaly detection to filter misleading reviews.</strong></li>
      </p>

      <Link to="/" className="btn">Back</Link>
      </div>
        );
      }


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/KoreaChinaRelations" element={<KoreaChinaRelations />} />
        <Route path="/BeerRecommendation" element={<BeerRecommendation />} />
        <Route path="/project3" element={<ProjectDetails title="学生社交网络平台" content="描述平台的功能、技术栈和用户体验优化。" />} />
        <Route path="/project4" element={<ProjectDetails title="购物平台设计" content="介绍电商界面的优化和交互设计方案。" />} />
        <Route path="/ConsumerSentimentAnalysis" element={<ConsumerSentimentAnalysis />} />
      </Routes>
    </Router>
  );
}


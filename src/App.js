import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css'; // Your CSS file

const projects = [
  {
    id: 1,
    title: "Consumer Sentiment Analysis on Flipkart Product Reviews",
    description: "Explores sentiment patterns in Flipkart reviews, uncovering the relationship between ratings and emotions to optimize product strategy and marketing.",
    link: "/ConsumerSentimentAnalysis",
    category: "Data Science",
  },
  {
    id: 2,
    title: "Topic Modeling-Based Analysis of Korea-China Relations Issues",
    description: "Analyzes online news comments from 2019-2023 using LDA topic modeling and sentiment analysis to uncover key discussion themes and emotional trends in Korea-China relations.",
    link: "/KoreaChinaRelations",
    category: "Data Science",
  },
  {
    id: 3,
    title: "Graph-Based Beer Recommendation System",
    description: "Leverages user rating data to enhance personalized beer recommendations through graph-based algorithms.",
    link: "/BeerRecommendation",
    category: "Data Science",
  },
  {
    id: 4,
    title: "SKKouple: Exclusive Social Platform Design for Sungkyunkwan University",
    description: "Designed a social platform to enhance student interactions at Sungkyunkwan University, creating an efficient, user-friendly campus ecosystem.",
    link: "/SocialPlatformDesign",
    category: "Product & UI/UX",
  },
  {
    id: 5,
    title: "购物平台设计",
    description: "打造直观的电商界面，优化用户购物体验。",
    link: "/project4",
    category: "Product & UI/UX",
  },
];

function Home() {
  return (
    <div className="home-container">
    <div className="container">
      {/* Header */}
      <h1 className="site-title">Gaheun Lee's Homepage</h1>

      <hr className="divider" /> {/* Divider */}

      <div className="content">
        {/* Sidebar with personal info */}
        <aside className="sidebar">
          <img src="/profile.JPG" alt="Gaheun Lee" className="profile-img" />        
          <h1 className="name">Gaheun Lee</h1>
          <p className="university">李佳鑫(Jiaxin Li, 이가흔)</p>
          <p className="school">Data Science</p>
          <p className="university">Sungkyunkwan Univ.</p>
          <a href="mailto:i.gaheun46@gmail.com" className="email">i.gaheun46@gmail.com</a>
        </aside>

        {/* Main content */}
        <main className="main-content">
          <section>
          <h2 className="projects-title">About Me</h2>
          <div className="about-me">          
            <p>
            Hello, and welcome to my personal page! I am <strong>Gaheun Lee (李佳鑫 / Jiaxin Li)</strong>, a passionate explorer in <strong>Data Analysis, Machine Learning, and User Experience Design</strong>. 
            I am currently seeking <u>full-time opportunities in Data Analysis, Machine Learning, or Product Data-related roles, while also exploring potential graduate studies.</u>.</p>
          <p>I graduated in <strong>February 2025</strong> from <a href="https://www.skku.edu/eng/index.do" target="_blank" rel="noopener noreferrer">Sungkyunkwan University, South Korea</a>, with a <strong>Bachelor’s degree in Data Science</strong>. 
          Throughout my studies, I have developed a strong foundation in <strong>Data Structures and Algorithms, Machine Learning, Database, and Computer Networks</strong>. 
          I am proficient in <strong>Python, SQL</strong>, C/C++, and JavaScript, with hands-on experience in  
    <strong> MySQL, MongoDB, AWS, React, Git, and VS Code</strong>.</p>
          <p>My passion lies at the intersection of <strong>Data Science and Product Design</strong>. 
          I believe that <strong>data-driven decision-making</strong> and <strong>exceptional user experience</strong> are key to building impactful products. 
          Beyond my expertise in data analysis, I actively explore <strong>product design and interaction</strong>, striving to bridge the gap between technology and user needs.</p>
          <p>📄 Here are my resumes:  
            <strong><a href="/Resume.pdf" download>Resume (English)</a></strong> /  
            <strong><a href="/简历_中文.pdf" download>简历 (中文)</a></strong>. 🚀</p>          </div>
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
            <li>📊 Data analysis and Visualization</li>
            <li>🗣️ Natural Language Processing (NLP)</li>
            <li>🌐 Social Network Analysis (SNA)</li>
            <li>🔍 Recommendation System</li>
            <li>🎨 UI/UX Design and User Experience</li>
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


function ConsumerSentimentAnalysis() {
  return (
    <div className="project-details">
      <h2>Consumer Sentiment Analysis on Flipkart Product Reviews</h2>

      {/* 代码下载按钮 */}
      <div className="code-container">
        <a href="/ConsumerSentimentAnalysis.zip" download className="code-link">Code
        </a>
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
        It achieves <strong>71% accuracy</strong> and an <strong>F1-score of 71%</strong>.  
      </p>
      <ul>
        <li><strong>Random Forest achieved 71% accuracy and an F1-score of 71%.</strong></li>
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

function KoreaChinaRelations() {
  return (
    <div className="project-details">
      {/* 标题 */}

      <h2>Topic Modeling-Based Analysis of Korea-China Relations Issues</h2>
    <div id="abstract">

      {/* 代码下载按钮 */}
      <div className="code-container">
        <a href="/Topic Modeling-Based Analysis of Korea-China Relations Issues.pdf" download className="code-link">Report
        </a>
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
      
      {/* 代码下载按钮 */}
      <div className="code-container">
        <a href="/.zip" download className="code-link">Code
        </a>
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
      {/* Future Directions */}
      <h2 className="detail-section-title">📊 Dataset Overview</h2>
      <p>
      This study used the Beer Reviews from <strong>Beer Advocate (1.5 Million)</strong> dataset from the Beer Advocate platform.
      </p>
      <img src="beer_overall.png" alt="beer_overall" className="data-huge-image" />

      
      {/* Numerical Features */}
      <h3>Data Fields</h3>
      {/* Numerical Features */}
      <p>
        <strong>🔢 Numerical Features (10):</strong> Includes review_overall (overall rating), review_taste (taste), review_aroma (aroma), etc.
      </p>

      {/* Text Features */}
      <p>
        <strong>📝 Text Features (4):</strong> Such as beer_name (beer name), review_profilename (username), beer_style (beer category), etc.
      </p>

      <h3>Data Preprocessing</h3>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Remove missing values (e.g., entries without ratings or reviews).</li>
        <li>Normalize rating scales and convert text features into numerical values.</li>
        <li>Filter out low-frequency users and rare beers to reduce data sparsity.</li>
      </ul>
      <p className="mt-4 text-gray-700">
        During data cleaning, we removed <strong>missing and outlier values</strong> and performed a statistical analysis of rating distributions. 
        The results indicate that <strong>most users tend to give high ratings (predominantly between 4.0 and 4.5)</strong>, suggesting an <strong>overall positive bias</strong> in reviews.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <img src="distribution_of_overall.png" alt="Distribution of Overall" className="data-medium-image" />
        <img src="distribution_of_overall1.png" alt="Distribution of Overall1" className="data-medium-image" />
      </div>
      <p>
      <strong>Taste (review_taste)</strong> has the greatest impact, with a correlation coefficient of <strong>0.78 </strong>with review_overall.
      </p>
      <img src="corr_of_overall.png" alt="corr_of_overall" className="data-medium-image" />


      <h2 className="detail-section-title">🛠️ Methodology</h2>
      <h2 className="detail-section-title2">(1) Graph Model</h2>
      <p>We use NetworkX to construct a User-Beer Bipartite Graph:</p>
      <ul>
        <li><strong>Nodes:</strong> Users & Beers</li>
        <li><strong>Edges:</strong> User ratings for beers</li>
        <li><strong>Weight:</strong> Rating scores</li>
      </ul>
      <img src="graph_review.png" alt="graph_review" className="data-medium-image" />


      <h2 className="detail-section-title2">(2) Recommendation Algorithms</h2>

      <h3> ✅ Collaborative Filtering</h3>
      <ul>
        <li>Computes user similarity based on cosine similarity.</li>
        <li>Uses KNN to find the most similar users and recommend their preferred beers.</li>
        <li>For example, user <strong>joshbatt</strong> is most similar to <strong>GilGarp</strong>, so we can recommend beers that GilGarp likes to joshbatt.</li>
      </ul>

      <h3>✅ Link Prediction</h3>
        <ul>
          <li>Predicts potential beer preferences using Jaccard Coefficient and Common Neighbors.</li>
          <li>For example, similar users to <strong>cole2</strong> include <strong>business32, Mantis05753, LeCanonnier, SchavenBawls</strong>, suggesting that their beer preferences may also align.</li>
          <li>Users like <strong>franksnbeans</strong>, <strong>GilGarp</strong>, and <strong>maltlikker</strong> have distinct sets of similar users, indicating potential clusters of beer preferences.</li>
          <li>These predictions help expand the recommendation pool beyond direct user interactions, improving personalization.</li>
        </ul>

        <h3>✅ Personalized PageRank</h3>
        <ul>
            <li>Calculates the importance of each beer for a specific user.</li>
            <li>For example, <strong>AleSmith Speedway Stout</strong> ranks highly in GilGarp’s recommendation list, indicating a strong match with their taste preference.</li>
            <li>Personalized PageRank results highlight beers with higher preference rankings, such as:
              <ul className="pl-5 list-disc">
                <li><strong>Trappist Westvleteren 12</strong>: Highly ranked and widely appreciated.</li>
                <li><strong>Abrasive Ale</strong> & <strong>Espresso Oak Aged Yeti Imperial Stout</strong>: Consistently recommended by high-ranking users.</li>
                <li><strong>Pannepot</strong>, <strong>Belgian Style Yeti</strong>, and <strong>Black Albert</strong>: Popular among users with similar preferences.</li>
              </ul>
            </li>
            <li>These rankings ensure that users receive beer recommendations that align with their taste profiles and peer preferences.</li>
        </ul>

        <h2 className="detail-section-title2">📌 Evaluation</h2>

        <h3 >(1) A/B Testing</h3>
        <ul>
          <li>Set up an experimental group (using the recommendation system) and a control group (random recommendations).</li>
          <li>Measure Click-Through Rate (CTR): The experimental group showed a <strong>21% increase in CTR</strong>.</li>
          <li><strong>t-test results</strong>: t-value = -10.21, p-value &lt; 0.05, confirming that the recommendation system significantly improves user engagement.</li>
        </ul>

        <h3 >(2) Cross Validation</h3>
        <ul>
          <li>Applied <strong>K-Fold Cross Validation</strong> to assess model performance.</li>
          <li><strong>R² = 0.654</strong>, indicating that the model explains 65.4% of the rating variance.</li>
        </ul>

        <h3 >(3) Error Analysis</h3>
        <ul>
          <li><strong>Confusion Matrix</strong>: Evaluated misclassifications in the recommendation system.</li>
          <li><strong>Linear Regression Model Analysis</strong>:
            <ul className="pl-5 list-disc">
              <li><strong>review_taste</strong> has the most significant impact (coefficient: 0.5499).</li>
              <li><strong>review_palate</strong> has a moderate impact (coefficient: 0.2580).</li>
              <li><strong>review_aroma</strong> has a smaller impact (coefficient: 0.0476).</li>
            </ul>
          </li>
          <li><strong>Root Mean Square Error (RMSE)</strong>: Used to measure the deviation between predicted and actual ratings.</li>
        </ul>

        <h2 className="detail-section-title2">☑️ Results & Discussion</h2>
        <ul>
          <li><strong>Review taste</strong> is the most influential factor, determining <strong>54.99%</strong> of the rating.</li>
          <li><strong>Personalized PageRank</strong> recommendations better align with users' historical preferences.</li>
          <li>Compared to score-based recommendation models, <strong>graph-based recommendations</strong> provide more precise and personalized beer suggestions.</li>
        </ul>

        <h2 className="detail-section-title2">🚀 Conclusion & Future Work</h2>

        <h3>Conclusion</h3>
        <ul>
          <li>The system integrates <strong>graph theory</strong> and <strong>machine learning</strong> to deliver more accurate recommendations than traditional collaborative filtering.</li>
          <li><strong>PageRank</strong>, combined with rating data and user relationships, significantly improves recommendation accuracy.</li>
          <li><strong>A/B testing and cross-validation</strong> confirm that the system enhances user satisfaction and engagement.</li>
        </ul>

        <h3> Future Improvements</h3>
        <ul>
          <li><strong>Integrating Deep Learning:</strong> Utilize <strong>Graph Neural Networks (GNNs)</strong> to further refine recommendations.</li>
          <li><strong>Enhancing Explainability:</strong> Provide users with reasons for recommendations (e.g., "Since you like IPA, we suggest XYZ Pale Ale").</li>
          <li><strong>Expanding Data Dimensions:</strong>
            <ul className="pl-5 list-disc">
              <li>Incorporate <strong>social network data</strong> to improve personalization.</li>
              <li>Integrate <strong>purchase history</strong> to enhance recommendation applicability.</li>
            </ul>
          </li>
        </ul>
      
      <Link to="/" className="btn">Back</Link>
    </div>
  );
}

function SocialPlatformDesign() {
  return (
    <div className="project-details">
      {/* 标题 */}

      <h2>SKKouple: Exclusive Social Platform Design for Sungkyunkwan University</h2>
    <div id="abstract">

      {/* 代码下载按钮 */}
      <div className="code-container">
        <a href="/SKKouple_SRS_Report.pdf" download className="code-link">Report
        </a>
      </div>
    
      <h2 className="detail-section-title1" style={{ fontSize: "24px", textAlign: "left" }}>Product Analysis</h2>
      <img src="skkouple_main.jpg" alt="skkouple_main" className="data-medium-image" />
      
      <section>
      <h2 className="detail-section-title2">1. Introduction</h2>
        <h3>1.1 Purpose</h3>
        <p>
          SKKouple is a social networking platform specifically designed for Sungkyunkwan University (SKKU) students. 
          Its goal is to help students find compatible connections and build relationships through a real-time chat system. 
          The platform provides a <strong>safe, convenient, and precise</strong> social experience, enhancing campus social culture. 
          This report aims to elaborate on <strong>SKKouple’s design philosophy, functional modules, market needs, and development strategy</strong>, 
          serving as a guide for product development and promotion.
        </p>
        <h3>1.2 Scope</h3>
        <p>
          This platform is intended for <strong>undergraduate, graduate, and exchange students</strong> at SKKU. 
          It aims to offer a secure, tailored, and user-friendly social experience, enabling students to expand their campus network, 
          meet like-minded individuals, and even form long-term relationships.
        </p>
      </section>
      
      {/* User Needs Analysis */}
      <section>
      <h2 className="detail-section-title2">2. User Needs Analysis</h2>
        <p>
        Many college students face social difficulties, especially in the context of large-scale online teaching and the management of Sungkyunkwan University's branch campuses. Traditional social platforms are difficult to meet the matching needs within a specific campus, and existing dating software is often not targeted at college students, and has problems such as high costs and insufficient privacy protection. SKKouple fills this market gap with a matching algorithm and security authentication mechanism designed specifically for Sungkyunkwan University students.
        </p>
        <h3>2.2 Target Users</h3>
        <ul>
          <li><strong>Undergraduate & Graduate Students</strong> – Looking to expand their social circles.</li>
          <li><strong>Freshmen</strong> – Seeking to integrate quickly into university life.</li>
          <li><strong>Exchange Students</strong> – Interested in local social opportunities.</li>
        </ul>
        
      </section>

      {/* Product Analysis */}  
      <section>
      <h2 className="detail-section-title2">3. Product Analysis</h2>
        <h3>3.1 Product Positioning</h3>
        <p>
          SKKouple is a <strong>social matching platform exclusively designed for SKKU students</strong>. 
          Its primary features include user matching, real-time chatting, and personalized recommendations, 
          helping students expand their social network and improve connection accuracy.
        </p>
        <h3>3.2 Core Features for Users</h3>
        <ul>
          <li><strong>Registration & Verification</strong> – Users must verify their identity using a Sungkyunkwan University email to ensure authenticity.</li>
          <li><strong>Profile Management</strong> – Users can personalize their profiles by adding interests, hobbies, and academic backgrounds.</li>
          <li><strong>User Filtering & Recommendations</strong> – Matching is based on criteria such as gender, campus, and interests.</li>
          <li><strong>Likes & Matching</strong> –  Chat functionality is unlocked only when both users have liked each other.</li>
          <li><strong>Instant Messaging</strong> – Supports real-time chat with text, emojis, and basic communication features.</li>
        </ul>
        <h3>3.3 Features for Administrators</h3>
        <ul>
        <li><strong>User Management</strong> –  Implements strict identity verification to prevent fake accounts.</li>
        <li><strong>Content Moderation</strong> –  Monitors platform content to maintain a safe and positive social environment.</li>
        <li><strong>Data Analytics</strong> –  Analyzes user behavior data to optimize the matching algorithm and improve user experience.</li>

        </ul>
      </section>

      <section>
      <h2 className="detail-section-title2">4. Technical Architecture</h2>
        <ul>
          <li><strong>Frontend:</strong> React + Tailwind CSS</li>
          <li><strong>Backend:</strong> Node.js + Firebase</li>
          <li><strong>Database:</strong> MySQL</li>
          <li><strong>Deployment:</strong> Vercel</li>
        </ul>
      </section>

      <section>
      <h2 className="detail-section-title2">5. Market analysis</h2>
        <h3>5.1 Competitor Analysis</h3>
        <table>
          <thead>
            <tr>
              <th>Competitor</th>
              <th>Strengths</th>
              <th>Weaknesses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tinder</td>
              <td>Large user base</td>
              <td>Not student-focused, inconsistent match quality</td>
            </tr>
            <tr>
              <td>Bumble</td>
              <td>Female-friendly environment</td>
              <td>Requires active participation</td>
            </tr>
            <tr>
              <td>Everytime</td>
              <td>University-based forum</td>
              <td>No structured matching features</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
      <h2 className="detail-section-title2">6. Business Model</h2>
        <ul>
          <li><strong>Campus Event Promotions</strong> – Partnering with universities and brands.</li>
          <li><strong>Premium Matching Services</strong> – VIP features for enhanced filtering.</li>
          <li><strong>Targeted Advertising</strong> – Ads related to student activities.</li>
        </ul>
      </section>
      
      <section>
      <h2 className="detail-section-title2">7. Future Plans</h2>
        <ul>
          <li><strong>Short-Term (1 year):</strong> Launch platform and onboard 1,000+ users.</li>
          <li><strong>Mid-Term (2-3 years):</strong> Expand to other Korean universities.</li>
          <li><strong>Long-Term (5 years):</strong> Become Korea’s leading university social network.</li>
        </ul>
      </section>

      <section>
      <h2 className="detail-section-title2">8. Conclusion</h2>
        <p>
          SKKouple is a social networking platform designed to meet the specific needs of SKKU students. 
          By offering <strong>precision matching, secure authentication, and an intuitive user experience</strong>, 
          we aim to become the go-to platform for campus socialization. Through continuous improvement, 
          enhanced privacy protection, and feature expansion, SKKouple aspires to be the leading university social network.
        </p>
        <p><strong>Vision:</strong> Making campus connections easier, safer, and more engaging!</p>
      </section>
      
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
        <Route path="/KoreaChinaRelations" element={<KoreaChinaRelations />} />
        <Route path="/BeerRecommendation" element={<BeerRecommendation />} />
        <Route path="/SocialPlatformDesign" element={<SocialPlatformDesign/>} />
        <Route path="/project4" element={<ProjectDetails title="购物平台设计" content="介绍电商界面的优化和交互设计方案。" />} />
        <Route path="/ConsumerSentimentAnalysis" element={<ConsumerSentimentAnalysis />} />
      </Routes>
    </Router>
  );
}


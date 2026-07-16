// roadmapData.js
// Contains the curriculum details and quiz questions for both career goal paths.

const ROADMAP_DATA = {
  "Machine Learning": {
    title: "Machine Learning Engineer Learning Path",
    totalWeeks: 16,
    modulesCount: 10,
    estimatedHours: 113,
    category: "Machine Learning",
    modules: [
      {
        week: 1,
        title: "Python Fundamentals",
        category: "Python",
        description: "Master the core Python syntax and programming concepts essential for data science.",
        estimatedHours: 8,
        topics: [
          { name: "Variables and Data Types", duration: "45min" },
          { name: "Conditional Statements", duration: "40min" },
          { name: "Loops and Iteration", duration: "50min" },
          { name: "Functions and Scope", duration: "60min" }
        ],
        quiz: [
          {
            question: "Which of the following is used to define a block of code in Python?",
            options: ["Curly braces {}", "Parentheses ()", "Indentation", "Square brackets []"],
            answer: 2
          },
          {
            question: "What is the output of print(type(1 / 2)) in Python 3?",
            options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "Syntax Error"],
            answer: 1
          },
          {
            question: "How do you start a 'for' loop that repeats a block of code 5 times?",
            options: ["for i in range(5):", "for (i=0; i<5; i++):", "for i in 5:", "for i = 1 to 5:"],
            answer: 0
          },
          {
            question: "What does the 'global' keyword do inside a Python function?",
            options: ["Declares that a variable is accessible from other files", "Allows modification of a variable defined outside the function scope", "Defines a read-only variable", "Makes the function run faster"],
            answer: 1
          },
          {
            question: "What is a correct syntax to return the first item in a list named 'fruits'?",
            options: ["fruits[1]", "fruits.first()", "fruits[0]", "fruits.get(0)"],
            answer: 2
          }
        ]
      },
      {
        week: 2,
        title: "Python for Data Science",
        category: "Python",
        description: "Learn NumPy, Pandas, and data manipulation techniques.",
        estimatedHours: 10,
        topics: [
          { name: "NumPy Arrays and Math", duration: "60min" },
          { name: "Pandas DataFrames", duration: "60min" },
          { name: "Data Cleaning (Nulls/Duplicates)", duration: "60min" },
          { name: "Data Aggregation & Groupby", duration: "60min" }
        ],
        quiz: [
          {
            question: "What is the primary data structure in NumPy?",
            options: ["List", "DataFrame", "ndarray", "Series"],
            answer: 2
          },
          {
            question: "In Pandas, which method is used to select rows and columns by their labels?",
            options: [".iloc", ".loc", ".select", ".query"],
            answer: 1
          },
          {
            question: "How do you drop columns containing missing values in a Pandas DataFrame 'df'?",
            options: ["df.dropna()", "df.dropna(axis=1)", "df.drop_nulls()", "df.clean(axis='columns')"],
            answer: 1
          },
          {
            question: "Which function is used to load a CSV file into a Pandas DataFrame?",
            options: ["pd.open_csv()", "pd.load_csv()", "pd.read_csv()", "pd.from_csv()"],
            answer: 2
          },
          {
            question: "What does df.groupby('category').mean() do?",
            options: ["Calculates the average of the whole dataframe", "Filters rows by 'category'", "Computes the mean values of numerical columns for each unique value in 'category'", "Sorts the dataframe by 'category' and finds the middle row"],
            answer: 2
          }
        ]
      },
      {
        week: 3,
        title: "Statistics Fundamentals",
        category: "Statistics",
        description: "Essential statistics concepts: mean, median, variance, distributions.",
        estimatedHours: 9,
        topics: [
          { name: "Descriptive Statistics", duration: "60min" },
          { name: "Probability Distributions", duration: "60min" },
          { name: "Hypothesis Testing & A/B Experiments", duration: "60min" }
        ],
        quiz: [
          {
            question: "Which measure of central tendency is most robust to extreme outliers?",
            options: ["Mean", "Median", "Mode", "Variance"],
            answer: 1
          },
          {
            question: "What does a high standard deviation indicate?",
            options: ["The data points are clustered closely around the mean", "The data points are spread out over a wider range of values", "The mean is negative", "The sample size is too small"],
            answer: 1
          },
          {
            question: "In hypothesis testing, what is the p-value?",
            options: ["The probability of committing a Type II error", "The probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is true", "The probability that the null hypothesis is correct", "The statistical power of the test"],
            answer: 1
          },
          {
            question: "Which distribution is symmetric, bell-shaped, and completely defined by its mean and standard deviation?",
            options: ["Normal Distribution", "Binomial Distribution", "Poisson Distribution", "Exponential Distribution"],
            answer: 0
          },
          {
            question: "If we reject the null hypothesis when it is actually true, what type of error have we committed?",
            options: ["Type I Error", "Type II Error", "Standard Error", "Confidence Error"],
            answer: 0
          }
        ]
      },
      {
        week: 4,
        title: "Probability Theory",
        category: "Statistics",
        description: "Probability distributions, Bayes theorem, and random variables.",
        estimatedHours: 10,
        topics: [
          { name: "Conditional Probability", duration: "60min" },
          { name: "Bayes Theorem", duration: "60min" },
          { name: "Random Variables & Expectations", duration: "60min" },
          { name: "Central Limit Theorem", duration: "60min" }
        ],
        quiz: [
          {
            question: "What does the Central Limit Theorem state about the sampling distribution of the sample mean?",
            options: ["It is always skewed", "It becomes approximately normally distributed as the sample size becomes large, regardless of the population distribution shape", "It has a variance equal to the population variance", "It is identical to the population distribution shape"],
            answer: 1
          },
          {
            question: "If events A and B are independent, what is P(A and B)?",
            options: ["P(A) + P(B)", "P(A) * P(B)", "P(A | B)", "P(A) / P(B)"],
            answer: 1
          },
          {
            question: "What does Bayes' Theorem help us calculate?",
            options: ["Joint probability", "Marginal probability", "Posterior probability based on prior knowledge and new evidence", "Continuous distributions"],
            answer: 2
          },
          {
            question: "What is the expected value of a fair six-sided die?",
            options: ["3.0", "3.5", "4.0", "2.5"],
            answer: 1
          },
          {
            question: "What is the difference between a PDF (Probability Density Function) and a CDF (Cumulative Distribution Function)?",
            options: ["PDF is for discrete variables, CDF is for continuous variables", "PDF gives the probability of a value being less than or equal to x; CDF gives the probability of a value being less than or equal to x", "PDF gives the probability density at a specific point x; CDF gives the probability of a value being less than or equal to x", "There is no difference"],
            answer: 2
          }
        ]
      },
      {
        week: 5,
        title: "Data Visualization",
        category: "Data Analysis",
        description: "Matplotlib, Seaborn, and storytelling with data.",
        estimatedHours: 8,
        topics: [
          { name: "Matplotlib Basics (Figures/Axes)", duration: "60min" },
          { name: "Seaborn Statistical Plots", duration: "60min" },
          { name: "Customizing Visuals & Palettes", duration: "60min" },
          { name: "Storytelling with Data", duration: "60min" }
        ],
        quiz: [
          {
            question: "In Matplotlib, what is the difference between a Figure and an Axes?",
            options: ["Figure is the coordinate system, Axes is the window", "Figure is the top-level container/canvas; Axes is the actual plot/coordinate area inside it", "They are identical terms", "Figure holds 3D plots only"],
            answer: 1
          },
          {
            question: "Which Seaborn function is best suited to display the distribution of a single numerical variable showing its density estimate?",
            options: ["sns.scatterplot()", "sns.heatmap()", "sns.kdeplot()", "sns.barplot()"],
            answer: 2
          },
          {
            question: "To visualize the correlation matrix between multiple numeric columns, which plot is most appropriate?",
            options: ["Line chart", "Stacked bar chart", "Heatmap", "Pie chart"],
            answer: 2
          },
          {
            question: "Which plot type is best for showing a trend over time?",
            options: ["Scatter plot", "Bar chart", "Line chart", "Histogram"],
            answer: 2
          },
          {
            question: "What is the purpose of a Seaborn 'hue' parameter?",
            options: ["It sets the brightness of the plot background", "It colors data points based on a categorical variable, adding a dimension to the plot", "It sets the border color of the axes", "It represents the error bar margin"],
            answer: 1
          }
        ]
      },
      {
        week: 6,
        title: "Machine Learning Fundamentals",
        category: "Machine Learning",
        description: "Supervised vs unsupervised learning, bias-variance tradeoff, model evaluation.",
        estimatedHours: 12,
        topics: [
          { name: "ML Workflow and Lifecycle", duration: "60min" },
          { name: "Overfitting and Underfitting", duration: "60min" },
          { name: "Evaluation Metrics (Recall/Precision)", duration: "60min" }
        ],
        quiz: [
          {
            question: "Which of the following is a classic example of Unsupervised Learning?",
            options: ["Predicting house prices", "Clustering customers based on purchasing history", "Spam email classification", "Self-driving car lane detection"],
            answer: 1
          },
          {
            question: "A model that performs extremely well on the training data but poorly on unseen test data is suffering from:",
            options: ["High Bias (Underfitting)", "High Variance (Overfitting)", "Low Variance", "Class Imbalance"],
            answer: 1
          },
          {
            question: "Which metric is most critical for a medical diagnosis model where missing a disease (false negative) is catastrophic?",
            options: ["Precision", "Recall (Sensitivity)", "Accuracy", "Specificity"],
            answer: 1
          },
          {
            question: "What is the main purpose of K-Fold Cross-Validation?",
            options: ["To speed up training time", "To evaluate model performance more reliably by testing on multiple split subsets of the data", "To increase the size of the dataset", "To visualize multi-dimensional decision boundaries"],
            answer: 1
          },
          {
            question: "What is the F1-Score?",
            options: ["The arithmetic mean of Precision and Recall", "The geometric mean of Precision and Recall", "The harmonic mean of Precision and Recall", "The difference between Precision and Recall"],
            answer: 2
          }
        ]
      },
      {
        week: 7,
        title: "Supervised Learning Algorithms",
        category: "Machine Learning",
        description: "Linear regression, logistic regression, decision trees, SVM.",
        estimatedHours: 14,
        topics: [
          { name: "Linear Regression & Gradient Descent", duration: "60min" },
          { name: "Logistic Regression & Classification", duration: "60min" },
          { name: "Decision Trees & Information Gain", duration: "60min" },
          { name: "Support Vector Machines (SVM)", duration: "60min" }
        ],
        quiz: [
          {
            question: "Which cost function is typically minimized in Linear Regression?",
            options: ["Cross-Entropy", "Mean Absolute Percentage Error", "Mean Squared Error (MSE)", "Hinge Loss"],
            answer: 2
          },
          {
            question: "How does Logistic Regression map output values to probabilities between 0 and 1?",
            options: ["Using a linear function", "Using the Sigmoid (Logistic) function", "Using a step function", "Using a logarithmic scaler"],
            answer: 1
          },
          {
            question: "What criterion is commonly used to determine splits in a Decision Tree classifier?",
            options: ["R-squared", "Gini Impurity or Entropy", "Mean Squared Error", "Cosine Similarity"],
            answer: 1
          },
          {
            question: "In Support Vector Machines (SVM), what are 'support vectors'?",
            options: ["Vectors that represent the class averages", "The data points closest to the decision boundary (hyperplane) that define the margin width", "The orthogonal projections of outliers", "The hyperplanes that divide the data classes"],
            answer: 1
          },
          {
            question: "What is the 'kernel trick' in SVM?",
            options: ["A way to filter out duplicate rows", "A method to map low-dimensional input data into a higher-dimensional space to make it linearly separable", "A way to accelerate training by dropping variables", "A regularizer that penalizes large weights"],
            answer: 1
          }
        ]
      },
      {
        week: 8,
        title: "Ensemble Methods & Feature Engineering",
        category: "Machine Learning",
        description: "Random Forest, XGBoost, feature selection, and engineering.",
        estimatedHours: 12,
        topics: [
          { name: "Feature Scaling & Encoding", duration: "60min" },
          { name: "Missing Value Imputation", duration: "60min" },
          { name: "Ensemble Learning (Bagging/Boosting)", duration: "60min" },
          { name: "Hyperparameter Tuning (GridSearch)", duration: "60min" }
        ],
        quiz: [
          {
            question: "What is the key difference between Bagging and Boosting?",
            options: ["Bagging trains models sequentially; Boosting trains them in parallel", "Bagging trains models independently in parallel; Boosting trains models sequentially where each model corrects previous errors", "Bagging is for regression; Boosting is for classification", "Bagging reduces bias; Boosting only reduces variance"],
            answer: 1
          },
          {
            question: "Which of the following algorithms is a representative of Bagging?",
            options: ["Gradient Boosting Machine (GBM)", "XGBoost", "Random Forest", "AdaBoost"],
            answer: 2
          },
          {
            question: "When should you prefer One-Hot Encoding over Label (Ordinal) Encoding?",
            options: ["When the categorical feature has a clear natural ordering (e.g., Low, Medium, High)", "When the categorical feature has no nominal ordering (e.g., Red, Green, Blue) and you want to avoid implying numerical relationships", "When the category column has over 10,000 unique values", "When training a simple linear regression model"],
            answer: 1
          },
          {
            question: "What is the difference between GridSearchCV and RandomizedSearchCV?",
            options: ["GridSearchCV evaluates a random subset of parameters; RandomizedSearchCV evaluates all combinations", "GridSearchCV evaluates all specified parameter combinations exhaustively; RandomizedSearchCV samples a fixed number of combinations randomly from distributions", "GridSearchCV is faster than RandomizedSearchCV", "GridSearchCV only works for random forests"],
            answer: 1
          },
          {
            question: "What is the benefit of L1 Regularization (Lasso) over L2 Regularization (Ridge)?",
            options: ["L1 always yields higher accuracy", "L1 can shrink some coefficients to exactly zero, performing automatic feature selection", "L1 is computationally cheaper to optimize", "L1 does not penalize large weights"],
            answer: 1
          }
        ]
      },
      {
        week: 9,
        title: "Deep Learning Fundamentals",
        category: "Deep Learning",
        description: "Neural networks, backpropagation, activation functions, TensorFlow basics.",
        estimatedHours: 16,
        topics: [
          { name: "Artificial Neural Networks (ANNs)", duration: "60min" },
          { name: "Backpropagation & Gradient Descent", duration: "60min" },
          { name: "Convolutional Neural Networks (CNNs)", duration: "60min" },
          { name: "Intro to TensorFlow and Keras", duration: "60min" }
        ],
        quiz: [
          {
            question: "Which activation function is defined as f(x) = max(0, x) and is widely used to prevent vanishing gradient problems?",
            options: ["Sigmoid", "Tanh", "ReLU (Rectified Linear Unit)", "Softmax"],
            answer: 2
          },
          {
            question: "What is the purpose of backpropagation in training neural networks?",
            options: ["To initialize the weights of the network randomly", "To compute gradients of the loss function with respect to weights, propagating error backward to update weights", "To compress the model after training", "To map inputs directly to final outputs in a single forward pass"],
            answer: 1
          },
          {
            question: "Which layer type in a Convolutional Neural Network (CNN) is primarily used to reduce the spatial dimensions (width and height) of feature maps?",
            options: ["Convolutional Layer", "Dense Layer", "Pooling Layer (e.g. MaxPooling)", "Dropout Layer"],
            answer: 2
          },
          {
            question: "What does 'dropout' do during neural network training?",
            options: ["It drops rows with missing data from the training set", "It randomly deactivates a percentage of neurons in a layer at each step to prevent overfitting", "It stops training early if validation loss increases", "It divides learning rate by a factor of 10"],
            answer: 1
          },
          {
            question: "What optimizer is commonly used in deep learning and adaptively adjusts learning rates for different parameters?",
            options: ["Stochastic Gradient Descent (SGD)", "Adam", "Hessian Optimizer", "Newton-Raphson"],
            answer: 1
          }
        ]
      },
      {
        week: 10,
        title: "Model Deployment & MLOps",
        category: "MLOps",
        description: "Serving ML models with FastAPI, Docker, CI/CD for ML.",
        estimatedHours: 14,
        topics: [
          { name: "Model Serialization (Pickle/Joblib)", duration: "60min" },
          { name: "FastAPI Model Serving", duration: "60min" },
          { name: "Containerization with Docker", duration: "60min" },
          { name: "MLOps Pipeline Basics", duration: "60min" }
        ],
        quiz: [
          {
            question: "Which Python libraries are commonly used to serialize (save) a trained scikit-learn model to disk?",
            options: ["pandas and numpy", "pickle and joblib", "json and csv", "requests and beautifulsoup"],
            answer: 1
          },
          {
            question: "What is Docker's primary benefit in ML deployment?",
            options: ["It automates hyperparameter tuning", "It packages the model, dependencies, and code into an isolated container, ensuring it runs identically on any environment", "It speeds up training using cloud GPUs", "It acts as a database storage engine"],
            answer: 2
          },
          {
            question: "In a Dockerfile, which instruction specifies the command that runs when the container starts?",
            options: ["RUN", "EXPOSE", "CMD", "FROM"],
            answer: 2
          },
          {
            question: "What is FastAPI used for in the context of Machine Learning?",
            options: ["To clean and wrangle datasets", "To expose model prediction capabilities as RESTful web service endpoints (APIs)", "To visualize training metrics", "To store high-dimensional vectors"],
            answer: 1
          },
          {
            question: "What does the term 'Model Drift' refer to in MLOps production monitoring?",
            options: ["The physical relocation of servers hosting the model", "The degradation of model predictive performance over time due to changes in real-world data distributions", "The process of copying weights from one model to another", "An error in gradient descent where weights grow infinitely"],
            answer: 1
          }
        ]
      }
    ]
  },
  "Full Stack Developer": {
    title: "Full Stack Developer Learning Path",
    totalWeeks: 10,
    modulesCount: 10,
    estimatedHours: 105,
    category: "Full Stack Developer",
    modules: [
      {
        week: 1,
        title: "Frontend Basics (HTML & CSS)",
        category: "HTML & CSS",
        description: "Learn HTML5 structure, semantic elements, CSS3 selectors, box model, and layout techniques.",
        estimatedHours: 8,
        topics: [
          { name: "HTML5 Semantic Markup", duration: "45min" },
          { name: "CSS Box Model & Flexbox", duration: "45min" },
          { name: "CSS Grid Layout", duration: "45min" },
          { name: "Responsive Web Design & Media Queries", duration: "60min" }
        ],
        quiz: [
          {
            question: "Which of the following is a semantic HTML5 element?",
            options: ["<div>", "<span>", "<section>", "<font>"],
            answer: 2
          },
          {
            question: "In the CSS Box Model, what sits between the padding and the margin?",
            options: ["Content", "Border", "Outline", "Width"],
            answer: 1
          },
          {
            question: "Which property is used in Flexbox to align items along the primary axis?",
            options: ["align-items", "justify-content", "align-content", "flex-direction"],
            answer: 1
          },
          {
            question: "What CSS property ensures padding and border sizes are included in an element's total width and height?",
            options: ["box-sizing: border-box;", "box-sizing: content-box;", "display: block;", "margin: auto;"],
            answer: 0
          },
          {
            question: "What CSS feature allows you to apply styling rules based on device properties like screen width?",
            options: ["CSS Variables", "Keyframes", "Media Queries", "Pseudo-classes"],
            answer: 2
          }
        ]
      },
      {
        week: 2,
        title: "Modern JavaScript (ES6+)",
        category: "JavaScript",
        description: "Master asynchronous JavaScript, DOM manipulation, promises, fetch API, and modern syntax.",
        estimatedHours: 10,
        topics: [
          { name: "Variables, Scope & Arrow Functions", duration: "45min" },
          { name: "Array Methods & Destructuring", duration: "45min" },
          { name: "Promises and Async/Await", duration: "60min" },
          { name: "DOM Manipulation & Event Handling", duration: "60min" }
        ],
        quiz: [
          {
            question: "Which statement correctly describes the scoping differences between 'let' and 'var'?",
            options: ["'let' is function-scoped; 'var' is block-scoped", "'let' is block-scoped; 'var' is function-scoped", "Both are block-scoped", "Both are global-scoped only"],
            answer: 1
          },
          {
            question: "Which array method creates a new array with all elements that pass a test implemented by the provided function?",
            options: ["map()", "filter()", "forEach()", "reduce()"],
            answer: 1
          },
          {
            question: "What does a Promise represent in JavaScript?",
            options: ["An immutable data list", "The eventual completion (or failure) of an asynchronous operation and its resulting value", "A synchronous loop construct", "A class instantiation constructor"],
            answer: 1
          },
          {
            question: "How do you catch errors when using 'async/await' in JavaScript?",
            options: ["Using a try...catch block", "Using .catch() attached to the async keyword", "Using an if...else condition", "JavaScript automatically ignores async errors"],
            answer: 0
          },
          {
            question: "What is Event Delegation in JavaScript DOM manipulation?",
            options: ["Passing an event handler function to a database", "Adding a single event listener to a parent element rather than multiple listeners to individual child elements", "Stopping the default behavior of an element", "Triggering events programmatically"],
            answer: 1
          }
        ]
      },
      {
        week: 3,
        title: "Git & Version Control",
        category: "DevOps Basics",
        description: "Learn branching, merging, pull requests, resolving conflicts, and collaboration via GitHub.",
        estimatedHours: 6,
        topics: [
          { name: "Git Init, Commit, & Log", duration: "45min" },
          { name: "Branching & Merging", duration: "45min" },
          { name: "GitHub & Collaborative Workflows", duration: "60min" }
        ],
        quiz: [
          {
            question: "Which command moves changes from the working directory to the staging area in Git?",
            options: ["git commit", "git push", "git add", "git status"],
            answer: 2
          },
          {
            question: "What command is used to create a new branch and switch to it immediately?",
            options: ["git branch [branch-name]", "git checkout -b [branch-name]", "git merge [branch-name]", "git switch -m [branch-name]"],
            answer: 1
          },
          {
            question: "What is a 'merge conflict' in Git?",
            options: ["An argument between developers on GitHub", "A situation where changes in different branches modify the exact same line of code, and Git cannot automatically decide which version to keep", "A failing compilation check in a pull request", "A network error during git push"],
            answer: 1
          },
          {
            question: "What does 'git clone' do?",
            options: ["Deletes a local project folder", "Creates a local copy of a remote Git repository", "Combines two local branches", "Pushes local commits to GitHub"],
            answer: 1
          },
          {
            question: "In collaborative workflows, what is a 'Pull Request'?",
            options: ["A command to pull files to your desktop", "A submission to a repository proposing changes that can be reviewed, discussed, and merged into a target branch", "A bug report ticket", "An alert that forces other developers to pause their work"],
            answer: 2
          }
        ]
      },
      {
        week: 4,
        title: "Frontend Framework (React Basics)",
        category: "React",
        description: "Understand components, props, state, JSX, conditional rendering, and list rendering.",
        estimatedHours: 12,
        topics: [
          { name: "Introduction to JSX & Components", duration: "60min" },
          { name: "State management with useState", duration: "60min" },
          { name: "Props and Component Communication", duration: "45min" },
          { name: "Handling Events and Forms", duration: "60min" }
        ],
        quiz: [
          {
            question: "Which statement is true about JSX?",
            options: ["It is raw HTML interpreted directly by web browsers", "It is a syntax extension to JavaScript that looks like HTML and compiles to React.createElement calls", "It is a database query language", "It requires writing inline CSS for every tag"],
            answer: 1
          },
          {
            question: "What is the primary difference between 'state' and 'props' in React?",
            options: ["State is passed from parent components; props are private and managed within the component", "Props are passed down from parent components; state is internal and managed locally within the component", "Props can be modified by the component; state is read-only", "There is no difference"],
            answer: 1
          },
          {
            question: "How do you trigger a component re-render in React?",
            options: ["By modifying a local variable directly", "By updating the component's state using its state-updater function (e.g. from useState)", "By calling window.location.reload()", "By writing custom CSS classes"],
            answer: 1
          },
          {
            question: "In React lists, why is the 'key' prop necessary when rendering elements dynamically?",
            options: ["To style elements individually", "To help React identify which items have changed, been added, or been removed, optimizing the Virtual DOM reconciliation", "To encrypt list item content", "To bind click handlers to lists"],
            answer: 1
          },
          {
            question: "Which hook is used to introduce state variables into a React functional component?",
            options: ["useEffect", "useContext", "useState", "useReducer"],
            answer: 2
          }
        ]
      },
      {
        week: 5,
        title: "Advanced React & State",
        category: "React",
        description: "Explore hooks (useEffect, useContext), React Router, and basic global state.",
        estimatedHours: 10,
        topics: [
          { name: "Side Effects with useEffect", duration: "60min" },
          { name: "Client-side Routing with React Router", duration: "60min" },
          { name: "Context API for Global State", duration: "45min" },
          { name: "Performance Optimization Basics", duration: "45min" }
        ],
        quiz: [
          {
            question: "In useEffect(callback, [dependencies]), what happens if the dependency array is left completely empty ([])?",
            options: ["The effect callback runs after every single render", "The effect callback runs exactly once, after the initial mount of the component", "The effect callback never runs", "The component throws a compile error"],
            answer: 1
          },
          {
            question: "What is the Context API used for in React?",
            options: ["To query a database", "To pass data through the component tree without having to pass props down manually at every level ('prop drilling')", "To define page routes", "To handle asynchronous server requests"],
            answer: 1
          },
          {
            question: "In React Router, which element is used to link to different routes instead of standard 'a' tags, preventing full page reloads?",
            options: ["<NavLink>", "<Link>", "<Route>", "<Anchor>"],
            answer: 1
          },
          {
            question: "How do you perform cleanup actions (e.g., unsubscribing from a listener) inside the useEffect hook?",
            options: ["By calling effect.destroy()", "By returning a function from the effect callback", "By using a second callback argument", "By calling clearTimeout manually in the component body"],
            answer: 1
          },
          {
            question: "What is the purpose of React.memo?",
            options: ["To store data in browser memory", "To memoize functional components, preventing unnecessary re-renders when props haven't changed", "To fetch data from backend servers", "To create a global store like Redux"],
            answer: 1
          }
        ]
      },
      {
        week: 6,
        title: "Backend Fundamentals (Node.js & Express)",
        category: "Backend",
        description: "Learn to build server-side applications, route handlers, middleware, and RESTful APIs.",
        estimatedHours: 12,
        topics: [
          { name: "Node.js Runtime & Event Loop", duration: "60min" },
          { name: "Creating Servers with Express", duration: "45min" },
          { name: "Request & Response Headers/Body", duration: "45min" },
          { name: "Express Middleware Architecture", duration: "60min" }
        ],
        quiz: [
          {
            question: "What is Node.js?",
            options: ["A JavaScript library for UI elements", "An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser", "A SQL database engine", "A CSS preprocessor"],
            answer: 1
          },
          {
            question: "In Express, what is 'middleware'?",
            options: ["An interface between the client and router in React", "Functions that have access to the request object (req), response object (res), and the next middleware function in the application’s request-response cycle", "A system for translating CSS files", "A database server"],
            answer: 1
          },
          {
            question: "Which function signature correctly represents an Express middleware function?",
            options: ["function(req, res)", "function(req, res, next)", "function(next)", "function(error, req)"],
            answer: 1
          },
          {
            question: "How do you retrieve a JSON payload sent in a POST request in an Express route handler?",
            options: ["req.body", "req.query", "req.params", "req.headers.payload"],
            answer: 0
          },
          {
            question: "Which HTTP method is best suited to partially update an existing resource?",
            options: ["GET", "POST", "PATCH", "DELETE"],
            answer: 2
          }
        ]
      },
      {
        week: 7,
        title: "Databases & ORMs (SQL & PostgreSQL)",
        category: "Databases",
        description: "Understand relational database design, schemas, tables, relationships, joins, and SQL queries.",
        estimatedHours: 10,
        topics: [
          { name: "Relational Database Concepts", duration: "45min" },
          { name: "SQL DDL & DML Commands", duration: "60min" },
          { name: "Joins and Relationships (1:N, N:M)", duration: "60min" },
          { name: "Node-Postgres Integration", duration: "60min" }
        ],
        quiz: [
          {
            question: "In a relational database, what is a Foreign Key?",
            options: ["A key that is encrypted", "A column or group of columns in a table that provides a link between data in two tables, referencing a Primary Key in another table", "A key generated by external third-party software", "The key used to unlock database records"],
            answer: 1
          },
          {
            question: "Which SQL JOIN returns all rows from the left table, and the matched rows from the right table, filling with NULL values on the right if there is no match?",
            options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
            answer: 1
          },
          {
            question: "What does the ACID acronym stand for in database transaction management?",
            options: ["Accuracy, Consistency, Isolation, Durability", "Atomicity, Consistency, Isolation, Durability", "Atomicity, Concurrency, Integration, Deletion", "Authority, Control, Integrity, Distribution"],
            answer: 1
          },
          {
            question: "Which SQL clause is used to filter groups returned by a GROUP BY clause, analogous to how WHERE filters rows?",
            options: ["WHERE", "HAVING", "GROUP WHERE", "FILTER BY"],
            answer: 1
          },
          {
            question: "In Node.js, what is the role of an ORM (Object-Relational Mapping) tool like Sequelize or Prisma?",
            options: ["To convert JSON strings into binary arrays", "To map relational database tables to JavaScript objects, allowing developers to query databases using JS methods instead of raw SQL strings", "To encrypt database traffic", "To serve React pages from Node"],
            answer: 1
          }
        ]
      },
      {
        week: 8,
        title: "NoSQL Databases (MongoDB & Mongoose)",
        category: "Databases",
        description: "Explore document-based databases, CRUD operations, schemas, indexing, and validation.",
        estimatedHours: 9,
        topics: [
          { name: "Document Model vs Relational", duration: "45min" },
          { name: "MongoDB CRUD & Query Operators", duration: "60min" },
          { name: "Schema Validation with Mongoose", duration: "60min" }
        ],
        quiz: [
          {
            question: "How are records stored in MongoDB?",
            options: ["As rows and columns in tables", "As JSON-like BSON (Binary JSON) documents", "As comma-separated values in text files", "As nodes in a graph structure"],
            answer: 1
          },
          {
            question: "In MongoDB, which query operator is used to search for values greater than a specific amount?",
            options: ["$gt", "$gte", "$max", "$high"],
            answer: 0
          },
          {
            question: "What is Mongoose in the Node.js/MongoDB stack?",
            options: ["A frontend router", "An Object Data Modeling (ODM) library for MongoDB and Node.js that provides a straight-forward, schema-based solution to model application data", "A web server package", "A database monitoring service"],
            answer: 1
          },
          {
            question: "Which Mongoose method retrieves all documents from a collection matching a query?",
            options: ["Model.findAll()", "Model.get()", "Model.find()", "Model.retrieve()"],
            answer: 2
          },
          {
            question: "What does indexing do for MongoDB collections?",
            options: ["It compresses documents to save disk space", "It improves database query performance by allowing MongoDB to scan fewer documents when fulfilling queries", "It prevents duplicate entries", "It serializes database models to JSON"],
            answer: 1
          }
        ]
      },
      {
        week: 9,
        title: "API Development & Security (JWT)",
        category: "Security",
        description: "Secure APIs with JWT authentication, hashing passwords with bcrypt, and session management.",
        estimatedHours: 14,
        topics: [
          { name: "Password Hashing with Bcrypt", duration: "45min" },
          { name: "JSON Web Tokens (JWT) Flow", duration: "60min" },
          { name: "Authentication Middleware", duration: "60min" },
          { name: "CORS, Security Headers & Rate Limiting", duration: "60min" }
        ],
        quiz: [
          {
            question: "Why should passwords never be stored in plain text in a database?",
            options: ["It takes up too much database space", "It makes it trivial for attackers who compromise the database to access all user accounts directly", "Plain text cannot be queried using SQL", "It causes database performance degradation"],
            answer: 1
          },
          {
            question: "What are the three parts of a JSON Web Token (JWT), separated by dots?",
            options: ["Username, Password, Secret", "Header, Payload, Signature", "Client, Server, Key", "ID, Scopes, Algorithm"],
            answer: 1
          },
          {
            question: "Which HTTP header is typically used to send a JWT token from client to server for authentication?",
            options: ["Cookie", "Authentication", "Authorization (e.g. Bearer <token>)", "Token"],
            answer: 2
          },
          {
            question: "What does CORS (Cross-Origin Resource Sharing) do?",
            options: ["It speeds up script compilation", "It is a security mechanism that allows or restricts web applications running at one origin from requesting resources from a different origin", "It encrypts network requests using SSL", "It serves frontend files dynamically"],
            answer: 1
          },
          {
            question: "What is the purpose of 'salting' in password hashing with bcrypt?",
            options: ["To speed up hashing speed", "To add unique random data to the password input before hashing, protecting against pre-computed table attacks (rainbow tables)", "To truncate long passwords", "To check password length bounds"],
            answer: 1
          }
        ]
      },
      {
        week: 10,
        title: "Deployment & DevOps Basics",
        category: "DevOps",
        description: "Deploy frontend and backend apps to Vercel/Render, configure environment variables, and use Docker.",
        estimatedHours: 12,
        topics: [
          { name: "Environment Variable Configuration (.env)", duration: "45min" },
          { name: "Frontend & Backend Deployment (Vercel/Render)", duration: "60min" },
          { name: "Docker Containerization for Full Stack", duration: "60min" },
          { name: "Continuous Integration (CI/CD) Intro", duration: "45min" }
        ],
        quiz: [
          {
            question: "Why should sensitive database passwords or API keys be placed in environment variables (.env files) rather than hardcoded in files?",
            options: ["Environment variables load faster", "It prevents sensitive credentials from being committed to public Git repositories, reducing security leaks", "It is required by the JavaScript language specifications", "It reduces code file sizes"],
            answer: 1
          },
          {
            question: "Which of the following is an advantage of containerizing a Full Stack application with Docker?",
            options: ["It automatically writes test cases", "It ensures the app runs in the exact same environment locally, in staging, and in production, resolving 'works on my machine' issues", "It converts Node.js into a multi-threaded execution language", "It registers domain names automatically"],
            answer: 1
          },
          {
            question: "In Docker, what is the difference between an Image and a Container?",
            options: ["An Image is a running instance of a Container", "An Image is a read-only template/blueprint; a Container is a runnable, isolated instance of that image", "They are identical terms", "Images are only for frontend files; containers are for backend databases"],
            answer: 1
          },
          {
            question: "What is the goal of Continuous Integration (CI)?",
            options: ["To buy domain names", "To automatically build, test, and integrate code changes from multiple contributors into a shared repository as frequently as possible", "To keep databases running forever", "To write frontend CSS layouts"],
            answer: 1
          },
          {
            question: "In Docker port mapping '8080:3000', which port represents the host port visible externally?",
            options: ["3000", "8080", "Both are host ports", "Neither; this is a syntax error"],
            answer: 1
          }
        ]
      }
    ]
  }
};

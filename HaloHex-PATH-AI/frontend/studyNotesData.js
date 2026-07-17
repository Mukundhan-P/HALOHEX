// studyNotesData.js
// A repository of rich study notes, practical code snippets, and key takeaways for all roadmap topics.

const STUDY_NOTES_DATA = {
  // ================= MACHINE LEARNING PATH =================
  "Variables and Data Types": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>Python is a dynamically typed programming language. Variables act as named containers that point to memory locations containing values, and you don't need to declare their type beforehand.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code># Assigning different types of data
age = 25                  # Integer
gpa = 3.82                # Float
name = "Ananya"           # String
is_learning = True        # Boolean

# Checking the data types dynamically
print(type(age))          # &lt;class 'int'&gt;
print(type(gpa))          # &lt;class 'float'&gt;
print(type(name))         # &lt;class 'str'&gt;
print(type(is_learning))  # &lt;class 'bool'&gt;</code></pre>

      <h5>Key Concepts</h5>
      <ul>
        <li><strong>Mutable Types:</strong> Values can be modified in place (e.g., <code>list</code>, <code>dict</code>, <code>set</code>).</li>
        <li><strong>Immutable Types:</strong> Values cannot be modified once created (e.g., <code>int</code>, <code>float</code>, <code>str</code>, <code>tuple</code>).</li>
        <li><strong>Dynamic Typing:</strong> Python automatically infers types at runtime.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Pay close attention to mutability! Modifying a mutable object will change all references pointing to that same object.
      </div>
    `
  },
  "Conditional Statements": {
    duration: "40min",
    content: `
      <h5>Overview</h5>
      <p>Conditional statements control the flow of execution in Python based on evaluation of boolean expressions using <code>if</code>, <code>elif</code>, and <code>else</code>.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Grade: C")</code></pre>

      <h5>Key Concepts</h5>
      <ul>
        <li><strong>Indentation:</strong> Python uses 4 spaces indentation instead of curly braces to define code blocks.</li>
        <li><strong>Logical Operators:</strong> Combine conditions using <code>and</code>, <code>or</code>, and <code>not</code>.</li>
        <li><strong>Comparison Operators:</strong> <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Conditions are evaluated from top to bottom. Once a condition is met, subsequent branches are ignored.
      </div>
    `
  },
  "Loops and Iteration": {
    duration: "50min",
    content: `
      <h5>Overview</h5>
      <p>Loops are used to execute a block of code repeatedly. Python provides <code>for</code> loops (for iterating over sequences) and <code>while</code> loops (conditional execution).</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code># Iterating through a range
for i in range(3):
    print(f"Index: {i}")

# Iterating through a list
fruits = ["apple", "banana"]
for fruit in fruits:
    print(fruit)</code></pre>

      <h5>Key Concepts</h5>
      <ul>
        <li><strong>Range Function:</strong> <code>range(start, stop, step)</code> generates a sequence of numbers.</li>
        <li><strong>Break:</strong> Terminates the loop prematurely.</li>
        <li><strong>Continue:</strong> Skips the current iteration and goes to the next.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use <code>for</code> loops for known sequences and <code>while</code> loops when iterating until a dynamic condition becomes false.
      </div>
    `
  },
  "Functions and Scope": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Functions are reusable blocks of code defined with the <code>def</code> keyword. Python scopes determine variable visibility (Local vs. Enclosing vs. Global vs. Built-in).</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>x = 10 # Global variable

def square_and_add(num):
    y = 5 # Local variable
    return (num ** 2) + x + y

print(square_and_add(3)) # Output: 9 + 10 + 5 = 24</code></pre>

      <h5>Key Concepts</h5>
      <ul>
        <li><strong>Arguments:</strong> Functions accept positional, keyword, and default parameters.</li>
        <li><strong>Global Keyword:</strong> Allows modifying a global variable inside a local scope.</li>
        <li><strong>Lambda Functions:</strong> Small anonymous single-line functions.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Keep functions focused on a single responsibility. Follow the LEGB rule for variable resolution scope.
      </div>
    `
  },
  "NumPy Arrays and Math": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>NumPy is the fundamental package for scientific computing in Python. It provides high-performance multidimensional array objects (ndarray) and mathematical operations.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>import numpy as np

# Create arrays
arr = np.array([1, 2, 3])
print(arr * 2)  # Element-wise operations: [2, 4, 6]

# Multi-dimensional arrays
matrix = np.array([[1, 2], [3, 4]])
print(matrix.shape)  # Output: (2, 2)</code></pre>

      <h5>Key Concepts</h5>
      <ul>
        <li><strong>Vectorization:</strong> Fast, parallelized arithmetic operations without slow explicit python loops.</li>
        <li><strong>Broadcasting:</strong> Performing arithmetic operations on arrays of different shapes.</li>
        <li><strong>Indexing & Slicing:</strong> Extracting portions of arrays using matrix indices.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> NumPy arrays are homogeneous (all elements must be the same data type), making math calculations exceptionally fast.
      </div>
    `
  },
  "Pandas DataFrames": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Pandas is a data analysis library that introduces <code>Series</code> (1D) and <code>DataFrames</code> (2D relational tabular data structure) with indexing tools.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>import pandas as pd

# Creating a DataFrame
data = {'Name': ['A', 'B'], 'Age': [20, 24]}
df = pd.DataFrame(data)

# Accessing column
print(df['Age'])

# Label-based slicing
print(df.loc[0, 'Name'])</code></pre>

      <h5>Key Concepts</h5>
      <ul>
        <li><strong>loc vs. iloc:</strong> <code>.loc</code> is label-based indexer; <code>.iloc</code> is integer position-based.</li>
        <li><strong>Filtering:</strong> Conditional row selection: <code>df[df['Age'] &gt; 21]</code>.</li>
        <li><strong>Data inspection:</strong> <code>df.info()</code>, <code>df.describe()</code>, <code>df.head()</code>.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Think of a DataFrame as a highly programmatic Excel sheet that is incredibly fast and easily customisable.
      </div>
    `
  },
  "Data Cleaning (Nulls/Duplicates)": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Data cleaning involves handling missing data points (NaNs), formatting inconsistencies, and duplicates in dataset inputs before feeding them to models.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>import pandas as pd

# Handle missing values
df = df.dropna()                # Drop rows with any null values
df['Age'] = df['Age'].fillna(0) # Fill nulls with custom values

# Duplicates
df = df.drop_duplicates()       # Drop identical rows</code></pre>

      <h5>Key Concepts</h5>
      <ul>
        <li><strong>Detecting missing data:</strong> Use <code>df.isnull().sum()</code>.</li>
        <li><strong>Imputation:</strong> Filling missing data with statistical measures like Mean, Median, or Mode.</li>
        <li><strong>Dropping:</strong> Deleting incomplete features or columns.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Garbage in, Garbage out! Clean data is more important than tuning complex algorithms.
      </div>
    `
  },
  "Data Aggregation & Groupby": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Data aggregation summarizes data by groups. The split-apply-combine workflow in Pandas is achieved using <code>groupby()</code>.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code># Grouping by a column and taking the average of numerical fields
average_by_dept = df.groupby('Department')['Salary'].mean()

# Multiple aggregation metrics
summary = df.groupby('City').agg({'Age': 'mean', 'Salary': 'max'})</code></pre>

      <h5>Key Concepts</h5>
      <ul>
        <li><strong>Split-Apply-Combine:</strong> Split dataset, apply math formula to each group, combine back.</li>
        <li><strong>Pivot Tables:</strong> Pivot DataFrame for cross-tabulation summaries.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Groupby lets you discover trends and metrics inside subsets of your data categories.
      </div>
    `
  },
  "Descriptive Statistics": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Descriptive statistics summarize the central tendency, dispersion, and shape of a dataset's distribution without making inferences.</p>
      
      <h5>Key Formulas & metrics</h5>
      <ul>
        <li><strong>Mean:</strong> The average value: <code>sum(x)/n</code>.</li>
        <li><strong>Median:</strong> The middle score when data is ordered (robust to outliers).</li>
        <li><strong>Variance & Std Dev:</strong> Measure dispersion or how spread out values are around the mean.</li>
        <li><strong>Percentiles & Quartiles:</strong> Spread thresholds (e.g. Q1, Q2/Median, Q3).</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Median is always safer than the Mean when your data contains extreme outliers (e.g., house prices or income distribution).
      </div>
    `
  },
  "Probability Distributions": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>A probability distribution is a mathematical function that models the likelihood of obtaining the possible values for a random variable.</p>
      
      <h5>Types of Distributions</h5>
      <ul>
        <li><strong>Normal (Gaussian):</strong> Symmetrical bell-shaped curve defined by mean and standard deviation.</li>
        <li><strong>Binomial:</strong> Discrete distribution of successes in a sequence of independent yes/no trials.</li>
        <li><strong>Uniform:</strong> All outcomes have equal probability.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Most natural phenomena follow a Normal Distribution, which forms the basis for many machine learning assumptions.
      </div>
    `
  },
  "Hypothesis Testing & A/B Experiments": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Hypothesis testing determines if there is statistical evidence to support a claim about a population parameter based on sample data.</p>
      
      <h5>Key Terms</h5>
      <ul>
        <li><strong>Null Hypothesis (H0):</strong> Assumes no effect or change occurred.</li>
        <li><strong>Alternative Hypothesis (H1):</strong> Assumes an effect did occur.</li>
        <li><strong>P-value:</strong> Probability of obtaining test results at least as extreme as observed, assuming H0 is true.</li>
        <li><strong>Type I Error:</strong> Rejecting H0 when it's true (False Positive).</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> If the p-value is less than the significance level (usually 0.05), you reject the Null Hypothesis and conclude the results are statistically significant.
      </div>
    `
  },
  "Conditional Probability": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Conditional probability is the probability of an event occurring given that another event has already occurred. Denoted as <code>P(A | B)</code>.</p>
      
      <h5>Formula</h5>
      <pre class="code-block"><code>P(A | B) = P(A and B) / P(B)</code></pre>

      <h5>Key Rules</h5>
      <ul>
        <li><strong>Independent Events:</strong> <code>P(A | B) = P(A)</code> since event B has no influence on A.</li>
        <li><strong>Dependent Events:</strong> Occurrences change probability outcomes.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Conditional probability allows updating outcomes when context or prior events are known.
      </div>
    `
  },
  "Bayes Theorem": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Bayes' Theorem updates the probability of a hypothesis (prior probability) in light of new evidence (likelihood).</p>
      
      <h5>Formula</h5>
      <pre class="code-block"><code>P(A | B) = [P(B | A) * P(A)] / P(B)</code></pre>

      <h5>Components</h5>
      <ul>
        <li><strong>P(A|B):</strong> Posterior probability.</li>
        <li><strong>P(B|A):</strong> Likelihood.</li>
        <li><strong>P(A):</strong> Prior probability.</li>
        <li><strong>P(B):</strong> Marginal likelihood/Evidence.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Essential for filters (e.g. Naive Bayes Spam filter) and clinical trial assessment metrics.
      </div>
    `
  },
  "Random Variables & Expectations": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>A random variable takes on values according to probabilistic outcomes. Expected Value represents the long-term average outcome.</p>
      
      <h5>Formula (Discrete)</h5>
      <pre class="code-block"><code>E(X) = Σ (x * P(x))</code></pre>

      <h5>Concepts</h5>
      <ul>
        <li><strong>Discrete Variable:</strong> Countable values (e.g., die roll).</li>
        <li><strong>Continuous Variable:</strong> Uncountable range (e.g., temperature).</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Expected value is the weighted average, not necessarily the most likely individual outcome.
      </div>
    `
  },
  "Central Limit Theorem": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>The Central Limit Theorem (CLT) states that the sampling distribution of the sample mean approaches a normal distribution as the sample size becomes large, regardless of the population distribution shape.</p>
      
      <h5>Key Requirements</h5>
      <ul>
        <li><strong>Sample Size:</strong> Typically, a sample size of <code>n &gt;= 30</code> is considered sufficient.</li>
        <li><strong>Independence:</strong> Data points must be randomly selected and independent.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> CLT is critical because it allows statisticians to use normal distribution statistics to perform inference on non-normal populations.
      </div>
    `
  },
  "Matplotlib Basics (Figures/Axes)": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Matplotlib is the core plotting library in Python. It uses a hierarchy of Figures (the canvas) and Axes (individual plots inside the canvas).</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(6, 4))
ax.plot([1, 2, 3], [4, 5, 6], label="Line")
ax.set_title("Simple Plot")
ax.legend()
plt.show()</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Always use the object-oriented API (creating explicit <code>fig, ax</code> variables) for maximum customizability.
      </div>
    `
  },
  "Seaborn Statistical Plots": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Seaborn is built on top of Matplotlib. It provides high-level styling and interfaces for drawing informative statistical graphs.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>import seaborn as sns
import matplotlib.pyplot as plt

# Distribution plot
sns.kdeplot(data=df, x='Age', hue='Gender', fill=True)
plt.show()</code></pre>

      <h5>Key Plots</h5>
      <ul>
        <li><code>sns.scatterplot()</code>: Compare relations.</li>
        <li><code>sns.heatmap()</code>: Visualize correlation matrices.</li>
        <li><code>sns.boxplot()</code>: Summary statistical dispersion outliers.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Seaborn integrates seamlessly with Pandas DataFrames, handling column mapping and grouping labels automatically.
      </div>
    `
  },
  "Customizing Visuals & Palettes": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Customizing charts involves setting color themes, labels, grids, and themes to make charts clear, professional, and accessible.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>sns.set_theme(style="darkgrid")
sns.set_palette("coolwarm")
plt.xlabel("Independent Variable")
plt.ylabel("Dependent Variable")</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use colors purposefully to highlight differences or categories, avoiding confusing color palettes.
      </div>
    `
  },
  "Storytelling with Data": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Data storytelling is using visualizations to convey insights clearly. Focus on decluttering charts and labeling key trends.</p>
      
      <h5>Best Practices</h5>
      <ul>
        <li>Remove unnecessary grids and borders (maximize data-to-ink ratio).</li>
        <li>Use text annotations directly on the chart rather than far legends.</li>
        <li>Highlight the key point of interest with a contrasting color.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> A good visualization is self-explanatory and focuses the viewer's attention directly on the main insight.
      </div>
    `
  },
  "ML Workflow and Lifecycle": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>The machine learning workflow includes data ingestion, cleaning, feature engineering, model selection, training, evaluation, and deployment.</p>
      
      <h5>Steps</h5>
      <ol>
        <li>Define problem & collect data</li>
        <li>Data Preprocessing & Split (Train / Val / Test)</li>
        <li>Feature Engineering</li>
        <li>Model Training & Evaluation</li>
        <li>Deployment & Monitoring</li>
      </ol>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Machine learning is highly iterative! Models must be monitored post-deployment for drift.
      </div>
    `
  },
  "Overfitting and Underfitting": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Overfitting occurs when a model learns noise in the training data, failing on test sets. Underfitting occurs when the model is too simple to capture trends.</p>
      
      <h5>Solutions</h5>
      <ul>
        <li><strong>For Overfitting:</strong> Reduce parameters, use regularization, add dropout, or collect more data.</li>
        <li><strong>For Underfitting:</strong> Increase model complexity, engineer new features, or train longer.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Find the sweet spot in the bias-variance tradeoff where validation loss is minimized.
      </div>
    `
  },
  "Evaluation Metrics (Recall/Precision)": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Metrics evaluate classifier performance. Accuracy can be highly misleading in imbalanced datasets.</p>
      
      <h5>Key Formulas</h5>
      <ul>
        <li><strong>Precision:</strong> TP / (TP + FP). Out of all positive predictions, how many were correct?</li>
        <li><strong>Recall:</strong> TP / (TP + FN). Out of all actual positives, how many did we capture?</li>
        <li><strong>F1-Score:</strong> Harmonic mean of Precision and Recall.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Medical models prioritize Recall (don't miss diseases), whereas spam filters prioritize Precision (don't block valid emails).
      </div>
    `
  },
  "Linear Regression & Gradient Descent": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Linear Regression models relationships between independent and dependent variables. Gradient Descent is an optimization algorithm that minimizes Mean Squared Error (MSE).</p>
      
      <h5>Formulas</h5>
      <pre class="code-block"><code>y_pred = w * x + b
MSE = (1/n) * Σ (y - y_pred)**2</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Gradient descent iteratively updates weights in the opposite direction of the gradient slope to find the global minimum error.
      </div>
    `
  },
  "Logistic Regression & Classification": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Logistic Regression outputs binary probabilities between 0 and 1 using the Sigmoid activation function, serving classification tasks.</p>
      
      <h5>Sigmoid Function</h5>
      <pre class="code-block"><code>σ(z) = 1 / (1 + e**-z)</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Outputs close to 1 represent high probability of positive class; values are mapped using a threshold (typically 0.5).
      </div>
    `
  },
  "Decision Trees & Information Gain": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Decision Trees split datasets at nodes based on features that maximize Information Gain or minimize Gini Impurity.</p>
      
      <h5>Splitting Criteria</h5>
      <ul>
        <li><strong>Entropy:</strong> Measure of randomness or uncertainty in data.</li>
        <li><strong>Gini Impurity:</strong> Likelihood of misclassifying a randomly chosen element.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Decision trees are prone to overfitting unless regularized using constraints like max_depth.
      </div>
    `
  },
  "Support Vector Machines (SVM)": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>SVM constructs an optimal hyperplane in a high-dimensional space to separate data classes with the maximum possible margin.</p>
      
      <h5>Kernels</h5>
      <p>The kernel trick computes relationships in higher-dimensional spaces to separate non-linear data without explicit coordinates.</p>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> SVM works exceptionally well for small, distinct, high-dimensional datasets.
      </div>
    `
  },
  "Feature Scaling & Encoding": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Feature scaling (Standardization, Normalization) maps numerical columns to identical scales. Categorical variables must be encoded (One-Hot, Label).</p>
      
      <h5>Methods</h5>
      <ul>
        <li><strong>StandardScaler:</strong> Shift mean to 0 and variance to 1.</li>
        <li><strong>One-Hot Encoding:</strong> Create separate binary flags for each unique nominal value.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Algorithms that use distance calculations (e.g. SVM, KNN) perform poorly without prior feature scaling.
      </div>
    `
  },
  "Missing Value Imputation": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Imputation fills missing records using statistical estimates (Mean/Median) or predictive modeling (KNN Imputer).</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Impute training data first and apply the identical transformation parameters to test sets to avoid data leakage.
      </div>
    `
  },
  "Ensemble Learning (Bagging/Boosting)": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Ensemble methods combine predictions from multiple base estimators to improve generalization and stability.</p>
      
      <h5>Types</h5>
      <ul>
        <li><strong>Bagging (Random Forest):</strong> Train many independent models in parallel and average predictions (reduces variance).</li>
        <li><strong>Boosting (XGBoost):</strong> Train models sequentially, where each model corrects error weights of previous steps (reduces bias).</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Random Forest reduces overfitting; XGBoost is highly optimized and often wins structured data competitions.
      </div>
    `
  },
  "Hyperparameter Tuning (GridSearch)": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Hyperparameters are parameters set before training. GridSearch evaluates all parameter combinations exhaustively using Cross-Validation.</p>
      
      <h5>Alternative</h5>
      <p>RandomizedSearch samples a subset of combinations from specified distributions, saving substantial training time.</p>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use RandomizedSearch to narrow down parameters first, then GridSearch for fine-tuning.
      </div>
    `
  },
  "Artificial Neural Networks (ANNs)": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>ANNs are inspired by biological networks. They consist of connected layers: input, hidden, and output. Nodes apply weights, biases, and activation functions.</p>
      
      <h5>Common Activations</h5>
      <ul>
        <li><strong>ReLU:</strong> <code>max(0, x)</code> (prevents vanishing gradients).</li>
        <li><strong>Sigmoid:</strong> For binary classification.</li>
        <li><strong>Softmax:</strong> For multi-class probability outputs.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Non-linear activation functions enable neural networks to learn arbitrary complex decision boundaries.
      </div>
    `
  },
  "Backpropagation & Gradient Descent": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Backpropagation computes loss gradients relative to neural weights using the chain rule, sending errors backwards to update coefficients via optimization algorithms.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Deep learning relies entirely on backpropagation for automated weight updates in complex architectures.
      </div>
    `
  },
  "Convolutional Neural Networks (CNNs)": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>CNNs are specialized for grid data, such as images. They use sliding kernels (convolutional layers) to learn spatial hierarchies of features.</p>
      
      <h5>Layer Types</h5>
      <ul>
        <li><strong>Conv2D:</strong> Extract features (edges, shapes) via learnable filter weights.</li>
        <li><strong>MaxPooling:</strong> Reduce feature spatial dimensions, achieving translation invariance.</li>
        <li><strong>Dense:</strong> Fully-connected layer yielding classification scores.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Convolution parameters are shared across pixel locations, rendering CNNs computationally efficient for vision.
      </div>
    `
  },
  "Intro to TensorFlow and Keras": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>TensorFlow is an open-source machine learning framework. Keras is its high-level abstraction API for compiling and training deep networks.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>import tensorflow as tf
from tensorflow.keras import layers, models

model = models.Sequential([
    layers.Dense(64, activation='relu', input_shape=(10,)),
    layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10)</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Keras makes building architectures as simple as stacking layers in sequence.
      </div>
    `
  },
  "Model Serialization (Pickle/Joblib)": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Model serialization converts a trained model's in-memory parameters and state into a byte-stream file on disk for deployment.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>import joblib

# Saving model
joblib.dump(trained_classifier, 'model.pkl')

# Loading model
model = joblib.load('model.pkl')
predictions = model.predict(new_data)</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use <code>joblib</code> instead of <code>pickle</code> for scikit-learn models, as it is more efficient for large NumPy array weights.
      </div>
    `
  },
  "FastAPI Model Serving": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>FastAPI exposes serialised ML models via HTTP REST endpoints, enabling external client platforms to request inference dynamically.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>from fastapi import FastAPI
import joblib

app = FastAPI()
model = joblib.load("model.pkl")

@app.post("/predict")
def predict(features: list):
    prediction = model.predict([features])
    return {"prediction": int(prediction[0])}</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> FastAPI compiles request parameters using Pydantic, providing automatic documentation and input validation.
      </div>
    `
  },
  "Containerization with Docker": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Docker packages python runtimes, system dependencies, model files, and code into static lightweight isolated containers, preventing environment differences.</p>
      
      <h5>Dockerfile Example</h5>
      <pre class="code-block"><code>FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Docker prevents the "it works on my machine" problem by standardizing deployment execution.
      </div>
    `
  },
  "MLOps Pipeline Basics": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>MLOps bridges model generation and deployment. Pipelines automate data updates, automated validation, CD staging, and live drift logging.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Monitor model metrics and check for "concept drift," which degrades model accuracy over time as live user inputs change.
      </div>
    `
  },

  // ================= FULL STACK DEVELOPER PATH =================
  "HTML5 Semantic Markup": {
    duration: "45min",
    content: `
      <div class="gfg-article">
        <!-- Article Header -->
        <div class="gfg-article-header">
          <h2 class="gfg-title"><i class="fa-solid fa-graduation-cap"></i> HTML Tutorial & Basics Guide</h2>
          <span class="gfg-updated">Last Updated : 1 May, 2026</span>
        </div>

        <p>HTML (HyperText Markup Language) is the core language used to structure and display content on the web, defining elements like text, images, links, and page layout so browsers can render websites properly.</p>

        <ul class="gfg-bullet-list">
          <li>Provides the basic structure for all web pages using opening and closing tags like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, and <code>&lt;div&gt;</code>.</li>
          <li>Supports text, images, links, lists, tables, forms, and multimedia elements such as audio and video.</li>
          <li>Works with <strong style="color:var(--cyan);">CSS</strong> for styling and <strong style="color:var(--cyan);">JavaScript</strong> for interactivity.</li>
          <li>Uses attributes like <code>src</code>, <code>href</code>, and <code>alt</code> to add extra information and control element behavior.</li>
          <li>HTML documents are transferred over the Internet using the <strong>HTTP Protocol</strong>.</li>
        </ul>

        <!-- Basics Section with Numbered Grid (matching the screenshot!) -->
        <div class="gfg-basics-section">
          <div class="gfg-basics-card">
            <div class="gfg-basics-title">Basics</div>
            <div class="gfg-basics-grid">
              <div class="gfg-grid-item"><span class="gfg-badge">01</span> Headings</div>
              <div class="gfg-grid-item"><span class="gfg-badge">06</span> Links</div>
              <div class="gfg-grid-item"><span class="gfg-badge">02</span> Paragraphs</div>
              <div class="gfg-grid-item"><span class="gfg-badge">07</span> Button</div>
              <div class="gfg-grid-item"><span class="gfg-badge">03</span> Line-Break</div>
              <div class="gfg-grid-item"><span class="gfg-badge">08</span> List</div>
              <div class="gfg-grid-item"><span class="gfg-badge">04</span> Horizontal Rule</div>
              <div class="gfg-grid-item"><span class="gfg-badge">09</span> Preserve Formatting</div>
              <div class="gfg-grid-item"><span class="gfg-badge">05</span> Images</div>
            </div>
          </div>
        </div>

        <!-- HTML Basics Subsections (Structure, Concepts) -->
        <div class="gfg-sub-section">
          <h4>1. HTML Basics & Environments</h4>
          <p>These topics help you get started with HTML and understand its core structure.</p>
          <div class="gfg-feature-list">
            <div class="gfg-feature-item"><strong>Introduction:</strong> HTML stands for HyperText Markup Language. It is standard markup for document compilation.</div>
            <div class="gfg-feature-item"><strong>Features:</strong> Platform-independent, easy to learn, supports semantic tags, and fits web standards.</div>
            <div class="gfg-feature-item"><strong>Editors:</strong> VS Code, Notepad++, Sublime Text, or simple editors like Notepad on Windows.</div>
            <div class="gfg-feature-item"><strong>Comments:</strong> Declared using <code>&lt;!-- comment text --&gt;</code>, which are ignored by browsers.</div>
          </div>
        </div>

        <div class="gfg-sub-section">
          <h4>2. HTML Fundamental Concepts</h4>
          <p>These are the fundamental building blocks used to actually create web pages.</p>
          <table class="gfg-table">
            <thead>
              <tr>
                <th>Concept</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Structure</strong></td>
                <td>The skeleton of HTML including <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>.</td>
              </tr>
              <tr>
                <td><strong>Element</strong></td>
                <td>An element consists of a start tag, content, and an end tag: <code>&lt;p&gt;Hello&lt;/p&gt;</code>.</td>
              </tr>
              <tr>
                <td><strong>Attributes</strong></td>
                <td>Attributes provide additional metadata: <code>&lt;img src="pic.jpg" alt="Description"&gt;</code>.</td>
              </tr>
              <tr>
                <td><strong>Semantics</strong></td>
                <td>Elements that clearly describe their meaning: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>.</td>
              </tr>
              <tr>
                <td><strong>Entities</strong></td>
                <td>Special character mappings: <code>&amp;lt;</code> for &lt;, <code>&amp;gt;</code> for &gt;, and <code>&amp;amp;</code> for &amp;.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Tags, Tables, Lists -->
        <div class="gfg-sub-section">
          <h4>3. Tags & Structural Blocks</h4>
          <p>Tags organize content visually and semantically into sections, tables, and lists.</p>
          
          <div class="gfg-inner-grid">
            <div class="gfg-inner-col">
              <h5>Tables Structure</h5>
              <ul class="gfg-bullet-list">
                <li><code>&lt;table&gt;</code>: Main container.</li>
                <li><code>&lt;tr&gt;</code>: Defines table rows.</li>
                <li><code>&lt;th&gt;</code>: Defines header cells (bold, centered).</li>
                <li><code>&lt;td&gt;</code>: Defines standard cells (left-aligned).</li>
              </ul>
            </div>
            <div class="gfg-inner-col">
              <h5>Lists Structure</h5>
              <ul class="gfg-bullet-list">
                <li><strong>Ordered Lists:</strong> Numbered items defined using <code>&lt;ol&gt;</code> and <code>&lt;li&gt;</code>.</li>
                <li><strong>Unordered Lists:</strong> Bulleted items defined using <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="gfg-sub-section">
          <h4>4. Beginner Practice Projects</h4>
          <p>Start simple and learn by doing. Build these beginner HTML projects to cement your skills:</p>
          <div class="gfg-project-grid">
            <div class="gfg-project-card">
              <h6>Simple Portfolio Website</h6>
              <p>A single-page HTML layout using semantic headers, an about section, and lists of skills.</p>
            </div>
            <div class="gfg-project-card">
              <h6>Design an Event Web Page</h6>
              <p>A promotional page with event headings, maps or visual placeholders, tables of agendas, and a register button.</p>
            </div>
          </div>
        </div>

        <div class="key-takeaway">
          <strong>Key Takeaway:</strong> Master the basics of semantic tags and tables before styling with CSS. Structured document hierarchies make layouts easily customisable!
        </div>
      </div>
    `
  },
  "CSS Box Model & Flexbox": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>Every element in HTML is represented as a rectangular box. The CSS box model defines size rules. Flexbox is a 1D layout helper for columns and rows.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>/* Box Model Customization */
.card {
  box-sizing: border-box; /* Includes padding & border in size */
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 15px;
}

/* Flexbox Layout Container */
.flex-container {
  display: flex;
  justify-content: space-between; /* Horizontal spacing */
  align-items: center;            /* Vertical alignment */
}</code></pre>

      <h5>Box Model Parts</h5>
      <ul>
        <li><strong>Content:</strong> The actual text/image area.</li>
        <li><strong>Padding:</strong> Transparent area inside the border.</li>
        <li><strong>Border:</strong> Outlining edge surrounding the padding.</li>
        <li><strong>Margin:</strong> Outer space separating neighboring elements.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Set <code>box-sizing: border-box</code> globally to prevent padding from expanding the element's layout width.
      </div>
    `
  },
  "CSS Grid Layout": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>CSS Grid is a 2D layout engine. It allows designing responsive column-and-row grid layouts without absolute positioning.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 16px;                            /* Space between cells */
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;         /* 1 column on mobile */
  }
}</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use CSS Grid for overall page layouts and components containing complex grid structures, and Flexbox for 1D alignments.
      </div>
    `
  },
  "Responsive Web Design & Media Queries": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Responsive design ensures interfaces render perfectly on all devices. Media queries apply styles conditionally based on browser viewport size.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>/* Mobile-First Base styles */
.navbar {
  font-size: 14px;
}

/* Tablet / Desktop Overrides */
@media (min-width: 768px) {
  .navbar {
    font-size: 18px;
  }
}</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Build mobile-first. Define base styles for mobile viewports and append media query breakpoints for larger desktop displays.
      </div>
    `
  },
  "Variables, Scope & Arrow Functions": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>ES6 modernized JavaScript. Block-scoped variables (<code>let</code>, <code>const</code>) replace function-scoped <code>var</code>. Arrow functions provide short syntax.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>const multiplier = 5;

// Arrow function with implicit return
const multiply = (num) => num * multiplier;

console.log(multiply(4)); // 20

// Scoping demonstration
if (true) {
  let blockScoped = "Hidden outside";
  var functionScoped = "Accessible outside";
}</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use <code>const</code> by default. Only use <code>let</code> if reassigning variable values, and avoid using <code>var</code>.
      </div>
    `
  },
  "Array Methods & Destructuring": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>ES6 array methods (<code>map</code>, <code>filter</code>, <code>reduce</code>) enable functional list transformations. Destructuring extracts properties into variables.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>const users = [
  { name: "Ananya", age: 25 },
  { name: "Raj", age: 17 }
];

// Array methods
const adults = users.filter(u => u.age >= 18);
const names = adults.map(u => u.name);

// Destructuring
const [firstUser] = users;
const { name, age } = firstUser;</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Functional methods return new arrays without mutating the original arrays, preventing unintended side-effects.
      </div>
    `
  },
  "Promises and Async/Await": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Promises model asynchronous operations. <code>async/await</code> provides synchronous-looking syntax on top of promises, replacing nesting callbacks.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.com/users/\${userId}\`);
    if (!response.ok) throw new Error("Fetch failed");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error:", err.message);
  }
}</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Always wrap <code>await</code> operations inside <code>try/catch</code> blocks to prevent unhandled rejection crashes.
      </div>
    `
  },
  "DOM Manipulation & Event Handling": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>The DOM (Document Object Model) represents HTML as a tree. JS interacts with this tree via selectors, modification calls, and event listeners.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>const btn = document.getElementById("submitBtn");

btn.addEventListener("click", (event) => {
  event.preventDefault(); // Stop page reload
  
  const content = document.querySelector(".content");
  content.textContent = "Submission Received!";
  content.classList.add("success");
});</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use Event Delegation (binding a single listener on parent nodes) when listening to events on dynamically generated children.
      </div>
    `
  },
  "Git Init, Commit, & Log": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>Git is a distributed version control system. It tracks changes made to files in a local project folder repository.</p>
      
      <h5>Commands</h5>
      <ul>
        <li><code>git init</code>: Initializes a new local Git repository.</li>
        <li><code>git status</code>: Inspect files inside the working tree and staging area.</li>
        <li><code>git add .</code>: Stage all changes.</li>
        <li><code>git commit -m "msg"</code>: Saves the staged snapshot permanently.</li>
        <li><code>git log</code>: View commit history list.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Keep commits small and write descriptive messages explaining the purpose of each change.
      </div>
    `
  },
  "Branching & Merging": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>Branching creates sandboxed workspaces to code features. Merging integrates changes from one branch into another.</p>
      
      <h5>Commands</h5>
      <pre class="code-block"><code># Create and switch to new branch
git checkout -b feature-authentication

# (Make changes and commit them)

# Return to main and merge the feature branch
git checkout main
git merge feature-authentication</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Check for merge conflicts! Conflicts happen when concurrent updates hit the identical lines in branches.
      </div>
    `
  },
  "GitHub & Collaborative Workflows": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>GitHub hosts remote Git repositories. Collaborative workflows rely on Forking, Pull Requests (PRs), and code reviews.</p>
      
      <h5>Key flow</h5>
      <ol>
        <li>Pull latest changes from remote main branch.</li>
        <li>Code feature in local branch, push to GitHub origin.</li>
        <li>Open a Pull Request comparing your feature to remote main.</li>
        <li>Review, pass tests, and merge.</li>
      </ol>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Never commit directly to the main branch when working in teams; always use PRs.
      </div>
    `
  },
  "Introduction to JSX & Components": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>React builds UIs out of independent reusable components. JSX is a syntax extension resembling HTML that compiles to JS code.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>function WelcomeCard({ username }) {
  return (
    &lt;div className="welcome-card"&gt;
      &lt;h2&gt;Hello, {username}!&lt;/h2&gt;
      &lt;p&gt;Welcome back to your learning hub.&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> React components must start with a capital letter so JSX compiler recognizes them as custom tags.
      </div>
    `
  },
  "State management with useState": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>State stores reactive data that belongs to a component. The <code>useState</code> hook returns state variables and updater functions.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
      Clicked {count} times
    &lt;/button&gt;
  );
}</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Modifying state triggers a re-render. Do not mutate state directly; always use the updater function.
      </div>
    `
  },
  "Props and Component Communication": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>Props are read-only properties passed down from parent components to child components, allowing unidirectional data flow.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> To send data back from child to parent, pass callback functions as props from the parent down.
      </div>
    `
  },
  "Handling Events and Forms": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>React handles form inputs by binding values directly to state variables, creating "controlled components."</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>const [name, setName] = useState("");

const handleSubmit = (e) =&gt; {
  e.preventDefault();
  alert("Submitted: " + name);
};

return (
  &lt;form onSubmit={handleSubmit}&gt;
    &lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;
  &lt;/form&gt;
);</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Always call <code>event.preventDefault()</code> in form handlers to suppress native submit reloads.
      </div>
    `
  },
  "Side Effects with useEffect": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>The <code>useEffect</code> hook runs side effects (fetching data, manually editing DOM) in response to state transitions.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>useEffect(() =&gt; {
  // Runs once on component mount
  fetchData();
  
  return () =&gt; {
    // Cleanup callback on unmount
    cleanupListeners();
  };
}, []); // Empty array signifies no dependencies</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> If you omit the dependency array, the effect will execute after every single component render, causing performance degradation.
      </div>
    `
  },
  "Client-side Routing with React Router": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>React Router intercepts browser navigations, mounting components dynamically based on matching paths without requesting raw documents.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use the <code>&lt;Link&gt;</code> element to navigate, which preserves state and avoids page reloads.
      </div>
    `
  },
  "Context API for Global State": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>The Context API provides global data sharing down the component tree without manually passing props through intermediate layers (prop drilling).</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use Context for theme, locale, or user authentication details; avoid using it for high-frequency state updates.
      </div>
    `
  },
  "Performance Optimization Basics": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>Optimization prevents redundant updates. Use <code>React.memo</code>, <code>useCallback</code>, and <code>useMemo</code> hooks to cache values and pointers.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Measure performance first before optimizing; simple state structures often run fast enough out of the box.
      </div>
    `
  },
  "Node.js Runtime & Event Loop": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Node.js executes JS outside the browser using Chrome's V8 engine. The event loop delegates slow IO tasks asynchronously, keeping single-thread fast.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Never block the single event-loop thread with heavy CPU calculations, as it halts requests for all other users.
      </div>
    `
  },
  "Creating Servers with Express": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>Express is a minimalist web framework for Node.js. It simplifies handling HTTP requests, routing, and REST endpoint construction.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>const express = require('express');
const app = express();
app.use(express.json()); // Parse JSON body

app.get('/api/health', (req, res) =&gt; {
  res.status(200).json({ status: "healthy" });
});

app.listen(3000, () =&gt; console.log("Running on port 3000"));</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Express processes requests through consecutive middleware filters before responding.
      </div>
    `
  },
  "Request & Response Headers/Body": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>HTTP messages contain Headers (meta information like content-type, tokens) and Body payloads (sent via POST, PUT, PATCH requests).</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use <code>req.body</code> to parse input payloads, <code>req.params</code> for URL segments, and <code>req.query</code> for query parameters.
      </div>
    `
  },
  "Express Middleware Architecture": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Middleware functions intercept the request-response cycle. They have access to <code>req</code>, <code>res</code>, and a <code>next</code> pointer to chain filters.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>const logger = (req, res, next) =&gt; {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // Pass control to next handler
};

app.use(logger);</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> If your middleware does not call <code>next()</code>, the request will hang indefinitely.
      </div>
    `
  },
  "Relational Database Concepts": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>Relational databases store structured records across tables. Tables establish references using Primary Keys and Foreign Keys.</p>
      
      <h5>Key Terms</h5>
      <ul>
        <li><strong>ACID:</strong> Atomicity, Consistency, Isolation, Durability. Ensures secure transaction processing.</li>
        <li><strong>Schema:</strong> The blueprint structuring tables, attributes, and relationships.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Relational systems scale read operations efficiently through indexing and normalization constraints.
      </div>
    `
  },
  "SQL DDL & DML Commands": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>SQL handles structures via DDL (Data Definition Language) and data updates via DML (Data Manipulation Language).</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>-- DDL: Create schema structure
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INT
);

-- DML: Insert and query data
INSERT INTO users (name, age) VALUES ('Ananya', 25);
SELECT * FROM users WHERE age >= 18;</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use parameterized queries to prevent SQL injection vulnerabilities from arbitrary user input inputs.
      </div>
    `
  },
  "Joins and Relationships (1:N, N:M)": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Tables model relationships: 1-to-Many (e.g. User and posts) or Many-to-Many (e.g. Users and classes). Join queries merge records.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>SELECT posts.title, users.name 
FROM posts 
INNER JOIN users ON posts.user_id = users.id;</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Many-to-Many relationships require a middle join table referencing primary keys of both sides.
      </div>
    `
  },
  "Node-Postgres Integration": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>The <code>pg</code> package allows Node servers to run SQL statements against PostgreSQL databases using connection pooling.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Always release pool clients back to the pool once query execution finishes to avoid resource leaks.
      </div>
    `
  },
  "Document Model vs Relational": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>NoSQL document databases (like MongoDB) store dynamic JSON documents instead of static tabular rows, enabling flexible schemas.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Choose document databases when your data requirements change quickly or require nested structures.
      </div>
    `
  },
  "MongoDB CRUD & Query Operators": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>MongoDB queries use JSON syntax and logical selectors to perform actions (Create, Read, Update, Delete) on collections.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>// Find users older than 21
db.users.find({ age: { $gt: 21 } });

// Insert a record
db.users.insertOne({ name: "Raj", age: 24 });</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> MongoDB offers horizontal scaling through sharding, distributing documents across clustered servers.
      </div>
    `
  },
  "Schema Validation with Mongoose": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Mongoose is an ODM (Object Document Mapper) for Node.js, providing schema definitions and validation layers on top of MongoDB.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  age: { type: Number, min: 18 }
});

const User = mongoose.model('User', UserSchema);</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Mongoose schemas enforce data consistency at the application tier, despite MongoDB's schema-less database nature.
      </div>
    `
  },
  "Password Hashing with Bcrypt": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>Passwords must never be stored as plain-text. Bcrypt hashes passwords securely by salting and using slow processing algorithms.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>const bcrypt = require('bcrypt');

// Hashing during signup
const hashedPassword = await bcrypt.hash(plainPassword, 10);

// Verification during login
const isMatch = await bcrypt.compare(loginInputPassword, hashedPassword);</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Bcrypt salts passwords internally, meaning the identical password yields distinct hash outputs every time.
      </div>
    `
  },
  "JSON Web Tokens (JWT) Flow": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>JWTs enable stateless authentication. The server issues a token containing signed headers and payload claims, which clients attach to request headers.</p>
      
      <h5>JWT Structure</h5>
      <ul>
        <li><strong>Header:</strong> Specifies hashing algorithm (e.g. HS256).</li>
        <li><strong>Payload:</strong> Stores token claims (e.g., userId, permissions).</li>
        <li><strong>Signature:</strong> Verifies token authenticity using a server secret.</li>
      </ul>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Never store sensitive credentials (like passwords) in a JWT payload, as it is only base64 encoded and readable by anyone.
      </div>
    `
  },
  "Authentication Middleware": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Authentication middleware blocks unauthorized access to secure paths by validating the client's JWT token before delegating calls.</p>
      
      <h5>Code Example</h5>
      <pre class="code-block"><code>const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) =&gt; {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =&gt; {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Middleware acts as a gatekeeper, intercepting requests to attach validated user credentials to incoming requests.
      </div>
    `
  },
  "CORS, Security Headers & Rate Limiting": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Security covers API protection. CORS limits origins allowed to call endpoints. Helmet sets security headers, and rate-limiting limits requests.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use CORS strategically to allow requests from your specific domain origin, preventing external cross-site exploits.
      </div>
    `
  },
  "Environment Variable Configuration (.env)": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>Environment variables store API credentials, database strings, and secrets securely. Use dotenv to load values in Node.</p>
      
      <h5>Example</h5>
      <pre class="code-block"><code># .env
PORT=3000
DATABASE_URL=postgresql://user:pass@localhost:5432/db</code></pre>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Add \`.env\` to your \`.gitignore\` file to prevent committing secrets to public version control repositories.
      </div>
    `
  },
  "Frontend & Backend Deployment (Vercel/Render)": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Frontend code (static HTML/React) is deployed on CDNs like Vercel or Netlify. APIs/databases run on container hosting services like Render.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Configure environment variables separately in Vercel and Render dashboards before building.
      </div>
    `
  },
  "Docker Containerization for Full Stack": {
    duration: "60min",
    content: `
      <h5>Overview</h5>
      <p>Docker bundles the full stack into isolated container images. Docker Compose runs multiple containers (backend API, database, cache) concurrently.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Use volume mapping to persist database files on the host computer when container builds restart.
      </div>
    `
  },
  "Continuous Integration (CI/CD) Intro": {
    duration: "45min",
    content: `
      <h5>Overview</h5>
      <p>CI/CD pipelines automate testing, building, and deploying code changes upon push to source control platforms like GitHub.</p>
      
      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Automated testing blocks deployments if changes break features, protecting production stability.
      </div>
    `
  }
};

// Fallback dynamically generated study notes for untracked topics
function getFallbackStudyNotes(topicName) {
  return {
    duration: "30min",
    content: `
      <h5>Overview</h5>
      <p>Welcome to the study notes for <strong>${topicName}</strong>. This section covers key aspects, foundational concepts, and practical use cases relating to this topic.</p>
      
      <h5>Key Pillars</h5>
      <ul>
        <li><strong>Foundation:</strong> Understanding terms and workflows.</li>
        <li><strong>Practice:</strong> Working on examples and application development.</li>
        <li><strong>Implementation:</strong> Writing high-quality configurations and testing code robustness.</li>
      </ul>

      <h5>Common Use Case</h5>
      <p>When applying these principles in real-world scenarios, developers focus on optimizing execution, handling exception edge cases, and building modular implementations.</p>

      <div class="key-takeaway">
        <strong>Key Takeaway:</strong> Make sure to practice writing custom implementations and reviewing logs to cement your understanding of ${topicName}.
      </div>
    `
  };
}

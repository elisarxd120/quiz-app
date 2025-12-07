const MOCK_QUIZZES = [
  {
    id: 1,
    code: "COSC 75",
    title: "Software Engineering II",
    questions: [
      {
        id: 1,
        question:
          'The "Defining Requirements" stage utilizes a document called SRS, which stands for Software Requirement _',
        options: ["Specification", "Standards", "Structure", "Summary"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question:
          "Which software development methodology emphasizes iterative development?",
        options: ["Waterfall", "Agile", "V-Model", "Spiral"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "What does UML stand for in software engineering?",
        options: [
          "Universal Markup Language",
          "Unified Modeling Language",
          "Universal Modeling Language",
          "Unified Markup Language",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question:
          "Which testing approach tests individual components in isolation?",
        options: [
          "Integration Testing",
          "System Testing",
          "Unit Testing",
          "Acceptance Testing",
        ],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "What is the main purpose of version control systems?",
        options: [
          "To compile code",
          "To track changes and collaborate",
          "To debug applications",
          "To deploy software",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question:
          "Which design pattern ensures a class has only one instance?",
        options: [
          "Factory Pattern",
          "Observer Pattern",
          "Singleton Pattern",
          "Strategy Pattern",
        ],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "What does API stand for?",
        options: [
          "Application Programming Interface",
          "Advanced Programming Interface",
          "Application Protocol Interface",
          "Advanced Protocol Interface",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "Which phase comes first in the Software Development Life Cycle?",
        options: ["Design", "Implementation", "Requirements Analysis", "Testing"],
        correctAnswer: 2,
      },
      {
        id: 9,
        question: "What is refactoring in software development?",
        options: [
          "Adding new features",
          "Fixing bugs",
          "Improving code structure without changing behavior",
          "Writing documentation",
        ],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "Which metric measures the complexity of a program?",
        options: [
          "Lines of Code",
          "Cyclomatic Complexity",
          "Code Coverage",
          "Response Time",
        ],
        correctAnswer: 1,
      },
    ],
  },

  // DCIT 21 
  {
    id: 2,
    code: "DCIT 21",
    title: "Computer Programming I",
    questions: [
      {
        id: 1,
        question: "What is a variable in programming?",
        options: [
          "A constant value",
          "A storage location with a name",
          "A function",
          "A loop",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which data type is used to store whole numbers?",
        options: ["float", "string", "int", "bool"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "Which symbol is used for assignment in most languages?",
        options: ["==", "=", "!=", "==="],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "What does IDE stand for?",
        options: [
          "Internal Debug Engine",
          "Integrated Development Environment",
          "Input Development Extension",
          "Interface Design Environment",
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Which of the following is a loop structure?",
        options: ["if", "switch", "for", "return"],
        correctAnswer: 2,
      },
      {
        id: 6,
        question: "What is the output of 3 + 2 * 2?",
        options: ["10", "7", "8", "6"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "Which of the following is a string?",
        options: ['"Hello"', "5", "true", "3.14"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What keyword is used to create a function in JavaScript?",
        options: ["method", "function", "func", "define"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Which operator compares value AND type?",
        options: ["==", "=", "===", "!="],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "Which is an example of a boolean value?",
        options: ["1", '"True"', "true", '"false"'],
        correctAnswer: 2,
      },
    ],
  },

  // COSC 60 
  {
    id: 3,
    code: "COSC 60",
    title: "Data Structures",
    questions: [
      {
        id: 1,
        question: "Which data structure uses LIFO principle?",
        options: ["Queue", "Array", "Stack", "Tree"],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: "Which data structure uses FIFO principle?",
        options: ["Stack", "Queue", "Graph", "Tree"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Which data structure is used for hierarchical data?",
        options: ["Array", "Tree", "Stack", "Hash Table"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question:
          "Which data structure offers the fastest average lookup time?",
        options: ["Array", "Linked List", "Hash Table", "Queue"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "Which traversal visits left-root-right?",
        options: ["Preorder", "Inorder", "Postorder", "Breadth-first"],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Which data structure is used in BFS?",
        options: ["Stack", "Queue", "Array", "Tree"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question:
          "What is the time complexity of searching in a balanced BST?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which structure is best for undo operations?",
        options: ["Queue", "Stack", "Tree", "Graph"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Which data structure stores key-value pairs?",
        options: ["Stack", "Queue", "Hash Table", "Array"],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "Which traversal uses recursion naturally?",
        options: [
          "Breadth-first",
          "Depth-first",
          "Level-order",
          "Circular traversal",
        ],
        correctAnswer: 1,
      },
    ],
  },
];

export default MOCK_QUIZZES;

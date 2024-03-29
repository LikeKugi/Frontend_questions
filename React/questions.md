# React Interview Questions & Answers

### Table of Contents

| No.    | Questions                                                                                                                                                        | Priority |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
|        | **Core React**                                                                                                                                                   | HIGH     |
| 1      | [What is React?](https://reactdev.ru/archive/react16/tutorial/#what-is-react)                                                                                    | HIGH     |
| 2      | [What are the major features of React?](https://www.javatpoint.com/react-features)                                                                               | HIGH     |
| 3      | [What is JSX?](https://ru.legacy.reactjs.org/docs/introducing-jsx.html)                                                                                          | HIGH     |
| 3.1    | [Is it possible to use react without JSX?](https://reactdev.ru/archive/react16/react-without-jsx/)                                                               | HIGH     |
| 4      | [What is the difference between Element and Component?](https://legacy.reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)                 | HIGH     |
| 5      | [How to create components in React?](https://reactdev.ru/archive/react16/components-and-props/)                                                                  | HIGH     |
| 6      | [When to use a Class Component over a Function Component?](https://reactdev.ru/types/050/)                                                                       | LOW      |
| 7      | [What are Pure Components?](https://reactdev.ru/reference/PureComponent/)                                                                                        | MEDIUM   |
| 7.1    | [If Pure Component is better from the optimization point of view, why don't we use it by default?(#)](https://news.ycombinator.com/item?id=14418054)             | MEDIUM   |
| 8      | [What is state in React?](https://ru.legacy.reactjs.org/docs/faq-state.html)                                                                                     | HIGH     |
| 9      | [What are props in React?](https://reactdev.ru/types/050/#props)                                                                                                 | HIGH     |
| 10     | [What is the difference between state and props?](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)                                           | HIGH     |
| 11     | [Why should we not update the state directly?](https://reactdev.ru/learn/updating-objects-in-state/)                                                             | HIGH     |
| 11.1   | [Is the state updated synchronously?](https://reactdev.ru/learn/queueing-a-series-of-state-updates/)                                                             | HIGH     |
| 12     | [What is the purpose of callback function as an argument of setState()?](https://reactdev.ru/learn/queueing-a-series-of-state-updates/#_2)                       | MEDIUM   |
| 13     | What is the difference between HTML and React event handling?                                                                                                    | LOW      |
| 14     | How to bind methods or event handlers in JSX callbacks?                                                                                                          | HIGH     |
| 15     | How to pass a parameter to an event handler or callback?                                                                                                         | HIGH     |
| 16     | What are synthetic events in React?                                                                                                                              | HIGH     |
| 17     | What are inline conditional expressions?                                                                                                                         | MEDIUM   |
| 18     | What is "key" prop and what is the benefit of using it in arrays of elements?                                                                                    | HIGH     |
| 19     | [What is the use of refs?](https://reactdev.ru/learn/escape-hatches/)                                                                                            | HIGH     |
| 20     | How to create refs?                                                                                                                                              | HIGH     |
| 20.1   | [Difference between "createRef" and "useRef"(#)](https://stackoverflow.com/questions/54620698/whats-the-difference-between-useref-and-createref)                 | MEDIUM   |
| 20.1.A | [Another link](https://www.geeksforgeeks.org/difference-between-useref-and-createref-in-reactjs/)                                                                | MEDIUM   |
| 21     | What are forward refs?                                                                                                                                           | MEDIUM   |
| 22     | React.memo VS useMemo                                                                                                                                            | HIGH     |
| 23     | How do you memoize a component?                                                                                                                                  | HIGH     |
| 24     | What is Virtual DOM?                                                                                                                                             | HIGH     |
| 25     | How Virtual DOM works?                                                                                                                                           | HIGH     |
| 26     | [What is the difference between Shadow DOM and Virtual DOM?](https://reactdev.ru/archive/react16/faq-internals/#what-is-the-virtual-dom)                         | HIGH     |
| 27     | [What is React Fiber?](https://github.com/acdlite/react-fiber-architecture)                                                                                      | HIGH     |
| 28     | [What is the main goal of React Fiber?](https://habr.com/ru/articles/444276/)                                                                                    | HIGH     |
| 28.A   | [Another link](https://dev.to/jennypollard/chto-takoie-react-fiber-react-fiber-architecture-2cho)                                                                | HIGH     |
| 29     | [What are controlled components?](https://reactdev.ru/archive/react16/forms/#controlled-components)                                                              | MEDIUM   |
| 30     | [What are uncontrolled components?](https://reactdev.ru/archive/react16/uncontrolled-components/)                                                                | MEDIUM   |
| 30.1   | [Controlled Uncontrolled VS Uncontrolled inputs.](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)                                    | MEDIUM   |
| 31     | What is the difference between [createElement](https://reactdev.ru/reference/createElement/) and [cloneElement](https://reactdev.ru/reference/cloneElement/)?    | LOW      |
| 32     | [What is Lifting State Up in React?](https://reactdev.ru/learn/sharing-state-between-components/)                                                                | HIGH     |
| 33     | What are the different phases of component lifecycle?                                                                                                            | HIGH     |
| 34     | What are the lifecycle methods of React?                                                                                                                         | HIGH     |
| 35     | [What are Higher-Order components?](https://reactdev.ru/types/054/)                                                                                              | HIGH     |
| 36     | [How to fetch data with React Hooks?](https://reactdev.ru/reference/useEffect/#_4)                                                                               | HIGH     |
| 37     | [What is context?](https://reactdev.ru/learn/passing-data-deeply-with-context/)                                                                                  | HIGH     |
| 38     | [What is children prop?](https://reactdev.ru/types/050/#children)                                                                                                | HIGH     |
| 39     | What is prop drilling?                                                                                                                                           | MEDIUM   |
| 40     | What is the purpose of using super constructor with props argument?                                                                                              | LOW      |
| 41     | What is reconciliation?                                                                                                                                          | HIGH     |
| 42     | How do you conditionally render components?                                                                                                                      | HIGH     |
| 43     | What are error boundaries in React v16                                                                                                                           | HIGH     |
| 44     | [What are hooks?](https://reactdev.ru/archive/react16/hooks-faq/)                                                                                                | HIGH     |
| 44.1   | [React hooks rules](https://reactdev.ru/archive/react16/hooks-rules/)                                                                                            | HIGH     |
| 45     | Why React uses className over class attribute?                                                                                                                   | LOW      |
| 46     | [What are fragments?](https://reactdev.ru/reference/Fragment/)                                                                                                   | HIGH     |
| 47     | Why fragments are better than container divs?                                                                                                                    | HIGH     |
| 48     | [What are portals in React?](https://reactdev.ru/reference/createPortal/)                                                                                        | MEDIUM   |
| 49     | [What are stateless components?](https://reactdev.ru/libs/redux/basics/UsageWithReact/#-_2)                                                                      | MEDIUM   |
| 50     | What are stateful components?                                                                                                                                    | MEDIUM   |
|        | **React Redux**                                                                                                                                                  | HIGH     |
| 51     | What is Flux?                                                                                                                                                    | HIGH     |
| 52     | [What is Redux?](https://redux.js.org/introduction/getting-started)                                                                                              | HIGH     |
| 52.1   | What hooks does Redux have                                                                                                                                       | HIGH     |
| 53     | [What are the core principles of Redux?](https://redux.js.org/understanding/thinking-in-redux/three-principles)                                                  | HIGH     |
| 54     | What are the downsides of Redux compared to Flux?                                                                                                                | HIGH     |
| 56     | What is the difference between mapStateToProps() and mapDispatchToProps()?                                                                                       | LOW      |
| 57     | Can I dispatch an action in reducer?                                                                                                                             | HIGH     |
| 58     | How to access Redux store outside a component?                                                                                                                   | HIGH     |
| 59     | What are the drawbacks of MVW pattern                                                                                                                            | MEDIUM   |
| 60     | Are there any similarities between Redux and RxJS?                                                                                                               | MEDIUM   |
| 61     | How to dispatch an action on load?                                                                                                                               | MEDIUM   |
| 62     | [How to use `connect` from React Redux?](https://react-redux.js.org/api/connect)                                                                                 | MEDIUM   |
| 63     | How to reset state in Redux?                                                                                                                                     | MEDIUM   |
| 64     | Whats the purpose of at symbol in the redux connect decorator?                                                                                                   | LOW      |
| 65     | What is the difference between React context and React Redux?                                                                                                    | HIGH     |
| 66     | Why are Redux state functions called reducers?                                                                                                                   | MEDIUM   |
| 67     | How to make AJAX request in Redux?                                                                                                                               | MEDIUM   |
| 68     | Should I keep all component's state in Redux store?                                                                                                              | HIGH     |
| 69     | What is the proper way to access Redux store?                                                                                                                    | HIGH     |
| 70     | What is the difference between component and container in React Redux?                                                                                           | MEDIUM   |
| 71     | What is the purpose of the constants in Redux?                                                                                                                   | HIGH     |
| 72     | What are the different ways to write mapDispatchToProps()?                                                                                                       | MEDIUM   |
| 73     | What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?                                                                         | MEDIUM   |
| 74     | How to structure Redux top level directories?                                                                                                                    | MEDIUM   |
| 75     | What is redux-saga?                                                                                                                                              | LOW      |
| 76     | What is the mental model of redux-saga?                                                                                                                          | LOW      |
| 77     | What are the differences between call and put in redux-saga                                                                                                      | LOW      |
| 78     | What is Redux Thunk?                                                                                                                                             | MEDIUM   |
| 79     | What are the differences between redux-saga and redux-thunk                                                                                                      | LOW      |
| 80     | What is Redux DevTools?                                                                                                                                          | LOW      |
| 81     | What are the features of Redux DevTools?                                                                                                                         | LOW      |
| 82     | What are Redux selectors and Why to use them?                                                                                                                    | LOW      |
| 83     | What is Redux Form?                                                                                                                                              | LOW      |
| 84     | What are the main features of Redux Form?                                                                                                                        | LOW      |
| 85     | How to add multiple middlewares to Redux?                                                                                                                        | LOW      |
| 86     | How to set initial state in Redux?                                                                                                                               | MEDIUM   |
| 87     | How Relay is different from Redux?                                                                                                                               | LOW      |
| 88     | What is an action in Redux?                                                                                                                                      | HIGH     |
|        | **React Router**                                                                                                                                                 |          |
| 89     | [What is React Router?](https://reactdev.ru/libs/react-router.6/overview/)                                                                                       | HIGH     |
| 90     | Why do we need to React Router?                                                                                                                                  | HIGH     |
| 91     | What are the main benefits of using React Router?                                                                                                                | HIGH     |
| 92     | [How is React routing different from conventional routing?](https://discuss.boardinfinity.com/t/how-does-the-react-router-differ-from-conventional-routing/5160) | HIGH     |
| 93     | [How React Router is different from history library?](https://iq.js.org/questions/react/how-react-router-is-different-from-history-library)                      | MEDIUM   |
| 94     | What is the purpose of push and [replace](https://reactrouter.com/en/main/hooks/use-navigate#optionsreplace) methods of history?                                 | MEDIUM   |
| 95     | How do you implement React routing?                                                                                                                              | HIGH     |
| 96     | What is the purpose of Outlet component?                                                                                                                         | HIGH     |
| 97     | What is nested routing?                                                                                                                                          | HIGH     |
| 98     | [How to do nested routing?](https://reactdev.ru/libs/react-router.6/overview/#_3)                                                                                | HIGH     |
| 99     | [How to suspense routing with route splitting?](https://reactdev.ru/libs/react-router.6/overview/#suspense)                                                      | LOW      |
| 100    | [How to do redirect?](https://reactdev.ru/libs/react-router.6/overview/#_9)                                                                                      | MEDIUM   |
| 101    | How to navigate backward and forward?                                                                                                                            | LOW      |
| 102    | How to create a protected (private) route?                                                                                                                       | HIGH     |
| 103    | What are some ways that you can share data among routes in React Router?                                                                                         | LOW      |
| 104    | What are the differences between types of routing: Hash, Browser, Memory?                                                                                        | HIGH     |
| 105    | How to get search params?                                                                                                                                        | MEDIUM   |
| 106    | How to implement default or NotFound page?                                                                                                                       | HIGH     |
| 107    | What are the differences between v5 and v6?                                                                                                                      | MEDIUM   |
| 108    | Have you ever upgraded the major version of router? If yes, what issues you faced?                                                                               | LOW      |

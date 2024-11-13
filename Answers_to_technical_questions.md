
# Technical Questions for Coding Test

# Answers to Technical Questions

## 1. How long did you spend on the coding test?

I spent approximately **7 to 8 hours** on the coding test. My approach was structured and thorough, following these steps:

1. **Problem Analysis:** I began by carefully reading the problem requirements and objectives. This initial phase was essential to understand the application's core functionalities, priority levels, and storage requirements, ensuring that I aligned my approach with the project's goals.

2. **Task Breakdown and Planning:** After analyzing the requirements, I broke down the tasks into smaller, manageable parts. This step involved outlining the main components of the application: the dashboard, task management system, search and filter functionalities, and local storage integration. I organized the tasks in a logical order to streamline development and testing.

3. **Implementation:** With a clear plan, I moved into coding. Starting with the base structure, I developed the core features, paying attention to code organization and modularity. The focus was on creating reusable components for task management (add, edit, delete) and UI elements like the dashboard and task filters. I worked incrementally, testing each feature upon completion to ensure it met the functional requirements.

4. **Edge Case Testing and Debugging:** Once the main features were implemented, I dedicated time to thorough testing. This included verifying edge cases like handling empty tasks, managing tasks with overdue dates, and ensuring accurate filtering by priority and completion status. Testing also covered data persistence in localStorage to confirm tasks were stored and retrieved correctly across sessions.

5. **Refinement and Code Review:** Finally, I refined the code, cleaned up comments, and ensured consistent formatting. This phase included a personal review to identify any minor optimizations and ensure that the code was well-organized for readability and maintainability.

Throughout the process, my priority was to maintain code clarity and ensure a seamless user experience, resulting in a user-friendly and functional task management application.



## 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

One of the most impactful features added in the latest version of **JavaScript (ECMAScript 2021)** is the **logical assignment operators** (`&&=`, `||=`, and `??=`). These operators make it easier to write clean and concise code for conditional assignments, reducing redundancy and improving readability.

### Example Code Snippet

Below is an example showing how I used the `||=` operator in a task management application to assign a default priority level if none was specified:

```javascript
let task = { title: "Complete Project", priority: null };

// Using ||= to set a default priority if none is provided
task.priority ||= "Medium";

console.log(task.priority); // Output: "Medium"
```

Here’s a breakdown of the logical assignment operators and how they simplify code:

- **`&&=`**: Only assigns a value if the left operand is truthy.
- **`||=`**: Only assigns a value if the left operand is falsy.
- **`??=`**: Only assigns a value if the left operand is `null` or `undefined`.

These operators are especially useful in initializing object properties or handling optional configuration settings, where default values can be set cleanly without additional conditional checks.


## 3. How would you track down a performance issue in production? Have you ever had to do this?

To track down a performance issue in production, I would follow these steps:

1. **Identify the problem area:** Gather performance metrics using monitoring tools like **New Relic**, **Prometheus**, or **Datadog** to locate any slowdowns or bottlenecks.
2. **Check logs:** Investigate logs for any errors or unusual activity around the time of the performance dip, which can reveal issues like timeouts, failed requests, or resource exhaustion.
3. **Replicate the issue in a staging environment:** Attempt to reproduce the problem in a staging environment with a similar workload, allowing for safe testing without impacting production.
4. **Profile the application:** Use profiling tools, such as **gprof**, **perf**, or **Visual Studio Profiler**, to identify code hotspots or inefficient areas, pinpointing specific functions or processes that require optimization.
5. **Optimize and test:** After identifying the issue, implement code or configuration changes to improve performance, then redeploy and monitor to ensure the fix is effective.

While I haven’t yet worked on diagnosing performance issues in a live production environment, I am familiar with the general process and tools needed to handle them effectively. I have practiced similar debugging techniques in development and testing environments, which would translate well into diagnosing real-world production performance issues.

## 4. If you had more time, what additional features or improvements would you consider adding to the task management application?

If I had more time to enhance the task management application, I would consider implementing the following features:

1. **User Authentication (Login and Signup):** Adding a login and signup feature would allow multiple users to securely access and manage their own tasks. This would involve creating a registration process, password hashing for security, and session management to maintain user states.

2. **Database Integration:** Instead of relying solely on local storage, I would set up a database (e.g., MongoDB, PostgreSQL, or MySQL) to store tasks in a more structured and scalable way. This would enable persistent, secure storage of tasks across sessions and devices, making the application more robust.

3. **User-specific Task Management:** With authentication and database support, each user could have their own task list, accessible only after logging in, enhancing both functionality and security.

4. **Enhanced Task Features:** With a more extensive backend, additional features like task history, sharing tasks with other users, and priority-based reminders could be implemented to improve user experience and usability.

These additions would greatly improve the scalability, security, and functionality of the application, making it suitable for real-world use by multiple users.


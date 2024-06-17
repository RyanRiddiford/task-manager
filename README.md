# Describe a situation where you had to debug a challenging issue in a previous project. How did you solve it?
## Situation:
During the development of the "Gigney" platform, a feature was introduced to allow users to draft music events. This feature required saving unfinished music event objects, including text and images, to local storage. However, the development team encountered a persistent issue where images were not being saved correctly.
## Challenge:
The primary challenge was to ensure that the image associated with the draft event was persistently stored without corruption or loss. The developer responsible for this module struggled with persisting images, which was critical for maintaining the integrity and continuity of user data during event creation.
## Action:
To address this, I stepped in to debug the issue using a systematic approach. I started with:
- **Browser Debugging Tools**: I utilized browser developer tools to monitor local storage operations and inspect how data was being handled during the save operations.
- **Code Review**: I thoroughly reviewed the existing code to understand the implementation logic and identify any apparent issues in the handling and storage of image data.
- **Research on Storage Limitations**: Recognizing the potential limitations of localStorage and sessionStorage, particularly their size constraints which are typically around 5MB, I hypothesized that these limitations could be the root cause preventing the storage of larger image files.
## Solution:
Given the size limitations of traditional web storage solutions:
- **Implementation of IndexedDB**: I proposed and implemented a solution using IndexedDB, a more robust browser-based database that allows for the storage of larger amounts of data, including files/blobs. This was suitable for our needs as it supports storing significant quantities of structured data, including files, and is capable of high performance with asynchronous I/O for off-thread data access.
- **Integration and Testing**: After integrating IndexedDB, I conducted a series of tests to ensure that images were being saved and retrieved correctly without affecting the performance and usability of the drafting feature.
## Result:
The new IndexedDB solution effectively resolved the image persistence issue, enabling the seamless saving and retrieval of large image files associated with the music event drafts. This enhancement significantly improved the user experience by ensuring that draft data, including complex images, was robustly stored and available across sessions.
# How do your career aspirations align with our company mission?
- Streamlining business operations is important for any business, and as it is Sendatradie's mission, I am very eager to contribute to the innovative solution it provides for Tradesmen industries.
- Sendatradie's dedication to innovation and customer success provides me with a unique and rewarding opportunity kickstart my career in the field of IT by delivering real-world solutions to satisfied customers.
# What are some of your strengths and weaknesses as a developer?
## Strengths
- I learn new technologies quickly and enjoy the process of continuous learning and adaptation.
- I am naturally curious and tend to think of unique solutions to problems.
- I am not afraid to ask questions and explore the reasons behind decisions.
- I have good teamwork skills I have developed through general team activities as well as group software development tasks during University.
- I am quite resilient when it comes to solving problems, although this can be a double-edged sword.
## Weaknesses
- I can sometimes spend too long when stuck on a task, where it would be better to ask for assistance.
- I sometimes spend too long over-perfecting certain features or quickly rushing through others.
- My unit testing skills are not as developed as I would like them to be.
- My stylesheet skills are a little more underdeveloped compared to my other skills (harder-to-maintain styling, styles being overridden or causing bugs at times etc...).
- I can subject myself to burnout by not separating my work with breaks. This can sometimes lead to reduced productivity and quality of work over time.

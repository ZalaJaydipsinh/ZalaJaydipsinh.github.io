---
title: Interview
description: A Complete Preparation Guide for the BARC CSE interview.
tags:
  - BARC
sort: 2
---

This is going to be a detailed blog, **FROM** getting selected for the interview **TO** getting selected for the job.

Brief - How I got selected for the BARC CSE interview?

# GATE Score Details
| GATE Discipline | CSE |
| :--- | :--- |
| Cut-off Score | 831 |
| My Best Score from 2023 to 2025 | 797 |
- This means I was not selected for the interview based on my GATE score.

# CBT Test Details (Year 2025)
| CBT | Score out of 300 |
| :--- | :--- |
| Cut-off Marks | 124 |
| My Marks | 159 |
- Selected for the interview based on the CBT result. ✅

- From both the scores (GATE + CBT), a total of 178 students were selected for the interview.
- I chose the June 10, 2025 slot for my interview.

---

# June 9th
Reached the BARC training center, Mumbai on June 9th. They have enough accommodation facilities. I got my room assigned (₹400 charge for a single day. Not allowed to stay more than a day). The room was decent, 3-sharing. No AC, No WiFi. There was a food arrangement on a payment basis in the MESS. 🍛

All 3 of us in the room were serious aspirants. We studied till 12 AM that day. 📚

---

# June 10th
Woke up at 5 in the morning. Got ready with formals and all the necessary stuff. Had our breakfast. Then, we reached the document verification hall at 8:30 AM. It was a big hall, full of students from all branches. I filled out some documents and the travel reimbursement form. There were many faculty members for every department who were verifying the docs in a pre-decided order. My turn for the doc verification was last. (I guess my surname starting with **Z** makes me stand last everywhere I go. 😔)

# Document Verification
The faculty members were very supportive. They took a photocopy of all the documents and verified them with the originals. If any document was missing, they provided a form to fill out, stating that 'If I get selected for the job, I will submit the document before December 31st'.

On that day, there were 19 CSE students present for the interview. 2 panels were interviewing in parallel. I got serial no. 18. I did some biometric verification and then sat in a waiting room. At 5:30 PM, an in-charge came into the waiting room, called my serial number, and said, "Be prepared, you are next." I gathered all my courage, went to the washroom (haha 😄), and gave myself a pep talk while looking in the mirror. At 6:05 PM, my turn came. I went into the interview room.

Let me narrate the situation in the room. There was one chairman in the middle, with 3 scientists on his left and 2 on his right. They all looked so tired because they had been continuously taking interviews since 9 in the morning. My energy was also drained. Waiting for my turn in a tense mood for 6 hours... you know how it is for a human who has desires and has prepared hard for that moment.

---

# The Interview
**Chairman:** Sit.

**Me:** Sat down.

**Chairman and other scientists:** Asked some questions related to my GATE admission and my B.Tech college.

**Me:** I answered. (It was the first interview of my life. Nervousness was obvious. So, even for those personal questions, I was taking a little time to answer.) (The Chairman calmed me down, saying that it's normal and to be comfortable.)

**Chairman:** Get up and write your favorite subjects on the board. (And the battle begins. ⚔️)

**Me:**
1.  OS
2.  COA
3.  DBMS
4.  C
5.  DS

**Chairman:** (Pointing to a scientist from the panel) Let's start with C.

---

## C

**C Scientist:** Explain storage classes in C.

**Me:** I explained auto, register, static, and extern in detail with their scope, lifetime, storage area, and default value. (Some basic cross-questions from the extern keyword were asked. I answered them very nicely.)

**C Scientist:** Explain ways of parameter passing.

**Me:** (This question seemed a little confusing and open-ended to me. My mind was relating this question to the COA subject.) I started speaking, `There is a way to pass parameters using a stack architecture.` (That was it, I dropped a bomb 💣. The Chairman and the Interviewer gave me very weird expressions and stopped me there before I could say anything further.)

**Chairman:** How is a stack helpful in passing parameters?

**Me:** I explained that in **earlier architectures**, we had a particular stack that was used to pass parameters and return values from function calls.

**Chairman & Interviewer:** (I still really don't know what they were wanting from me.) They said to implement it in C.

**Me:** Sir, I can implement it in C, but C has different ways to handle parameter passing. Stack-based parameter passing was used in old architectures.

**Chairman:** Demonstrate in C.

**Me:** (I was hesitating because I was not exactly remembering the stack implementation in C.) So, I started writing code on the board. I wrote a simple function signature. While writing, I was explaining the approach. (Then I don't know what! why! how!) I said, `C only supports pass-by-value parameter passing.` (Bomb count = 2 💣💣). (Both bombs were intentional, and I was totally prepared for the consequences. The reason for dropping the 2nd one was that while explaining the stack-based passing value, I realized they wanted "pass by value" and "pass by reference" as the answer. And explaining the stack concept would not be very impactful.)

**C Scientist:** So are you saying that C doesn't support pass-by-reference?

**Me:** I explained my perspective. They were satisfied with my explanation. (That was the point where I started feeling normal, as I had explained the question with a slightly different perspective.)

**C Scientist:** Write a program to find the sum of the max and min digits of a number.

**Me:** I cleared my doubts regarding edge cases and wrote a decent solution with proper naming conventions. I dry-ran the code for a small value.

**Chairman:** Okay, let's move to OS.

---

## OS

**OS Ma'am:** What have you studied in OS?

**Me:** Memory management, process management, device & storage management, etc.

**OS Ma'am:** How can I share memory between processes?

**Me:** Explained the three most popular ways of sharing memory in depth (with proper C library functions and all).

**OS Ma'am:** Will there be any problem there?

**Me:** Race conditions, data corruption, etc.

**OS Ma'am:** How will you handle that?

**Me:** Listed 6 to 7 ways for process synchronization.

(In the beginning, the Chairman did ask me how many lines of code I have written in C. I said 60-70 lines. The Chairman was like, "Just 60-70?" I said, "Yes sir, I was figuring out how semaphores, mutexes, and all work." So that was it.) Thus, the OS ma'am knew that I was well-prepared for the process and memory management part. That was the reason she did not go deeper into process sync.

**OS Ma'am to Chairman:** Done.

**Chairman:** Let's go with COA.

---

## COA

**COA Sir:** Draw a diagram of a computer.

**Me:** (It was such a confusing question. I didn't know where to start. I guess they were intentionally asking these kinds of open-ended questions that can be answered in many ways.) I started drawing the internal structure of the CPU, like MAR, MBR, PC, all the buses, etc.

**COA Sir:** Just draw an overview of the computer.

**Me:** I was like, what!!! (literally 🤯) Then I just drew a 2nd-grade computer diagram: CPU, Monitor, Keyboard, and mouse. (I was smiling, they were all smiling. Hehe...)

**COA Sir:** Okay. Differentiate between RISC and CISC.

**Me:** The conversation went on for a little while on this topic as well. (Many cross-questions regarding hardwired and micro-programmed architecture...)

**Chairman to COA Sir:** Ask something else.

**COA Sir:** Explain interrupt handling.

**Me:** (To myself: Oh man! Again, an open-ended question.) I explained stuff which I found very interesting during my prep. I mentioned that after every fetch-decode-execute cycle, the CPU checks for an interrupt.

**Chairman:** But in pipelining, at every cycle, the CPU is executing instructions. How is your explanation correct? (Sir was trying to confuse me.)

**Me:** (With many cross-questions, I stuck to my original definition. I was looking at their facial expressions to check if I was going in the right way or not. But they were very good at hiding it. No hint, no facial expression. poker face 😐)

**Chairman:** How is a keyboard key press handled?

**Me:** Explained the dedicated interrupt controller, CPU INTR pins, and INT vectors.

---

## DS
**DS Sir:** Have you sat on a merry-go-round?

**Me:** Saying "Yes," while nodding "No." (Actually, I have never sat on one. So, that was my mistake to say Yes.)

**DS Sir:** Develop an algorithm for that.

**Me:** Started with an array implementation (with lots of cross-questioning. Sir came to know that I know nothing about a merry-go-round. 😂) Still, sir proceeded further. I changed my implementation to a graph-based approach.

**Chairman:** Sir was checking how I was approaching a new question. (The conversation went a little long. They were running out of time.) So the Chairman stopped us there, saying, "You will eventually reach the final solution, let's move to DBMS."

---

## DBMS

**DBMS Sir:** Design a schema for the interview system of BARC.

**Me:** I directly wrote the best-normalized schema.

**DBMS Sir:** Why did you directly write a normalized schema? How would you approach it if it were just a single table?

**Me:** Explained normalization from 1NF to BCNF. (Answered cross-questions about multi-valued attributes and composite attributes.)

**DBMS Sir:** What is 0NF?

**Me:** Sir, there is no such thing as 0NF in RDBMS. A table is always in 1NF.

**DBMS Sir:** What about the name field you wrote in your table?

**Me:** It's up to the developer how he treats the name field. But we cannot say it is 0NF. (We were disagreeing with each other's concept of 0 and 1 NF.)

**Chairman:** Okay, let's end the interview here.

(I was a bit sad, as the end of the interview was not that good. I had prepared DBMS so well, and it didn't go as expected.)

I came out of the room. I saw it was dark outside. I was like, when I entered, it was quite sunny weather. I asked the scheduler how long it went. He said 1 hour and 25 minutes, the longest slot of the day. I felt a little relieved. For the last 1.5 years, I was preparing like hell. Gave GATE, then prepared for CBT, then prepared for the interview. I was feeling like the movie was ending; the hero fought all the enemies (loneliness, depression, sadness) while walking through the beautiful vibe of Anushaktinagar. 😌

**Result:** One of those 9 selected candidates. 🎉🥳

----
# Tips:
-   I indirectly tried to cover:
    -   some of the doubts regarding the stay and interview process,
    -   also added some important points about how to be yourself in the interview.
-   I had prepared a document combining all the interviews held till now with answers.
    -   That helped me to clear the interview.
    -   Attaching it [here ​💡​](https://jayu.notion.site/1d31fd80404e80109deff1d1a5597254?v=1d31fd80404e803e9415000c8c6d34c2&source=copy_link).
-   Join the [Telegram group](https://t.me/+m35kFH5Og6QwNzVl). I will be happy to help you in your journey of GATE & BARC.  

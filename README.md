# HackUTD-X: HomeVISOR

## Inspiration

- We are excited and would love to learn about working with datasets, as well as helping out future homeowners (because we are about to be one also).

## What it does

- HomeVISOR is an online secure financial advisor with personalized advising based on user input. For denied homeowner, HomeVISOR offer 1 mili-second inference output speed by employing UT Dallas researched technology - Automated Commonsense Reasoning and s(CASP) by Dr. Gopal GuptaA unlike the use of LLM or ChatGPT. Also, HomeVisor was able to achieve high speed output, and on a consumer computer, therefore the user data are secure in Fannie Mae’s hand

## Examples

Approved example with fixed term loan duration and monthly payment calculations
![image](https://github.com/bellh14/HackUTD2023/assets/82425972/17d5431b-d0b8-4255-a2de-6df75a00bd48)

Denied example with sCASP powered reasoning for being denied.
![image](https://github.com/bellh14/HackUTD2023/assets/82425972/b8437013-1a33-4f58-b320-545f76e69448)

Example user dashboard to display how the user's finances compare to everyone else.
![image](https://github.com/bellh14/HackUTD2023/assets/82425972/18582e92-25f2-421a-bd01-979f61553438)


## How we built it

- HomeVISOR is a smart tool, utilizing the XGBoost Decision Tree model to find the key factors that influence the user's financial situation, and a sCASPS AI model powered by ASP to create personalized and secure financial advice. HomeVISOR also has a comprehensive database that tracks the market and compares the user's data with other approved loans to provide reliable benchmarks.
- Furthermore, HomeVISOR's front end is designed with TypeScript, Tailwind CSS, and Next js, which offer a user-friendly and responsive interface. The back end is built with Python, Prolog, and s(CASP), which enable the integration of the ML and AI models to leverage the latest technology, and the microservices are developed with Flask, Python, and OpenCV, which ensure high performance and reliability.

- (Not working)HomeVISOR employs microservices that improve the security and efficiency of the tool, such as face recognition powered by the OpenCV and Flask CV libraries

## Challenges we ran into

- We had to learn Prolog and understand the mental paradigm of Answer Set Programming in about 2 hours to model the sCASPS AI model and use its ultra secure, blazing fast, and reliable financial advising. Another difficulty we faced was finding the best way to apply our logic and data analytics to determine the most relevant factors for a customer's loan eligibility, which we were able to solve using XGBoost’s feature importance classification. As for the front end, we faced quite a few challenges due to only 1 developer working on it. Therefore, we focused on delivering a minimum viable product towards the end of the hackathon.

## Accomplishments that we're proud of

- We are proud of working together as a team to help each other succeed in and are happy with all that we have learned on this amazing adventure!
- We have a working solution with a still in progress research product from UT Dallas.

## What we learned

- We learned so much about Fannie Mae’s process to determine eligibility for home loans through ML and data analysis. We also learned so much about various tools, such as prolog, flask, OpenCV, s(CASP), and XGBoost, and consulted research papers to enhance our tool's performance.
- Our team have 2 first time beginner hackers, but we were able to explore a lot of field related to Data Science and Machine Learning.
- Answer Set Programming, Linux and WSL in order to run the program.

## What's next for Fannie Mae Challenge

- For the computer vision, we would train the filtering model, so the exactness of the facial matching improves, and provide more data to our virtual advisor to assist with providing more cross compared data recommendations. For the back end, we would use more ML models to analyze the data and detect issues such as Adverse Selection. We would also help clients identify metrics to improve their chances of getting loans. Moreover, we would develop a more comprehensive sCASPS model that would offer more feedback and suggestions for customers who want to get a home loan with better rules and predicate.


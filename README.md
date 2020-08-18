# Build a Fullstack + Serverless Web App using AWS Amplify 

Welcome! This is a beginner workshop targetted at University students (studying IT / Computer Science) who are new to Amazon Web Services. The main question we seek to answer by the end of this workshop is: 

`How can I use AWS to enhance my own personal projects?`

To answer this question, we will focus on using AWS to supercharge **web development**, specifically by:
1. Explaining the **benefits** of using AWS to build web applications.
2. Providing a high-level overview of key AWS services, including Lambda, S3, Cognito, API gateway, etc. 
3. Using AWS Amplify to seamlessly connect a range of AWS services to produce a fullstack, serverless web application. 

We hope that by the end of this workshop, you will not only be confident using AWS in your own projects, but you will realise the vast range of possibilities the AWS Cloud has to offer.

Table of Contents: 
* [Introduction to Workshop](#workshop-theory)
* [Setting up your Development Environment](#setting-up-your-development-environment)
* [Adding In-App Authentication]
* [Connecting to your Backend API]
* [Connecting to a Database]
* [Adding Machine Learning Features]

## Workshop Theory
As a University student, you may have had some experience creating small, mini applications as part of your assessments - for example, random websites, algorithmic chunks of code, or just random python scripts. But you may be wondering, how are industrial, fully-fledged applications, such as Facebook, Google or even Github, actually built? 

### What is the architecture of a traditional application? 
The architecture of these large, fully-fledged applications is fairly complicated, and consist of so many different components responsible for different tasks. 

### How do you build applications in the cloud? 
1. **Services**: The different components of an application correspond to different AWS services. 

2. **Serverless**: All of the services I will show you today are **serverless**. Of course, they still run on servers - it's just that YOU don't have to manage or maintain these servers, as AWS handles everything. Since you don't have to care about these servers, such services are deemed 'serverless' from a consumer perspective.  

3. **Connecting these services**: And ultimately, rather than building, configuring and deploying each component manually before hooking them all together, AWS Amplify drastically simplifies and speeds up this process. It allows you to provision up a full-stack web/mobile application, with an API, backend, authentication, database, storage + more within MINUTES!


## Setting up your Development Environment

### Provisioning a Cloud 9

1. Goto your AWS console via this link: https://aws.amazon.com/

2. Search up and click Cloud 9 in the 'Services' section.

3. Click 'Get Started'

4. Choose a nam

### Setting up your Amplify + React application

1. Do a 'git clone' of the current repository
   ```bash
   git clone
   ```
   
2. Move into the directory


## Adding In-App Authentication

1. Run the following command: 

    ```bash
    amplify auth add
    ```
    
2. 

## Connecting to your Backend API

1. Run the following command: 

    ```bash
    amplify api add
    ```

## Connecting to a Database

1. Run the following command: 

    ```bash
    amplify storage add
    ```
    
2. Run the following command: 

    ```bash
    amplify function add
    ```

3. Run the following command: 

    ```bash
    amplify api update
    ```

## Adding Machine Learning Features

1. Run the following command: 

    ```bash
    amplify predictions add
    ```


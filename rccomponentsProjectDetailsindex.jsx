[1mdiff --git a/src/components/IntroSection/HeroStyle.js b/src/components/IntroSection/HeroStyle.js[m
[1mindex 4348c12..29168e8 100644[m
[1m--- a/src/components/IntroSection/HeroStyle.js[m
[1m+++ b/src/components/IntroSection/HeroStyle.js[m
[36m@@ -200,4 +200,4 @@[m [mexport const ResumeButton = styled.a`[m
         font-size: 18px;[m
     } [m
 [m
[31m-`;[m
[32m+[m[32m`;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/Navbar/index.js b/src/components/Navbar/index.js[m
[1mindex a80e839..f7d0cc7 100644[m
[1m--- a/src/components/Navbar/index.js[m
[1m+++ b/src/components/Navbar/index.js[m
[36m@@ -38,33 +38,33 @@[m [mconst Navbar = () => {[m
           isOpen &&[m
           <MobileMenu isOpen={isOpen}>[m
             <MobileLink href="#about" onClick={() => {[m
[31m-              // setIsOpen(!isOpen)[m
[32m+[m[32m              setIsOpen(!isOpen)[m
             }}>About</MobileLink>[m
 [m
             <MobileLink href='#experience' onClick={() => {[m
[31m-              // setIsOpen(!isOpen)[m
[32m+[m[32m              setIsOpen(!isOpen)[m
             }}>Experience</MobileLink>[m
 [m
 [m
             <MobileLink href='#skills' onClick={() => {[m
[31m-              // setIsOpen(!isOpen)[m
[32m+[m[32m              setIsOpen(!isOpen)[m
             }}>Skills</MobileLink>[m
 [m
 [m
 [m
             <MobileLink href='#projects' onClick={() => {[m
[31m-              // setIsOpen(!isOpen)[m
[32m+[m[32m              setIsOpen(!isOpen)[m
             }}>Projects</MobileLink>[m
 [m
             <MobileLink href='#education' onClick={() => {[m
[31m-              // setIsOpen(!isOpen)[m
[32m+[m[32m              setIsOpen(!isOpen)[m
             }}>Education</MobileLink>[m
 [m
             <MobileLink href='#Contact' onClick={() => {[m
[31m-              // setIsOpen(!isOpen)[m
[32m+[m[32m              setIsOpen(!isOpen)[m
             }}>Contact</MobileLink>[m
 [m
[31m-            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>[m
[32m+[m[32m            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.linkedin} target="_blank">Linkedin Profile</GitHubButton>[m
           </MobileMenu>[m
         }[m
       </NavbarContainer>[m
[1mdiff --git a/src/data/constants.js b/src/data/constants.js[m
[1mindex be72a6c..daf7296 100644[m
[1m--- a/src/data/constants.js[m
[1m+++ b/src/data/constants.js[m
[36m@@ -6,7 +6,7 @@[m [mexport const Bio = {[m
     "Student",[m
   ],[m
   description:[m
[31m-    "I am a final year student at NIT Warangal. I'm eager to take on new challenges. With a passion for learning. I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",[m
[32m+[m[32m    "I am a final year student at NIT Warangal. I'm eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",[m
   Leetcode: "https://leetcode.com/ashok_molagavalli/",[m
   resume: "https://drive.google.com/drive/folders/1ZeuhkUDLX0cozVDUr2d0H-llFezHH7DE",[m
   linkedin: "https://www.linkedin.com/in/ashokmolagavalli/",[m
[36m@@ -157,9 +157,9 @@[m [mexport const experiences = [[m
     id: 0,[m
     img: "https://d6xcmfyh68wv8.cloudfront.net/newsroom-content/uploads/2022/07/Razorpay_payments.png",[m
     role: "Software Development Engineer Intern",[m
[31m-    company: "Razorpay",[m
[32m+[m[32m    company: "Razorpay, Bangalore",[m
     date: "May 2023 - July 2023",[m
[31m-    desc: "Collaberated with Security Engineering Team to o execute comprehensive assessments on 140 Razorpay Payment gatewats. Implemented an automated CI/CD pipeline to seamlessly onboard new gateway integrations on Razorpay’s GitHub Repo on Akto Using Github Actions. Automated a suite of over 50 test cases for each Gateway Integration and successfully pinpointed potential instances of monet loss and other critical API flaws",[m
[32m+[m[32m    desc: "Collaberated with Security Engineering Team to execute a comprehensive assessments on 140 Razorpay Payment gatewats. Implemented an automated CI/CD pipeline to seamlessly onboard new gateway integrations on Razorpay’s GitHub Repo on Akto Using Github Actions. Automated a suite of over 50 test cases for each Gateway Integration and successfully pinpointed potential instances of money loss and other critical API flaws",[m
     skills: [[m
       "Akto",[m
       "BurpSuite",[m
[36m@@ -181,7 +181,7 @@[m [mexport const education = [[m
     school: "National Institute of Technology, Warangal",[m
     date: "Oct 2020 - Apr 2024",[m
     grade: "7.44 CGPA",[m
[31m-    desc: "I am currently pursuing final year of my bachelor's degree at National Institute of Technology, Warangal. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",[m
[32m+[m[32m    desc: "I am currently pursuing final year of my bachelor's degree at National Institute of Technology, Warangal. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",[m
   },[m
   {[m
     id: 1,[m

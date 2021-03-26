# The Cloud Fox
### By Lucas Pichette

## The "Production" Version
<a href="https://thecloudfox.com" alt="the cloud fox website">The Cloud Fox Website Link</a>

## The Obligatory CC License

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>

## Inspiration
I love developing applications and teaching, the types of applications I love to develop are: Cloud-based, Web Apps, and/or Games.  
To celebrate three out of the four of my largest passions was to create a free educational website that provides information about the AWS Cloud.  

## My Qualifications
I'm not terribly qualified, I only have the Cloud Practitioner certification and I'm taking the test for my Solutions Architect Associate certification on 4/6. I'm simply an AWS Geek who believes in teaching as a form of learning.  
To provide some relief to anyone out there reading this, I only get my information from: acloudguru, AWS whitepapers, or sources that provide links to AWS whitepapers so that I can verify their information is correct (I'm a learner as well, so I also want to make sure that what I'm teaching/learning is actually correct!)  

## Reasons for sudden README.md
I actually wasn't planning on having a README for this repository as I figured only recruiters would be viewing it, but it seems to be picking up some traction and I wanted to make sure that I provided some background as well as some boundaries for cloning my repository (as there have been quite a few clones already):  
- By all means, learn from and use what I'm providing here; clone away! 
- I advocate education, not a shortcut to a resume booster or a quick start for a personal/work-related project, so please don't just *copy* my work, but learn from it.

## How I'm Hosting My Website on AWS
- S3: As of right now I'm using two S3 buckets to store the static files (I just copy and paste all of my files from my local storage, and since I'm using GitHub, I can work on this website up-to-date while traveling with my laptop as well). I use two S3 buckets, one named thecloudfox.com and the other www.thecloudfox.com, so that I can have traffic redirect from www.thecloudfox.com to thecloudfox.com.  
- Route53: I use Route53 so that I can replace the nasty endpoint names with a nice custom domain name.  
- Certification Manager: I used Certification Manager, an AWS resource, to create a free TSL/SSL certificate for my website so that I can have HTTPS (port 443) connection.  
- CloudFront: I use CloudFront, not only as it's required in order to get HTTPS (port 443) connection, but also for static content caching to reduce costs.  
- Services in the Future: I hope to use Lambda, API Gateway, and RDS in the future to create a cool profile/account feature to the website. The ability to add an account will allow me to create a website that is more unique to the user, from (perhaps) different color schemes to a "point" tracker, to keep track of how well they've done on each quiz, questions they tend to get incorrect, and maybe even going further by providing some more advanced analytics much much later on.  
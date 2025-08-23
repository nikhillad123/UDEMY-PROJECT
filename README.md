
# Edemy LMS - A Modern Learning Management System


Edemy LMS is a full-stack learning management system (LMS) that provides educators and students with a seamless e-learning experience. Built using modern web technologies, it includes user authentication, course management, video streaming, and progress tracking.

## 🚀 Tech Stack

### Frontend:
- **React** (via Vite) ⚡
- **React Router DOM** for navigation
- **React Toastify** for notifications
- **Quill** for rich text editing
- **Axios** for API requests
- **RC Progress** for progress tracking
- **React YouTube** for video embedding
- **Clerk Authentication** for user management

### Backend:
- **Node.js** & **Express.js** 🚀
- **MongoDB** & **Mongoose** for database
- **Cloudinary** for media storage
- **Multer** for file uploads
- **Stripe** for payment processing
- **Cors** for cross-origin requests
- **Dotenv** for environment variables
- **Nodemon** for development

---

## 📂 Project Structure
```
├── README.md
├── educrave-project
    ├── .gitignore
    ├── README.md
    ├── educrave-project.lnk
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── favicon.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── assets
    │   │   ├── accenture_logo.svg
    │   │   ├── add_icon.svg
    │   │   ├── adobe_logo.svg
    │   │   ├── appointments_icon.svg
    │   │   ├── arrow_icon.svg
    │   │   ├── assets.js
    │   │   ├── blue_tick_icon.svg
    │   │   ├── course_1.png
    │   │   ├── course_2.png
    │   │   ├── course_3.png
    │   │   ├── course_4.png
    │   │   ├── cross_icon.svg
    │   │   ├── down_arrow_icon.svg
    │   │   ├── dropdown_icon.svg
    │   │   ├── earning_icon.svg
    │   │   ├── facebook_icon.svg
    │   │   ├── favicon.svg
    │   │   ├── file_upload_icon.svg
    │   │   ├── home_icon.svg
    │   │   ├── instagram_icon.svg
    │   │   ├── lesson_icon.svg
    │   │   ├── logo.svg
    │   │   ├── logo_dark.svg
    │   │   ├── microsoft_logo.svg
    │   │   ├── my_course_icon.svg
    │   │   ├── patients_icon.svg
    │   │   ├── paypal_logo.svg
    │   │   ├── person_tick_icon.svg
    │   │   ├── play_icon.svg
    │   │   ├── profile_img.png
    │   │   ├── profile_img2.png
    │   │   ├── profile_img3.png
    │   │   ├── profile_img_1.png
    │   │   ├── profile_img_2.png
    │   │   ├── profile_img_3.png
    │   │   ├── rating_star.svg
    │   │   ├── react.svg
    │   │   ├── rich-text-css.txt
    │   │   ├── search_icon.svg
    │   │   ├── sktech.svg
    │   │   ├── star_dull_icon.svg
    │   │   ├── time_clock_icon.svg
    │   │   ├── time_left_clock_icon.svg
    │   │   ├── twitter_icon.svg
    │   │   ├── upload_area.svg
    │   │   ├── user_icon.svg
    │   │   ├── user_icon_2.svg
    │   │   └── walmart_logo.svg
    │   ├── components
    │   │   ├── educator
    │   │   │   ├── Footer.jsx
    │   │   │   ├── Navbar.jsx
    │   │   │   └── Sidebar.jsx
    │   │   └── student
    │   │   │   ├── CallToAction.jsx
    │   │   │   ├── Companies.jsx
    │   │   │   ├── CourseCard.jsx
    │   │   │   ├── CoursesSection.jsx
    │   │   │   ├── Footer.jsx
    │   │   │   ├── Hero.jsx
    │   │   │   ├── Loading.jsx
    │   │   │   ├── Navbar.jsx
    │   │   │   ├── Rating.jsx
    │   │   │   ├── SearchBar.jsx
    │   │   │   └── TestimonialSection.jsx
    │   ├── context
    │   │   └── AppContext.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── pages
    │   │   ├── educator
    │   │       ├── AddCourse.jsx
    │   │       ├── Dashboard.jsx
    │   │       ├── Educator.jsx
    │   │       ├── MyCourses.jsx
    │   │       └── StudentsEnrolled.jsx
    │   │   └── student
    │   │       ├── CourseDetails.jsx
    │   │       ├── CoursesList.jsx
    │   │       ├── Home.jsx
    │   │       ├── MyEnrollments.jsx
    │   │       └── Player.jsx
    ├── tailwind.config.js
    ├── vercel.json
    └── vite.config.js
└── server
    ├── .gitignore
    ├── configs
        ├── cloudinary.js
        ├── mongodb.js
        └── multer.js
    ├── controllers
        ├── courseController.js
        ├── educatorController.js
        ├── userController.js
        └── webhooks.js
    ├── middlewares
        └── authMiddleware.js
    ├── models
        ├── Course.js
        ├── CourseProgress.js
        ├── Purchase.js
        └── User.js
    ├── package-lock.json
    ├── package.json
    ├── routes
        ├── courseRoutes.js
        ├── educatorRoutes.js
        └── userRoutes.js
    ├── server.js
    └── vercel.json

```

---

## 🌟 Features

✅ **User Authentication** (Signup, Login, Clerk Integration)  
✅ **Course Management** (Add, Edit, Delete, Enroll)  
✅ **Video Streaming** (Embedded YouTube player)  
✅ **Progress Tracking** (Course Completion)  
✅ **Educator Dashboard** (Monitor students)  
✅ **Secure Payments** (Stripe integration)  
✅ **Responsive Design** (Mobile-friendly UI)  

---

---

## 📽️ Demo Video

[![Watch the video](https://img.youtube.com/vi/VIDEO_ID_HERE/0.jpg)](VIDEO_LINK_HERE)

---

## 📸 Screenshots

| Page | Screenshot |
|------|-----------|
| **Home Page** | ![Home](https://github.com/user-attachments/assets/03cf6bd7-8c30-4817-ad49-4a8fe8000541) |
| **Course Page** | ![Course](https://github.com/user-attachments/assets/e42c2660-8271-42ae-b7e3-c5278b6a9cf1) |
| **My Enrollments** | ![Enrollments](https://github.com/user-attachments/assets/a88cf7c1-cab1-4106-a64d-d7cfd5d9d4b7) |
| **Player Page** | ![Player](https://github.com/user-attachments/assets/cdc8fb2a-6f44-416f-b4bd-2f35b7acfbbd) |
| **Educator Dashboard** | ![Dashboard](https://github.com/user-attachments/assets/6c3bec05-805e-4652-ac51-113fd870b267) |
| **Add Course** | ![Add Course](https://github.com/user-attachments/assets/ee846dba-7b14-4006-ae95-8ff76402ed8d) |
| **My Courses** | ![My Courses](https://github.com/user-attachments/assets/e9f1b602-fc46-4dd7-8833-f1d8b15f43a1) |
| **Enrolled Students** | ![Enrolled Students](https://github.com/user-attachments/assets/6d118429-4aa0-487e-ad6c-1f37af3f9968) |

![image](https://github.com/user-attachments/assets/6eb66c29-6a73-4f98-9c15-7625a903a109)

## 🎯 Contributors

👤 **Nikhil Lad** – *Developer & Maintainer*  
📧 Contact: [nikhil.lad24india@gmail.com](nikhil.lad194@gmail.com)  
🔗 GitHub: [@nikhillad](https://github.com/Gyanthakur)  

---

## Thank you for checking out the **Edemy LMS** project! Happy coding! 😊

---

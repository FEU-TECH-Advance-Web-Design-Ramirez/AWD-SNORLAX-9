<!--TODO: change details-->
# Pet lover - Paw Buds Project Plan

---

## 1. Persona

**Name:** Pet Lover  
**Age:** 33 years old  
**Background:**  
* A  pet owner who treats their furry friends as family and seeks the best products and services for pet care.  
* The idea is to integrate health tracking, appointment scheduling, and a community forum, making pet ownership more organized and enjoyable.

**Key Characteristics:**  
* Practical and responsible, with a strong desire to ensure the health and happiness of their pets.
* Seeks expert advice and community support.
* Values trustworthy and quality pet care products and services.
* Prefers a user-friendly and intuitive app interface for convenience 

---
## 2. UX Flow

1. **User Authentication:**  
   - **Login/Registration:** Secure sign-in via Firebase Authentication.
   - **Welcome/Tutorial:** Quick onboarding to highlight app features.

2. **Home Screen:**  
   - **Featured Projects:** Showcasing approved DIY projects.
   - **Navigation Menu:** Quick links to Submit a Project, Forum, and Tool Recommendations.

3. **Health Tracking:** 
   - **Personalized Pet Health Records:** Users can log pet vaccinations, medications, and vet visits.
   - **Reminder System:** Alerts for upcoming vaccinations and check-ups.

4. **Project Interaction:**  
   - **Project Detail:** Step-by-step guides with images, materials, reviews, and ratings.
   - **Submit Review:** Users can add personal reviews and rate projects after completion.
   - **Project Submission:** A guided form to submit new DIY projects, including image upload.

5. **Community Engagement:**  
   - **Forum:** Browse and participate in discussion threads.
   - **Real-Time Chat/Notifications:** For immediate feedback and discussions.

6. **Admin Workflow:**  
   - **Admin Dashboard:** Review and approve new project submissions and user reviews.
   - **Notification System:** Alert admins when new content is pending.

---

## 3. Layout and Navigation

* **Navigation Drawer / Bottom Navigation Bar:**
  + **Home:** Featured projects and community updates.
  + **Health Tracking:** Access and update pet health records.
  + **Vet Appointments:** Book and manage vet visits.
  + **Community:** Forums and social interaction for pet owners.
  + **Profile:** User account settings and pet profiles.

* **Screen Layouts:**
  + **Homepage:** Overview of app features, recommended products, and pet care tips.
  + **Health Tracking:** A clean card-based interface for pet medical records.
  + **Appointment Scheduling:** Calendar-based interface for pet medical records.
  + **Community Forum:** Thread-based discussions with categories and search features.

* **Consistent Navigation:**
  + Smooth transitions, clear back navigation, and intuitive UI components for ease of use.

---

## 4. Color Scheme and Visual Style

* **Primary Colors:**  
  + **Beige:** A warm neutral tone, providing a soft and friendly background.
  + **Brown:** Evokes warmth, comfort, and reliability, aligning with the pet care theme.

* **Accent Colors:**  
  + **Soft Cream/Off-White:** Used for contrast and to keep the interface light and approachable.
  + **Dark Brown:** Likely used for text and buttons for strong readability.

+ Additional muted gold or warm yellow and blue for possible accent for highlights or buttons.

* **Visual Style:**  
  + **Friendly & Approachable:** Large, high-quality images of pets, easy-to-read typography, and minimalistic design.
  + **Simple & Clean Layout:** Lots of white space, clear calls to action, and intuitive navigation to make the app feel effortless to use.
  + **Consistent Iconography:** Friendly icons that resonate with pet lovers, such as paws, hearts, and vet tools.

---
<!--TODO: Arrange ERD (This is template)-->
## 5. Entity Relational Database (ERD)

**Key Entities:**

1. **User**
   - `user_id` (Primary Key)
   - `name`

   - `email`

   - `password_hash`

   - `profile_image_url`

   - `date_joined`

2. **DIY_Project**
   - `project_id` (Primary Key)
   - `user_id` (Foreign Key - User)
   - `title`

   - `description`

   - `image_url`

   - `materials_list` (Array/String)
   - `steps` (Array of steps)
   - `approved` (Boolean)
   - `timestamp`

3. **Review**
   - `review_id` (Primary Key)
   - `project_id` (Foreign Key - DIY_Project)
   - `user_id` (Foreign Key - User)
   - `rating` (Numeric)
   - `comment`

   - `timestamp`

4. **Forum_Thread**
   - `thread_id` (Primary Key)
   - `user_id` (Foreign Key - User)
   - `title`

   - `content`

   - `timestamp`

5. **Forum_Reply**
   - `reply_id` (Primary Key)
   - `thread_id` (Foreign Key - Forum_Thread)
   - `user_id` (Foreign Key - User)
   - `comment`

   - `timestamp`

---
<!--TODO: Do Data Flow according to Pet lovers-->
## 6. Dataflow

1. **User Authentication & Registration:**
   - **Firebase Authentication** is used to create new users or sign in existing ones.
   - **Dataflow:** User credentials → Firebase Auth → Secure session token.

2. **Health Tracking & Appointments Submission:**
   - **User Action:** Logs pet health data and schedule vet appointments.
   - **Dataflow:**

     - User inputs (text, images) → Firebase Firestore for storages.
     - System sends reminders for upcoming appointments.

     - Admin reviews and updates `approved` to `true` .

3. **Community Forum Interaction:**
   - **User Action:** Post questions, discussions, or reviews.
   - **Dataflow:**

     - User submits post -> Stored in Firestore under `Community_Post` collection.
     - Real-time updates via Firebase's real-time database capabilities.

4. **Forum Interaction:**
   - **Dataflow:**

     - User posts a thread/reply → Stored in Firestore under `Forum_Thread` and `Forum_Reply` collections.
     - Real-time updates via Firebase’s real-time database capabilities allow immediate discussion updates.

5. **Admin Confirmation Workflow:**
   - **Dataflow:**

     - New submissions trigger notifications (using Cloud Functions) → Admin dashboard accesses pending projects/reviews.
     - On approval, admin updates project’s `approved` flag → Changes reflected in the public display.

---
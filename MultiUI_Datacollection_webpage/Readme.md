# 🌾 Agricultural Drone Pilot — Multi-Step Interview Web Form

### A Modern, Fully-Validated, Responsive Multi-Step Application Flow

This project is a **full-stack, production-ready multi-step application form** designed for screening **Agricultural Drone Pilot** applicants. It combines a clean UI, strong validation, conditional logic, and backend integration for storing candidate data and enforcing unique constraints.

---

## 🚀 **Project Overview**

This web app is a **11-step interactive interview form** built using TailwindCSS, vanilla JavaScript, and a Flask backend. It collects core HR screening fields such as:

* Personal details
* Residency & license eligibility
* Drone experience & owned equipment
* Travel & visa investment willingness
* Mandatory document uploads (CV + License)
* Conditional fields based on user choices

The form features **smooth transitions**, **progress indicators**, **validation at every step**, and a **generated summary page** on successful submission.

The full UI & logic are implemented in the uploaded `application_form.html` file. 

---

## ✨ **Key Features**

### 🌐 **1. Fully Responsive UI**

* TailwindCSS-powered
* Mobile, tablet & desktop optimized
* Clean, professional, HR-friendly layout

### 🧭 **2. 11-Step Guided Journey**

* On-screen progress indicators
* “Next”, “Back”, and dynamic “Submit” buttons
* Auto-highlighting of active and completed steps

### 🛡️ **3. Advanced Client-Side Validation**

* Name validation with character filtering
* Email uniqueness check (via backend)
* Strict country code & phone validation
* Conditional validation for experience & drone ownership
* File input validation for size/format

### 🔁 **4. Conditional Logic (Smart Form Behaviour)**

* License upload becomes mandatory **only if** user selects “Yes”
* Input boxes appear smoothly for conditional questions
* Required attributes added/removed dynamically

### 🗂️ **5. File Upload Support (CV + License)**

* Accepts `.pdf` and image files
* Max size 10MB (simulated)
* Validates before step progression

### 🖥️ **6. Backend Integration (Flask Server)**

* Sends form data to `/submit` endpoint
* Receives JSON responses
* Detects 409 errors for duplicate emails
* Renders a dynamic client-side **application summary page**

### 🎯 **7. HR-Ready Application Summary**

* Generated fully on frontend after backend confirmation
* Clear labels
* Hidden fields skipped automatically (e.g., “prior experience” if 'No')
* Button to start a new application

---

## 🛠️ **Tech Stack**

### **Frontend**

* HTML5
* TailwindCSS (via CDN)
* Vanilla JavaScript
* Google Fonts – Inter
* Dynamic DOM manipulation

### **Backend**

* Flask (Python) — `/submit` endpoint
* JSON response model
* Email duplication check
* File handling (optional depending on deployment)

### **Deployment**

* Can run as a standalone HTML file
* Works seamlessly with Flask backend
* Ready for Docker deployment

---

## 📂 **Project Structure**

```
📁 project-root/
│
├── application_form.html        # Complete frontend UI + JS logic (uploaded file)
├── server.py                    # Flask backend (expected)
├── /uploads                     # Uploaded documents (optional)
└── README.md                    # You're reading this!
```

**The main form code is inside:**
`application_form.html` 

---

## 🧩 **How the Logic Works**

### **Step Validations**

* Each step is validated before moving forward
* Invalid inputs show browser-native errors + custom messages

### **Dynamic Inputs**

* Experience and owned-drone inputs expand with animation
* “Required” toggles automatically

### **Form Submission**

1. User reaches Step 11
2. All validations run
3. Data is sent via `fetch()` to Flask
4. If success → Summary page is generated dynamically
5. If failure → Error banners or validity errors displayed

---

## 🏁 **Run Locally**

### **1. Start the Flask Backend**

```bash
python server.py
```

Default:
`http://127.0.0.1:5000/submit`

### **2. Open the Form**

Simply open `application_form.html` in a browser.

No build step. No compilation. Instant start.

---

## 📬 **API Endpoint (Backend)**

### `POST /submit`

Accepts:

* Form data (text + files)

Returns JSON:

```json
{
  "success": true,
  "message": "Application stored successfully."
}
```

### Possible Error Codes:

* **409 Conflict:** Email already exists
* **400 Bad Request:** Missing required fields

---

## 🧪 **Future Enhancements**

* Database integration (PostgreSQL / MongoDB)
* Admin dashboard for reviewing applicants
* Email notification system
* Server-side file size & format validation
* ReCAPTCHA integration
* Dark mode support (easy via Tailwind)

---

## ⭐ **Why This Project Stands Out**

This isn’t a basic form.
It’s a **professional, production-ready HR screening workflow** with:

* UX polish
* Strict validation
* Smart branching logic
* Clean maintainable code
* Real backend connectivity

An ideal project to showcase your **full-stack capabilities**.

---

## Image Preview


Just say the word.


# 👨‍🍳 Chef AI

Chef AI is a fun and interactive web app built with **React** that uses **Hugging Face AI** to generate custom recipes based on the ingredients you provide. Just add a few items from your kitchen, and let AI do the magic!

## 🌐 Live Demo 
https://chef-ai-dfremont7s-projects.vercel.app/

---

## 🧠 How It Works

1. Add at least **4 ingredients** you have on hand (e.g., "tomato", "pasta", "garlic", "basil").
2. Click **"Get Recipe"**.
3. Chef AI calls Hugging Face's inference API to generate a recipe based on your ingredients.
4. Read and enjoy your personalized dish idea — no login required!

---

## 🛠️ Technologies Used

- **React 19**
- **Vite** – fast frontend tooling
- **Hugging Face Inference API** – for recipe generation
- **React Markdown** – to display recipe nicely
- **React Spinners** – for loading animations
- **dotenv** – for environment variable management

---

## 📦 Installation & Setup

Clone the project and install dependencies:

```bash
git clone https://github.com/Dfremont7/chef-ai.git
cd chef-ai
npm install

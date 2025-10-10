// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
const app = express();
 
// ✅ Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
 
// ✅ MongoDB connection
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb+srv://sabari:sabari2002@cluster0.uhfea1v.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
 
 
// ✅ Contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", contactSchema);
 
// ✅ Resume schema
const resumeSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  data: Buffer,
  uploadedAt: { type: Date, default: Date.now },
});
const Resume = mongoose.model("Resume", resumeSchema);
 
 
 
// ✅ Save enquiry
app.post("/api/contact", async (req, res) => {
  try {
    console.log("📩 Incoming Data:", req.body);
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Enquiry saved successfully!" });
  } catch (err) {
    console.error("❌ Error saving enquiry:", err);
    res.status(500).json({ error: "Failed to save enquiry" });
  }
});
 
// ✅ Get all enquiries
app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error("❌ Error fetching enquiries:", err);
    res.status(500).json({ error: "Failed to fetch enquiries" });
  }
});
 
// ✅ Delete enquiry by ID
app.delete("/api/contact/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Enquiry not found" });
    }
    res.json({ message: "Enquiry deleted" });
  } catch (err) {
    console.error("❌ Error deleting enquiry:", err);
    res.status(500).json({ error: "Failed to delete enquiry" });
  }
});
 
 
app.post("/api/chat", (req, res) => {
  const msg = (req.body?.message || "").toString().trim();
  let reply = "I'm not sure about that 🤔. Try asking for 'help'.";
  const lower = msg.toLowerCase();
 
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    reply = "Hello! 👋 How can I assist you today?";
  } else if (lower.includes("help")) {
    reply =
      "You can ask about: Company, Services, Careers, Resume, Internship, Training, Pricing, Timeline, Technologies, Portfolio, Support, Contact, Location, Payment, Clients, Testimonials, Blogs, or Policies.";
  } else if (lower.includes("about") || lower.includes("company")) {
    reply =
      "We are LetNext Technologies, delivering web, mobile, cloud, and AI-powered applications.";
  } else if (lower.includes("service")) {
    reply =
      "✅ Web Development\n✅ Mobile Apps\n✅ Cloud Solutions\n✅ UI/UX Design\n✅ AI & ML\n✅ Digital Marketing";
  } else if (lower.includes("career") || lower.includes("job")) {
    reply = "We’re hiring! 🚀 Upload your resume and our HR team will review it.";
  } else if (lower.includes("resume") || lower.includes("cv")) {
    reply =
      "Upload your resume in PDF/DOCX format on our careers page, and we’ll get in touch.";
  } else if (lower.includes("internship") || lower.includes("intern")) {
    reply =
      "Yes! We provide internships in Web Development, AI/ML, Data Science, and Cloud.";
  } else if (lower.includes("training") || lower.includes("course")) {
    reply =
      "We offer corporate training in MERN, Python/Django, Cloud, AI, and DevOps.";
  } else if (
    lower.includes("price") ||
    lower.includes("pricing") ||
    lower.includes("cost")
  ) {
    reply =
      "Our pricing is flexible depending on project scope. Can you share your requirements?";
  } else if (
    lower.includes("timeline") ||
    lower.includes("time") ||
    lower.includes("duration")
  ) {
    reply = "Projects usually take 4–12 weeks depending on complexity.";
  } else if (lower.includes("technology") || lower.includes("stack")) {
    reply =
      "We use MERN, React Native, Python/Django, Node.js, Flutter, AWS, Azure, and GCP.";
  } else if (lower.includes("portfolio") || lower.includes("project")) {
    reply = "You can view our past projects in our portfolio section 📂.";
  } else if (
    lower.includes("support") ||
    lower.includes("issue") ||
    lower.includes("problem")
  ) {
    reply =
      "For support, email support@company.com or raise a ticket in our portal.";
  } else if (
    lower.includes("contact") ||
    lower.includes("phone") ||
    lower.includes("email")
  ) {
    reply =
      "📞 +91 90433 27940 | 📧 lnt@letnexttechnologies.com | 🌍 https://lntnexttechnologies.com/";
  } else if (
    lower.includes("location") ||
    lower.includes("office") ||
    lower.includes("address")
  ) {
    reply =
      "Our company is in Gobichellipalayam, India 🌍. We also work with clients globally.";
  } else if (
    lower.includes("payment") ||
    lower.includes("invoice") ||
    lower.includes("pay")
  ) {
    reply = "We accept Bank Transfer, UPI, Credit/Debit cards, and PayPal.";
  } else if (lower.includes("testimonial") || lower.includes("review")) {
    reply = "Our clients love us ❤️. You can read testimonials on our website.";
  } else if (lower.includes("blog") || lower.includes("news")) {
    reply =
      "Check out our blogs for industry insights, case studies, and tech updates.";
  } else if (lower.includes("event") || lower.includes("webinar")) {
    reply =
      "We regularly conduct webinars and events 🎤. Follow us on LinkedIn for updates.";
  } else if (
    lower.includes("privacy") ||
    lower.includes("policy") ||
    lower.includes("terms")
  ) {
    reply =
      "You can read our Privacy Policy and Terms of Service on our website.";
  } else if (
    lower.includes("newsletter") ||
    lower.includes("update") ||
    lower.includes("subscribe")
  ) {
    reply =
      "Subscribe to our newsletter 📩 to stay updated with company news and offers.";
  } else if (
    lower.includes("bye") ||
    lower.includes("goodbye") ||
    lower.includes("see you")
  ) {
    reply = "Goodbye! 👋 Have a great day!";
  }
 
  return res.json({ reply });
});
 
 
// --- Multer (memory storage) ---
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Only PDF/DOC/DOCX allowed"));
  },
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});
 
// ✅ Upload resume to MongoDB
app.post("/api/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
 
    const newResume = new Resume({
      filename: req.file.originalname,
      contentType: req.file.mimetype,
      data: req.file.buffer,
    });
 
    await newResume.save();
 
    res.status(201).json({
      message: "Resume uploaded successfully!",
      id: newResume._id,
    });
  } catch (err) {
    console.error("❌ Error uploading resume:", err);
    res.status(500).json({ error: "Failed to upload resume" });
  }
});
 
// ✅ Get all resumes (list)
app.get("/api/resumes", async (req, res) => {
  try {
    const resumes = await Resume.find().select("filename uploadedAt");
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
});
 
// ✅ Download resume by ID
app.get("/api/resume/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ error: "Resume not found" });
 
    res.set("Content-Type", resume.contentType);
    res.set("Content-Disposition", `attachment; filename="${resume.filename}"`);
    res.send(resume.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resume" });
  }
});
 
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
 
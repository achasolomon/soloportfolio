"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    console.log("Initializing EmailJS...");
    emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    console.log(`Field ${e.target.name} changed to: ${e.target.value}`);
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
    setSuccess(false);
  };

  const handleServiceChange = (value) => {
    console.log(`Service changed to: ${value}`);
    setFormData(prev => ({ ...prev, service: value }));
    setError("");
    setSuccess(false);
  };

  const validateForm = () => {
    console.log("Validating form...");
    console.log("Current form data:", formData);
    
    if (!formData.firstname.trim()) {
      setError("First name is required");
      return false;
    }
    if (!formData.lastname.trim()) {
      setError("Last name is required");
      return false;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.service) {
      setError("Please select a service");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    console.log("Form submission started");
    event.preventDefault();  // Prevent form from submitting normally
    event.stopPropagation(); // Stop event bubbling
    
    console.log("Checking validation...");
    if (!validateForm()) {
      console.log("Validation failed");
      return false;
    }

    console.log("Setting loading state...");
    setLoading(true);
    setError("");
    
    const templateParams = {
      to_name: "Solomon",
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    console.log("Preparing to send email with params:", templateParams);
    console.log("Using service ID:", process.env.NEXT_PUBLIC_SERVICE_ID);
    console.log("Using template ID:", process.env.NEXT_PUBLIC_TEMPLATE_ID);
    
    try {
      console.log("Sending email...");
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS Response:', result);
      
      if (result.status === 200) {
        console.log("Email sent successfully");
        setSuccess(true);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setError(error.message || "Failed to send message. Please try again later.");
      setSuccess(false);
    } finally {
      console.log("Resetting loading state");
      setLoading(false);
    }
    
    return false; // Prevent form submission
  };

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%]">
            <form 
              onSubmit={(e) => {
                console.log("Form onSubmit triggered");
                handleSubmit(e);
              }} 
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Let's bring those thoughts to life in technology. Collaborations, team spirit, and dedication are our watchwords!
              </p>

              {error && (
                <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-500/10 border border-green-500 text-green-500 p-3 rounded">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Firstname"
                  aria-label="Firstname"
                  required
                  className="w-full"
                />
                <Input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                  aria-label="Lastname"
                  required
                  className="w-full"
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  aria-label="Email"
                  required
                  className="w-full"
                />
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  aria-label="Phone number"
                  className="w-full"
                />
              </div>

              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue>{formData.service || "Select a service"}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Software Development">Software Development</SelectItem>
                    <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                    <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here."
                className="h-[200px] w-full"
                aria-label="Message"
                required
              />

              <Button 
                type="button" // Changed from "submit" to "button"
                onClick={handleSubmit}
                size="md" 
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_bj3s1cw",          // Replace with your actual service ID
        "template_yywp949",         // Replace with your actual template ID
        formRef.current,
        "r0jI_0tamKyJy5UbN"         // Replace with your actual public key
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
        formRef.current.reset();
      })
      .catch(() => {
        toast({
          title: "Something went wrong!",
          description: "Please try again later.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 gap-12 justify-items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:shashank.shekhar.dev.work@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    shashank.shekhar.dev.work@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+916202374197"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 62023 74197
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Bengaluru(India)
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a 
  href="https://www.linkedin.com/in/shashank-shekhar-192593178" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0 -4 0v5h-4v-10h4v1.5" />
    <path d="M2 9h4v10h-4z" />
    <path d="M4 4a2 2 0 1 1 0 4a2 2 0 0 1 0 -4" />
  </svg>
</a>
                <a href="https://x.com/imsunnnyyy" target="_blank"><Twitter /></a>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};
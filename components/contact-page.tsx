import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center  p-4 md:p-8"
      id="contact"
    >
      <Card className="p-6 md:p-8 space-y-4 w-[33%]  ">
        <h2 className="text-2xl font-semibold mb-6 text-balance">
          Get in Touch
        </h2>
        {/* GitHub Link */}
        <Link
          href="https://github.com/miron192"
          target="_blank"
          rel="noopener noreferrer"
          className="block group cursor-pointer"
        >
          <Button
            variant="outline"
            className="w-full justify-start gap-4 h-auto py-4 px-6 hover:bg-secondary transition-colors bg-transparent"
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold">GitHub</div>
              <div className="text-sm text-muted-foreground">@miron192</div>
            </div>
          </Button>
        </Link>

        {/* LinkedIn Link */}
        <Link
          href="https://www.linkedin.com/in/miron-catalin/"
          target="_blank"
          rel="noopener noreferrer"
          className="block group cursor-pointer"
        >
          <Button
            variant="outline"
            className="w-full justify-start gap-4 h-auto py-4 px-6 hover:bg-secondary transition-colors bg-transparent"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold">LinkedIn</div>
              <div className="text-sm text-muted-foreground">miron-catalin</div>
            </div>
          </Button>
        </Link>

        {/* Email Link */}
        <Link href="mailto:catalinmiron093@gmail.com" className="block group">
          <Button
            variant="outline"
            className="w-full justify-start gap-4 h-auto py-4 px-6 hover:bg-secondary transition-colors bg-transparent"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold">Email</div>
              <div className="text-sm text-muted-foreground">
                catalinmiron661@gmail.com
              </div>
            </div>
          </Button>
        </Link>

        {/* Phone Link */}
        <Link href="tel:+40727440355" className="block group cursor-pointer">
          <Button
            variant="outline"
            className="w-full justify-start gap-4 h-auto py-4 px-6 hover:bg-secondary transition-colors bg-transparent"
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold">Phone</div>
              <div className="text-sm text-muted-foreground">
                +40 727 440 355
              </div>
            </div>
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ContactPage;

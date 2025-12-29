import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Server, 
  Palette, 
  Layout, 
  Building2, 
  Clock,
  Shield,
  FileText,
  Image as ImageIcon,
  Link as LinkIcon,
  Check,
  Upload
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// --- Components ---

const Section = ({ title, icon: Icon, description, children, className = "" }: any) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className={`bg-card rounded-[var(--radius)] border border-border/50 p-6 md:p-8 shadow-sm ${className}`}
  >
    <div className="flex items-start gap-4 mb-8">
      <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground font-heading">{title}</h2>
        {description && <p className="text-muted-foreground mt-1 text-lg">{description}</p>}
      </div>
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </motion.section>
);

const FormField = ({ label, id, children, help }: any) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-base font-medium text-foreground/80">
      {label}
    </Label>
    {children}
    {help && <p className="text-sm text-muted-foreground">{help}</p>}
  </div>
);

// --- Main Page ---

export default function Briefing() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Briefing submitted! (Check console for data)");
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold font-heading">
              S
            </div>
            <span className="font-semibold text-lg tracking-tight">Studio Brief</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <span className="hidden sm:inline-block">Web Development v1.0</span>
            <Button size="sm" variant="outline" className="hidden sm:flex">Save Draft</Button>
          </div>
        </div>
      </header>

      <main className="container max-w-3xl mx-auto px-4 py-12 space-y-12">
        
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 text-center py-8"
        >
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            New Project Onboarding
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground tracking-tight text-balance">
            Let's build something <span className="text-primary">extraordinary</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Please provide the essential details for your new website project. This document ensures we have everything needed to start development.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* 1. Hosting & Access */}
          <Section 
            title="Access & Hosting" 
            icon={Server}
            description="Technical credentials for deployment and setup."
          >
            <div className="grid md:grid-cols-2 gap-6">
              <FormField label="Domain Name" id="domain" help="e.g. mycompany.com">
                <Input id="domain" placeholder="https://" {...register("domain")} className="h-12 text-lg" />
              </FormField>
              
              <FormField label="Hosting Provider" id="hosting_provider">
                 <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vercel">Vercel</SelectItem>
                    <SelectItem value="aws">AWS</SelectItem>
                    <SelectItem value="hostgator">Hostgator</SelectItem>
                    <SelectItem value="godaddy">GoDaddy</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
            </div>

            <Separator className="my-4" />
            
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Credentials (Optional)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Hosting / FTP User" id="ftp_user">
                  <Input id="ftp_user" {...register("ftp_user")} placeholder="username" />
                </FormField>
                <FormField label="Hosting / FTP Password" id="ftp_pass">
                  <Input id="ftp_pass" type="password" {...register("ftp_pass")} placeholder="••••••••" />
                </FormField>
              </div>
              
               <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Database Name" id="db_name">
                  <Input id="db_name" {...register("db_name")} placeholder="db_production" />
                </FormField>
                 <FormField label="DB Host" id="db_host">
                  <Input id="db_host" {...register("db_host")} placeholder="localhost" />
                </FormField>
              </div>
            </div>
          </Section>

          {/* 2. Brand Identity */}
          <Section 
            title="Visual Identity" 
            icon={Palette}
            description="Define the look and feel of your digital presence."
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <Label>Primary</Label>
                <div className="flex gap-2">
                  <div className="h-10 w-10 rounded-full border border-border shadow-sm overflow-hidden bg-primary/20">
                    <input type="color" className="opacity-0 w-full h-full cursor-pointer" />
                  </div>
                  <Input placeholder="#HEX" className="uppercase font-mono text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Secondary</Label>
                <div className="flex gap-2">
                  <div className="h-10 w-10 rounded-full border border-border shadow-sm overflow-hidden bg-secondary/20">
                    <input type="color" className="opacity-0 w-full h-full cursor-pointer" />
                  </div>
                  <Input placeholder="#HEX" className="uppercase font-mono text-sm" />
                </div>
              </div>
               <div className="space-y-2">
                <Label>Accent</Label>
                <div className="flex gap-2">
                  <div className="h-10 w-10 rounded-full border border-border shadow-sm overflow-hidden bg-accent/20">
                    <input type="color" className="opacity-0 w-full h-full cursor-pointer" />
                  </div>
                  <Input placeholder="#HEX" className="uppercase font-mono text-sm" />
                </div>
              </div>
            </div>

            <FormField label="Style Direction" id="style">
              <RadioGroup defaultValue="modern" className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {['Minimalist', 'Corporate', 'Creative', 'Tech'].map((style) => (
                  <div key={style}>
                    <RadioGroupItem value={style.toLowerCase()} id={style.toLowerCase()} className="peer sr-only" />
                    <Label
                      htmlFor={style.toLowerCase()}
                      className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all h-24"
                    >
                      <span className="text-lg font-medium">{style}</span>
                      <Check className="w-4 h-4 opacity-0 peer-data-[state=checked]:opacity-100" />
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormField>

            <FormField label="Visual Goal" id="visual_goal">
              <Textarea 
                className="min-h-[100px] text-lg resize-none" 
                placeholder="What emotions should the brand convey? (e.g. Trust, Innovation, Playfulness)"
              />
            </FormField>
            
            <FormField label="Design References" id="refs" help="Links to websites you love or want to emulate.">
              <div className="relative">
                <LinkIcon className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                <Textarea 
                  className="min-h-[80px] pl-10" 
                  placeholder="https://example.com - I like the footer&#10;https://awwwards.com - I like the typography"
                />
              </div>
            </FormField>

            <div className="p-6 bg-secondary/50 rounded-xl border border-dashed border-border flex flex-col items-center justify-center text-center gap-2 cursor-pointer hover:bg-secondary/80 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium">Upload Brand Assets</p>
              <p className="text-sm text-muted-foreground">Drag & drop logos, fonts, or guidelines here</p>
            </div>
          </Section>

          {/* 3. Company & Content */}
          <Section 
            title="Company Profile" 
            icon={Building2}
            description="Help us understand your business and audience."
          >
            <FormField label="About the Company" id="about">
              <Textarea 
                className="min-h-[120px]" 
                placeholder="Briefly describe what your company does, its mission, and its values."
              />
            </FormField>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField label="Target Audience" id="audience">
                <Input placeholder="Who are your customers?" />
              </FormField>
              <FormField label="Key Competitors" id="competitors">
                <Input placeholder="List top 3 competitors" />
              </FormField>
            </div>
          </Section>
          
          {/* 4. Assets Readiness */}
          <Section 
             title="Content & Assets" 
             icon={ImageIcon} 
             description="Do you have the materials ready?"
          >
             <div className="grid md:grid-cols-2 gap-6">
               <div className="p-4 border rounded-xl space-y-3 bg-background/50">
                 <div className="flex items-center gap-2 mb-2">
                   <FileText className="w-5 h-5 text-primary" />
                   <h3 className="font-medium">Copywriting / Texts</h3>
                 </div>
                 <RadioGroup defaultValue="none">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ready" id="text-ready" />
                      <Label htmlFor="text-ready">I have all texts ready</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="need" id="text-need" />
                      <Label htmlFor="text-need">I need a copywriter</Label>
                    </div>
                 </RadioGroup>
               </div>
               
               <div className="p-4 border rounded-xl space-y-3 bg-background/50">
                 <div className="flex items-center gap-2 mb-2">
                   <ImageIcon className="w-5 h-5 text-primary" />
                   <h3 className="font-medium">Images / Photography</h3>
                 </div>
                 <RadioGroup defaultValue="none">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ready" id="img-ready" />
                      <Label htmlFor="img-ready">I have high-res images</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="stock" id="img-stock" />
                      <Label htmlFor="img-stock">We need stock photos</Label>
                    </div>
                 </RadioGroup>
               </div>
             </div>
          </Section>

          {/* 5. Scope & Functionality */}
          <Section 
            title="Scope & Features" 
            icon={Layout}
            description="What pages and features does the site need?"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label className="text-base">Core Pages</Label>
                <div className="space-y-3">
                  {['Home', 'About Us', 'Services/Products', 'Contact', 'Blog/News', 'Portfolio'].map((page) => (
                    <div key={page} className="flex items-center space-x-3">
                      <Checkbox id={`page-${page}`} />
                      <label
                        htmlFor={`page-${page}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {page}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base">Advanced Features</Label>
                <div className="space-y-3">
                  {['E-commerce', 'Member Area (Login)', 'Multi-language', 'Booking System', 'Dark Mode', 'Search'].map((feat) => (
                    <div key={feat} className="flex items-center space-x-3">
                      <Checkbox id={`feat-${feat}`} />
                      <label
                        htmlFor={`feat-${feat}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {feat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
          
           {/* 6. Timeline */}
           <Section title="Timeline & Delivery" icon={Clock}>
             <div className="grid md:grid-cols-2 gap-6">
               <FormField label="Target Launch Date" id="date">
                 <Input type="date" className="h-12" />
               </FormField>
                <FormField label="Urgency Level" id="urgency">
                 <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Flexible</SelectItem>
                    <SelectItem value="normal">Standard (4-6 weeks)</SelectItem>
                    <SelectItem value="high">Urgent (ASAP)</SelectItem>
                  </SelectContent>
                </Select>
               </FormField>
             </div>
           </Section>
           
           {/* Footer / Privacy */}
           <div className="bg-muted/30 p-6 rounded-xl border border-border/50 text-sm text-muted-foreground space-y-4">
             <div className="flex items-start gap-3">
               <Shield className="w-5 h-5 text-primary mt-0.5" />
               <div className="space-y-2">
                 <p className="font-semibold text-foreground">Privacy & Data Protection</p>
                 <p>
                   All information provided in this form is strictly confidential and will be used solely for the development of your project. We do not share your data with third parties without your explicit consent.
                 </p>
               </div>
             </div>
           </div>

          <div className="flex justify-end pt-8">
            <Button size="lg" className="h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all w-full md:w-auto">
              Submit Project Brief <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
        </form>
      </main>
    </div>
  );
}

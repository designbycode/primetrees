import { useState } from "react";
import { SelectCombobox } from "@/components/ui/combobox";
import {
    ChevronRight,
    Clock,
    Compass,
    MapPin,
    MessageSquare,
    Phone,
    UserCheck,
} from "lucide-react";
import AppLayout from "@/layouts/app-layout";
import Wrapper from "@/components/app/wrapper.tsx";
import { toast } from "sonner";
import { PageHeader } from "@/components/app/page-header";
const CONTACT_TYPE_OPTIONS = [
    { value: "nursery-tour", label: "Schedule Nursery Tour" },
    { value: "wholesale", label: "Wholesale Order Enquiry" },
    { value: "public", label: "Mature Tree (2000L) Public Sale" },
    { value: "other", label: "General Horticultural Inquiry" }
];

export default function VisitPage() {
    // General contact form states
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactCompany, setContactCompany] = useState("");
    const [contactType, setContactType] = useState("nursery-tour");
    const [contactMessage, setContactMessage] = useState("");
    const [isContactSubmitting, setIsContactSubmitting] = useState(false);

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!contactName || !contactEmail) {
            toast.error("Please fill in your name and email.");
            return;
        }

        setIsContactSubmitting(true);
        setTimeout(() => {
            setIsContactSubmitting(false);
            const subject =
                contactType === "nursery-tour"
                    ? "Nursery Tour Booking"
                    : "Wholesale Enquiry";
            toast.success(
                `${subject} request sent successfully! Bruce and the Prime Trees team will be in touch to confirm details.`,
            );
            // Reset fields
            setContactName("");
            setContactEmail("");
            setContactCompany("");
            setContactMessage("");
        }, 1200);
    };

    return (
        <Wrapper className="py-12 min-h-screen">
            <PageHeader
                as="h2"
                badgeText="Book a Consultation or Guided Tour"
                title={
                    <>
                        CONTACT & <span className="text-primary">VISITS</span>
                    </>
                }
                description="Connect with the Prime Trees team. Whether you need to schedule a wholesale tree inspection, book a tour of our 20-hectare Mistico Farm nursery in Paarl, or discuss customized delivery and crane placement on-site, we are here to assist."
            />

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch border-t border-border/60 pt-10">
                {/* Visit Info Column */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-geist font-black uppercase tracking-tight text-foreground">
                            Nursery Location
                        </h3>
                        <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                            Mistico Farm is located in the beautiful
                            agricultural valley of Paarl, Western Cape. Our
                            location provides perfect soil and drainage
                            conditions for growing healthy, robust deciduous and
                            evergreen stock.
                        </p>
                    </div>

                    <div className="space-y-4 my-4">
                        <div className="flex items-start gap-3.5">
                            <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                <MapPin className="size-4" />
                            </div>
                            <div>
                                <span className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                                    Farm Address
                                </span>
                                <span className="text-xs font-medium text-foreground">
                                    Mistico Farm, Paarl Region, Western Cape,
                                    South Africa
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                <Clock className="size-4" />
                            </div>
                            <div>
                                <span className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                                    Operational Hours
                                </span>
                                <span className="text-xs font-medium text-foreground">
                                    Monday – Friday: 08:00 – 17:00
                                </span>
                                <span className="block text-[0.65rem] text-muted-foreground font-sans mt-0.5">
                                    Saturdays: By Appointment Only • Sundays:
                                    Closed
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                <UserCheck className="size-4" />
                            </div>
                            <div>
                                <span className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                                    Founder & grower
                                </span>
                                <span className="text-xs font-medium text-foreground">
                                    Bruce Stewart (Horticulturalist)
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                <Phone className="size-4" />
                            </div>
                            <div>
                                <span className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                                    Wholesale enquiries
                                </span>
                                <span className="text-xs font-medium text-foreground">
                                    bruce@primetrees.co.za
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Styled Nursery Coordinates Card */}
                    <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-4.5 flex items-center gap-4 group">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                            <Compass className="size-6 animate-spin-slow" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <span className="text-[0.65rem] font-mono font-bold text-primary block uppercase">
                                Nursery Details
                            </span>
                            <span className="text-xs font-bold text-foreground">
                                20+ Hectares of Premium Container Stock
                            </span>
                            <span className="block text-[0.6rem] text-muted-foreground font-mono mt-0.5">
                                Over 80,000 mature shade & ornamental specimens
                            </span>
                        </div>
                    </div>
                </div>

                {/* General Enquiry / Schedule Visit Form Column */}
                <div className="lg:col-span-7">
                    <div className="bg-card border border-border/80 rounded-3xl p-6 md:p-8 h-full shadow-xs">
                        <div className="flex items-center gap-2 mb-4">
                            <MessageSquare className="size-5 text-primary" />
                            <h4 className="text-lg font-bold font-sans text-foreground">
                                Book a Tour / Submit Inquiry
                            </h4>
                        </div>

                        <form
                            onSubmit={handleContactSubmit}
                            className="space-y-4"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="contactName"
                                        className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5"
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        id="contactName"
                                        type="text"
                                        required
                                        value={contactName}
                                        onChange={(e) =>
                                            setContactName(e.target.value)
                                        }
                                        className="w-full bg-muted/40 border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
                                        placeholder="e.g. John Doe"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="contactEmail"
                                        className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        id="contactEmail"
                                        type="email"
                                        required
                                        value={contactEmail}
                                        onChange={(e) =>
                                            setContactEmail(e.target.value)
                                        }
                                        className="w-full bg-muted/40 border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
                                        placeholder="e.g. john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="contactCompany"
                                        className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5"
                                    >
                                        Company / Organization
                                    </label>
                                    <input
                                        id="contactCompany"
                                        type="text"
                                        value={contactCompany}
                                        onChange={(e) =>
                                            setContactCompany(e.target.value)
                                        }
                                        className="w-full bg-muted/40 border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50"
                                        placeholder="Landscape Co. (Optional)"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="contactType"
                                        className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5"
                                    >
                                        Inquiry Type
                                    </label>
                                        <SelectCombobox
                                            id="contactType"
                                            value={contactType}
                                            onValueChange={setContactType}
                                            options={CONTACT_TYPE_OPTIONS}
                                            placeholder="Select Inquiry Type"
                                            className="w-full text-xs h-8"
                                        />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contactMessage"
                                    className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5"
                                >
                                    Message / Booking details
                                </label>
                                <textarea
                                    id="contactMessage"
                                    rows={6}
                                    value={contactMessage}
                                    onChange={(e) =>
                                        setContactMessage(e.target.value)
                                    }
                                    className="w-full bg-muted/40 border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-hidden focus:border-primary/50 resize-none"
                                    placeholder="Specify preferred dates for a nursery visit or details about your landscaping stock list..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isContactSubmitting}
                                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all disabled:opacity-50 mt-2 cursor-pointer"
                            >
                                {isContactSubmitting
                                    ? "Sending..."
                                    : "Submit Inquiry"}{" "}
                                <ChevronRight className="size-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

VisitPage.layout = (page: React.ReactNode) => (
    <AppLayout title="Contact & Visits">{page}</AppLayout>
);

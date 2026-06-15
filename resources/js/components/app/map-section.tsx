import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Clock, Navigation } from "lucide-react";
import Wrapper from "@/components/app/wrapper.tsx";

// Create custom pin icon using the TreeDeciduous SVG markup to match theme
const customIcon = L.divIcon({
    html: `
        <div class="relative flex items-center justify-center">
            <span class="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-primary/30 opacity-75"></span>
            <div class="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground border-2 border-background shadow-xl hover:scale-105 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tree-deciduous"><path d="M8 22h8"/><path d="M12 18v4"/><path d="M12 18c-3.3 0-6-2.7-6-6 0-1.8.8-3.4 2-4.5.3-.3.4-.7.3-1.1-.3-1.3.2-2.7 1.2-3.6 1-1 2.3-1.3 3.6-1.1.4.1.8-.1 1.1-.3C15 1 17.3 1 19 2.5c1.4 1.3 1.9 3.2 1.3 5-.1.4.1.8.4 1.1 1 1.1 1.6 2.6 1.6 4.4 0 3.3-2.7 6-6 6Z"/></svg>
            </div>
        </div>
    `,
    className: "custom-leaflet-icon",
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48],
});

export default function MapSection() {
    const position: [number, number] = [-33.7599571, 18.8092257];

    return (
        <section className="relative w-full border-t border-border bg-muted/20 py-16 px-6 transition-colors duration-300">
            <Wrapper className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Information Card */}
                <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="space-y-6">
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                                Our Location
                            </span>
                            <h2 className="text-3xl font-geist font-black uppercase tracking-tight text-foreground mt-2">
                                Visit Mistico Farm
                            </h2>
                            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                                Mistico Farm is located in the beautiful
                                agricultural valley of Paarl, Western Cape. Come
                                visit our 20-hectare nursery to inspect our
                                wholesale stock of premium deciduous and
                                evergreen trees.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="size-5" />
                                </div>
                                <div>
                                    <span className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                                        Nursery Address
                                    </span>
                                    <span className="text-sm font-semibold text-foreground leading-tight">
                                        Mistico Farm, Paarl Region, Western
                                        Cape, South Africa
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <Clock className="size-5" />
                                </div>
                                <div>
                                    <span className="block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                                        Operational Hours
                                    </span>
                                    <span className="text-sm font-semibold text-foreground">
                                        Mon - Fri: 08:00 - 17:00 | Sat: By
                                        Appointment
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                        <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold text-xs tracking-wider uppercase rounded-xl transition-all cursor-pointer shadow-sm shadow-primary/20 hover:shadow-md"
                        >
                            <Navigation className="size-3.5" />
                            Get Directions
                        </a>
                    </div>
                </div>

                {/* Leaflet Map */}
                <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px] w-full rounded-2xl border border-border overflow-hidden relative shadow-sm z-0">
                    <MapContainer
                        center={position}
                        zoom={13}
                        scrollWheelZoom={false}
                        className="w-full h-full"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={customIcon}>
                            <Popup className="custom-leaflet-popup">
                                <div className="space-y-1 p-1">
                                    <h4 className="font-geist font-bold text-sm text-foreground">
                                        Prime Trees Nursery
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                        Mistico Farm, Paarl
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </Wrapper>
        </section>
    );
}

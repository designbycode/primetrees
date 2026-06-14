import Wrapper from "@/components/app/wrapper.tsx";

export default function Hero() {
    return (
        <Wrapper>
            <div className="mb-10 text-left w-full pt-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-primary text-xs font-mono font-bold tracking-wider uppercase">
                    • Premium Deciduous, Conifers & Sculptures catalog
                  </span>
                </div>

                {/* Big Bold Typography */}
                <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black tracking-tighter uppercase leading-[0.85] text-foreground wrap-break-word">
                    NATURE&apos;S <span className="text-primary">SCULPTURE</span>
                    <br/>
                    BORN <span>FOR LANDSCAPES</span>
                </h2>

                <p className="text-base sm:text-lg text-black/60 mt-5 max-w-2xl leading-normal font-sans">
                    Browse our certified botanical species directory, select specimens to build a customized
                    reforestation
                    map, and simulate carbon/oxygen indices directly.
                </p>
            </div>
        </Wrapper>
    );
}

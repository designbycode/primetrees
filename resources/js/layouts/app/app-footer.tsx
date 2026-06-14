import {TreeDeciduous} from "lucide-react";
import Wrapper from "@/components/app/wrapper.tsx";

export default function AppFooter() {

    return (
        <footer
            className="bg-card border-t border-border py-8 px-6 text-center text-xs text-muted-foreground mt-auto w-full transition-colors duration-300">
            <Wrapper className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Copyright & Brand */}
                <div className="flex items-center gap-2 text-left">
                    <TreeDeciduous className="size-6 text-primary animate-pulse"/>
                    <span className="font-mono tracking-tight">
                        &copy; {new Date().getFullYear()} Primetrees. All rights reserved.
                    </span>
                </div>

                {/* Registry Details */}
                <div className=" font-mono ">
                    Designed and developed by <a
                    className={`text-primary hover:underline hover:decoration-primary`}
                    href="https://designbycode.co.za" target={`_blank`}>designbycode</a>
                </div>
            </Wrapper>
        </footer>
    );
}

AppFooter.displayName = "AppFooter";

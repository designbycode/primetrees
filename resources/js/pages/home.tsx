import AppLayout from "@/layouts/app-layout";
import Hero from "@/components/app/hero.tsx";
import Wrapper from "@/components/app/wrapper.tsx";
import { GridFeatureSpotlight } from "@/components/app/grid-feature-spotlight.tsx";

export default function Home() {
    return (
        <>
            <Hero />
            <Wrapper className="py-6 ">
                <GridFeatureSpotlight />
            </Wrapper>
        </>
    );
}

Home.layout = (page: React.ReactNode) => (
    <AppLayout title="Home">{page}</AppLayout>
);

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import AppLayout from "@/layouts/app-layout";
import Hero from "@/components/app/hero.tsx";

export default function Home({treeCategories}: { treeCategories: any[] }) {
    return (
        <>
            <Hero/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {treeCategories && treeCategories.map((category: any, index: number) => (
                        <Card key={index} className="hover:border-primary/30 transition-colors shadow-xs">
                            <CardHeader>
                                <CardTitle>{category.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {category.trees.length > 0 ? (
                                    category.trees.map((tree: any) => (
                                        <div key={tree.id}
                                             className="group overflow-hidden rounded-xl border border-border bg-muted/20 p-3 hover:bg-muted/40 transition-colors">
                                            {tree.image_urls?.[0]?.card && (
                                                <div className="aspect-video w-full overflow-hidden rounded-lg mb-2">
                                                    <img
                                                        src={tree.image_urls[0].card}
                                                        alt={tree.common_name}
                                                        className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                                                    />
                                                </div>
                                            )}
                                            <h3 className="font-semibold text-foreground">{tree.common_name}</h3>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-muted-foreground text-sm">No trees found</div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 bg-muted/10 border border-border p-4 rounded-xl">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">Raw Category
                        Data</h4>
                    <pre
                        className="font-mono text-xs overflow-auto max-h-60 text-muted-foreground">{JSON.stringify(treeCategories, null, 2)}</pre>
                </div>
            </div>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <AppLayout title="Home">{page}</AppLayout>;


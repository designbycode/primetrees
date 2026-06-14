import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";

export default function Home({treeCategories}: {treeCategories: any[]}) {
    return(
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {treeCategories && treeCategories.map((category: any, index: number) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{category.name}</CardTitle>
                        </CardHeader>
                        <CardContent className={'space-y-2'}>
                            {category.trees.length > 0 ? category.trees.map((tree: any    ) => (
                                <div  key={tree.id}>
                                    <img  src={tree.image_urls?.[0]?.card} alt={tree.common_name} />
                                    <h3>{tree.common_name}</h3>
                                </div>
                            )) : (
                                <div>No trees found</div>
                            ) }
                        </CardContent>
                    </Card>
                ))}
            </div>

            <pre className={`font-mono`}>{JSON.stringify(treeCategories, null, 2)}</pre>
        </div>
    )
}

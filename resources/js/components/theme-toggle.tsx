import { useAppearance } from "@/hooks/use-appearance";
import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { appearance, updateAppearance } = useAppearance();

    const toggleTheme = () => {
        if (appearance === "light") {
            updateAppearance("dark");
        } else if (appearance === "dark") {
            updateAppearance("system");
        } else {
            updateAppearance("light");
        }
    };

    const getIcon = () => {
        switch (appearance) {
            case "light":
                return (
                    <Sun className="size-4 text-primary transition-all dark:rotate-0 dark:scale-100" />
                );
            case "dark":
                return <Moon className="size-4 text-primary transition-all" />;
            default:
                return (
                    <Monitor className="size-4 text-muted-foreground transition-all" />
                );
        }
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative size-9 rounded-full border border-border/40 hover:border-border hover:bg-muted/60 transition-all duration-200 flex items-center justify-center"
            title={`Theme: ${appearance}. Click to cycle (Light -> Dark -> System).`}
        >
            {getIcon()}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}

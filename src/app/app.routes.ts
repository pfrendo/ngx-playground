import { HomePage, HeroListPage, HeroDetailPage } from "./pages/index";

export interface RouteConfig {
	component: any;
	name: string;
	segment?: string;
	defaultHistory?: any[];
}

export const routes: RouteConfig[] = [
	{ component: HomePage, name: "home", segment: "" },
	{ component: HeroListPage, name: "heroes", segment: "heroes" },
	{ component: HeroDetailPage, name: "hero-detail", segment: "heroes/:hero" },
];
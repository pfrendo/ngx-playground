import { NgModule } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

import { HomePage, HeroListPage, HeroDetailPage, HeroService } from "./pages/index";
import { AppComponent } from "./app.component";

@NgModule({
	declarations: [
		AppComponent,
		HomePage,
		HeroListPage,
		HeroDetailPage,
	],
	imports: [
	],
	bootstrap: [
	],
	entryComponents: [
		HomePage,
		HeroListPage,
		HeroDetailPage,
	],
	providers: [
		HeroService,
		{ provide: LocationStrategy, useClass: PathLocationStrategy },
	]
})
export class AppModule {
}

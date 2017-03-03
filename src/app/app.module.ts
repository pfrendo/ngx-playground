import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LocationStrategy, PathLocationStrategy, CommonModule } from "@angular/common";

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
		CommonModule,
		BrowserModule
	],
	exports: [
		CommonModule,
		BrowserModule
	],
	bootstrap: [
		AppComponent
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

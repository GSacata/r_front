import { NgModule } from "@angular/core";
import { NgIf, NgFor } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [
        NgIf, NgFor, HttpClientModule
    ],
    exports: [
        NgIf, NgFor, HttpClientModule
    ],
    providers: [],
    bootstrap: []
})

export class AppModule {}
import { NgModule } from "@angular/core";
import { ErrorMessageComponent } from "./error-message.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ ErrorMessageComponent ],
    exports: [ ErrorMessageComponent ],
    imports: [ CommonModule ]
})
export class ErrorMessageModule {

}
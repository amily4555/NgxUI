import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrustUrlPipe} from './mn-trust-url.pipe';
import {MuPipe} from './mn-mu.pipe';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TrustUrlPipe,
        MuPipe
    ],
    exports: [
        TrustUrlPipe,
        MuPipe
    ],
    providers: [
    ]
})
export class MnCommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MnCommonModule
        };
    }
}

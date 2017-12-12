import { OnChanges, SimpleChanges, OnDestroy, ElementRef } from '@angular/core';
import { Subscriber } from 'rxjs/Subscriber';
import { MnReqServices } from './mn-req.service';
import { HttpClient } from '@angular/common/http';
export declare class MnReqHttpComponent implements OnChanges, OnDestroy {
    private _http;
    private _rs;
    req: any;
    params: any;
    payload: any;
    data: any;
    context: any;
    loader: ElementRef;
    loading: boolean;
    loaderStyle: any;
    showNoData: boolean;
    delay: number;
    result: any;
    _observable: Subscriber<any>;
    isNoData: boolean;
    noDataComponent: any;
    process: number;
    constructor(_http: HttpClient, _rs: MnReqServices);
    reqHttp(req: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    debounceReqHttp: any;
    processStep(): any;
}

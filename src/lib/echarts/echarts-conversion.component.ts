import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as mu from 'mzmu';
import {EchartsService} from './echarts.service';

declare const mu: any;

/**
 * 处理数据，将data转为echart_options
 */

@Component({
    selector: 'echarts',
    template: `
        <div echarts-render [options]="echarts_options"></div>
    `,
    styles: [
    `
        :host, 
        [echarts-render] {
            display: block;
            width: 100%;
            height: 100%;
        }
    
    `
    ]

})
export class EchartsConversionComponent implements OnInit, OnChanges {

    @Input() data: any;
    @Input() options: any;

    // -> setting ::: 快捷设置 options 属性
    @Input() setting?: any = {};

    @Input() type?: string;

    echarts_options: any;

    constructor(private _serv: EchartsService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {

        mu.run(mu.prop(changes, 'options.currentValue'), (options) => {
            this.echarts_options = options;
        });

        mu.run(mu.prop(changes, 'data.currentValue'), (data) => {
            this.echarts_options = this._serv.getOptions(this.type, data, this.setting);
        });

    }

}

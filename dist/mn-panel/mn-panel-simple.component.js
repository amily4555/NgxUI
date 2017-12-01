"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mn_panel_component_1 = require("./mn-panel.component");
var MnPanelSimpleComponent = (function () {
    function MnPanelSimpleComponent(_ref, _renderer) {
        this._ref = _ref;
        this._renderer = _renderer;
        // 让控件支持高度100%
        // height percent hundred
        this.hph = true;
    }
    Object.defineProperty(MnPanelSimpleComponent.prototype, "title", {
        set: function (v) {
            var _a = (v || '').split('::'), parent = _a[0], sub = _a[1];
            this._title = parent + mu.run(sub, function (sub) { return "<small>" + sub + "</small>"; }, function () { return ''; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MnPanelSimpleComponent.prototype, "getHph", {
        get: function () {
            return this.hph === true ? '100%' : this.hph === false ? 'auto' : this.hph;
        },
        enumerable: true,
        configurable: true
    });
    MnPanelSimpleComponent.prototype.ngOnChanges = function (changes) {
    };
    MnPanelSimpleComponent.prototype.ngAfterContentChecked = function () {
    };
    MnPanelSimpleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'mn-panel-s,mn-panel-simple',
                    template: "\n        <mn-panel [hph]=\"true\">\n            <mn-panel-header>\n                <mn-panel-title [innerHTML]=\"_title\">\n                </mn-panel-title>\n                <mn-panel-toolbar [tools]=\"tools\">\n                </mn-panel-toolbar>\n            </mn-panel-header>\n            <mn-panel-body>\n                <ng-content></ng-content>\n            </mn-panel-body>\n        </mn-panel>\n    ",
                    styles: [
                        "\n            :host {\n                display: block;\n                width: 100%;\n            }\n            "
                    ]
                },] },
    ];
    /** @nocollapse */
    MnPanelSimpleComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    MnPanelSimpleComponent.propDecorators = {
        "title": [{ type: core_1.Input },],
        "tools": [{ type: core_1.Input },],
        "theme": [{ type: core_1.Input },],
        "hph": [{ type: core_1.Input },],
        "getHph": [{ type: core_1.HostBinding, args: ['style.height',] },],
        "_panel": [{ type: core_1.ViewChild, args: [mn_panel_component_1.MnPanelComponent,] },],
    };
    return MnPanelSimpleComponent;
}());
exports.MnPanelSimpleComponent = MnPanelSimpleComponent;
//# sourceMappingURL=mn-panel-simple.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalendarFill = {
    name: 'calendar',
    theme: 'fill',
    icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 32 32' },
        children: [
            {
                tag: 'path',
                attrs: { d: 'M28 6V2h-4v4H12V2H8v4H2v28h32V6zm2 24H6V14h24z' }
            },
            {
                tag: 'path',
                attrs: {
                    d: 'M10 17h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4z'
                }
            }
        ]
    }
};
exports.default = CalendarFill;

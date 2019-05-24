"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _RenderlessPagination = require("./RenderlessPagination");

var _RenderlessPagination2 = _interopRequireDefault(_RenderlessPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { RenderlessPagination: _RenderlessPagination2.default },
    render: function render() {},

    props: {
        for: {
            type: String,
            required: false
        },
        page: {
            type: Number,
            default: 1
        },
        records: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            default: 25
        },
        vuex: {
            type: Boolean
        },
        options: {
            type: Object
        }
    },
    data: function data() {
        return {
            aProps: {
                href: "javascript:void(0);",
                role: "button"
            }
        };
    },
    methods: {
        paginate: function paginate(page) {
            this.$emit('paginate', page);
        }
    }
};
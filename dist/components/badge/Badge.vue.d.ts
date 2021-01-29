import { PropType } from "vue";
import { Type } from "../../core/enums/Type";
declare enum Position {
    TopLeft = "top-left",
    TopRight = "top-right",
    BottomRight = "bottom-right",
    BottomLeft = "bottom-left"
}
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<Type>;
        default: Type;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    pulse: BooleanConstructor;
    dot: BooleanConstructor;
    position: {
        type: PropType<Position>;
        default: Position;
    };
}, {
    isVisible: import("vue").ComputedRef<boolean>;
    parsedValue: import("vue").ComputedRef<string | number>;
    styling: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: Type;
    value: string | number;
    max: string | number;
    min: string | number;
    pulse: boolean;
    dot: boolean;
    position: Position;
} & {}>, {
    type: Type;
    value: string | number;
    max: string | number;
    min: string | number;
    pulse: boolean;
    dot: boolean;
    position: Position;
}>;
export default _default;

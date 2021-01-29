import { PropType } from "vue";
import { Type } from "../../core/enums/Type";
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<Type>;
        default: Type;
    };
    outline: BooleanConstructor;
    text: BooleanConstructor;
    icon: PropType<any>;
    inline: BooleanConstructor;
}, {
    iconName: import("vue").ComputedRef<unknown>;
    styling: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    iconStyling: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: Type;
    outline: boolean;
    text: boolean;
    inline: boolean;
} & {
    icon?: unknown;
}>, {
    type: Type;
    outline: boolean;
    text: boolean;
    inline: boolean;
}>;
export default _default;

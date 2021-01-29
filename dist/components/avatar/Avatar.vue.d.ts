import { PropType } from "vue";
import { Type } from "../../core/enums/Type";
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<Type>;
        default: Type;
    };
}, {
    styling: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: Type;
} & {}>, {
    type: Type;
}>;
export default _default;

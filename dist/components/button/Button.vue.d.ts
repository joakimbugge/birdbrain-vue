import { PropType } from "vue";
import { Type } from "../../core/enums/Type";
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<Type>;
        default: Type;
    };
    block: BooleanConstructor;
    outline: BooleanConstructor;
    text: BooleanConstructor;
    disabled: BooleanConstructor;
    loading: BooleanConstructor;
}, {
    root: import("vue").Ref<Element | null>;
    width: import("vue").Ref<string | null>;
    height: import("vue").Ref<string | null>;
    isIcon: import("vue").Ref<boolean>;
    isIconFirst: import("vue").Ref<boolean>;
    isIconLast: import("vue").Ref<boolean>;
    isIconOnly: import("vue").Ref<boolean>;
    isLoading: import("vue").Ref<boolean>;
    styling: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: Type;
    block: boolean;
    outline: boolean;
    text: boolean;
    disabled: boolean;
    loading: boolean;
} & {}>, {
    type: Type;
    block: boolean;
    outline: boolean;
    text: boolean;
    disabled: boolean;
    loading: boolean;
}>;
export default _default;

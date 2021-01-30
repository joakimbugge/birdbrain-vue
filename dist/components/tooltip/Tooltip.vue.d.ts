import { PropType, VNode, ComponentPublicInstance } from "vue";
import { Type } from "../../core/enums/Type";
declare enum Position {
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Right = "right"
}
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<Type>;
        default: Type;
    };
    position: {
        type: PropType<Position>;
        default: Position;
    };
    content: StringConstructor;
}, {
    targetSlot: import("vue").Ref<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    targetComponent: import("vue").Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null>;
    show: () => void;
    hide: () => void;
    styling: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    tooltip: import("vue").Ref<HTMLElement | null>;
    tooltipStyling: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    arrowStyling: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: Type;
    position: Position;
} & {
    content?: string | undefined;
}>, {
    type: Type;
    position: Position;
}>;
export default _default;

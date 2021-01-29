import { PropType, VNode } from "vue";
declare const _default: import("vue").DefineComponent<{
    min: {
        type: PropType<string | number>;
        default: number;
    };
    max: {
        type: PropType<string | number>;
        default: number;
    };
    narrow: BooleanConstructor;
}, {
    avatars: import("vue").Ref<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
    slicedAvatars: import("vue").ComputedRef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
    styling: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    min: string | number;
    max: string | number;
    narrow: boolean;
} & {}>, {
    min: string | number;
    max: string | number;
    narrow: boolean;
}>;
export default _default;
